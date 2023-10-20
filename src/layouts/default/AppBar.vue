<template>
  <v-app-bar flat class="AppBar text-center">
    <v-app-bar-title cols="2">
      <a href="/">
        <img src="@/assets/img/logo/logo.svg" alt="logo" />
      </a>
    </v-app-bar-title>
    <v-col cols="8" class="text-center">
      <router-link to="/">
        <v-btn
          prepend-icon="mdi-home"
          class="BarLabel"
          :class="{ active: $route.path === '/' }"
        >
          首页
        </v-btn>
      </router-link>
      <router-link to="/exer">
        <v-btn
          prepend-icon="mdi-clipboard-edit"
          class="BarLabel"
          :class="{ active: $route.path.startsWith('/exer') }"
        >
          习题
        </v-btn>
      </router-link>
      <router-link to="/about">
        <v-btn
          prepend-icon="mdi-alert-decagram"
          class="BarLabel"
          :class="{ active: $route.path.startsWith('/about') }"
          >关于</v-btn
        >
      </router-link>
    </v-col>
    <v-col cols="2" class="text-center">
      <v-btn icon="mdi-account"></v-btn>
      <v-btn icon="mdi-download-circle"></v-btn>
    </v-col>
  </v-app-bar>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.AppBar {
  background-color: #5c6bc0 !important;
}

.BarLabel {
  color: black;
  font-size: 18px;
  font-weight: bold;
}

.active {
  background-color: #494e8f; /* 设置选中页面的背景色为红色 */
  color: #fff; /* 设置选中页面的文字颜色为白色 */
}

img {
  display: inline;
}
</style>
