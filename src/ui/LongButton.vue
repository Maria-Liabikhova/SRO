<template>
  <button
    type="button"
    class="common__button long-button"
    @click="$emit('onClick')"
  >
    {{ name }}
  </button>
</template>

<script>
export default {
  name: "LongButton",
  props: ["name"],
};
</script>

<style scoped lang="scss">
.long-button {
  padding: 15px 20px;
  line-height: 1;
  background-color: var(--violet);
  color: var(--white);
  border-radius: 30px;
  white-space: nowrap;
  &:hover,
  &:active,
  &:focus {
    cursor: pointer;
    background-color: var(--violet-middle);
  }
  @media only screen and (max-width: $lg) {
    padding: 12px 18px;
  }
}
</style>
