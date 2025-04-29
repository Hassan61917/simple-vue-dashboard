<script setup>
defineProps({
  href: { type: String, required: true },
  title: { type: String, required: true },
})
</script>

<template>
  <li class="w-full h-full py-3 px-2 border-b border-light-border hover:bg-amber-300">
    <router-link :to="href" class="font-sans font-hairline hover:font-light text-sm text-nav-item no-underline">
            {{title}}
    </router-link>
  </li>
</template>

<style scoped></style>
