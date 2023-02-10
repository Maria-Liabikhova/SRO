<template>
  <section class="reviews common__container-wrapper">
    <div class="common__container">
      <h2 class="common__h2 reviews__h2">
        Благодарности <br />от наших клиентов
      </h2>
      <swiper
        :slides-per-view="1"
        :space-between="50"
        :pagination="true"
        :navigation="true"
        :loop="true"
        :speed="1400"
        class="reviews__swiper-wrapper"
      >
        <swiper-slide
          v-for="item in slides"
          :key="item.id"
          class="reviews__swiper"
        >
          <div class="reviews__text-content">
            <h4 class="common__h4 reviews__h4">{{ item.reviewerName }}</h4>
            <p class="common__text--italic">{{ item.text }}</p>
          </div>
          <div class="reviews__img-wrapper">
            <img
              :src="require(`@/assets/img/reviews/${item.id}.jpg`)"
              class="reviews__img"
              :class="{ 'reviews__img--down': item.id % 2 == 0 }"
            />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";
import { Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, Pagination]);
import "swiper/swiper-bundle.css";
export default {
  name: "ReviewsSection",
  components: { Swiper, SwiperSlide },
  data() {
    return {
      slides: [
        {
          id: 4,
          reviewerName:
            "ФГБОУ ВПО Санкт-Петербургский университет ГПС МЧС России",
          text: "«В период работы эксперты-аудиторы центра по сертификации проявили себя квалифицированными и грамотными специалистами. Все аботы по сертификации были проведены в срок, согласно заключенным договорам. Разъяснения и консультации, полученные в ходе работы, экспертов-аудиторов имеют высокое практическое значение»",
        },
        {
          id: 1,
          reviewerName: "ООО «ГАЗПРОМНЕФТЬ БИЗНЕС-СЕРВИС»",
          text: "«Работа специалистов компании ООО «Межрегиональный центр экспертизы и сертификации» заслуживает положительной оценки»",
        },
        {
          id: 2,
          reviewerName: "ООО «Строительная компания «КорпусСтрой»",
          text: "«Специалисты и эксперты органа по сертификации - 000 «Межрегиональный центр экспертизы и сертификации» (ООО «МЦЭиС») провели весь необходимый комплекс мероприятий по оценке, действующей на предприятии системы менеджмента качества в соответствии с требованиями стандартов и условиями договора. Считаем что проделанная работа ООО «МЦЭиС» заслуживает высокой оценки",
        },
        {
          id: 3,
          reviewerName: "Муниципальное унитарное предприятие «Форт»",
          text: "«Работа специалистов компании ООО «Межрегиональный центр экспертизы и сертификации» заслуживает самой высокой оценки»",
        },
      ],
    };
  },
};
</script>
<!-- check and clean this code -->
<style scoped lang="scss">
.reviews {
  background-color: var(--light-blue);
  &__h2 {
    margin-bottom: 50px;
    @media only screen and (max-width: $lg) {
      margin-bottom: 30px;
    }
  }
  &__h4 {
    margin-bottom: 30px;
    @media only screen and (max-width: $lg) {
      margin-bottom: 25px;
    }
  }
  &__swiper {
    display: flex;
    @media only screen and (max-width: $sm) {
      position: relative;
      &::after {
        content: url(@/assets/img/yellow.png);
        position: absolute;
        opacity: 0.2;
        top: 10%;
        left: 50%;
        transform: translate(-50%, 0);
      }
    }
  }
  &__text-content {
    flex: 1;
    @media only screen and (max-width: $md) {
      margin-bottom: 30px;
    }
  }
  &__img {
    border-radius: 4px;
    margin-left: 100px;
    transform: rotate(-5deg);
    border: 2px solid var(--light-blue);
    @media only screen and (max-width: $md) {
      transform: rotate(0deg);
    }
    &--down {
      transform: rotate(5deg);
      @media only screen and (max-width: $md) {
        transform: rotate(0deg);
      }
    }
    @media only screen and (max-width: $lg) {
      margin-left: 50px;
    }
    @media only screen and (max-width: $md) {
      margin-left: 0;
    }
  }
  &__img-wrapper {
    display: flex;
    margin-top: 20px;
    flex: 1;
    justify-content: flex-start;
    height: 320px;
    margin-bottom: 90px;
    background-image: url(@/assets/img/yellow.png);
    background-repeat: no-repeat;
    background-size: contain;
    @media only screen and (max-width: $md) {
      height: 200px;
      margin-top: 0px;
      margin-bottom: 50px;
      justify-content: center;
    }
    @media only screen and (max-width: $sm) {
      display: none;
    }
  }
}
</style>
