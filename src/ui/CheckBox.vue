<template>
  <div
    class="checkbox__wrapper"
    @click="onLableClick"
    @mouseenter="mouseOnCheckbox = true"
    @mouseleave="mouseOnCheckbox = false"
  >
    <input
      ref="checkbox"
      class="checkbox"
      type="checkbox"
      :name="name"
      :value="value"
      @input="$emit('onInput')"
      @click.stop
      :class="{ 'checkbox--hover': mouseOnCheckbox }"
    />
    <label :for="name" class="checkbox__label">
      {{ labelName }}
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CheckBox",
  props: {
    value: {
      type: [Boolean, String],
      required: true,
    },
    labelName: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      mouseOnCheckbox: false,
    };
  },
  methods: {
    onLableClick() {
      this.$refs.checkbox.checked = !this.$refs.checkbox.checked;
      this.$emit("onInput");
    },
  },
});
</script>

<style lang="scss" scoped>
.checkbox {
  height: 20px;
  width: 20px;
  margin-right: 7px;
  border: 1px solid var(--gray);
  border-radius: 4px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: relative;
  background-color: var(--white);
  transition: all 0.3s ease;
  cursor: pointer;
  &:checked {
    outline: none;
    &::after {
      position: absolute;
      content: url("@/assets/img/checked.svg");
      top: 50%;
      left: 50%;
      transform: translate(-50%, -40%);
    }
  }
  &--hover {
    box-shadow: 1px 1px 5px -1px var(--gray);
    transition: all 0.3s ease;
  }
  &__wrapper {
    display: grid;
    grid-template-columns: 27px 1fr;
  }
  &__label {
    margin-bottom: 0;
    color: var(--gray);
    line-height: 1.2;
    font-size: 18px;
    cursor: pointer;
    @media only screen and (max-width: $sm) {
      font-size: 14px;
      line-height: 1;
    }
  }
}
</style>
