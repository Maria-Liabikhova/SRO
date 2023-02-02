<template>
  <button
    type="type"
    class="common__button long-button"
    @click="$emit('onClick')"
  >
    {{ name }}
  </button>
</template>

<script>
export default {
  name: "LongButton",
  props: {
    name: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      default: "button",
    },
  },
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
  &:hover {
    cursor: pointer;
    background-color: var(--violet-middle);
    box-shadow: 4px 4px 8px -1px var(--violet);
  }
  @media only screen and (max-width: $lg) {
    padding: 12px 18px;
  }
}
</style>
