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
      content: `## 解：

由**定积分定义**可得，该极限为：

<div>
$$
\\lim_{n\\to+\\infty}\\frac{1}{n} \\sum_{i=1}^n \\ln \\frac{i}{n} = \\int_0^1 \\ln x\\mathrm dx = -1
$$
</div>
`,
    };
  },
};
</script>
