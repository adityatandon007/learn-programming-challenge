<template>
  <div class="row">
    <div class="col-12 is-center">
      <h2>Solve {{ problem.title }}</h2>
    </div>
  </div>
  <div class="row">
    <div class="problem-description col-12 col-6-md">
      <ProblemDescription :problem="problem" />
    </div>
    <div class="editor-area col-12 col-6-md">
      <EditorArea :starter-code="problem.starterCode" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ProblemDescription from "./ProblemDescription.vue";
import EditorArea from "./EditorArea.vue";

export default defineComponent({
  components: {
    ProblemDescription,
    EditorArea,
  },
  props: {
    problem: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
