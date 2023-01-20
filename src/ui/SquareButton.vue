<template>
  <button class="square-button common__button" type="button">
    {{ name }}
  </button>
</template>

<script>
export default {
  name: "SquareButton",
  props: ["name"],
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
  }
  @media only screen and (max-width: $md) {
    font-size: 14px;
  }
}
</style>
