import emailjs from "@emailjs/browser";
export default {
  methods: {
    send(v) {
      emailjs
        .sendForm("service_eiz3obr", "template_a7rgl9u", v, "9F9dhwN-jlGAQ5Ix6")
        .then(
          /* eslint-disable */
          (result) => {
            /* eslint-enable */
            this.resultInfo = "Спасибо, ваша заявка отправлена.";
            this.showResultContent();
          },
          /* eslint-disable */
          (error) => {
            /* eslint-enable */
            this.resultInfo = `Что-то пошло не так. <br/> Повторите попытку позже.`;
            this.showResultContent();
          }
        );
    },
  },
};
