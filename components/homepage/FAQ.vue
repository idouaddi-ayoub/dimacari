<script setup lang="ts">
import type { AccordionItem } from "@nuxt/ui";

const items = ref<AccordionItem[]>([
  {
    label: "Vous êtes une agence de location des voitures au Maroc ?",
    content:
      "Set up and customize your rental operation in just a few clicks: scan IDs, add services or charge your customers via one flexible link.",
  },
  {
    label: "Comment proposer un trajet ?",
    content:
      "Choose a primary and a neutral color from your Tailwind CSS theme.",
  },
  {
    label: "Comment proposer un trajet ?",
    content:
      "You can customize components by using the `class` / `ui` props or in your app.config.ts.",
  },
  {
    label: "Comment proposer un trajet ?",
    content:
      "You can customize components by using the `class` / `ui` props or in your app.config.ts.",
  },
]);
</script>

<template>
  <div class="text-black mt-20 m-10">
    <h1 class="text-2xl font-semibold custom-rounded-underline mb-5">
      Pour votre entreprise
    </h1>
    <h1 class="text-[16px] font-semibold">
      Vous êtes une agence de location des voitures au Maroc ?
    </h1>
    <h1 class="text-[12px] mt-2">
      Set up and customize your rental operation in just a few clicks: scan IDs,
      add services or charge your customers via one flexible link.
    </h1>
    <div class="flex items-start mt-2 mb-2">
      <img src="/assets/svg/Insight.svg" />
      <h1 class="text-[12px] text-gray-300">
        Control your spendings! You choose the items you wish to activate
        insurance for.<br />
        Talk to us to learn more!
      </h1>
    </div>
    <div class="flex justify-end">
      <h1
        class="bg-[#272727] text-white font-bold rounded-2xl w-fit p-3 pl-6 pr-6 m-3 text-[14px]"
      >
        Commencer Maintenant
      </h1>
    </div>
    <h1 class="text-2xl font-bold mt-2">Questions fréquentes</h1>
    <h1 class="font-semibold mt-2">
      Vous êtes une agencede location des voitures au Maroc ?
    </h1>
    <h1 class="text-[12px] text-gray-300 mt-2">
      Set up and customize your rental operation in just a few clicks: scan IDs,
      add services or charge your customers via one flexible link.
    </h1>
    <UAccordion
      :items="items"
      class="bg-[#272727] rounded-3xl p-4 text-white mt-4"
    />
    <h1 class="font-semibold mt-2">Be the first to know when we update</h1>
    <div class="flex justify-between mt-3 mb-3">
      <h1
        class="text-gray-300 font-bold border-1 border-black rounded-3xl w-fit p-3 pl-6 pr-6 text-[14px]"
      >
        Enter your email
      </h1>
      <h1
        class="bg-[#272727] text-white font-bold rounded-3xl w-fit p-3 pl-6 pr-6 text-[14px]"
      >
        Subscribe
      </h1>
    </div>
  </div>
</template>
