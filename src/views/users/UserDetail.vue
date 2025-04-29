<script setup>
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import UserItem from '@/components/users/UserItem.vue'
import withAxios from '@/utils/withAxios.js'
const route = useRoute()
const user = ref({})
const fetchUser = async () => {
  const res = await withAxios.get(`/users/${route.params.id}`)
  user.value = res.data
}
onMounted(async () => {
  await fetchUser()
})
</script>

<template>
  <UserItem :user="user" />
</template>

<style scoped></style>
