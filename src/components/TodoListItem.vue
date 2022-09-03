<template>
  <li class="list__item">
    <input
      type="checkbox"
      :id="currentTask.name"
      v-model="currentTask.done"
      :value="currentTask.name"
      :disabled="disabled"
      class="list__checkbox"
    />
    <label v-if="!isChange" :for="currentTask.name" class="list__label">
      {{ currentTask.name }}
    </label>
    <input
      v-else
      v-model="newName"
      placeholder="Enter name of task"
      @keyup.enter="keyupCheck"
      class="edit__input"
    />
    <div v-if="buttons && !isChange" class="list__icons">
      <button class="list__icon" @click.prevent="editTask">
        <img src="@/assets/icons/edit.svg" />
      </button>
      <button class="list__icon" @click.prevent="$emit('deleteTodo')">
        <img src="@/assets/icons/delete.svg" />
      </button>
    </div>
  </li>
</template>

<script>
export default {
  props: ["task", "disabled", "buttons"],
  data() {
    return {
      currentTask: this.task,
      newName: this.task.name,
      isChange: false,
    };
  },
  watch: {
    currentTask() {
      this.$emit("input", this.currentTask);
    },
  },
  methods: {
    editTask() {
      this.isChange = true;
      this.$emit("editTodo");
    },
    keyupCheck() {
      this.currentTask.name = this.newName;
      this.isChange = false;
    },
  },
};
</script>

<style lang="scss">
.list {
  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    list-style-type: none;
  }

  &__checkbox {
    display: none;

    & ~ label::before {
      content: "\2713";
      text-align: center;
      color: transparent;
      width: 20px;
      height: 20px;
      background: #ffffff;
      border: 2px inset transparent;
      border-radius: 5px;
      margin: 0 10px 0 0;
      display: inline-block;
    }

    &:checked ~ label::before {
      color: #000000;
      font-weight: bold;
    }
  }

  &__label {
    text-align: center;
  }

  &__icons {
    display: flex;
  }

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: 1px solid white;
    border-radius: 5px;
    outline: none;
    cursor: pointer;

    &:first-child {
      margin-right: 5px;
    }

    &:hover {
      background: white;
    }
  }
}
</style>
