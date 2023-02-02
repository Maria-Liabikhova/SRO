<template>
  <div>
    <HeaderComponent />
    <RegisterSection />
    <ServicesSection />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import RegisterSection from "@/components/RegisterSection.vue";
import ServicesSection from "@/components/ServicesSection.vue";
export default {
  name: "HomePage",
  components: { HeaderComponent, RegisterSection, ServicesSection },
};
</script>

<style scoped lang="scss"></style>
