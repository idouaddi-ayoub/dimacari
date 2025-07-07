<script setup lang="ts">
const items = ["5", "é"];

const groupedItems = computed(() => {
  const groups = [];
  for (let i = 0; i < items.length; i += 1) {
    groups.push(items.slice(i, i + 5));
  }
  return groups;
});
</script>

<template>
  <div class="m-10"></div>
  <UCarousel
    :items="groupedItems"
    arrows
    dots
    :ui="{
      container: 'transition-[height]',
      controls: 'absolute -bottom-8 inset-x-12',
    }"
    :prev="{ label: 'apaph' }"
    :next="{ label: 'apaph' }"
  >
    <div class="grid grid-cols-1 gap-2 m-2">
      <CarsContainer />
      <CarsContainer />
    </div>
  </UCarousel>
</template>
