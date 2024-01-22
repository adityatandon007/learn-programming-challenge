<template>
  <div class="problem-wrapper card">
    <header>
      <h4 class="text-primary">{{ problem.title }}</h4>
    </header>
    <footer class="is-right">
      <div v-if="problem.submitted" class="text-primary">Solved</div>
      <router-link v-else class="button primary" :to="`/problem/${problem.id}`"
        >Solve</router-link
      >
    </footer>
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
.problem-wrapper {
  width: 320px;
  max-width: 100%;
  transition: 0.5s;
}

.problem-wrapper:hover {
  box-shadow: 0 0 4px #28bd14;
}
</style>
