<template>
  <div>
    <input
      v-if="nameInput"
      class="common__input input"
      :class="[
        {
          'input--error': nameFieldError,
        },
        { 'input--white': white },
        { 'common__input--small': small },
      ]"
      type="text"
      placeholder="Ваше имя"
      name="user_name"
      v-model="$v.name.$model"
      @blur="onFieldBlur('name')"
      @focus="nameFieldFocused = true"
    />
    <p
      v-if="nameInput && nameFieldError"
      class="common__error-text input__spase"
    >
      {{ getNameErrorText($v.name) }}
    </p>
    <input
      v-if="contactInput"
      type="text"
      name="user_contact"
      class="common__input input"
      :class="[
        { 'input--error': contactFieldError },
        { 'input--white': white },
        { 'common__input--small': small },
      ]"
      placeholder="Ваш телефон/e-mail"
      v-model="$v.contact.$model"
      @blur="onFieldBlur('contact')"
      @focus="contactFieldFocused = true"
    />
    <p
      v-if="contactInput && contactFieldError"
      class="common__error-text input__spase"
    >
      {{ getContactErrorText($v.contact) }}
    </p>
    <div
      v-if="phoneInput"
      class="phone-input__container"
      :class="{ 'phone-input__container--small': small }"
    >
      <input
        type="text"
        name="user_contact"
        class="common__input phone-input"
        :class="[
          { 'phone-input--error': contactFieldError },
          { 'input--white': white },
          { 'common__input--small': small },
        ]"
        placeholder="+7(9XX) XXX-XX-XX"
        v-mask="'+7(9##) ###-##-##'"
        v-model="$v.contact.$model"
        @blur="onFieldBlur('contact')"
        @focus="contactFieldFocused = true"
      />
      <p v-if="contactFieldError" class="common__error-text">
        {{ getContactErrorText($v.contact) }}
      </p>
    </div>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  email,
} from "vuelidate/lib/validators";
import { mapState } from "vuex";
export default {
  name: "SharedInputs",
  props: {
    nameInput: {
      type: Boolean,
      default: false,
    },
    contactInput: {
      type: Boolean,
      default: false,
    },
    phoneInput: {
      type: Boolean,
      default: false,
    },
    white: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      name: "",
      contact: "",
      nameFieldFocused: false,
      contactFieldFocused: false,
    };
  },
  validations() {
    const nameFormat = () => {
      const regex = /^[A-zА-яЁё ]+$/;
      return regex.test(this.name);
    };
    const phoneFormat = () => {
      const regex = /^((8|\+7)[ \- ]?)?(\(?\d{3}\)?[ \- ]?)?[\d\- ]{7,10}$/;
      return this.phoneInput
        ? this.contact.length === 17
        : regex.test(this.contact);
    };
    return this.isPhone
      ? {
          name: {
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
          name: {
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
    ...mapState("sharedComponents", ["clearInput"]),
    nameFieldError() {
      return this.checkInputValid("name");
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
      this.$emit(`onFieldBlur`, { fieldName: v, invalid: this.$v[v].$invalid });
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
  watch: {
    clearInput(v) {
      if (v) {
        if (this.name.length > 0) {
          this.name = "";
        }
        if (this.contact.length > 0) {
          this.contact = "";
        }
        this.$v.$reset();
      }
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
  &--white {
    background-color: var(--white);
    &:focus {
      border: 1px solid var(--white);
    }
  }
}
.input__spase {
  margin-bottom: 13px;
}
.phone-input {
  padding-left: 40px;
  border-radius: 4px;
  margin-bottom: 28px;
  &--error {
    margin-bottom: 0;
  }
  &__container {
    position: relative;
    &::before {
      content: url("@/assets/img/phone-gray.svg");
      position: absolute;
      height: 20px;
      width: 20px;
      left: 0;
      top: 0;
      transform: translate(55%, calc(50% + 5px));
    }
    @media only screen and (max-width: $md) {
      &::before {
        transform: translate(55%, calc(50% + 3px));
      }
    }
    @media only screen and (max-width: $sm) {
      margin-right: 0;
      &::before {
        transform: translate(55%, 50%);
      }
    }
    &--small {
      &::before {
        content: "";
        height: 0px;
        width: 0px;
      }
      &::after {
        content: url("@/assets/img/phone-gray.svg");
        position: absolute;
        height: 17px;
        width: 17px;
        left: 0;
        top: 0;
        transform: translate(55%, calc(50% + 2px));
      }
      @media only screen and (max-width: $md) {
        &::after {
          transform: translate(55%, calc(50% + 3px));
        }
      }
      @media only screen and (max-width: $sm) {
        &::after {
          transform: translate(55%, calc(50% + 2px));
        }
      }
    }
  }
}
</style>
