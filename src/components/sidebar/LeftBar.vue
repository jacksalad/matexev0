<template>
  <v-card-text class="card">
    <router-link to="/exer">
      <v-btn
        variant="text"
        block
        class="font-weight-bold text-pink-darken-4"
        :class="{ active: $route.path === '/exer' }"
      >
        最新
      </v-btn>
    </router-link>
    <router-link to="/exer/type1">
      <v-btn
        variant="text"
        block
        class="font-weight-bold text-pink-darken-4"
        :class="{ active: $route.path.startsWith('/exer/type1') }"
      >
        单选
      </v-btn>
    </router-link>
    <router-link to="/exer/type2">
      <v-btn
        variant="text"
        block
        class="font-weight-bold text-pink-darken-4"
        :class="{ active: $route.path.startsWith('/exer/type2') }"
      >
        填空
      </v-btn>
    </router-link>
    <router-link to="/exer/type3">
      <v-btn
        variant="text"
        block
        class="font-weight-bold text-pink-darken-4"
        :class="{ active: $route.path.startsWith('/exer/type3') }"
      >
        大题
      </v-btn>
    </router-link>
  </v-card-text>
  <hr />
  <v-card-text class="card">
    <v-select
      variant="outlined"
      v-model="selectedItem"
      :items="items"
      label="导出类型"
    ></v-select>
    <v-btn variant="tonal" block @click="sendOutputEvent"> 导出 </v-btn>
  </v-card-text>
</template>

<script>
export default {
  data() {
    return {
      selectedItem: "请选择", // 用于存储选中的项目
      items: ["PDF", "Markdown", "LaTeX"],
    };
  },
  methods: {
    sendOutputEvent() {
      console.log(this.selectedItem);
      // 发布名为"output-event"的事件，同时传递数据
      if (this.selectedItem != "请选择") {
        this.emitter.emit('output-event', this.selectedItem);
      }
    }
  }
};
</script>

<style scoped>
.card {
}

.active {
  background-color: #f391a9; /* 设置选中页面的背景色为红色 */
  color: #fff !important; /* 设置选中页面的文字颜色为白色 */
}
</style>
