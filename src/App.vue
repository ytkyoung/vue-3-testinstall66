<template>
  <div id="app">
    <Calculator />
    <Test />
    <Jazz />
    <JazzZwei />
    <JazzDrei />
  </div>
</template>

<script>
import Calculator from "./components/Calculator.vue";
import Test from "./components/HalloTest.vue";
import Jazz from "./components/Jazz.vue";
import JazzZwei from "./components/JazzZwei.vue";
import JazzDrei from "./components/JazzDrei.vue";

export default {
  name: "App",
  components: {
    Calculator,
    Test,
    Jazz,
    JazzZwei,
    JazzDrei,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
