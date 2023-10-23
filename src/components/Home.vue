<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card title="Home" v-katex>

          <v-card-text>
            <img src="@/assets/img/logo/logoimg.svg" alt="MaTeXe logo" class="w-50" />
          </v-card-text>

          <v-card-text class="text-h6">
            &emsp;&emsp;MaTeXe是来自华东师大的一群<span class="text-h6 font-weight-bold">
              数学爱好者</span
            >发起的开源智能数学题库项目。这些人也是未来的中学一线教师，计划将此项目落地部署，并投入到实际教学工作中。所以会根据实际工作需求，长期维护与更新此项目。欢迎有同样兴趣的人士与我们交流合作，加入到MaTeXer的大家庭中，共同推进<span
              class="text-h6 font-weight-bold"
              >教育数字化转型</span
            >。
          </v-card-text>

          <v-card-text class="text-h6">
            GitHub链接：<a href="https://github.com/jacksalad/matexev0"
              >https://github.com/jacksalad/matexev0</a
            >
          </v-card-text>

          <v-card-text class="text-h5 font-weight-bold"> MaTeXe V0.1.0 </v-card-text>
          <v-card-text class="text-h6">
            <span class="text-h6 font-weight-bold">特性1：</span
            >支持绝大多数LaTeX数学公式的渲染，基于<a
              class="text-h6"
              href="https://katex.org/"
              >KaTeX</a
            >插件。
          </v-card-text>

          <v-card-text>
            $$傅里叶级数：f(x) = \sum_{n=1}^{\infty} \frac{2}{\pi} \int_{0}^{\pi}
            \frac{\sin(nx)}{n} g(x) \, dx$$
          </v-card-text>

          <v-card-text class="text-h6">
            <span class="text-h6 font-weight-bold">特性2：</span
            >支持自动组卷与导出习题文件（PDF、Markdown、LaTeX）。
          </v-card-text>

          <v-card-text>
            <img src="@/assets/img/outputtype.svg" alt="Output Type" class="w-50">
          </v-card-text>

          <v-card-text class="text-h6">
            <span class="text-h6 font-weight-bold">特性3：</span
            >支持Markdown语法及数学公式编写的编辑器。
          </v-card-text>

          <v-card-text class="text-h6" katex>
            eg.求极限：$\lim_{n\to+\infty}\frac{1}{n} \sum_{i=1}^n \ln \frac{i}{n}$
          </v-card-text>
          <v-card-text>
            <MdEditor :message="MdContentExample" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MdEditor from "@/components/editor/Mdeditor.vue"

export default {
  components: {
    MdEditor
  },
  data() {
    return {
      MdContentExample: `## 解：

由**定积分定义**可得，该极限为：

<div>
$$
\\lim_{n\\to+\\infty}\\frac{1}{n} \\sum_{i=1}^n \\ln \\frac{i}{n} = \\int_0^1 \\ln x\\mathrm dx = -1
$$
</div>
`
    }
  }
}
</script>

<style scoped>
.quote {
  font-style: italic; /* 斜体 */
  border-left: 4px solid #b22c46; /* 左边框样式，可以自行更改颜色 */
  padding: 10px !important; /* 左内边距，调整引用文本与左边框的距离 */
  margin: 10px 0; /* 外边距，可根据需要进行调整 */
  background-color: #feeeed;
  line-height: 30px;
}
</style>
