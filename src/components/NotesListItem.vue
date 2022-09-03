<template>
  <div class="note" :style="{ backgroundColor: bgrColor }">
    <div class="note__header">
      <h3 class="note__title">{{ note.name }}</h3>
      <DropdownNote :id="note.id" @openPopup="showPopup = true" />
    </div>
    <TodoList :id-note="note.id" :all="showTasksAll" />
    <button
      v-if="!showTasksAll"
      @click.prevent="showTasksAll = true"
      class="note__button"
      :class="{ note__button_invisible: tasksHidden === 0 }"
    >
      +{{ tasksHidden }} Tasks
    </button>
    <PopupWarning
      v-if="showPopup"
      :header="'Deleting a note'"
      :text="'Are you sure you want to delete the note?'"
      :component="'TextWarning'"
      @close="showPopup = false"
      @confirmed="deleteNote(note.id)"
    />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import DropdownNote from "@/components/DropdownNote";
import PopupWarning from "@/components/PopupWarning";
import { mapGetters, mapMutations } from "vuex";

export default {
  props: ["note"],
  components: { TodoList, DropdownNote, PopupWarning },
  data() {
    return {
      showTasksAll: false,
      showPopup: false,
    };
  },
  computed: {
    ...mapGetters({ countTasksHidden: "countTasksHidden" }),
    bgrColor() {
      return this.note ? this.note.background : "#ffffff";
    },
    tasksHidden() {
      return this.countTasksHidden(this.note.id);
    },
  },
  methods: {
    ...mapMutations(["deleteNote"]),
  },
};
</script>

<style lang="scss">
.note {
  margin-top: 20px;
  margin-left: 20px;
  padding: 20px;
  max-width: 350px;
  min-width: 350px;
  border-radius: 15px;

  &__header {
    display: flex;
    justify-content: space-between;
  }

  &__title {
    margin: 0;
  }

  &__button {
    margin-top: 20px;
    padding: 5px 10px;
    background: none;
    border: none;
    border-radius: 5px;
    outline: none;
    cursor: pointer;

    &:hover {
      background: white;
    }

    &_invisible {
      opacity: 0;
    }
  }
}
</style>
