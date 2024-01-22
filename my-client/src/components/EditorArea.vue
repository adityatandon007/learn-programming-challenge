<template>
  <Codemirror
    v-model="code"
    :style="{ height: '400px' }"
    :autofocus="true"
    :indent-with-tab="true"
    :tab-size="2"
    :extensions="extensions"
  />
  <div class="action-wrapper is-right">
    <button class="button primary" @click="compileCode">Execute Code</button>
  </div>
  <div class="card result">
    <div><strong>Output:</strong> {{ output }}</div>
    <div><strong>Execution Time:</strong> {{ executionTime }}</div>
  </div>
  <div class="action-wrapper is-center">
    <button class="button primary" @click="submitCode">Submit Code</button>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Codemirror } from "vue-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  components: {
    Codemirror,
  },
  props: {
    starterCode: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    let code = ref(props.starterCode);
    const extensions = [javascript(), oneDark];
    let output = ref("");
    let executionTime = ref();
    let socketClient = ref(null);
    let token = ref("");
    let wsNextId = ref(0);
    const router = useRouter();
    const route = useRoute();
    const wsConnectionFailed = (e) => {
      console.log("connection failed");
      console.log(e);
    };

    const wsConnection = () => {
      console.log("connection succeeded");

      socketClient.value.subscribe("/user/queue/execute-i", (message) => {
        let msgId = message.headers["message-id"];
        let msgSeq = parseInt(msgId.substring(msgId.lastIndexOf("-") + 1));

        let statusCode = parseInt(message.headers.statusCode);
        console.log("statusCode", statusCode);
        if (statusCode === 201) {
          wsNextId.value = msgSeq + 1;
          return;
        }
        if (statusCode === 204) {
          //executionTime = message.body
          executionTime.value = message.body;
        } else if (statusCode === 500 || statusCode === 410) {
          //server error
          console.log("server error");
        } else if (statusCode === 206) {
          //outputFiles = JSON.parse(message.body)
          //returns file list - not supported in this custom api
        } else if (statusCode === 429) {
          //Daily limit reached
          console.log("daily limit reached");
        } else if (statusCode === 400) {
          //Invalid request - invalid signature or token expired - check the body for details
          console.log("invalid request - invalid signature or token expired");
        } else if (statusCode === 401) {
          //Unauthorised request
          console.log("Unauthorised request");
        } else {
          console.log("message body", message.body);
          output.value = message.body;
        }

        wsNextId.value = msgSeq + 1;
      });
    };
    const compileCode = async () => {
      try {
        const response = await fetch("http://127.0.0.1:3000/authenticate");
        const tokenResponse = await response.json();
        token.value = tokenResponse;
        let script = code.value;

        let data = JSON.stringify({
          script: script,
          language: "nodejs",
          versionIndex: 4,
        });

        socketClient.value.send("/app/execute-ws-api-token", data, {
          message_type: "execute",
          token: token.value,
        });
      } catch (error) {
        console.log("error", error);
      }
    };

    const submitCode = () => {
      router.push({
        name: "home",
        query: { submitted: route.params.id },
      });
    };

    return {
      code,
      extensions,
      compileCode,
      submitCode,
      output,
      executionTime,
      socketClient,
      wsConnection,
      wsConnectionFailed,
    };
  },
  async mounted() {
    const loadScript = (scriptPath) => {
      return new Promise(function (resolve, reject) {
        let tag = document.head.querySelector(`[src="${scriptPath}"`);
        if (tag) {
          resolve(tag);
        } else {
          tag = document.createElement("script");
          tag.src = scriptPath;
          document.head.appendChild(tag);
          tag.onload = () => {
            resolve(tag);
          };
          tag.onerror = () => {
            reject(new Error("Failed to load " + scriptPath));
          };
        }
      });
    };
    const scriptsToLoad = [
      "https://api.jdoodle.com/js/sockjs.js",
      "https://api.jdoodle.com/js/webstomp.js",
    ];
    const scriptrequests = scriptsToLoad.map(loadScript);
    Promise.all(scriptrequests)
      .then(() => {
        const { webstomp, SockJS } = window;
        this.socketClient = webstomp.over(
          new SockJS("https://api.jdoodle.com/v1/stomp"),
          { heartbeat: false, debug: true }
        );
        this.socketClient.connect(
          {},
          this.wsConnection,
          this.wsConnectionFailed
        );
      })
      .catch((error) => console.log(error.message));
  },
});
</script>

<style lang="scss" scoped>
.result,
.action-wrapper {
  margin-top: 2rem;
}
</style>
