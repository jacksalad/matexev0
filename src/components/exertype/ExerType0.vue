<template>
    <Choices v-for="(exer, index) in exers" :key="index" :num="index + 1" :content="exer.content" :A="exer.a"
        :B="exer.b" :C="exer.c" :D="exer.d" :answer="exer.answer" />
</template>

<script>
import Choices from "@/components/exertool/choices.vue"
import axios from 'axios';

export default {
  components: {
    Choices
  },
  data() {
    return {
      exers: []
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get('http://www.matexe.cn:443/getexers')
        .then(response => {
          // 请求成功，将响应数据赋值给items数组
          this.exers = response.data;
          console.log(this.exers);
        })
        .catch(error => {
          // 请求失败，处理错误
          console.error('Error fetching data:', error);
        });
    }
  }
};
</script>
