<template>
  <div class="container-cards">
    <h4>À faire</h4>
    <div class="card" v-for="task of tasksToDo" :key="task.id">
      <Card :task="task" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "To do",
  components: {
    Card,
  },
  props: {
    tasksToDo: {
      require: true,
      type: Array,
    },
  },
};
</script>

<style scoped></style>
