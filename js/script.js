const app = Vue.createApp({
  data() {
    return {
      email: "",
    };
  },
  created() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((serverResponde) => (this.email = serverResponde.data.response));
  },
});
app.mount("#app");
