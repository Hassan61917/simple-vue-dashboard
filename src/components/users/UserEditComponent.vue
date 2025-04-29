<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  user: { type: Object, required: true },
})
const router = useRouter()
const { name, email, password, phone } = props.user
const handleSubmit = async () => {
  await router.push('/users')
}
</script>

<template>
  <div class="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
    <div class="mb-2 border-solid border-gray-300 rounded border shadow-sm w-full">
      <div class="bg-gray-200 px-2 py-3 border-solid border-gray-200 border-b">ویرایش کاربر</div>
      <div class="p-3">
        <form class="w-full" @submit.prevent="handleSubmit">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-light mb-1"
                for="grid-first-name"
              >
                نام کاربری
              </label>
              <input
                v-model="name"
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white-500"
                id="grid-first-name"
                type="text"
              />
              <p class="text-red-500 text-xs italic" v-if="name === ''">
                فیلد نام کاربری نمیتواند خالی باشد
              </p>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-light mb-1"
                for="grid-last-name"
              >
                ایمیل
              </label>
              <input
                v-model="email"
                class="appearance-none block w-full bg-gray-200 text-grey-darker border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white-500 focus:border-gray-600"
                id="grid-last-name"
                type="email"
              />
              <p class="text-red-500 text-xs italic" v-if="email === ''">
                فیلد ایمیل نمیتواند خالی باشد
              </p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1"
                for="grid-password"
              >
                شماره
              </label>
              <input
                v-model="phone"
                class="appearance-none block w-full bg-grey-200 text-grey-darker border border-grey-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                id="grid-password"
                type="text"
                placeholder="09123456789"
              />
              <p class="text-red-500 text-xs italic" v-if="phone === ''">
                فیلد شماره نمیتواند خالی باشد
              </p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1"
                for="grid-password"
              >
                پسورد
              </label>
              <input
                v-model="password"
                class="appearance-none block w-full bg-grey-200 text-grey-darker border border-grey-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                id="grid-password"
                type="password"
                placeholder="******************"
              />
              <p class="text-red-500 text-xs italic" v-if="password === ''">
                فیلد رمز عبور نمیتواند خالی باشد
              </p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <button
                class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
              >
                ارسال
              </button>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <button
                class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
              >
                انصراف
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
