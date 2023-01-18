<template>
  <div class="header">
    <div class="common__container">
      <div class="header__container">
        <div class="common__img-wrapper header__img-wrapper">
          <img class="common__img" src="@/assets/img/logo_name.png" />
        </div>
        <div class="header__contacts">
          <div class="header__link-wrapper">
            <RoundLink
              :img="require('@/assets/img/whatsapp.svg')"
              linkTo="https://wa.me/79219610320"
            />
            <RoundLink
              :img="require('@/assets/img/telegram.svg')"
              linkTo="https://telegram.me/+79219610320"
            />
          </div>
          <a href="tel:+79219610320" class="common__link header__link">
            +7(921)961-03-20</a
          >
          <LongButton name="Оставить заявку" @onClick="onConnectUsClick" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RoundLink from "@/ui/RoundLink";
import LongButton from "@/ui/LongButton";
export default {
  name: "HeaderComponent",
  components: { RoundLink, LongButton },
  methods: {
    onConnectUsClick() {
      alert("HelloWorld!");
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: auto;
  top: 0;
  background-color: var(--white);
  position: fixed;
  z-index: 1;
  &__container {
    display: flex;
  }
  &__img-wrapper {
    height: 70px;
    width: auto;
    @media only screen and (max-width: $md) {
      height: 50px;
    }
    @media only screen and (max-width: $xs) {
      height: 35px;
    }
  }
  &__contacts {
    display: flex;
    align-items: center;
    margin-left: auto;
    justify-content: space-between;
  }
  &__link-wrapper {
    display: flex;
    align-items: center;
    margin-left: var(space);
    margin-right: var(space);
  }
  &__link {
    display: flex;
    align-items: center;
    font-size: 25px;
    color: var(--gray);
    margin-left: 20px;
    margin-right: 20px;
    &:hover,
    &:active {
      color: var(--black);
    }
    @media only screen and (max-width: $md) {
      font-size: 18px;
    }
  }
}
</style>
