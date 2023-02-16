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
            <RoundLink
              class="header__icon"
              :img="require('@/assets/img/phone.svg')"
              linkTo="tel:+79219610320"
            />
          </div>
          <a href="tel:+79219629381" class="common__link header__link">
            8(812)962-93-81</a
          >

          <LongButton
            name="Оставить заявку"
            @onClick="SET_REQUEST_MODAL(true)"
          />
        </div>
      </div>
    </div>
    <BaseModal v-if="showRequestModal" @closeModal="SET_REQUEST_MODAL(false)"
      ><RequestModalForm
        requestModalTitle="Оставить заявку"
        :requestModalItems="requestModalItems"
    /></BaseModal>
  </div>
</template>

<script>
import RoundLink from "@/ui/RoundLink";
import LongButton from "@/ui/LongButton";
import BaseModal from "@/ui/BaseModal.vue";
import RequestModalForm from "@/shared/RequestModalForm.vue";
import { mapMutations, mapState } from "vuex";
export default {
  name: "HeaderComponent",
  components: { RoundLink, LongButton, BaseModal, RequestModalForm },
  data() {
    return {
      requestModalItems: [
        {
          value: false,
          labelName: "Вступление в СРО",
          id: 1,
        },
        {
          value: false,
          labelName: "Внесение специалистов в НРС",
          id: 2,
        },
        {
          value: false,
          labelName: "Повышение квалификации руководителей и специалистов",
          id: 3,
        },
        {
          value: false,
          labelName: "Сертификация ISO 9001",
          id: 4,
        },
        {
          value: false,
          labelName: "Оценка опыта и деловой репутации",
          id: 5,
        },
        {
          value: false,
          labelName: "Независимая оценка квалификации",
          id: 6,
        },
        {
          value: false,
          labelName: "Другое",
          id: 7,
        },
      ],
    };
  },
  computed: {
    ...mapState("requestModal", ["showRequestModal"]),
  },
  methods: {
    ...mapMutations("requestModal", ["SET_REQUEST_MODAL"]),
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
  z-index: 999;
  &__container {
    display: flex;
    width: 100%;
    @media only screen and (max-width: $md) {
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
      justify-content: space-around;
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
      margin-left: 0;
      margin-right: 10px;
    }
    @media only screen and (max-width: $sm) {
      display: none;
    }
  }
  &__icon {
    display: none;
    @media only screen and (max-width: $sm) {
      display: flex;
    }
  }
}
</style>
