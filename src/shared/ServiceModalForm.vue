<template>
  <div>
    <div v-if="!showPolicyModal && !showResultModal" class="service-modal">
      <h2 class="common__h2 service-modal__title">{{ requestModalTitle }}</h2>
      <h3 class="service-modal__h3">
        Оставьте номер, чтобы получить персональное коммерческое предложение
      </h3>
      <form ref="form" @submit.prevent="onSendForm" class="service-modal__form">
        <div class="service-modal__input-container">
          <input
            type="text"
            name="user_contact"
            class="common__input service-modal__input"
            :class="{ 'service-modal__input--error': fieldError }"
            placeholder="+7(9XX) XXX-XX-XX"
            v-mask="'+7(9##) ###-##-##'"
            v-model="$v.contact.$model"
            @focus="fieldFocused = true"
            @blur="onFieldBlur"
          />
          <input
            name="service"
            style="display: none"
            :value="requestModalTitle"
          />
          <p v-if="fieldError" class="common__error-text">
            {{ getErrorText }}
          </p>
        </div>
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
      class="common__text--italic"
      @closeModal="$emit('closeModal')"
      v-html="resultInfo"
    ></p>
  </div>
</template>

<script>
import LongButton from "@/ui/LongButton.vue";
import PrivacyPolicyModalForm from "@/shared/PrivacyPolicyModalForm.vue";
import BaseModal from "@/ui/BaseModal.vue";
import AgreementText from "@/shared/AgreementText.vue";
import send from "@/mixins/sendFormToEmail";
import { mapMutations } from "vuex";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  name: "ServiceModalForm",
  components: {
    LongButton,
    PrivacyPolicyModalForm,
    BaseModal,
    AgreementText,
  },
  props: {
    requestModalTitle: {
      type: String,
      require: true,
    },
  },
  mixins: [send],
  data() {
    return {
      showPolicyModal: false,
      showResultModal: false,
      resultInfo: "",
      contact: "",
      fieldFocused: false,
    };
  },
  validations: {
    contact: {
      required,
      minLength: minLength(16),
    },
  },
  computed: {
    fieldError() {
      return (
        this.$v.contact.$dirty && this.$v.contact.$error && !this.fieldFocused
      );
    },
    getErrorText() {
      return !this.$v.contact.required
        ? "Поле обязательно для ввода"
        : `Введите корректные данные`;
    },
  },
  methods: {
    ...mapMutations("requestModal", ["SET_SERVICE_MODAL"]),
    showResultContent() {
      this.showResultModal = true;
      setTimeout(() => {
        this.SET_SERVICE_MODAL(false);
        this.showResultModal = false;
      }, 3000);
    },
    onFieldBlur() {
      this.fieldFocused = false;
      this.$v.contact.$touch();
    },
    onSendForm() {
      this.$v.contact.$touch();
      console.log(this.$refs.form);
      if (!this.fieldError) {
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
    font-size: 20px;
    letter-spacing: 1px;
    line-height: 1.1;
    font-weight: 600;
    margin-bottom: 30px;
    color: var(--gray-dark);
    opacity: 0.8;
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
  &__input {
    padding-left: 40px;
    border-radius: 4px;
    margin-bottom: 25px;
    &--error {
      margin-bottom: 0;
    }
  }
  &__button {
    height: 100%;
  }
  &__input-container {
    position: relative;
    margin-right: 30px;
    &::before {
      content: url("@/assets/img/phone-gray.svg");
      position: absolute;
      height: 20px;
      width: 20px;
      left: 0;
      bottom: 50%;
      transform: translate(50%, 50%);
    }
  }
  &__form {
    display: flex;
  }
}
</style>
