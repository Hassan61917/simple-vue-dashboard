<script setup>
defineProps({
  user: { type: Object, required: true },
})
</script>

<template>
  <tr >
    <td class="p-2 text-base text-gray-700 whitespace-nowrap">{{ user.name }}</td>
    <td class="p-2 text-base text-gray-700 whitespace-nowrap">{{ user.email }}</td>
    <td class="p-2 text-base text-gray-700 whitespace-nowrap">{{ user.phone }}</td>
    <td class="p-2 text-base text-gray-700 whitespace-nowrap text-center">
      <div class="px-1 py-1">
        <router-link :to="`/users/${user.id}`"
          class="px-1 py-1 mr-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-green-900 border border-transparent rounded-md hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
        >
          مشاهده
        </router-link>
        <router-link :to="`/users/${user.id}/edit`"
          class="px-1 py-1 mr-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-900 border border-transparent rounded-md hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
        >
          ویرایش
        </router-link>
        <button
          class="px-1 py-1 mr-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-900 border border-transparent rounded-md hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
        >
          حذف
        </button>
      </div>
    </td>
  </tr>
</template>

<style scoped></style>
