<template>
  <v-footer class="bg-mat text-center d-flex flex-column max-height-footer">
    <div>
      <p>
        &copy; {{ new Date().getFullYear() }} — <strong>MaTeXe</strong>. All rights
        reserved.
      </p>
      <a style="color: black;" href="https://beian.miit.gov.cn/" target="_blank"
        >晋ICP备2023018034号</a
      >
    </div>
  </v-footer>
</template>

<style>
.max-height-footer {
  max-height: 70px; /* 设置最大高度为 200px */
}

.bg-mat {
  background-color: #f391a9 !important;
}
</style>
