<script setup lang="ts">
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: "Dashboard",
  },
  {
    title: "Booking",
    url: "/dashboard/booking",
    icon: "Booking",
  },
  {
    title: "Agencies",
    url: "/dashboard/agencies",
    icon: "Agencies",
  },
  {
    title: "Vehicles",
    url: "/dashboard/vehicles",
    icon: "Vehicles",
  },
  {
    title: "Facturations",
    url: "/dashboard/facturations",
    icon: "Facturations",
  },
  {
    title: "Client",
    url: "/dashboard/client",
    icon: "Avatar",
  },
  {
    title: "Statistics",
    url: "/dashboard/statistics",
    icon: "Statistics",
  },
  {
    title: "Team",
    url: "/dashboard/team",
    icon: "Team",
  },
  {
    title: "Time",
    url: "/dashboard/time",
    icon: "Team",
  },
];
</script>

<template>
  <Sidebar class="bg-black rounded-tr-4xl rounded-br-4xl">
    <SidebarContent>
      <SidebarGroup>
        <div class="p-10">
          <NuxtLink to="/">
            <img
              class="justify-center items-center h-10"
              src="../assets/svg/DimacariLogo.svg"
            />
          </NuxtLink>
        </div>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in items" :key="item.title">
              <SidebarMenuButton asChild>
                <a :href="item.url" class="">
                  <InlineSvg
                    :src="`/assets/svg/${item.icon}.svg`"
                    class="w-6 h-6 fill-current"
                  />
                  <span>{{ item.title }}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>
