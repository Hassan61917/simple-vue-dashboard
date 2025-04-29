<script setup>
import AppHeader from '@/components/AppHeader.vue'
import Sidebar from '@/components/Sidebar.vue'
</script>

<template>
  <div class="mx-auto bg-grey-400">
    <div class="min-h-screen flex flex-col">
      <AppHeader />
      <div class="flex flex-1">
        <Sidebar />
        <main class="bg-white-300 flex-1 p-3 overflow-hidden">
          <div class="flex flex-col">
           <router-view />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
