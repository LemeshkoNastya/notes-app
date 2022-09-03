<template>
  <div class="tooltip">
    <img :src="require(`@/assets/icons/${icon}.svg`)" />
    <span class="tooltip__text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: ["icon", "text"],
};
</script>

<style lang="scss">
.tooltip {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  cursor: pointer;

  &__text {
    position: absolute;
    bottom: 100%;
    right: calc(100% - 24px);
    padding: 5px;
    visibility: hidden;
    min-width: max-content;
    background-color: black;
    border-radius: 6px;
    color: #fff;
    text-align: center;
    z-index: 1;
  }

  &:hover .tooltip__text {
    visibility: visible;
  }
}
</style>
