<template>
  <div class="test2">
    <h3>Replace Vowel</h3>
    <form>
      <input type="string" v-model="word" />
    </form>
    <p>Result: {{ result }}</p>
  </div>
</template>

<script>
import { computed, ref } from "vue";

export default {
  setup() {
    const word = ref("hallo dies ist ein Test");
    const result = computed(() =>
      word.value
        .replace(/[a]/g, "1")
        .replace(/[e]/g, "2")
        .replace(/[i]/g, "3")
        .replace(/[o]/g, "4")
        .replace(/[u]/g, "5")
    );
    return {
      word,
      result,
    };
  },
};
</script>
