<template>
  <h3>{{ task.title }}</h3>
  <p>{{ task.description }}</p>
  <p>{{ task.state }}</p>
  <div class="button-group">
    <it-button-group vertical>
      <it-button type="primary" outlined @click="toggleModale"
        >Modifier</it-button
      >
      <it-button type="danger" outlined @click="deleteCard"
        >Supprimer</it-button
      >
    </it-button-group>
  </div>
  <it-modal v-model="openUpdate">
    <Modale @update="updateTask" action="update" :taskToUpdate="task" />
  </it-modal>
</template>

<script>
import taskServices from "@/services/task";
import Modale from "@/components/Modale.vue";
export default {
  props: {
    task: {
      require: true,
      type: Object,
    },
  },
  components: {
    Modale,
  },

  data() {
    return {
      openUpdate: false,
    };
  },
  emits: ["deletecard"],

  methods: {
    toggleModale() {
      this.openUpdate = !this.openUpdate;
    },
    updateTask(task) {
      taskServices.update(task);
      this.toggleModale();
    },
  },

  setup(_, context) {
    function deleteCard() {
      context.emit("deletecard");
    }

    return {
      deleteCard,
    };
  },
};
</script>

<style scoped>
.button-group {
  margin: 8px;
}
</style>
