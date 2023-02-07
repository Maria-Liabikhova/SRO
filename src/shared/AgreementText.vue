<template>
  <p class="text">
    <img src="@/assets/img/check-box.svg" class="text__icon" />
    Соглашаюсь с
    <span class="common__text--italic text__agreement" @click="$emit('onClick')"
      >политикой конфиденциальности </span
    >и даю согласие на обработку персональных данных
  </p>
</template>

<script>
export default {
  name: "AgreementText",
};
</script>

<style lang="scss" scoped>
.text {
  line-height: 1;
  margin: 0;
  @media only screen and (max-width: $md) {
    font-size: 14px;
    line-height: 1.2;
  }
  @media only screen and (max-width: $sm) {
    font-size: 12px;
  }
  &__icon {
    height: 15px;
    width: 15px;
    align-self: start;
    margin-right: 5px;
  }
  &__agreement {
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      color: var(--gray-dark);
      transition: all 0.3s ease;
    }
  }
}
</style>
