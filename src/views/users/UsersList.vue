<script setup>
import UsersTable from '@/components/users/UsersTable.vue'
import useUsersStore from '@/stores/usersStore.js'
import { onMounted, reactive } from 'vue'

const store = useUsersStore()
onMounted(async () => {
  await store.fetchUsers()
})
const users = reactive(store.users)
</script>

<template>
    <UsersTable :users="users" />
</template>

<style scoped></style>
