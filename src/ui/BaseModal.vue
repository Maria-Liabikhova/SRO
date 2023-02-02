<template>
  <transition name="fade">
    <div
      v-scroll-lock="true"
      class="base-modal__backdrop"
      :class="{
        'base-modal__backdrop--visible': baseModal,
      }"
      @click="$emit('closeModal')"
    >
      <div
        class="base-modal"
        :class="{ 'base-modal--green': green }"
        @click.stop
      >
        <button
          class="common__button base-modal__button"
          :class="{ 'base-modal__button--green': green }"
          type="button"
          @click="$emit('closeModal')"
        >
          <img class="base-modal__icon" src="@/assets/img/cross.svg" />
        </button>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "BaseModal",
  props: {
    green: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      baseModal: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.baseModal = true;
    });
  },
};
</script>
<style lang="scss" scoped>
.base-modal {
  border-radius: 12px;
  overflow: hidden;
  background-color: var(--white);
  padding: 40px;
  padding-top: 20px;
  width: 40vw;
  @media only screen and (max-width: $xl) {
    width: 50vw;
  }
  @media only screen and (max-width: $lg) {
    width: 60vw;
  }
  @media only screen and (max-width: $md) {
    width: 80vw;
    padding: 20px;
  }
  &--green {
    background-color: var(--turquoise);
  }
  &__backdrop {
    opacity: 0.5;
    transition: all 0.3s ease;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--violet-dark);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    &--visible {
      opacity: 1;
      transition: all 0.3s ease;
    }
  }
  &__icon {
    height: 20px;
    width: 20px;
    transition: all 0.3s ease;
    &:hover {
      transition: all 0.3s ease;
      transform: rotate(90deg);
    }
  }
  &__button {
    margin-left: auto;
    border-radius: 4px;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--gray-pail);
    opacity: 0.7;
    &:hover {
      opacity: 1;
      box-shadow: 4px 4px 8px -1px var(--gray);
    }
    &--green {
      background-color: var(--white);
      opacity: 0.9;
      &:hover {
        box-shadow: 4px 4px 8px -1px var(--turquoise-dark);
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
