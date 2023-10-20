<template>
  <v-textarea label="步骤" variant="outlined" v-model="content"></v-textarea>
  <v-card-text v-katex variant="outlined">
    <div v-html="this.converter.makeHtml(content)"></div>
  </v-card-text>
</template>

<script>
import showdown from "showdown";

export default {
  data() {
    return {
      converter: new showdown.Converter(),
      content: this.message,
    };
  },
  props: {
    message: String,
  },
};
</script>
