<template>
  <div>
    <div v-if="!showPolicyModal && !showResultModal" class="request">
      <h2 class="common__h2 request__title">{{ requestModalTitle }}</h2>
      <form ref="form" @submit.prevent="onSendForm">
        <div class="request__checkbox-container">
          <CheckBox
            v-for="item in requestModalItems"
            :key="item.name"
            class="request__checkbox-wrapper"
            :label-name="item.labelName"
            :name="item.name"
            :value="item.value"
            @onInput="onCheckBoxInput(item)"
          />
        </div>
        <RequestModalInputs @onFieldBlur="onFieldBlur" />
        <div class="request__action-wrap">
          <SquareButton
            name="Отправить"
            class="request__button"
            type="submit"
          />
          <AgreementText @onClick="onShowPolicyModal" />
        </div>
      </form>
    </div>
    <BaseModal v-if="showPolicyModal" @closeModal="showPolicyModal = false"
      ><PrivacyPolicyModalForm
    /></BaseModal>
    <p
      v-if="showResultModal"
      class="request-result common__text--italic"
      @closeModal="$emit('closeModal')"
      v-html="resultInfo"
    ></p>
  </div>
</template>

<script>
import SquareButton from "@/ui/SquareButton.vue";
import CheckBox from "@/ui/CheckBox.vue";
import PrivacyPolicyModalForm from "@/shared/PrivacyPolicyModalForm.vue";
import BaseModal from "@/ui/BaseModal.vue";
import AgreementText from "@/shared/AgreementText.vue";
import RequestModalInputs from "@/shared/RequestModalInputs.vue";
import emailjs from "@emailjs/browser";
import { mapMutations } from "vuex";
export default {
  name: "RequestModalForm",
  components: {
    SquareButton,
    PrivacyPolicyModalForm,
    BaseModal,
    AgreementText,
    RequestModalInputs,
    CheckBox,
  },
  props: {
    requestModalTitle: {
      type: String,
      required: true,
    },
    requestModalItems: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      showPolicyModal: false,
      showResultModal: false,
      fieldsInvalid: true,
      resultInfo: "",
    };
  },
  methods: {
    ...mapMutations("requestModal", ["SET_REQUEST_MODAL"]),
    onCheckBoxInput(v) {
      !v.value ? (v.value = `${v.labelName};`) : false;
    },
    showResultContent() {
      this.showResultModal = true;
      setTimeout(() => {
        this.SET_REQUEST_MODAL(false);
        this.showResultModal = false;
      }, 3000);
    },
    onFieldBlur(v) {
      this.fieldsInvalid = v;
    },
    onSendForm() {
      if (!this.fieldsInvalid) {
        emailjs
          .sendForm(
            "service_eiz3obr",
            "template_a7rgl9u",
            this.$refs.form,
            "9F9dhwN-jlGAQ5Ix6"
          )
          .then(
            /* eslint-disable */
            (result) => {
              /* eslint-enable */
              this.resultInfo = "Спасибо, ваша заявка отправлена.";
              this.showResultContent();
            },
            /* eslint-disable */
            (error) => {
              /* eslint-enable */
              this.resultInfo = `Что-то пошло не так. <br/> Повторите попытку позже.`;
              this.showResultContent();
            }
          );
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
.request {
  @media only screen and (max-width: $md) {
    padding: 10px;
  }
  &__checkbox-wrapper {
    margin-bottom: 10px;
  }
  &__checkbox-container {
    margin-bottom: 30px;
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
  &__action-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
    @media only screen and (max-width: $md) {
      padding-top: 20px;
      margin-bottom: 15px;
      display: inline-block;
    }
  }
  &__button {
    @media only screen and (max-width: $md) {
      margin-bottom: 25px;
    }
  }
}
.request-result {
  text-align: center;
  padding: 20px 50px;
  font-size: 20px;
  @media only screen and (max-width: $lg) {
    padding: 10px 25px;
    font-size: 16px;
  }
  @media only screen and (max-width: $sm) {
    padding: 5px 5px;
    font-size: 14px;
  }
}
</style>
