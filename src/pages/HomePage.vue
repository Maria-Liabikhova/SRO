<template>
  <div>
    <HeaderComponent />
    <RegisterSection />
    <ServicesSection />
    <ConsultationSection />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import RegisterSection from "@/components/RegisterSection.vue";
import ServicesSection from "@/components/ServicesSection.vue";
import ConsultationSection from "@/components/ConsultationSection.vue";
export default {
  name: "HomePage",
  components: {
    HeaderComponent,
    RegisterSection,
    ServicesSection,
    ConsultationSection,
  },
};
</script>

<style scoped lang="scss"></style>
