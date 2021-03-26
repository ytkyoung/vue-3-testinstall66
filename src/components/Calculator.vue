<template>
  <h3>Calculator</h3>
  <form>
    <input type="number" v-model="num1" />
    <input type="number" v-model="num2" />
  </form>
  <div class="num-buttons">
    <button @click="num1++">+1 Num1</button>
    <button @click="num2++">+1 Num2</button>
  </div>
  <div class="num-buttons">
    <button @click="num1--">-1 Num1</button>
    <button @click="num2--">-1 Num2</button>
  </div>
  <p>Result: {{ sum }}</p>
  <div class="test">
    <strong>{{ fact }}</strong>
  </div>
</template>

<script>
import { computed, ref, watchEffect } from "vue";

export default {
  setup() {
    const num1 = ref(0);
    const num2 = ref(0);
    const fact = ref("");
    const sum = computed(
      () => parseInt(num1.value, 10) + parseInt(num2.value, 10)
    );

    watchEffect(async () => {
      const res = await fetch(`http://numbersapi.com/${sum.value}`);
      fact.value = await res.text();
    });

    return {
      num1,
      num2,
      sum,
      fact,
    };
  },
};
// import { ref } from "vue";

// export default {
//   setup() {
//     const num1 = ref(0);
//     const num2 = ref(0);
//     const sum = ref(0);

//     function add() {
//       sum.value = parseInt(num1.value, 10) + parseInt(num2.value, 10);
//     }

//     return {
//       num1,
//       num2,
//       sum,
//       add,
//     };
//   },
// };
</script>
<style></style>
