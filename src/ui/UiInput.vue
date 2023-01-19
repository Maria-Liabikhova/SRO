<template>
  <input class="input" :type="type" name="address" :placeholder="placeholder" />
</template>

<script>
export default {
  name: "UiInput",
  props: ["type", "placeholder"],
};
</script>

<style scoped lang="scss">
.input {
  width: 100%;
  border: none;
  padding: 12px;
  font-size: 16px;
  color: var(--gray-dark);
  border-radius: 4px;
  background-color: var(--light-blue);
  border: 1px solid var(--white);
  &:focus {
    outline: none;
    border: 1px solid var(--gray);
  }
}
</style>
