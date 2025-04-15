<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)
const isModalOpen = ref(false)
const name = ref("")
const email = ref('')
const message = ref('')

function sendToWhatsapp (e: Event) {
  e.preventDefault
  
  const myNumber = "6287728686247"
  const textMsg = `Hi, I'm ${name.value} (${email.value}) want to work with you. \n\nMessage:\n${message.value}`
  const url = `https://wa.me/${myNumber}?text=${encodeURIComponent(textMsg)}`
  
  window.open(url, "_blank")
}
</script>

<template>
  <div>
    <header
      class="flex items-center justify-between p-4 rounded-b-2xl shadow-lg shadow-black-300 fixed top-0 left-0 w-full z-50 backdrop-blur-xs animate-fade-in-up delay-200">
      <!-- Name -->
      <h1 class="hidden md:block text-2xl md:text-3xl text-blue-950">
        Bagas Adi Susetyo
      </h1>

      <!-- Dropdown Button -->
      <button
        class="md:hidden text-blue-950 text-4xl mb-1 z-10 px-4 pb-2 bg-blue-300 rounded-xl active:bg-blue-400 active:scale-90"
        @click="isMenuOpen = !isMenuOpen" aria-label="Toggle menu">
        ☰
      </button>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex space-x-6 text-lg text-blue-950">
        <router-link to="/home" class="hover:underline hover:text-blue-500 border-r border-gray-900 pr-6">Home</router-link>
        <router-link to="/profile" class="hover:underline hover:text-blue-500 border-r border-gray-900 pr-6">Profile</router-link>
        <router-link to="/contact" class="hover:underline hover:text-blue-500 border-r border-gray-900 pr-6">Contact</router-link>
        <router-link to="/post" class="hover:underline hover:text-blue-500 pr-6">Post</router-link>
      </nav>
      <!-- Get in Touch Button -->
      <button @click="isModalOpen = true"
        class="bg-green-300 text-black py-2 px-4 rounded-lg ml-4 text-sm md:text-base active:bg-green-400 transition delay-150 duration-200 ease-in-out hover:scale-110 hover:bg-green-500">
        Get in touch!
      </button>


      <!-- Modal -->
      <Teleport to="body">
        <div v-if="isModalOpen"
          class="fixed inset-0  z-50 flex items-center justify-center bg-transparent bg-opacity-50 backdrop-blur-xs"
          @submit="sendToWhatsapp"
          >
          <div class="bg-white rounded-2xl shadow-xl p-6 w-11/12 max-w-md animate-fade-in-up delay-75 backdrop-blur-xs">
            <h2 class="text-xl font-semibold mb-4 text-blue-950 text-center">Contact Me</h2>
            <form class="space-y-4">
              <input v-model="name" type="text" placeholder="Your Name" class="w-full border rounded-lg border-blue-100 p-2" />
              <input v-model="email" placeholder="Your Email" class="w-full border rounded-lg border-blue-100 p-2" />
              <textarea v-model="message" class="w-full border rounded-lg p-2 h-24 border-blue-100"></textarea>
              <div class="flex justify-between">
                <button type="button" @click="isModalOpen = false" class="text-red-500 hover:underline">Close</button>
                <button type="submit" class="bg-blue-400 text-white px-4 py-2 rounded-lg">Send</button>
              </div>
            </form>
          </div>
        </div>
      </Teleport>
    </header>

    <!-- Mobile Nav -->
    <Transition enter-active-class="transition ease-out duration-300" enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-200"
      leavehover:text-blue-500-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-4">
      <div v-if="isMenuOpen"
        class="md:hidden backdrop-blur-lg py-4 space-y-3 text-blue-950 text-base rounded-b-2xl font-bold shadow-lg left-0 top-20 fixed z-20">
        <router-link to="/home" class="block text-center px-20 py-2 mx-4 border-b border-gray-300 ">Home</router-link>
        <router-link to="/profile" class="block text-center px-20 py-2 mx-4 border-b border-gray-300 ">Profile</router-link>
        <router-link to="/contact" class="block text-center px-20 py-2 mx-4 border-b border-gray-300 ">Contact</router-link>
        <router-link to="/post" class="block text-center px-20 py-2 mx-4 border-b border-gray-300 ">Post</router-link>
      </div>
    </Transition>
  </div>
</template>
