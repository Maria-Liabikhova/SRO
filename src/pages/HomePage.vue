<template>
  <div>
    <HeaderComponent />
    <RegisterSection />
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia harum
      enim aspernatur. Accusamus harum illo, animi excepturi ab odio vero optio,
      ipsum delectus eos suscipit exercitationem vel incidunt alias itaque.
    </p>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import RegisterSection from "@/components/RegisterSection.vue";
export default {
  name: "HomePage",
  components: { HeaderComponent, RegisterSection },
};
</script>

<style scoped lang="scss"></style>
