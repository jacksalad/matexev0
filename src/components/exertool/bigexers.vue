<template>
  <v-card-text>
    <div v-katex class="text">
      <b>{{ num }}. </b> {{ content }}
    </div>
    <img :src="img" alt="" class="w-50"/>
    <MdEditor />
  </v-card-text>
</template>

<script>
import { defineComponent } from "vue";
import MdEditor from "@/components/editor/Mdeditor.vue";

export default defineComponent({
  props: ["num", "content", "img", "answer"],
  components: {
    MdEditor,
  },
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
