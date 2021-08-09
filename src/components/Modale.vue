<template v-slot:body>
  <div class="signupmodal">
    <h2>{{ actionType }}</h2>
    <form v-on:submit.prevent="saveTask">
      <!-- This is how we loop on input -->
      <!-- <it-input
        v-for="input in inputs"
        v-model="handleInputValue[input.type]"
        :labelTop="input.label"
        :key="input.id"
        :placeholder="input.label"
      /> -->
      <it-input
        labelTop="Titre"
        prefix-icon="title"
        type="title"
        placeholder="Titre de la tâche"
        v-model="handleInputValue.title"
      />
      <div class="signupmodal-wrap-inputs" style="display: flex">
        <it-textarea
          style="flex: 1"
          labelTop="Description"
          placeholder="Description de la tâche"
          v-model="handleInputValue.description"
        />
      </div>
      <it-select
        label-top="État de la tâche"
        v-model="handleInputValue.state"
        :options="optionsState"
        placement="top"
      />
      <it-button
        :disabled="!isFormValid"
        class="button-create"
        block
        pulse
        size="normal"
        type="primary"
        @click="$Message.success({ text: 'Tâche créée' })"
        >Créer</it-button
      >
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

export default {
  name: "DialogPrompt",
  emits: ["create", "update"],
  props: {
    taskToUpdate: {
      required: false,
      type: Object,
      default: () => {
        return { id: "", title: "", description: "", state: "" };
      },
    },
    action: {
      required: true,
      type: String,
    },
  },

  // Dans data c'est tout ce qui va etre utiliser pour afficher le composant et intéragir avec
  data: () => ({
    optionsState: [
      { name: "A faire", value: "toDo" },
      { name: "En cours", value: "inProgress" },
      { name: "Terminer", value: "done" },
    ],
  }),

  // Dans setup on retrouve toute la logique qui va s'excuter en fonction des actions du user
  setup(props, context) {
    const handleInputValue = ref(props.taskToUpdate);
    const actionType = ref(props.action === "create" ? "create" : "update");

    function saveTask() {
      const task = {
        id: handleInputValue.value.id || Date.now(),
        title: handleInputValue.value.title,
        description: handleInputValue.value.description,
        state:
          handleInputValue.value.state.value || handleInputValue.value.state,
      };

      context.emit(actionType.value, task);
      resetForm();
    }

    function resetForm() {
      handleInputValue.value = {};
    }

    const isFormValid = computed(() => {
      return (
        handleInputValue.value.title !== undefined &&
        handleInputValue.value.title !== "" &&
        handleInputValue.value.description !== undefined &&
        handleInputValue.value.description !== "" &&
        handleInputValue.value.state !== undefined &&
        handleInputValue.value.state !== ""
      );
    });

    return {
      handleInputValue,
      saveTask,
      isFormValid,
      actionType,
    };
  },
};
</script>

<style scoped>
.signupmodal {
  padding: 1.5rem;
}

.button-create {
  padding: 8px;
  margin: 20px auto;
}
</style>
