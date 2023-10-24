<template>
  <v-container>
    <v-row>
      <v-col v-for="(exerType, index) in ExerTypes" :key="index" class="checkbox-col" cols="3">
        <v-checkbox
          v-model="selectedExerTypes"
          :label="exerType"
          color="red"
          :value="exerType"
          hide-details
        ></v-checkbox>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="5"></v-col>
      <v-col cols="auto">
        <v-btn density="default" @click="changeClasses">筛选</v-btn>
      </v-col>
      <v-col cols="5"></v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      ExerTypes: [],
      selectedExerTypes: [],
    };
  },
  mounted() {
    this.getExerTypes()
    console.log(this.ExerTypes);
  },
  methods: {
    getExerTypes() {
      axios
        .get("https://www.matexe.cn:8080/getclass")
        .then((response) => {
          this.ExerTypes = response.data; // 更新exers数据
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    changeClasses() {
      this.emitter.emit('exerclass-change-event', this.selectedExerTypes);
    }
  },
};
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
