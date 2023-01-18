<template>
  <section class="register">
    <div class="common__container">
      <div class="register__container">
        <div class="register__info">
          <h2 class="register__title">
            Вступить в СРО в России.<br />
            Оформление допуска СРО.
          </h2>
          <p class="register__text">
            Оформление полного пакета документов, необходимого для вступления;
            специалисты НРС; получение выписки.
          </p>
          <div class="register__button-wrapper">
            <LongButton name="Запросить стоимость СРО" />
          </div>
        </div>
        <div class="register__img-wrapper"></div>
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
    </div>
  </section>
</template>

<script>
import LongButton from "@/ui/LongButton";
export default {
  name: "RegisterSection",
  components: { LongButton },
  data() {
    return {
      advantages: [
        {
          text: "Работаем с СРО, имеющими статус с 2009 года и прошедшими все проверки Ростехнадзора",
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
    };
  },
};
</script>

<style scoped lang="scss">
$section-advantages-height-xl: 320px;
$section-advantages-height-lg: 260px;
$section-advantages-height-md: 200px;
$section-advantages-height-sm: 300px;
.register {
  width: 100%;
  margin-top: 90px; //header height
  background-color: var(--white);
  margin-bottom: calc($section-advantages-height-xl - 20px);
  @media only screen and (max-width: $lg) {
    margin-bottom: calc($section-advantages-height-lg);
  }
  @media only screen and (max-width: $md) {
    margin-bottom: calc($section-advantages-height-md);
  }
  @media only screen and (max-width: $sm) {
    margin-bottom: calc($section-advantages-height-sm);
  }
  &__container {
    background-color: var(--light-blue);
    display: flex;
    border-radius: 25px;
    height: auto;
    padding: 30px 60px;
    position: relative;
  }
  &__info {
    margin-right: 100px;
    flex: 1;
  }
  &__title {
    font-family: "Peta";
    text-transform: uppercase;
    font-size: 38px;
    letter-spacing: -2px;
    line-height: 50px;
    margin-bottom: 10px;
    @media only screen and (max-width: $md) {
      letter-spacing: 0.4px;
      font-size: 20px;
      line-height: 25px;
    }
    @media only screen and (max-width: $sm) {
      line-height: 22px;
      font-size: 18px;
      margin-top: 25px;
    }
  }
  &__text {
    line-height: 34px;
    font-size: 20px;
    line-height: 34px;
    margin-bottom: 50px;
    @media only screen and (max-width: $xl) {
      width: 100%;
      max-width: 350px;
    }
    @media only screen and (max-width: $md) {
      font-size: 14px;
      line-height: 20px;
      font-size: 16px;
      width: 100%;
      max-width: 180px;
      padding-top: 10px;
      margin-bottom: 25px;
    }
    @media only screen and (max-width: $sm) {
      font-size: 12px;
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
  position: absolute;
  height: $section-advantages-height-xl;
  overflow-y: scroll;
  background-color: var(--white);
  box-shadow: $box-shadow;
  display: flex;
  width: calc(100% - 100px);
  left: 50%;
  bottom: -50%;
  transform: translate(-50%, 25px);
  border-radius: 4px;
  padding: 25px;
  @media only screen and (max-width: $lg) {
    width: 100%;
    padding: 10px;
    transform: translate(-50%, -25%);
    height: $section-advantages-height-lg;
  }
  @media only screen and (max-width: $md) {
    padding: 5px;
    padding-top: 10px;
    font-size: 12px;
    transform: translate(-50%, 0);
    height: $section-advantages-height-md;
  }
  @media only screen and (max-width: $sm) {
    flex-wrap: wrap;
    transform: translate(-50%, 100px);
    height: $section-advantages-height-sm;
  }

  &__item {
    padding: 25px;
    flex: 1;
    box-sizing: content-box;
    position: relative;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: $lg) {
      padding: 10px;
    }
    @media only screen and (max-width: $md) {
      padding: 5px;
    }
    @media only screen and (max-width: $sm) {
      min-width: 120px;
    }
    &::after {
      content: "";
      position: absolute;
      width: 0.5px;
      background-color: var(--gray);
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
