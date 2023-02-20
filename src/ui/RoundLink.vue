<template>
  <a :href="linkTo" class="common__link round-link" target="_blank">
    <img class="common__img round-link__icon" :src="img" />
  </a>
</template>

<script>
export default {
  name: "RoundLink",
  props: ["img", "linkTo"],
};
</script>

<style scoped lang="scss">
.round-link {
  background-color: var(--turquoise);
  margin-right: 10px;
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  @media only screen and (max-width: $lg) {
    width: 40px;
    height: 40px;
  }
  @media only screen and (max-width: $sm) {
    width: 35px;
    height: 35px;
  }
  &:hover {
    box-shadow: 5px 5px 15px var(--violet-light);
    transition: all 0.3s ease;
  }
  &__icon {
    height: 20px;
    width: auto;
    @media only screen and (max-width: $sm) {
      height: 15px;
      width: auto;
    }
  }
}
</style>
