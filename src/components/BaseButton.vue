<template>
  <button class="button">{{ text }}</button>
</template>

<script>
export default {
  props: ["text"],
};
</script>

<style lang="scss">
.button {
  padding: 10px 30px;
  background: white;
  border: 1px solid $gray-light;
  border-radius: 20px;
  outline: none;
  height: max-content;
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  color: $primary;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    border: 1px solid black;
  }
}
</style>
