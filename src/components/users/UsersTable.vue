<script setup>
import { ref, watch } from 'vue'
import UsersTableItem from '@/views/users/UsersTableItem.vue'
import TablePagination from '@/components/TablePagination.vue'
const props = defineProps({
  users: { type: Array, required: true },
})
const search = ref('')
const filterUsers = ref(props.users)
watch(search, (value) => {
  filterUsers.value = props.users.filter((u) => u.name.includes(value.toLowerCase()))
})
</script>

<template>
  <div class="bg-white rounded-lg animate-fade-in-down">
    <div class="flex flex-col md:flex-row md:justify-between m-2 p-2">
      <div class="flex items-center mb-2 md:mb-0">
        <router-link
          to="/users/create"
          class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
        >
          ایجاد کاربر جدید
        </router-link>
      </div>
      <div class="flex items-center">
        <input
          v-model="search"
          class="appearance-none block w-full md:w-48 px-6 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="جستجو(نام,ایمیل,شماره)"
        />
      </div>
    </div>

    <div class="overflow-auto rounded-lg shadow">
      <table class="w-full">
        <thead class="bg-gray-300">
          <tr>
            <th class="w-20 p-3 text-sm font-bold tracking-wide">نام</th>
            <th class="w-20 p-3 text-sm font-bold tracking-wide">ایمیل</th>
            <th class="w-20 p-3 text-sm font-bold tracking-wide">شماره</th>
            <th class="w-20 p-3 text-sm font-bold tracking-wide text-center">عملیات ها</th>
          </tr>
        </thead>
        <tbody>
          <UsersTableItem v-for="user in filterUsers" :user="user" :key="user.id" />
        </tbody>
      </table>
      <TablePagination :total="100" v-if="search === ''" />
    </div>
  </div>
</template>

<style scoped></style>
