<template>
  <div class="main-page">
    <div class="main-page__title">
      <h1>Note taking app</h1>
      <router-link
        :to="{ name: 'edit', params: { id: 0 } }"
        v-slot="{ navigate }"
      >
        <BaseButton :text="'Create a new note'" @click="navigate" />
      </router-link>
    </div>
    <NotesList />
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton";
import NotesList from "@/components/NotesList";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Main",
  components: { BaseButton, NotesList },
  computed: {
    ...mapGetters({ notes: "getNotes" }),
  },
  methods: {
    ...mapMutations(["addNotes"]),
  },
  created() {
    const dataLocal = JSON.parse(localStorage.getItem("notes"));

    if (this.notes.length === 0 && dataLocal) {
      dataLocal.forEach((note) => {
        this.addNotes(note);
      });
    }
  },
};
</script>

<style lang="scss">
.main-page {
  padding: 20px;

  &__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
