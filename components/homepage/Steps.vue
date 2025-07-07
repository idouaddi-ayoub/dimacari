<script setup lang="ts">
const items = [
  "https://picsum.photos/468/468?random=1",
  "https://picsum.photos/468/468?random=2",
  "https://picsum.photos/468/468?random=5",
];
</script>

<template>
  <div class="m-10 pb-10">
    <h1 class="text-black text-2xl font-semibold custom-rounded-underline mb-5">
      Qui Sommes Nous
    </h1>
    <h2 class="text-black">Location de voiture facile, étape par étape</h2>
    <UCarousel
      v-slot="{ item }"
      auto-height
      arrows
      :prev="{ label: 'apaph' }"
      :next="{ label: 'apaph' }"
      :items="items"
      :ui="{
        container: 'transition-[height]',
        controls: ' absolute -bottom-8 inset-x-12 -ml-20 -mr-20',
      }"
      class="w-full max-w-xs mx-auto"
    >
      <img :src="item" width="320" height="320" class="rounded-lg" />
    </UCarousel>
  </div>
</template>
