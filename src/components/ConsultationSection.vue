<template>
  <section class="consultation common__container-wrapper">
    <div class="common__container consultation__container">
      <ImgContent class="consultation__img" />
      <div class="consultation__info">
        <h3 class="common__h3">Получите бесплатную консультацию специалиста</h3>
        <h4 class="common__h4 consultation__h4">
          Оставьте заявку, и наш специалист свяжется в ближайшее время
        </h4>
        <form ref="form" @submit.prevent="onSendForm">
          <div class="consultation__inputs-wrapper">
            <SharedInputs
              :nameInput="true"
              :white="true"
              :small="true"
              class="consultation__input consultation__input--name"
              @onFieldBlur="setFieldValidation"
            />
            <SharedInputs
              :phoneInput="true"
              :small="true"
              :white="true"
              class="consultation__input consultation__input--phone"
              @onFieldBlur="setFieldValidation"
            />
          </div>
          <AgreementText
            @onClick="showPolicyModal = true"
            class="consultation__agreement-text"
          />
          <SquareButton name="Оставить заявку" type="submit" :yellow="true" />
        </form>
      </div>
    </div>
    <BaseModal v-if="showPolicyModal" @closeModal="showPolicyModal = false"
      ><PrivacyPolicyModalForm
    /></BaseModal>
    <BaseModal
      v-if="showPolicyModal && !showResultModal"
      @closeModal="showPolicyModal = false"
      ><PrivacyPolicyModalForm
    /></BaseModal>
    <BaseModal
      v-if="showResultModal && !showPolicyModal"
      @closeModal="showResultModal = false"
    >
      <p
        class="common__request-result common__text--italic"
        v-html="resultInfo"
      ></p
    ></BaseModal>
  </section>
</template>

<script>
import ImgContent from "@/shared/ImgContent.vue";
import SharedInputs from "@/shared/SharedInputs.vue";
import SquareButton from "@/ui/SquareButton.vue";
import BaseModal from "@/ui/BaseModal.vue";
import AgreementText from "@/shared/AgreementText.vue";
import PrivacyPolicyModalForm from "@/shared/PrivacyPolicyModalForm.vue";
import send from "@/mixins/sendFormToEmail";
import { mapMutations } from "vuex";
export default {
  name: "ConsultationSection",
  components: {
    ImgContent,
    SharedInputs,
    SquareButton,
    AgreementText,
    BaseModal,
    PrivacyPolicyModalForm,
  },
  mixins: [send],
  methods: {
    ...mapMutations("sharedComponents", ["SET_CLEAR_INPUT"]),
    showResultContent() {
      this.SET_CLEAR_INPUT(true);
      this.showResultModal = true;
      setTimeout(() => {
        this.showResultModal = false;
        this.SET_CLEAR_INPUT(false);
      }, 3000);
    },
  },
};
</script>

<style scoped lang="scss">
.consultation {
  background-color: var(--turquoise);
  &__container {
    display: flex;
  }
  &__h4 {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  &__info {
    margin-left: 50px;
    flex: 2;
    @media only screen and (max-width: $xl) {
      margin-left: 20px;
    }
  }
  &__inputs-wrapper {
    display: flex;
    @media only screen and (max-width: $sm) {
      flex-direction: column;
      flex-wrap: wrap;
    }
  }
  &__input {
    &--name {
      flex: 1;
      margin-right: 60px;
      @media only screen and (max-width: $lg) {
        margin-right: 10px;
      }
      @media only screen and (max-width: $md) {
        margin-right: 20px;
      }
      @media only screen and (max-width: $sm) {
        margin-right: 0px;
      }
    }
  }
  &__img {
    transform: rotate(-40deg);
    @media only screen and (max-width: $md) {
      display: none;
    }
  }
  &__agreement-text {
    margin-bottom: 30px;
  }
}
</style>
