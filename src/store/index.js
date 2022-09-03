import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    notes: [],
    countShowTasks: 5,
  },
  mutations: {
    addNotes(state, note) {
      state.notes.push(note);

      localStorage.setItem(
        "notes",
        JSON.stringify(state.notes)
      );
    },
    updateNotes(state, newNote) {
      const indexNote = state.notes.findIndex((note) => note.id === newNote.id);

      if (indexNote > -1) {
        state.notes[indexNote] = newNote;

        localStorage.setItem(
          "notes",
          JSON.stringify(state.notes)
        );
      }
    },
    deleteNote(state, id) {
      let filteredNotes = state.notes.filter(note => note.id !== id);
      state.notes = filteredNotes;

      localStorage.setItem(
        "notes",
        JSON.stringify(state.notes)
      );
    },
  },
  getters: {
    getNotes(state) {
      return state.notes;
    },
    currentNote: (state) => (id) => {
      return state.notes.find(note => note.id === id);
    },
    countTasksHidden: (state, getters) => (id) => {
      const countTasks = getters.currentNote(id).taskList.length;
      let count = 0;

      if (countTasks > state.countShowTasks) {
        count = countTasks - state.countShowTasks;
      }

      return count;
    },
    showTasks: (state, getters) => (id, all) => {
      const tasks = getters.currentNote(id).taskList;

      if (all) return tasks;
      else return tasks.filter((task, index) => index < state.countShowTasks);
    },
    namesNotes(state) {
      return Array.from(state.notes, note => note.name);
    },
    idNotes(state) {
      return Array.from(state.notes, note => note.id);
    },
  },
  actions: {},
  modules: {}
})