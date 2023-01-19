<template>
  <div
    v-scroll-lock="true"
    class="base-modal__backdrop"
    @click="$emit('closeModal')"
  >
    <div class="base-modal" @click.stop>
      <button
        class="common__button base-modal__button"
        type="button"
        @click="$emit('closeModal')"
      >
        <img class="base-modal__icon" src="@/assets/img/cross.svg" />
      </button>
      <slot @closeModal="$emit('closeModal')"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "BaseModal",
};
</script>
<style lang="scss" scoped>
.base-modal {
  border-radius: 12px;
  overflow: hidden;
  background-color: var(--white);
  padding: 40px;
  padding-top: 20px;
  width: 60vw;
  &__backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--violet-pail);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }
  &__icon {
    height: 20px;
    width: 20px;
    transition: all 0.3s ease;
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
    &:hover {
      background-color: var(--gray);
    }
  }
}
</style>
