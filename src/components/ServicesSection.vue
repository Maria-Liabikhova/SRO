<template>
  <section class="services common__container-wrapper">
    <div class="common__container">
      <h1 class="services__title">
        МЦЭиС<br />
        оказывает <span class="services__title--yellow"> услуги </span> по всей
        России
      </h1>
      <div class="card__wrapper">
        <div
          v-for="item in servises"
          :key="item.title"
          class="card"
          @click="onCardClick(item.title)"
        >
          <div class="card__inner-wapper">
            <img :src="item.icon" class="card__img" />
            <h4 class="card__title">{{ item.title }}</h4>
          </div>
          <p class="card__price">
            <span class="services__title--yellow">От {{ item.price }} руб</span>
          </p>
        </div>
      </div>
    </div>
    <BaseModal v-if="showServiceModal" @closeModal="SET_SERVICE_MODAL(false)"
      ><ServiceModalForm :requestModalTitle="requestModalTitle"
    /></BaseModal>
  </section>
</template>

<script>
import BaseModal from "@/ui/BaseModal.vue";
import ServiceModalForm from "@/shared/ServiceModalForm.vue";
import { mapMutations, mapState } from "vuex";
export default {
  name: "ServicesSection",
  components: { BaseModal, ServiceModalForm },
  data() {
    return {
      requestModalTitle: "",
      servises: [
        {
          icon: require("@/assets/img/people.svg"),
          title: "Вступление в СРО строителей и проектировщиков",
          price: "50 000",
        },
        {
          icon: require("@/assets/img/study.svg"),
          title: "Повышение квалификации руководителей и специалистов",
          price: "2 000",
        },
        {
          icon: require("@/assets/img/check.svg"),
          title: "Внесение специалистов в НРС",
          price: "3 500",
        },
        {
          icon: require("@/assets/img/globe.svg"),
          title: "Сертификация ISO 9001",
          price: "10 000",
        },
        {
          icon: require("@/assets/img/business.svg"),
          title: "Оценка опыта и деловой репутации",
          price: "25 000",
        },
        {
          icon: require("@/assets/img/user.svg"),
          title: "Независимая оценка квалификации",
          price: "14 000",
        },
      ],
    };
  },
  computed: {
    ...mapState("requestModal", ["showServiceModal"]),
  },
  methods: {
    ...mapMutations("requestModal", ["SET_SERVICE_MODAL"]),
    onCardClick(v) {
      this.SET_SERVICE_MODAL(true);
      this.requestModalTitle = v;
    },
  },
};
</script>

<style scoped lang="scss">
.services {
  background-color: var(--violet);
  &__title {
    color: var(--white);
    font-size: 40px;
    line-height: 1.7;
    margin-bottom: 30px;
    text-align: center;
    font-style: normal;
    font-weight: 600;
    font-family: "Roboto";
    @media only screen and (max-width: $lg) {
      font-size: 32px;
    }
    @media only screen and (max-width: $md) {
      font-size: 22px;
      line-height: 35px;
    }
    @media only screen and (max-width: $sm) {
      line-height: 35px;
      margin-bottom: 20px;
      margin-top: 0;
    }
    &--yellow {
      background-color: var(--yellow);
      color: var(--gray-dark);
      padding: 0 10px 10px 10px;
      margin-right: 5px;
    }
  }
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--white);
  padding: 25px;
  transition: box-shadow 0.3s ease;
  border-radius: 4px;
  &:hover {
    box-shadow: 5px 5px 15px var(--white);
    cursor: pointer;
    transition: box-shadow 0.3s ease;
    padding: 24px;
    border: 2px solid var(--white);
  }
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 25px;
    grid-row-gap: 25px;
    @media only screen and (max-width: $md) {
      grid-template-columns: 1fr 1fr;
    }
    @media only screen and (max-width: $sm) {
      grid-template-columns: 1fr;
      grid-column-gap: 15px;
      grid-row-gap: 15px;
    }
  }
  &__img {
    height: 35px;
    width: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
  }
  &__title {
    color: var(--white);
    text-align: center;
    font-size: 20px;
    line-height: 1.2;
    font-weight: 200;
    @media only screen and (max-width: $lg) {
      font-size: 18px;
    }
  }
  &__inner-wapper {
    margin-bottom: 45px;
    @media only screen and (max-width: $md) {
      margin-bottom: 30px;
    }
  }
  &__price {
    text-align: center;
    font-weight: 600;
  }
}
</style>
