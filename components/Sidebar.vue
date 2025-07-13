<script setup lang="ts">
import { SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar";
import AppSidebar from "./AppSidebar.vue";
</script>

<template>
  <div class="flex absolute">
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger class="flex relative" />
        <slot />
      </main>
    </SidebarProvider>
  </div>
  <div class="flex justify-end items-center p-5 mt-5">ImageDZDZ</div>
</template>
