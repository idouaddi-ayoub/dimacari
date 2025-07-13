<template>
  <div>
    <Navbar v-if="showNavbar" />
    <NuxtPage />
    <Footer v-if="showFooter" />
  </div>
</template>

<script setup>
import { NuxtPage } from "#components";
import { useRoute } from "vue-router";

const route = useRoute();

const noNavbarRoutes = ["/dashboard"];
const noFooterRoutes = ["/dashboard"];

const showNavbar = computed(() => !noNavbarRoutes.includes(route.path));
const showFooter = computed(() => !noFooterRoutes.includes(route.path));
</script>
