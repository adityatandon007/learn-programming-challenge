<template>
  <div class="progress-bar">
    <div :style="fillerStyles">
      <span class="label">{{ `${completed}%` }}</span>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";

export default defineComponent({
  props: {
    bgcolor: String,
    completed: Number,
  },
  setup(props) {
    const fillerStyles = computed(() => {
      return {
        height: "100%",
        width: `${props.completed}%`,
        backgroundColor: props.bgcolor,
        borderRadius: "inherit",
        textAlign: "right",
      };
    });

    return { fillerStyles };
  },
});
</script>
<style lang="scss" scoped>
.progress-bar {
  height: 20px;
  width: 100%;
  background-color: #e0e0de;
  border-radius: 20px;
  margin: 4rem 0;
  font-size: 1.4rem;
}

.label {
  padding: 0 1rem;
  color: white;
  font-weight: bold;
}
</style>
