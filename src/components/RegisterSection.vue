<template>
  <section class="register">
    <div class="common__container">
      <div class="register__container">
        <div class="register__info">
          <h2 class="register__title common__h2">
            Вступить в СРО в России.<br />
            Оформление допуска СРО.
          </h2>
          <p class="register__text">
            Оформление полного пакета документов, необходимого для вступления;
            специалисты НРС; получение выписки.
          </p>
          <div class="register__button-wrapper">
            <LongButton
              name="Запросить стоимость вступления СРО"
              @onClick="onAskPriceClick"
            />
          </div>
        </div>
        <div class="register__img-wrapper"></div>
      </div>
    </div>
    <div class="common__container advantages__container">
      <div class="advantages">
        <div
          v-for="item in advantages"
          :key="item.text"
          class="advantages__item"
        >
          <img :src="item.icon" class="advantages__icon" />
          <p class="advantages__text">{{ item.text }}</p>
        </div>
      </div>
    </div>
    <BaseModal
      v-if="showSroModal"
      @closeModal="SET_SRO_MODAL(false)"
      :green="true"
      ><RequestModalForm
        requestModalTitle="Какое СРО Вам необходимо?"
        :requestModalItems="requestModalItems"
    /></BaseModal>
  </section>
</template>

<script>
import LongButton from "@/ui/LongButton";
import BaseModal from "@/ui/BaseModal.vue";
import RequestModalForm from "@/shared/RequestModalForm.vue";
import { mapMutations, mapState } from "vuex";
export default {
  name: "RegisterSection",
  components: { LongButton, BaseModal, RequestModalForm },
  data() {
    return {
      advantages: [
        {
          text: "Работаем со СРО, имеющими статус с 2009 года и прошедшими все проверки Ростехнадзора",
          icon: require("@/assets/img/scale.svg"),
        },
        {
          text: "Никаких скрытых платежей за «проверки»",
          icon: require("@/assets/img/dollar.svg"),
        },
        {
          text: "Все средства оплачиваются напрямую в СРО",
          icon: require("@/assets/img/arrow-left-right.svg"),
        },
        {
          text: "Включение в Реестр членов СРО и предоставление выписки «день в день»",
          icon: require("@/assets/img/calendar-day.svg"),
        },
        {
          text: "Помощь в подготовке документов, в т.ч. и на специалистов, включённых в Национальный реестр",
          icon: require("@/assets/img/handshake.svg"),
        },
      ],
      requestModalItems: [
        {
          value: false,
          labelName: "Строительное СРО",
          id: 1,
        },
        {
          value: false,
          labelName: "СРО проектировщиков",
          id: 2,
        },
      ],
    };
  },
  computed: {
    ...mapState("requestModal", ["showSroModal"]),
  },
  methods: {
    ...mapMutations("requestModal", ["SET_SRO_MODAL"]),
    onAskPriceClick() {
      this.SET_SRO_MODAL(true);
    },
  },
};
</script>

<style scoped lang="scss">
$offset-lg: 30px;
.register {
  width: 100%;
  margin-top: 70px; //header height
  background-color: var(--white);
  @media only screen and (max-width: $md) {
    margin-top: 95px; //header height
  }
  &__container {
    background-color: var(--light-blue);
    display: flex;
    border-radius: 25px;
    height: auto;
    padding: $offset-lg 60px;
    @media only screen and (max-width: $lg) {
      padding: $offset-lg;
    }
    @media only screen and (max-width: $sm) {
      padding-top: 10px;
    }
  }
  &__info {
    margin-right: 100px;
    flex: 1;
    @media only screen and (max-width: $lg) {
      margin-right: 70px;
    }
    @media only screen and (max-width: $md) {
      margin-right: 30px;
    }
    @media only screen and (max-width: $sm) {
      margin-right: 10px;
    }
  }
  &__title {
    margin-bottom: 10px;
    @media only screen and (max-width: $sm) {
      margin-top: 15px;
    }
  }
  &__text {
    line-height: 34px;
    margin-bottom: 50px;
    width: 100%;
    max-width: 350px;
    @media only screen and (max-width: $lg) {
      line-height: 25px;
    }
    @media only screen and (max-width: $md) {
      line-height: 20px;
      width: 100%;
      max-width: 180px;
      padding-top: 10px;
      margin-bottom: 25px;
    }
    @media only screen and (max-width: $sm) {
      width: 100%;
      max-width: 150px;
      line-height: 20px;
      margin-right: 10px;
      padding-top: 10px;
    }
  }
  &__img-wrapper {
    background-image: url(@/assets/img/yellow.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    flex: 1;
    overflow: hidden;
    position: relative;
  }
  &__button-wrapper {
    margin-bottom: 50px;
    @media only screen and (max-width: $md) {
      margin-bottom: 25px;
    }
  }
}
.advantages {
  background-color: var(--white);
  box-shadow: $box-shadow;
  display: flex;
  width: 100%;
  border-radius: 4px;
  padding: 25px;
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  transform: translateY(-$offset-lg);
  @media only screen and (max-width: $lg) {
    padding: 10px;
    max-width: 800px;
  }
  @media only screen and (max-width: $md) {
    padding: 5px;
    padding-top: 10px;
    max-width: 550px;
  }
  @media only screen and (max-width: $sm) {
    max-width: 100%;
    padding: 0;
    display: inline-block;
    background-color: transparent;
    box-shadow: none;
  }
  &__container {
    padding-right: 50px;
    padding-left: 50px;
    @media only screen and (max-width: $md) {
      padding-right: 25px;
      padding-left: 25px;
    }
  }
  &__item {
    padding: 10px 14px;
    flex: 1;
    box-sizing: content-box;
    position: relative;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: $lg) {
      padding: 5px 10px;
    }
    @media only screen and (max-width: $md) {
      padding: 5px;
    }
    @media only screen and (max-width: $sm) {
      min-width: 120px;
      padding: 15px 5px;
      border: 0.1px solid var(--light-blue);
      border-radius: 4px;
      background-color: var(--white);
      margin-bottom: 5px;
      box-shadow: $box-shadow;
    }
    &::after {
      content: "";
      position: absolute;
      width: 0.5px;
      height: 210px;
      background-color: var(--gray-dark);
      opacity: 0.2;
      top: 50%;
      right: 0;
      transform: translate(0, -50%);
      @media only screen and (max-width: $lg) {
        height: 200px;
      }
      @media only screen and (max-width: $md) {
        height: 130px;
      }
      @media only screen and (max-width: $sm) {
        width: 0px;
      }
    }
    &:last-child {
      &::after {
        width: 0px;
      }
    }
  }
  &__icon {
    height: 25px;
    width: auto;
    margin-bottom: 25px;
    @media only screen and (max-width: $lg) {
      margin-bottom: 15px;
    }
    @media only screen and (max-width: $md) {
      margin-bottom: 10px;
      height: 18px;
    }
  }
  &__text {
    text-align: center;
    margin: 0;
  }
}
</style>
