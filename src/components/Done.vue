<template>
  <div class="container-cards">
    <h4>Terminer</h4>
    <div class="card" v-for="task of tasksDone" :key="task.id">
      <Card v-bind:task="task" @deletecard="removeCard(task)" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "Done",
  emits: ["removecard"],
  components: {
    Card,
  },
  props: {
    tasksDone: {
      require: true,
      type: Array,
    },
  },

  setup(props, context) {
    function removeCard(task) {
      context.emit("removecard", task);
    }

    return {
      removeCard,
    };
  },
};
</script>

<style scoped></style>
