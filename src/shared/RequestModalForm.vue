<template>
  <div class="request">
    <h2 class="request__title common__h2">Оставить заявку</h2>
    <UiInput type="text" class="request__input" placeholder="Ваше имя" />
    <UiInput type="text" class="request__input" placeholder="Ваш телефон" />
    <div class="request__action-wrap">
      <SquareButton name="Отправить" />
      <p class="request__text">
        <img src="@/assets/img/check-box.svg" class="request__icon" />
        Соглашаюсь с
        <span class="request__agreement" @click="onShowModal"
          >политикой конфиденциальности </span
        >и даю согласие на обработку персональных данных
      </p>
    </div>
  </div>
</template>

<script>
import UiInput from "@/ui/UiInput.vue";
import SquareButton from "@/ui/SquareButton.vue";
export default {
  name: "RequestModalForm",
  components: { UiInput, SquareButton },
  //   data(){
  //     return
  //   }
  methods: {
    onShowModal() {
      alert("hi");
    },
  },
};
</script>
<style lang="scss" scoped>
.request {
  &__title {
    padding-top: 25px;
    text-align: center;
    margin-bottom: 30px;
  }
  &__input {
    margin-bottom: 25px;
  }
  &__action-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
  }
  &__text {
    line-height: 1;
    margin: 0;
  }
  &__icon {
    height: 15px;
    width: 15px;
    align-self: start;
    margin-right: 5px;
  }
  &__agreement {
    cursor: pointer;
    color: var(--gray);
    font-style: italic;
    transition: all 0.3s ease;
    &:hover {
      color: var(--gray-dark);
      transition: all 0.3s ease;
    }
  }
}
</style>
