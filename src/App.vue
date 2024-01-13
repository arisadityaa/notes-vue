<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="bg-gradient-to-r from-slate-500 to-sky-700">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
