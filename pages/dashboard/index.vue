<script setup lang="ts">
import { UButton } from "#components";

definePageMeta({
  layout: "dashboard",
});
</script>

<template>
  <div class="pt-14 text-black">
    <div
      class="m-4 p-4 bg-black text-white rounded-3xl border-2 border-gray-400"
    >
      <div class="max-w-2xl mx-auto flex justify-between items-center gap-8">
        <div class="p-4 text-center">
          <h1 class="text-xl font-semibold">
            Available<br />
            Cars
          </h1>
          XX
        </div>
        <div class="w-px h-12 bg-white"></div>
        <div class="p-4 text-center">
          <h1 class="text-xl font-semibold">
            Rented<br />
            Cars
          </h1>
          XX
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <UButton class="bg-blue-500">Filter</UButton>
    </div>
    <div class="m-8 p-8 rounded-3xl border-2 border-gray-400">
      <h1 class="pb-4 font-semibold">Revenue</h1>
      <div class="flex w-full justify-between">
        <div>
          <h1 class="text-xl font-semibold">69969 DHS</h1>
          <h1 class="text-[12px] text-green-500">12% From last month</h1>
        </div>
        <div>Chart</div>
      </div>
    </div>

    <div class="m-8 p-8 rounded-3xl border-2 border-gray-400">
      <h1 class="pb-4 font-semibold">Revenue</h1>
      <div class="flex w-full justify-between">
        <div>
          <h1 class="text-xl font-semibold">69969 DHS</h1>
          <h1 class="text-[12px] text-green-500">12% From last month</h1>
        </div>
        <div>Chart</div>
      </div>
    </div>
    <div class="m-8 p-8 rounded-3xl border-2 border-gray-400">
      <h1 class="pb-4 font-semibold">Revenue</h1>
      <div class="flex w-full justify-between">
        <div>
          <h1 class="text-xl font-semibold">69969 DHS</h1>
          <h1 class="text-[12px] text-green-500">12% From last month</h1>
        </div>
        <div>Chart</div>
      </div>
    </div>
    <div class="m-8 p-8 rounded-3xl border-2 border-gray-400 text-center">
      <h1 class="font-semibold text-gray-500">Statistics</h1>
      <h1 class="font-semibold">Real-time customers</h1>
      <UButton class="justify-center">Button</UButton>
      <h1 class="text-xl font-semibold">chart</h1>
      <div class="flex justify-between">
        <h1>date1</h1>
        <h1>date2</h1>
      </div>
    </div>
    <div class="m-8 pt-8 pb-8 rounded-3xl border-2 border-gray-400 text-center">
      <h1 class="font-semibold pb-8">Instant Reservation</h1>
      <ReservationTable />
    </div>
    <div class="m-8 pt-8 pb-8 rounded-3xl border-2 border-gray-400 text-center">
      <h1 class="font-semibold pb-8">Booking History</h1>
      <ReservationTable />
    </div>
  </div>
</template>
