<template>
  <div class="edit">
    <div>
      <h1 v-if="newNote">Create a new note</h1>
      <div v-else class="edit__title">
        <h1>Note editing - {{ note.name }}</h1>
        <div class="edit__tooltips">
          <BaseTooltip
            v-for="button in actionsButton"
            :key="button.icon"
            :icon="button.icon"
            :text="button.text"
            @click.prevent="clickTooltipButton(button.icon)"
          />
        </div>
      </div>
    </div>
    <div class="edit__content">
      <div class="edit__item">
        <label class="edit__label">Note title</label>
        <input
          v-model="note.name"
          placeholder="Enter note title"
          class="edit__input"
        />
      </div>

      <h3>Task list</h3>
      <ul class="edit__list">
        <div v-if="errorTask" class="edit__error">{{ errorTask }}</div>
        <TodoListItem
          v-for="(task, indexTask) in note.taskList"
          :key="task.name"
          :task="task"
          :disabled="false"
          :buttons="true"
          @editTodo="editTodo(task.name)"
          @deleteTodo="note.taskList.splice(indexTask, 1)"
          class="edit__list-item"
        />
      </ul>

      <div class="edit__item">
        <input
          v-model="newTask"
          placeholder="Enter name of task"
          class="edit__input"
        />
        <BaseButton
          :text="'Add task'"
          @click.prevent="addTask"
          class="edit__button"
        />
      </div>
    </div>

    <div class="edit__buttons">
      <BaseButton
        :text="newNote ? 'Сreate note' : 'Save note'"
        @click.prevent="newNote ? createNote() : saveNote()"
        class="edit__button"
      />
      <BaseButton :text="'Cancel'" @click.prevent="showPopupWarning = true" />
    </div>

    <div v-if="error" class="edit__error">{{ error }}</div>

    <PopupWarning
      v-if="showPopupWarning"
      :header="'Undo editing'"
      :text="'Are you sure you want to undo editing the note?'"
      :component="'TextWarning'"
      @close="showPopupWarning = false"
      @confirmed="toMain"
    />
    <PopupWarning
      v-if="showPopupDelete"
      :header="'Deleting a note'"
      :text="'Are you sure you want to delete the note?'"
      :component="'TextWarning'"
      @close="showPopupDelete = false"
      @confirmed="deleteCheck"
    />
  </div>
</template>

