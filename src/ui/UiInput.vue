<template>
  <div>
    <input
      v-if="mask"
      class="input"
      :type="type"
      name="address"
      :placeholder="placeholder"
      v-mask="mask"
    />
    <input
      v-else
      class="input"
      :type="type"
      name="address"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: "UiInput",
  props: {
    type: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    mask: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped lang="scss">
.input {
  width: 100%;
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
  @media only screen and (max-width: $md) {
    padding: 10px;
  }
}
</style>
