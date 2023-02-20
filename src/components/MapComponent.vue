<template>
  <section class="map-section">
    <div class="contacts">
      <h2 class="common__h2">Контакты</h2>
      <p>Адрес: 190103, город Санкт-Петербург, Дровяная ул., д.6/26 литер а</p>
      <p>Почта: rusexpertiza@yandex.ru</p>
      <p class="contacts__last-text">8(812)962-93-81</p>
    </div>
    <yandex-map
      :coords="coords"
      :scroll-zoom="false"
      zoom="14"
      class="map-section__map"
    >
      <ymap-marker
        :coords="coords"
        marker-id="123"
        hint-content="Межрегиональный центр экспертизы и сертификации"
      />
    </yandex-map>
  </section>
</template>
<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";
export default {
  name: "MapComponent",
  components: { yandexMap, ymapMarker },
  data() {
    return {
      coords: [59.912328, 30.292862],
    };
  },
};
</script>
<style scoped lang="scss">
.map-section {
  position: relative;
  &__map {
    width: 100vw;
    height: 600px;
    @media only screen and (max-width: $lg) {
      height: 400px;
    }
    @media only screen and (max-width: $md) {
      height: 300px;
    }
  }
}
.contacts {
  position: absolute;
  background-color: var(--white);
  padding: 50px 40px;
  border-radius: 20px;
  box-shadow: 4px 4px 8px -1px var(--gray);
  bottom: 50%;
  right: 50%;
  transform: translate(-30%, 20%);
  max-width: 30vw;
  z-index: 2;
  @media only screen and (max-width: $lg) {
    transform: translate(-20%, 20%);
    max-width: 35vw;
    padding: 20px;
  }
  @media only screen and (max-width: $md) {
    position: relative;
    width: 100%;
    top: 0;
    left: 0;
    transform: translate(0, 0);
    box-shadow: none;
    border-radius: none;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
    padding-right: 10px;
    @media only screen and (max-width: $sm) {
      max-width: 450px;
    }
    @media only screen and (max-width: $xs) {
      max-width: 100%;
    }
  }
  &__text {
    margin-bottom: 5px;
  }
  &__last-text {
    margin-bottom: 0;
  }
}
</style>
