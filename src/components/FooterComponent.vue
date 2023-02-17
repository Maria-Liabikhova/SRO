<template>
  <section class="footer">
    <div class="common__container">
      <div class="footer__container">
        <div class="common__img-wrapper footer__img-wrapper">
          <img class="common__img" src="@/assets/img/logo_name.svg" />
        </div>
        <div class="footer__info-wrapper">
          <p class="footer__text">Общество с ограниченной ответственностью</p>
          <h3 class="common__h4 footer__title">
            «МЕЖРЕГИОНАЛЬНЫЙ ЦЕНТР ЭКСПЕРТИЗЫ И СЕРТИФИКАЦИИ»
          </h3>
          <p class="footer__text footer__text--desk">
            ИНН: 7806408197 ОГРН: 1097847084510 от 24 марта 2009 г.
          </p>
          <p class="footer__text footer__text--mobile">ИНН: 7806408197</p>
          <p class="footer__text footer__text--mobile">ОГРН: 1097847084510</p>
        </div>
      </div>
    </div>
    <p class="footer__bottom footer__text">OOO «МЦЭиС» 2023</p>
  </section>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped lang="scss">
.footer {
  width: 100%;
  background-color: var(--violet);
  padding: 10px 20px;
  &__container {
    display: flex;
    justify-content: space-around;
    width: 100%;
    @media only screen and (max-width: $xl) {
      justify-content: flex-end;
    }
  }
  &__img-wrapper {
    height: 100px;
    width: auto;
    padding-right: 10px;
    @media only screen and (max-width: $lg) {
      height: 80px;
    }
    @media only screen and (max-width: $md) {
      padding-right: 5px;
      height: 80px;
    }
    @media only screen and (max-width: $sm) {
      display: none;
    }
  }
  &__text {
    color: var(--white);
    margin-bottom: 0;
    font-weight: 200;
    white-space: nowrap;
    @media only screen and (max-width: $sm) {
      margin-bottom: 5px;
    }
    &--desk {
      @media only screen and (max-width: $sm) {
        display: none;
      }
    }
    &--mobile {
      display: none;
      @media only screen and (max-width: $sm) {
        display: block;
      }
    }
  }
  &__info-wrapper {
    text-align: end;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media only screen and (max-width: $sm) {
      text-align: start;
    }
  }
  &__title {
    margin-bottom: 0;
    font-family: "Roboto";
    color: var(--white);
    font-style: italic;
    @media only screen and (max-width: $lg) {
      font-size: 18px;
    }
    @media only screen and (max-width: $md) {
      font-size: 14px;
    }
    @media only screen and (max-width: $sm) {
      margin-bottom: 5px;
    }
  }
  &__bottom {
    text-align: center;
    position: relative;
    padding-top: 10px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 600;
    color: var(--white);
    @media only screen and (max-width: $md) {
      font-weight: normal;
      font-size: 12px;
    }
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      width: 100vw;
      top: 0;
      left: 0;
      background-color: var(--gray-pail);
      transform: translate(-20px, 5px);
    }
  }
}
</style>
