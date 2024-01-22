<template>
  <div>
    <h2 class="is-center">Challenges</h2>
    <ProgressBar :bgcolor="'#6a1b9a'" :completed="completed" />
    <div class="row">
      <ProblemCard
        class="col-4-md"
        v-for="(problem, index) in problemsList"
        :key="index"
        :problem="problem"
      />
    </div>
  </div>
</template>

<script>
import ProblemCard from "@/components/ProblemCard.vue";
import ProgressBar from "@/components/ProgressBar.vue";
import { problems } from "@/mocks/problems";
import { defineComponent, reactive, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  components: {
    ProblemCard,
    ProgressBar,
  },
  setup() {
    let problemsList = reactive(problems);
    const route = useRoute();
    const router = useRouter();
    const completed = computed(() => {
      const submittedProblems = problemsList.filter(
        (problem) => problem.submitted
      );
      return submittedProblems.length * 20;
    });
    const submitProblem = (pid) => {
      problemsList = problemsList.map((problem) => {
        if (problem.id === pid) {
          problem.submitted = true;
        }
        return problem;
      });
    };
    if (route.query.submitted) {
      submitProblem(route.query.submitted);
      // clear the query
      router.replace({ query: {} });
    }
    return {
      problemsList,
      completed,
    };
  },
});
</script>

<style lang="scss" scoped></style>
