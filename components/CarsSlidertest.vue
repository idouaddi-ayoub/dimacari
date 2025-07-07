<script setup lang="ts">
const items = [
  "https://picsum.photos/640/640?random=1",
  "https://picsum.photos/640/640?random=2",
  "https://picsum.photos/640/640?random=3",
  "https://picsum.photos/640/640?random=4",
  "https://picsum.photos/640/640?random=5",
  "https://picsum.photos/640/640?random=6",
  "https://picsum.photos/640/640?random=1",
  "https://picsum.photos/640/640?random=2",
  "https://picsum.photos/640/640?random=3",
  "https://picsum.photos/640/640?random=4",
  "https://picsum.photos/640/640?random=5",
  "https://picsum.photos/640/640?random=6",
  "https://picsum.photos/640/640?random=1",
  "https://picsum.photos/640/640?random=2",
  "https://picsum.photos/640/640?random=3",
  "https://picsum.photos/640/640?random=4",
  "https://picsum.photos/640/640?random=5",
  "https://picsum.photos/640/640?random=6",
  "https://picsum.photos/640/640?random=1",
  "https://picsum.photos/640/640?random=2",
  "https://picsum.photos/640/640?random=3",
  "https://picsum.photos/640/640?random=4",
  "https://picsum.photos/640/640?random=5",
  "https://picsum.photos/640/640?random=6",
];

const groupedItems = computed(() => {
  const groups = [];
  for (let i = 0; i < items.length; i += 3) {
    groups.push(items.slice(i, i + 5));
  }
  return groups;
});
</script>

<template>
  <div class="m-10"></div>
  <UCarousel
    v-slot="{ item }"
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
    <div class="grid grid-cols-2 gap-2 m-2">
      <img
        v-for="(img, index) in item"
        :key="index"
        :src="img"
        class="rounded-lg"
      />
    </div>
  </UCarousel>
</template>