<script>
import TodoListItem from "@/components/TodoListItem";
import BaseButton from "@/components/BaseButton";
import BaseTooltip from "@/components/BaseTooltip";
import PopupWarning from "@/components/PopupWarning";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: { TodoListItem, BaseButton, BaseTooltip, PopupWarning },
  data() {
    return {
      note: {
        id: null,
        name: null,
        background: null,
        taskList: [],
      },
      copy: null,
      newTask: null,
      error: null,
      errorTask: null,
      minNumId: 10000,
      maxNumId: 99999,
      showPopupWarning: false,
      showPopupDelete: false,
      showPopupChangeTodo: false,
      actionsButton: [
        {
          icon: "arrow-left",
          text: "Revert the change",
        },
        {
          icon: "arrow-right",
          text: "Redo an undone change",
        },
        {
          icon: "delete",
          text: "Delete note",
        },
      ],
      currentTask: null,
    };
  },
  computed: {
    ...mapGetters({
      names: "namesNotes",
      idNotes: "idNotes",
      noteEditable: "currentNote",
    }),
    id() {
      return +this.$route.params.id;
    },
    newNote() {
      return this.id === 0;
    },
    noteEdit() {
      return this.noteEditable(this.id);
    },
    randomColor() {
      return (
        "hsl(" +
        360 * Math.random() +
        "," +
        (25 + 70 * Math.random()) +
        "%," +
        (85 + 10 * Math.random()) +
        "%)"
      );
    },
  },
  methods: {
    ...mapMutations(["addNotes", "updateNotes", "deleteNote"]),
    addTask() {
      const name = this.newTask;

      if (!name) this.errorTask = "Error ! Enter the title.";
      else if (
        this.note.taskList.filter((task) => task.name === name).length > 0
      )
        this.errorTask = "Error ! Such a task already exists.";
      else this.errorTask = null;

      if (!this.errorTask) {
        this.note.taskList.push({ name: name, done: false });
        this.newTask = null;
      }
    },
    createNote() {
      if (!this.note.name) this.error = "Error ! Enter note title.";
      else if (this.names.filter((name) => name === this.note.name).length > 0)
        this.error = "Error ! This post title already exists.";
      else this.error = null;

      if (!this.error) {
        this.addNotes(this.note);
        this.toMain();
      }
    },
    saveNote() {
      console.log("SAVE");
      this.updateNotes(this.note);
      this.toMain();
    },
    toMain() {
      this.$router.push("/");
    },
    randomId() {
      const random =
        Math.floor(Math.random() * (this.maxNumId - this.minNumId + 1)) +
        this.minNumId;

      if (this.idNotes.filter((name) => name === random).length > 0)
        this.randomId();
      else return random;
    },
    clickTooltipButton(button) {
      if (button === "delete") this.showPopupDelete = true;
      else this.changeNote();
    },
    changeNote() {
      const currentNote = this.copyObj(this.note);
      this.note = this.copyObj(this.copy);
      this.copy = currentNote;
    },
    deleteCheck() {
      this.deleteNote(this.note.id);
      this.showPopupDelete = false;
      this.toMain();
    },
    copyObj(obj) {
      return JSON.parse(JSON.stringify(obj));
    },
    editTodo(todo) {
      this.currentTask = todo;
      this.showPopupChangeTodo = true;
    },
    changeTodo() {
      console.log("change todo");
    },
  },
  mounted() {
    if (this.newNote) {
      this.note.background = this.randomColor;
      this.note.id = this.randomId();
    } else {
      this.note = this.copyObj(this.noteEdit);
      this.copy = this.copyObj(this.note);
    }
  },
};
</script>

<style lang="scss">
.edit {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: calc(100% - 40px);
  height: calc(100vh - 40px);
  background: white;

  &__title {
    display: flex;
    align-items: center;
    align-content: center;

    h1 {
      margin: 0;
      padding: 0;
    }
  }

  &__tooltips {
    display: flex;
    align-items: center;
    margin-left: 30px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    margin: 50px 0;
    padding: 20px;
    width: calc(100% - 40px);
    background: $purple-light;
    border-radius: 15px;

    h3 {
      margin: 0 0 10px;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    width: 100%;

    &:first-child {
      margin-bottom: 50px;
    }

    .edit__button {
      margin: 0 0 0 30px;
    }
  }

  &__label {
    margin-right: 20px;
    min-width: max-content;
  }

  &__input {
    padding: 10px;
    width: 100%;
    height: max-content;
    border: 1px solid $purple-light;
    border-radius: 5px;
    outline: none;

    &:focus {
      border: 1px solid black;
    }
  }

  &__buttons {
    display: flex;
    justify-content: end;
    width: 100%;

    .button:not(:first-child) {
      margin-left: 20px;
    }
  }

  &__button {
    min-width: max-content;
  }

  &__list {
    margin: 0 0 30px;
    padding: 0 10px;
    height: 340px;
    border: 1px solid white;
    border-radius: 15px;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 8px;
      background-color: transparent;
      border: 1px solid #000000;
      border-radius: 15px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #ffffff;
      border: 1px solid #000000;
      border-radius: 15px;
      box-shadow: inset 1px 1px 10px #f3faf7;
    }

    &-item {
      margin-bottom: 10px;

      &:hover {
        font-weight: bold;
        color: black;
      }
    }
  }

  &__error {
    margin-top: 10px;
    padding: 5px 20px;
    background: rgb(250, 208, 208);
    border: 1px solid red;
    color: rgb(255, 87, 87);
    font-weight: bold;
  }
}
</style>
