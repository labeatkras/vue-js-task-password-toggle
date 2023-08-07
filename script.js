Vue.createApp({
  data() {
    return {
      passwordHidden: true,
      /*inputType: "password",
      buttonText: "Show Password",*/
    };
  },
  methods: {
    togglePassword() {
      this.passwordHidden = !this.passwordHidden;
      /* if (this.inputType === true) {
        this.inputType = "text";
        this.buttonText = "Hide Password";
      } else {
        this.inputType = false;
        this.buttonText = "Show Password";
        console.log(this.togglePassword);
      }*/
    },
  },
  computed: {
    buttonText() {
      if (this.passwordHidden === true) {
        return "Show Password";
      } else {
        return "Hide Password";
      }
    },

    inputType() {
      if (this.passwordHidden === true) {
        return "password";
      } else {
        return "text";
      }
    },
  },
}).mount("#app");
