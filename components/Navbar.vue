<template>
  <div
    id="header"
    class="flex absolute w-full justify-between items-center h-20 p-5 pt-10"
  >
    <!-- add a vector that looks like the figma design for the navButton -->
    <NuxtLink to="/">
      <img
        class="invert pl-5"
        src="../assets/svg/DimacariLogo.svg"
        alt="DimacariLogo"
      />
    </NuxtLink>
    <div class="flex pr-5 justify-center items-center rounded-tr-4xl">
      <NuxtLink to="/dashboard">
        <img src="../assets/svg/NavButton.svg" width="30"
      /></NuxtLink>
    </div>
  </div>
</template>
