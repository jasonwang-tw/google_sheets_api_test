<template>
  <div class="home">
    <h1 class="text-4xl">dfsfsdf</h1>
    <button @click="submitData">點擊我來發送 API 請求</button>
    <p>{{ data_123 }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomePage",
  // Add your component logic here
  data() {
    return {
      data_123: null,
      postData: {
        order_time: "ddsfsdf",
        order_no: "以報導",
        order_pay: "",
      },
      //   error: "XXXX",
      //   isLoading: true,
    };
  },
  methods: {
    submitData() {
      axios
        .post(
          "https://script.google.com/macros/s/AKfycbytnUPfs32gA01fezEsfNiNHkhoeaqFBaAZnsiOZN3gvsJdhTlyW7pwgDOsxXYanivNOg/exec",
          this.postData
        )
        .then((response) => {
          this.data_123 = response.data;
          console.log("響應:", response.data);
        })
        .catch((error) => {
          this.data_123 = error;
          console.error("發送錯誤:", error);
        });
    },
  },
};
</script>

<style lang="scss">
/* Add your component styles here */
</style>
