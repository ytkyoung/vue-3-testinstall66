<template>
  <div class="test">
    <h3>Reverse</h3>
    <form>
      <input type="string" v-model="str1" />
    </form>
    <p>Result: {{ message }}</p>
  </div>
</template>
<script>
// import { ref } from "vue";

// export default {
//   setup() {
//     const str1 = ref("test");
//     const message = "sdasdasd";

//     function reverseMessage1() {
//       console.log(message.value);
//       message.value = str1.value.split("").reverse().join("");
//     }
//     console.log(reverseMessage1);
//     return {
//       str1,
//       message,
//     };
//   },
// };

// export default {
//   data() {
//     return {
//       str1: "test",
//       message: "",
//     };
//   },
//   methods: {
//     reverseMessage: function () {
//       this.message = this.str1.split("").reverse().join("");
//     },
//   },
// };

import { ref, computed } from "vue";

export default {
  setup() {
    const str1 = ref("Hallo, Test 123456789");
    const message = computed(() => str1.value.split("").reverse().join(""));
    return {
      str1,
      message,
    };
  },
};
</script>
<style></style>
