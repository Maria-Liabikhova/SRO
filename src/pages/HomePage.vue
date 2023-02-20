<template>
  <div>
    <HeaderComponent />
    <RegisterSection />
    <ServicesSection />
    <ConsultationSection />
    <ReviewsSection />
    <MapComponent />
    <FooterComponent />
    <button
      v-if="scrollTopBtnVisible"
      class="common__button round-button"
      @click="scrollTop"
    >
      <img
        class="common__img round-button__icon"
        src="@/assets/img/arrow-up.svg"
      />
    </button>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import RegisterSection from "@/components/RegisterSection.vue";
import ServicesSection from "@/components/ServicesSection.vue";
import ConsultationSection from "@/components/ConsultationSection.vue";
import ReviewsSection from "@/components/ReviewsSection.vue";
import MapComponent from "@/components/MapComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  name: "HomePage",
  components: {
    HeaderComponent,
    RegisterSection,
    ServicesSection,
    ConsultationSection,
    ReviewsSection,
    MapComponent,
    FooterComponent,
  },
  data() {
    return {
      scrollHeight: 0,
    };
  },
  computed: {
    scrollTopBtnVisible() {
      return this.scrollHeight - document.documentElement.clientHeight > 0;
    },
  },
  methods: {
    scrollTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    setScrollHeight() {
      this.scrollHeight = document.documentElement.scrollTop;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.setScrollHeight);
  },
  destroyed() {
    window.removeEventListener("scroll", this.setScrollHeight);
  },
};
</script>

<style scoped lang="scss">
.round-button {
  position: sticky;
  bottom: 50px;
  margin-left: 30px;
  margin-top: -70px;
  background: linear-gradient(45deg, var(--light-green) 0%, var(--yellow) 100%);
  display: flex;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  opacity: 0.8;
  z-index: 2;
  @media only screen and (max-width: $lg) {
    width: 60px;
    height: 60px;
    margin-top: -60px;
    margin-left: 25px;
  }
  @media only screen and (max-width: $md) {
    width: 50px;
    height: 50px;
    margin-top: -50px;
    margin-left: auto;
    margin-right: 25px;
    bottom: 5px;
  }
  @media only screen and (max-width: $sm) {
    bottom: 25px;
  }
  &__icon {
    height: 40px;
    width: auto;
    @media only screen and (max-width: $md) {
      height: 25px;
    }
  }
  &:hover {
    transition: all 0.3s ease;
    opacity: 1;
    box-shadow: 5px 5px 15px var(--violet-light);
  }
}
</style>
