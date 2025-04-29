<script setup>

import SidebarLink from '@/components/SidebarLink.vue'
</script>

<template>
  <aside id="sidebar" class="bg-side-nav w-1/2 md:w-1/6 lg:w-1/6 border-r border-side-nav hidden md:block lg:block">
    <ul class="list-reset flex flex-col">
      <SidebarLink title="Dashboard" href="/" />
      <SidebarLink title="Users" href="/users" />
    </ul>
  </aside>
</template>

<style scoped>

</style>
