<template>
  <div>
    <HeaderComponent />
    <RegisterSection />
    <ServicesSectin />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import RegisterSection from "@/components/RegisterSection.vue";
import ServicesSectin from "@/components/ServicesSectin.vue";
export default {
  name: "HomePage",
  components: { HeaderComponent, RegisterSection, ServicesSectin },
};
</script>

<style scoped lang="scss"></style>
