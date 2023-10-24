<template>
  <ExerTypeSelect />
  <hr />
  <div ref="pdfContent">
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
  </div>
</template>

<script>
import ExerTypeSelect from "@/components/exertool/ExerTypeSelect.vue";
import Choices from "@/components/exertool/choices.vue";
import output from "@/api/output.js";
import axios from "axios";
// import getExer from "@/api/getexer.js"

export default {
  created() {
    // 订阅名为"output-event"的事件
    this.emitter.on("output-event", this.handleOutputEvent);
    this.emitter.on("exerclass-change-event", this.exersChange);
  },
  beforeRouteLeave() {
    this.emitter.off("output-event", this.handleOutputEvent);
    this.emitter.off("exerclass-change-event", this.exersChange);
  },
  components: {
    ExerTypeSelect,
    Choices,
  },
  data() {
    return {
      exers: [],
      shouldRenderChoices: true,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get("https://www.matexe.cn:8080/getexers")
        .then((response) => {
          this.exers = response.data; // 更新exers数据
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    handleOutputEvent(outputType) {
      if (outputType === "Markdown") {
        output.exportToMdType1(this.exers);
      } else if (outputType === "PDF") {
        output.exportToPDFType1(this.$refs.pdfContent);
      } else if (outputType === "LaTeX") {
        output.exportToTexType1(this.exers);
      }
    },
    exersChange(classes) {
      this.exers = []
      let selected = [];
      classes.forEach((element) => {
        selected.push("'" + element + "'");
      });
      axios
        .get("https://www.matexe.cn:8080/getexer1", {
          params: {
            cls: selected.join(","),
          },
        })
        .then((response) => {
          this.exers = response.data; // 更新exers数据
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
};
</script>
