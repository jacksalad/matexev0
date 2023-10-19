<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <!-- 左侧栏 -->
        <v-card>
          <LeftBar />
        </v-card>
      </v-col>
      <v-col cols="10">
        <!-- 主要内容区域 -->
        <v-card>
          <router-view />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import LeftBar from '@/components/sidebar/LeftBar.vue'
</script>
