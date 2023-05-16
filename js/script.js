const app = Vue.createApp({
  data() {
    return {
      emailList: [],
    };
  },
  methods: {
    takeEmailRandom() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((serverResponse) => {
          this.emailList.push(serverResponse.data.response);
        });
    },
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      this.takeEmailRandom();
    }
  },
});
app.mount("#app");
