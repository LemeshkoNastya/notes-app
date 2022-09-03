<template>
  <transition name="modal">
    <div class="popup__bg">
      <div class="popup">
        <div class="popup__content">
          <div class="popup__header">
            <h2>{{ header }}</h2>
          </div>

          <div class="popup__body">
            <p>{{ text }}</p>
          </div>

          <div class="popup__footer">
            <BaseButton
              :text="'Yes'"
              @click.prevent="$emit('confirmed')"
              class="popup__button"
            />
            <BaseButton
              :text="'Cancel'"
              @click.prevent="$emit('close')"
              class="popup__button"
            />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import BaseButton from "@/components/BaseButton";

export default {
  props: ["header", "text"],
  components: { BaseButton },
};
</script>

<style lang="scss">
.popup {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  &__bg {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }

  &__content {
    padding: 30px;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease;
  }

  &__header {
    h2 {
      margin: 0;
    }
  }

  &__body {
    margin: 30px 0;
  }

  &__footer {
    display: flex;
    justify-content: end;
  }

  &__button {
    &:first-child {
      margin-right: 10px;
    }
  }
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .popup__content,
.modal-leave-active .popup__content {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
