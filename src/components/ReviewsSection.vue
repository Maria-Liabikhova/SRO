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
              @click="onShowImg(item.id)"
            />
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <BaseModal
      v-if="showModal"
      :imgContent="modalImg"
      @closeModal="showModal = false"
    >
    </BaseModal>
  </section>
</template>

<script>
import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";
import { Navigation, Pagination } from "swiper";
import BaseModal from "@/ui/BaseModal.vue";
SwiperCore.use([Navigation, Pagination]);
import "swiper/swiper-bundle.css";
export default {
  name: "ReviewsSection",
  components: { Swiper, SwiperSlide, BaseModal },
  data() {
    return {
      modalImg: "",
      showModal: false,
      slides: [
        {
          id: 2,
          reviewerName:
            "ФГБОУ ВПО Санкт-Петербургский университет ГПС МЧС России",
          text: "«В период работы эксперты-аудиторы центра по сертификации проявили себя квалифицированными и грамотными специалистами. Все аботы по сертификации были проведены в срок, согласно заключенным договорам. Разъяснения и консультации, полученные в ходе работы, экспертов-аудиторов имеют высокое практическое значение»",
        },
        {
          id: 1,
          reviewerName: "ООО «ГАЗПРОМНЕФТЬ БИЗНЕС-СЕРВИС»",
          text: "«Специалисты ООО «Межрегиональный центр экспертизы и сертификации» во взаимодействии со специалистами ООО «Газпромнефть Бизнес-сервис» осуществили разработку всех необходимых документов, предусмотренных договором. При разработке документов были учтены как пожелания сотрудников ООО «Газпромнефть Бизнес-сервис» отвечающих за разработку СМК, так и требования ООО «Газпромнефть Бизнес-сервис» к созданию нормативных документов. Требуемый уровень разработанных стандартов, подтвердил при сертификационном аудите орган по сертификации Бюро Веритас.",
        },
        {
          id: 3,
          reviewerName: "ООО «Строительная компания «КорпусСтрой»",
          text: "«Специалисты и эксперты органа по сертификации - 000 «Межрегиональный центр экспертизы и сертификации» (ООО «МЦЭиС») провели весь необходимый комплекс мероприятий по оценке, действующей на предприятии системы менеджмента качества в соответствии с требованиями стандартов и условиями договора. Считаем что проделанная работа ООО «МЦЭиС» заслуживает высокой оценки",
        },
        {
          id: 4,
          reviewerName: "Муниципальное унитарное предприятие «Форт»",
          text: "«Эксперты органа по сертификации провели в установленные договором сроки все необходимые сертификационные мероприятия. МУП «Форт» были выданы сертификаты соответствия установленного образца на русском и английском языках. Работа специалистов компании ООО «Межрегиональный центр экспертизы и сертификации» заслуживает самой высокой оценки»",
        },
      ],
    };
  },
  methods: {
    onShowImg(id) {
      this.modalImg = require(`@/assets/img/reviews/${id}.jpg`);
      this.showModal = true;
    },
  },
};
</script>
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
    cursor: pointer;
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
    height: 370px;
    margin-bottom: 90px;
    background-image: url(@/assets/img/yellow.png);
    background-repeat: no-repeat;
    background-size: contain;
    @media only screen and (max-width: $xl) {
      height: 320px;
    }
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
