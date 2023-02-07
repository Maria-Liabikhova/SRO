<template>
  <div>
    <div v-if="!showPolicyModal && !showResultModal" class="service-modal">
      <h2 class="common__h2 service-modal__title">{{ requestModalTitle }}</h2>
      <h3 class="service-modal__h3">
        Оставьте номер, чтобы получить персональное коммерческое предложение
      </h3>
      <form
        ref="form"
        @submit.prevent="onSendPhone"
        class="service-modal__form"
      >
        <SharedInputs
          :phoneInput="true"
          @onFieldBlur="setFieldValidation"
          class="service-modal__phone-input"
        />
        <input
          name="service"
          style="display: none"
          :value="requestModalTitle"
        />
        <LongButton
          class="service-modal__button"
          name="Получить КП"
          type="submit"
        />
      </form>
      <AgreementText @onClick="onShowPolicyModal" />
    </div>
    <BaseModal v-if="showPolicyModal" @closeModal="showPolicyModal = false"
      ><PrivacyPolicyModalForm
    /></BaseModal>
    <p
      v-if="showResultModal"
      class="common__request-result common__text--italic"
      v-html="resultInfo"
    ></p>
  </div>
</template>

<script>
import LongButton from "@/ui/LongButton.vue";
import PrivacyPolicyModalForm from "@/shared/PrivacyPolicyModalForm.vue";
import BaseModal from "@/ui/BaseModal.vue";
import AgreementText from "@/shared/AgreementText.vue";
import SharedInputs from "@/shared/SharedInputs.vue";
import send from "@/mixins/sendFormToEmail";
import { mapMutations } from "vuex";
export default {
  name: "ServiceModalForm",
  components: {
    LongButton,
    PrivacyPolicyModalForm,
    BaseModal,
    AgreementText,
    SharedInputs,
  },
  props: {
    requestModalTitle: {
      type: String,
      require: true,
    },
  },
  mixins: [send],
  methods: {
    ...mapMutations("requestModal", ["SET_SERVICE_MODAL"]),
    showResultContent() {
      this.showResultModal = true;
      setTimeout(() => {
        this.SET_SERVICE_MODAL(false);
        this.showResultModal = false;
      }, 3000);
    },
    onSendPhone() {
      if (!this.contactFieldInvalid) {
        this.send(this.$refs.form);
      }
    },
    onShowPolicyModal() {
      if (!this.showResultModal) {
        this.showPolicyModal = true;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.service-modal {
  padding: 20px;
  @media only screen and (max-width: $md) {
    padding: 10px;
  }
  &__title {
    font-size: 25px;
    letter-spacing: 1px;
    line-height: 1.1;
    font-weight: 600;
    margin-bottom: 30px;
    color: var(--gray-dark);
    opacity: 0.8;
    @media only screen and (max-width: $xl) {
      font-size: 20px;
    }
  }
  &__h3 {
    margin-left: 15px;
    line-height: 1;
    font-weight: 400;
    font-style: italic;
    color: var(--gray);
    position: relative;
    margin-bottom: 30px;
    &::after {
      content: "";
      position: absolute;
      height: 100%;
      width: 3px;
      left: 0;
      bottom: 0;
      transform: translate(-15px, 0);
      background-color: var(--gray-pail);
    }
  }
  &__button {
    height: 44px;
    @media only screen and (max-width: $sm) {
      margin-bottom: 27px;
      width: 100%;
    }
  }
  &__form {
    display: flex;
    @media only screen and (max-width: $sm) {
      display: block;
    }
  }
  &__phone-input {
    margin-right: 30px;
    @media only screen and (max-width: $lg) {
      margin-right: 20px;
    }
  }
}
</style>
