<template>
  <div class="problem-descripton">
    <!-- Statement -->
    <div v-html="problem.problemStatement"></div>
    <!-- Examples -->
    <div class="examples-container">
      <div v-for="(example, index) in problem.examples" :key="example.id">
        <p>Example {{ index + 1 }}</p>
        <div class="card example-wrapper">
          <code>Input: {{ example.inputText }}</code>
          <br />
          <code>Ouput: {{ example.outputText }}</code>
          <pre v-if="example.explanation">
Explanation: {{ example.explanation }}</pre
          >
        </div>
      </div>
    </div>
    <!-- Constraints -->
    <div class="constraints-container">
      <div>Constraints:</div>
      <ul v-html="problem.constraints"></ul>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
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

<style lang="scss" scoped>
.example-wrapper {
  margin-bottom: 2rem;
}
</style>
