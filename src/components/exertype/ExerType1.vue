<template>
  <Choices
    v-for="(exer, index) in exers"
    :key="index"
    :num="index + 1"
    :content="exer.content"
    :A="exer.a"
    :B="exer.b"
    :C="exer.c"
    :D="exer.d"
    :answer="exer.answer"
  />
</template>

<script>
import Choices from "@/components/exertool/choices.vue";
import axios from "axios";

export default {
  created() {
    // 订阅名为"output-event"的事件
    this.emitter.on("output-event", this.handleOutputEvent);
  },
  components: {
    Choices,
  },
  data() {
    return {
      exers: [],
    };
  },
  mounted() {
    this.fetchData();
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
    handleOutputEvent() {
      var filename = "output.md";
      var text =
        "# MaTeXe智能题库\n>  [MaTeXe|迈泰题库-智能数学题库](http://www.matexe.cn)\n\n";
      this.exers.forEach(function (exer, index) {
        text += (index + 1).toString() + "." + exer.content;
        text += "\n";
        text += "A." + exer.a;
        text += "\n";
        text += "B." + exer.b;
        text += "\n";
        text += "C." + exer.c;
        text += "\n";
        text += "D." + exer.d;
        text += "\n";
      });
      var blob = new Blob([text], {
        type: "text/markdown",
      });
      var url = URL.createObjectURL(blob);
      var link = document.createElement("a");
      link.href = url;
      link.download = filename;
      link.click();
      URL.revokeObjectURL(url);
    },
  },
};
</script>
