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
          <div class="header__btn-wrapper">
            <LongButton name="Оставить заявку" @onClick="showModal = true" />
          </div>
        </div>
      </div>
    </div>
    <BaseModal v-if="showModal" @closeModal="showModal = false"
      ><RequestModalForm
    /></BaseModal>
  </div>
</template>

<script>
import RoundLink from "@/ui/RoundLink";
import LongButton from "@/ui/LongButton";
import BaseModal from "@/shared/BaseModal.vue";
import RequestModalForm from "@/shared/RequestModalForm.vue";
export default {
  name: "HeaderComponent",
  components: { RoundLink, LongButton, BaseModal, RequestModalForm },
  data() {
    return {
      showModal: false,
    };
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
    width: 100%;
    @media only screen and (max-width: $sm) {
      display: inline-block;
    }
  }
  &__img-wrapper {
    height: 70px;
    width: auto;
    padding-top: 5px;
    padding-right: 10px;
    @media only screen and (max-width: $md) {
      height: 50px;
    }
  }
  &__contacts {
    display: flex;
    align-items: center;
    margin-left: auto;
    justify-content: space-between;
    @media only screen and (max-width: $md) {
      justify-content: flex-end;
    }
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
    color: var(--gray-dark);
    margin-left: 20px;
    margin-right: 20px;
    &:hover,
    &:active {
      color: var(--black);
    }
    @media only screen and (max-width: $lg) {
      font-size: 18px;
    }
    @media only screen and (max-width: $md) {
      font-weight: 600;
      font-size: 16px;
      margin: 0;
    }
  }
  &__btn-wrapper {
    @media only screen and (max-width: $md) {
      display: none;
    }
  }
}
</style>
