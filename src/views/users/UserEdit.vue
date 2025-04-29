<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import UserEditComponent from '@/components/users/UserEditComponent.vue'
import withAxios from '@/utils/withAxios.js'

const route = useRoute()
const user = ref({})
const fetchUser = async () => {
  const res = await withAxios.get(`/users/${route.params.id}`)
  user.value = { ...res.data }
}
onMounted(async () => {
  await fetchUser()
})
</script>

<template>
  <UserEditComponent :user="user" />
</template>

<style scoped></style>
