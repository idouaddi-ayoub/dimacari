<script setup lang="ts"></script>

<template>
  <div
    class="flex flex-col justify-end h-full items-center bg-travel rounded-6xl m-6 p-5"
  >
    <div class="w-full">
      <h1>Louez Votre Abri de Voyage en Quelques Clics avec dimacari</h1>
      <div
        class="bg-amber-50/35 text-black backdrop-blur-xs p-5 rounded-2xl text-left justify-end"
      >
        <h1
          class="text-gray-400 bg-white mb-2 font-semibold border-1 border-black rounded-xl w-full p-3 text-[11px]"
        >
          Choisissez ville de départ
        </h1>
        <h1
          class="text-gray-400 mb-2 bg-white font-semibold border-1 border-black rounded-xl w-full p-3 text-[11px]"
        >
          Choisissez ville de retour
        </h1>
        <div class="flex w-full justify-between items-center gap-2 mb-2">
          <h1
            class="text-gray-400 bg-white font-semibold border-1 border-black rounded-xl w-full p-2 text-[11px]"
          >
            Date de reservation
          </h1>
          <h1
            class="text-gray-400 bg-white font-semibold border-1 border-black rounded-xl w-full p-2 text-[11px]"
          >
            Temps
          </h1>
        </div>
        <div class="flex w-full justify-between items-center gap-2 mb-2">
          <h1
            class="text-gray-400 bg-white font-semibold border-1 border-black rounded-xl w-full p-2 text-[11px]"
          >
            Date de reservation
          </h1>
          <h1
            class="text-gray-400 bg-white font-semibold border-1 border-black rounded-xl w-full p-2 text-[11px]"
          >
            Rechercher
          </h1>
        </div>
        <div class="mt-6">
          <h1
            class="bg-[#0F0F0F] text-white text-center font-semibold border-1 border-black rounded-xl w-full p-3 text-[20px]"
          >
            Rechercher
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.bg-travel {
  background-image: url("/assets/png/HeroSectionIMG.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 90vh;
}
</style>
