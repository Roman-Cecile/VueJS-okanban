<template>
  <div class="container-cards">
    <h4>En cours</h4>
    <div class="card" v-for="task of tasksInProgress" :key="task.id">
      <Card :task="task" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "In progress",
  components: {
    Card,
  },
  props: {
    tasksInProgress: {
      require: true,
      type: Array,
    },
  },
};
</script>

<style scoped></style>
