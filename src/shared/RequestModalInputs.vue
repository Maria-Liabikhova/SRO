<template>
  <div>
    <input
      class="common__input input"
      :class="{ 'input--error': nameFieldError }"
      type="text"
      placeholder="Ваше имя"
      name="user_name"
      v-model="$v.userName.$model"
      @blur="onFieldBlur('userName')"
      @focus="userNameFieldFocused = true"
    />
    <p v-if="nameFieldError" class="common__error-text">
      {{ getNameErrorText($v.userName) }}
    </p>
    <input
      type="text"
      class="common__input input"
      :class="{ 'input--error': contactFieldError }"
      placeholder="Ваш телефон/e-mail"
      name="user_contact"
      v-model="$v.contact.$model"
      @blur="onFieldBlur('contact')"
      @focus="contactFieldFocused = true"
    />
    <p class="common__error-text" v-if="contactFieldError">
      {{ getContactErrorText($v.contact) }}
    </p>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  email,
} from "vuelidate/lib/validators";
export default {
  name: "RequestModalInputs",
  data() {
    return {
      userName: "",
      contact: "",
      userNameFieldFocused: false,
      contactFieldFocused: false,
    };
  },
  validations() {
    const nameFormat = () => {
      const regex = /^[A-zА-яЁё ]+$/;
      return regex.test(this.userName);
    };
    const phoneFormat = () => {
      const regex = /^((8|\+7)[ \- ]?)?(\(?\d{3}\)?[ \- ]?)?[\d\- ]{7,10}$/;
      return regex.test(this.contact);
    };
    return this.isPhone
      ? {
          userName: {
            required,
            minLength: minLength(2),
            maxLength: maxLength(50),
            nameFormat,
          },
          contact: {
            required,
            phoneFormat,
          },
        }
      : {
          userName: {
            required,
            minLength: minLength(2),
            maxLength: maxLength(50),
            nameFormat,
          },
          contact: {
            required,
            email,
          },
        };
  },
  computed: {
    nameFieldError() {
      return this.checkInputValid("userName");
    },
    contactFieldError() {
      return this.checkInputValid("contact");
    },
    isPhone() {
      const regex = /[a-zA-Z]/;
      return !regex.test(this.contact);
    },
  },
  methods: {
    checkInputValid(v) {
      return (
        !this[`${v}FieldFocused`] && this.$v[v].$dirty && this.$v[v].$error
      );
    },
    onFieldBlur(v) {
      this.$v[v].$touch();
      this[`${v}FieldFocused`] = false;
      this.$emit(`onFieldBlur`, this.$v.$invalid);
    },
    getNameErrorText(v) {
      if (!v.required) return "Поле обязательно для ввода";
      if (!v.minLength) return `Минимум ${v.$params.minLength.min} символа`;
      if (!v.maxLength) return `Максимум ${v.$params.maxLength.max} символов`;
      if (!v.nameFormat) return `Введите корректные данные`;
    },
    getContactErrorText(v) {
      if (!v.required) return "Поле обязательно для ввода";
      if (!v.phoneFormat || !v.email) return `Введите корректные данные`;
    },
  },
};
</script>
<style lang="scss" scoped>
.input {
  margin-bottom: 25px;
  &--error {
    margin-bottom: 0;
  }
}
.common__error-text {
  margin-bottom: 13px;
}
</style>
