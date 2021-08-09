<template>
  <it-button class="button-open-modale" @click="toggleModale()" type="primary"
    >Ajouter +</it-button
  >
  <div class="container">
    <div class="container-list">
      <ToDo :tasksToDo="tasks.toDo" />
      <InProgress :tasksInProgress="tasks.inProgress" />
      <Done :tasksDone="tasks.done" @removecard="removeCard" />
    </div>
  </div>
  <it-modal v-model="isModaleOpen">
    <Modale @create="addTask" action="create" />
  </it-modal>
</template>

<script>
import ToDo from "@/components/ToDo.vue";
import InProgress from "@/components/InProgress.vue";
import Done from "@/components/Done.vue";
import Modale from "@/components/Modale.vue";
import taskServices from "@/services/task";

import { ref } from "vue";

export default {
  name: "Board",
  components: {
    ToDo,
    InProgress,
    Done,
    Modale,
  },

  data: () => {
    return {
      isModaleOpen: false,
    };
  },

  methods: {
    addTask(task) {
      taskServices.create(task);
      this.displayTasks();
      this.toggleModale();
    },

    toggleModale() {
      this.isModaleOpen = !this.isModaleOpen;
      console.log(this.isModaleOpen);
    },
  },

  setup() {
    const tasks = ref({
      toDo: [],
      inProgress: [],
      done: [],
    });

    function displayTasks() {
      tasks.value = taskServices.getTasks();
    }

    function removeCard(task) {
      taskServices.deleteCard(task);
      // Je suis obligé de vider l'objet tasks.value car la taille de l'objet ne variant pas au premier niveau, le DOM n'est pas re-rendu
      tasks.value = {};
      displayTasks();
    }

    return {
      displayTasks,
      tasks,
      removeCard,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  border: 2px solid #42b983;
  position: relative;
  width: 100%;
}
.container-list {
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.button-open-modale {
  margin: 8px;
}
</style>
