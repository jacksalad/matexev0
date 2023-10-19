<template>
  <v-footer class="bg-indigo-lighten-1 text-center d-flex flex-column max-height-footer">
    <div>
      <p>
        &copy; {{ new Date().getFullYear() }} — <strong>MaTeXe</strong>. All rights
        reserved.
      </p>
      <a class="p-footer" href="https://beian.miit.gov.cn/" target="_blank"
        >晋ICP备2023018034号</a
      >
    </div>
  </v-footer>
</template>

<style>
.max-height-footer {
  max-height: 70px; /* 设置最大高度为 200px */
  overflow: auto; /* 添加滚动条，以防内容溢出 */
}
</style>
