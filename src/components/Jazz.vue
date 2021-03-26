<template>
  <div>
    <div id="event-handling" class="test">
      <p>{{ message }}</p>
      <p>{{ message1 }}</p>
      <button v-on:click="reverseMessage">Reverse Message</button>
      <button v-on:click="fog">clear fog</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello Vue.js!",
      message1: "fogofogoofgfffogthesgofogooagofogoourfoousfogfogfogfgofg",
    };
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split("").reverse().join("");
    },
    fog() {
      this.message1 = this.message1.match(/[^fog]/gi).join("");
    },
  },
};
</script>
<style></style>
