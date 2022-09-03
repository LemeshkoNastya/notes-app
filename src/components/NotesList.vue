<template>
  <div class="notes">
    <NotesListItem v-for="note in notes" :key="note.name" :note="note" />
  </div>
</template>

<script>
import NotesListItem from "@/components/NotesListItem";
import { mapGetters } from "vuex";

export default {
  components: { NotesListItem },
  computed: {
    ...mapGetters({ notes: "getNotes" }),
  },
};
</script>

<style lang="scss">
.notes {
  display: flex;
  flex-wrap: wrap;
}
</style>
