<template>
  <div>
    <div class="request" v-if="!showModal">
      <h2 class="common__h2 request__title">Оставить заявку</h2>
      <UiInput type="text" class="request__input" placeholder="Ваше имя" />
      <UiInput
        type="text"
        class="request__input"
        placeholder="Ваш телефон"
        mask="+7(9##) ###-##-##"
      />
      <div class="request__action-wrap">
        <SquareButton name="Отправить" class="request__button" />
        <p class="request__text">
          <img src="@/assets/img/check-box.svg" class="request__icon" />
          Соглашаюсь с
          <span class="request__agreement" @click="showModal = true"
            >политикой конфиденциальности </span
          >и даю согласие на обработку персональных данных
        </p>
      </div>
    </div>
    <BaseModal v-if="showModal" @closeModal="showModal = false"
      ><PrivacyPolicyModalForm
    /></BaseModal>
  </div>
</template>

<script>
import UiInput from "@/ui/UiInput.vue";
import SquareButton from "@/ui/SquareButton.vue";
import PrivacyPolicyModalForm from "@/shared/PrivacyPolicyModalForm.vue";
import BaseModal from "@/shared/BaseModal.vue";
export default {
  name: "RequestModalForm",
  components: { UiInput, SquareButton, PrivacyPolicyModalForm, BaseModal },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.request {
  @media only screen and (max-width: $md) {
    padding: 10px;
  }
  &__title {
    padding-top: 25px;
    text-align: center;
    margin-bottom: 30px;
    @media only screen and (max-width: $md) {
      margin-bottom: 35px;
      padding-top: 5px;
      font-size: 28px;
    }
    @media only screen and (max-width: $sm) {
      font-size: 25px;
      line-height: 1.2;
    }
  }
  &__input {
    margin-bottom: 25px;
  }
  &__action-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    @media only screen and (max-width: $md) {
      margin-top: 20px;
      margin-bottom: 15px;
      display: inline-block;
    }
  }
  &__text {
    line-height: 1;
    margin: 0;
    @media only screen and (max-width: $md) {
      font-size: 14px;
      line-height: 1.2;
    }
  }
  &__icon {
    height: 15px;
    width: 15px;
    align-self: start;
    margin-right: 5px;
  }
  &__agreement {
    cursor: pointer;
    color: var(--gray);
    font-style: italic;
    transition: all 0.3s ease;
    &:hover {
      color: var(--gray-dark);
      transition: all 0.3s ease;
    }
  }
  &__button {
    @media only screen and (max-width: $md) {
      margin-bottom: 25px;
    }
  }
}
</style>
