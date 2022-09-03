<template>
  <ul class="list">
    <TodoListItem
      v-for="task in tasks(idNote, all)"
      :key="task.name"
      :task="task"
      :disabled="true"
    />
  </ul>
</template>

<script>
import TodoListItem from "@/components/TodoListItem";
import { mapGetters } from "vuex";

export default {
  props: ["idNote", "all"],
  components: { TodoListItem },
  computed: {
    ...mapGetters({ tasks: "showTasks" }),
  },
};
</script>

<style lang="scss">
.list {
  margin: 20px 0 0;
  padding: 0;
  max-height: 340px;
  min-height: 170px;
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
}
</style>
