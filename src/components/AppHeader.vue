<script setup>

import { ref } from 'vue'

const profileDropdown = ref()

const  profileToggle = () => {
  if (profileDropdown.value.style.display === "") {
    profileDropdown.value.style.display = "block";
  } else {
    profileDropdown.value.style.display = "";
  }
}
</script>

<template>
  <header class="bg-nav">
    <div class="flex justify-between">
      <div class="p-1 mx-3 inline-flex items-center">
        <i class="fas fa-bars pr-2 text-white"></i>
        <h1 class="text-white p-2">Logo</h1>
      </div>
      <div class="p-1 flex flex-row items-center">
        <img class="inline-block h-8 w-8 rounded-full" src="https://avatars0.githubusercontent.com/u/4323180?s=460&v=4" alt="">
        <a href="#" @click="profileToggle" class="text-white p-2 no-underline hidden md:block lg:block">Adam Wathan</a>
        <div class="rounded hidden shadow-md bg-white absolute pin-t mt-40 mr-1 pin-r" ref="profileDropdown">
          <ul class="list-reset">
            <li><a href="#" class="no-underline px-4 py-2 block text-black hover:bg-grey-light">My account</a></li>
            <li><a href="#" class="no-underline px-4 py-2 block text-black hover:bg-grey-light">Notifications</a></li>
            <li><hr class="border-t mx-2 border-grey-light"></li>
            <li><a href="#" class="no-underline px-4 py-2 block text-black hover:bg-grey-light">Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>
