import { defineStore } from 'pinia'
import { ref } from 'vue'
import withAxios from '@/utils/withAxios.js'

const useUsersStore = defineStore('users', () => {
  const users = ref([])
  const fetchUsers = async () => {
    const res = await withAxios.get("/users")
    users.value = res.data
  }

  return { users, fetchUsers }
})

export default useUsersStore
