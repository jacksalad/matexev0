<template>
  <v-card-text>
    <div v-katex class="text">
        <b>{{ num }}. </b> {{ content }}
    </div>
    <v-text-field variant="outlined"></v-text-field>
  </v-card-text>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["num", "content", "answer"]
});
</script>

<style scoped>
.text {
  font-family: "Times New Roman", sans-serif;
  font-size: 20px;
  line-height: 2;
  margin: 1em 0;
  text-align: justify;
}
</style>
