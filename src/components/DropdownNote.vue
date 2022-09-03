<template>
  <div class="menu">
    <button class="menu__button">
      <img src="@/assets/icons/menu.svg" />
    </button>
    <div class="dropdown">
      <ul class="dropdown__list">
        <router-link
          :to="{ name: 'edit', params: { id: id } }"
          custom
          v-slot="{ navigate }"
        >
          <li @click="navigate" class="dropdown__item">
            <div class="dropdown__icon">
              <img src="@/assets/icons/edit.svg" />
            </div>
            <span>Edit note</span>
          </li>
        </router-link>

        <li class="dropdown__item" @click.prevent="$emit('openPopup')">
          <div class="dropdown__icon">
            <img src="@/assets/icons/delete.svg" />
          </div>
          <span>Delete note</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
};
</script>

<style lang="scss">
.menu {
  position: relative;

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }

  &:hover .dropdown {
    display: block;
  }
}

.dropdown {
  display: none;
  position: absolute;
  right: 0;
  background-color: white;
  min-width: max-content;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
  z-index: 1;
  cursor: pointer;

  &__list {
    margin: 0;
    padding: 15px;
  }

  &__item {
    display: flex;
    align-items: center;
    padding-bottom: 2px;
    border-bottom: 1.5px solid white;
    list-style-type: none;

    &:first-child {
      margin-bottom: 15px;
    }

    &:hover {
      border-bottom: 1.5px solid black;
    }
  }

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    width: 24px;
    height: 24px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
