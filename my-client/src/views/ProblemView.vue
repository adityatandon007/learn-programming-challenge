<template>
  <div>
    <SolveProblem :problem="problem" />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { problemsMap } from "@/mocks/problems";
import { useRoute } from "vue-router";
import SolveProblem from "@/components/SolveProblem.vue";

export default defineComponent({
  components: {
    SolveProblem,
  },
  setup() {
    const route = useRoute();
    const problem = ref(problemsMap[route.params.id]);
    return {
      problem,
    };
  },
});
</script>

<style lang="scss" scoped></style>
