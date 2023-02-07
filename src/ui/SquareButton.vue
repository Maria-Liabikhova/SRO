<template>
  <button
    class="common__button square-button"
    :class="{ 'square-button--yellow': yellow }"
    :type="type"
    @click="$emit('onClick')"
  >
    {{ name }}
  </button>
</template>

<script>
export default {
  name: "SquareButton",
  props: ["name", "type", "yellow"],
};
</script>

<style scoped lang="scss">
.square-button {
  background-color: var(--violet);
  border: none;
  border-radius: 4px;
  color: var(--white);
  padding: 10px 40px;
  margin-right: 25px;
  &:hover {
    background-color: var(--violet-middle);
    box-shadow: 4px 4px 8px -1px var(--violet);
  }
  @media only screen and (max-width: $md) {
    font-size: 14px;
  }
  &--yellow {
    background-color: var(--yellow);
    color: var(--gray-dark);
    font-weight: bold;
    &:hover {
      background-color: var(--yellow-dark);
      box-shadow: 4px 4px 8px -1px var(--yellow-dark);
    }
  }
}
</style>
