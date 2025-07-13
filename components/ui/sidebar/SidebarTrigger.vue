<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useSidebar } from "./utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const { toggleSidebar } = useSidebar();
</script>

<template>
  <Button
    data-sidebar="trigger"
    data-slot="sidebar-trigger"
    variant="link"
    size="undefined"
    :class="cn(props.class)"
    class="m-5 cursor-pointer fixed z-10"
    @click="toggleSidebar"
  >
    <img src="../../../assets/svg/simpleLogo.svg" class="w-12" />
    <span class="sr-only">Toggle Sidebar</span>
  </Button>
</template>
