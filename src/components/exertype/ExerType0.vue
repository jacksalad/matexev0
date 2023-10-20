<template>
  <Choices
    v-for="(exer, index) in choices"
    :key="index"
    :num="index + 1"
    :content="exer.content"
    :A="exer.a"
    :B="exer.b"
    :C="exer.c"
    :D="exer.d"
    :answer="exer.answer"
  />
  <Blanks
    v-for="(exer, index) in blanks"
    :key="index"
    :num="index + 2"
    :content="exer.content"
  />
  <Bigexers
    v-for="(exer, index) in bigexers"
    :key="index"
    :num="index + 3"
    :content="exer.content"
    :img="exer.img"
  />
</template>

<script>
import Choices from "@/components/exertool/choices.vue";
import Blanks from "@/components/exertool/blanks.vue";
import Bigexers from "@/components/exertool/bigexers.vue";
import axios from "axios";

export default {
  components: {
    Choices,
    Blanks,
    Bigexers
  },
  data() {
    return {
      choices: [
        {
          content:
            "在古代希腊哲学家毕达哥拉斯的学说中，他强调了数字的重要性，并将其视为宇宙的基础。毕达哥拉斯学说中最有名的概念之一是（）",
          a: "无理数",
          b: "三角形",
          c: "原子论",
          d: "圆周率",
          answer: "",
        },
      ],
      blanks: [{ content: "在数学中，（） 是一个抽象的概念，它代表了无限不断重复的数字序列或模式。这个概念引发了一些哲学上的思考，例如希腊哲学家波德拉克利特（Pythagoras）的\"无限大\"观念，以及数学家康托尔（Cantor）的关于不同无限大小的集合的理论。", answer: "无限" }],
      bigexers: [
        { content: "微积分是一个强大的工具，可用于建模和解决几何体的面积问题。请观察以下旋转对称的几何物体，尝试使用数学建模方法求解其体积公式的解析表达式。", img:"https://saladcloud.s3.bitiful.net/FILE/MaTeXe/img/graph0-t231020.svg",answer: "略" }
      ]
    };
  },
  mounted() {
    //this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get("http://www.matexe.cn:443/getexers")
        .then((response) => {
          // 请求成功，将响应数据赋值给items数组
          this.exers = response.data;
          console.log(this.exers);
        })
        .catch((error) => {
          // 请求失败，处理错误
          console.error("Error fetching data:", error);
        });
    },
  },
};
</script>
