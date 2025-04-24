<script setup lang="ts">

</script>
<template>
  <div class="bg-gradient-to-bl from-blue-100 to-blue-300 py-40 md:pt-40 h-full">
    <div class="flex flex-col md:flex-row items-center md:justify-between mx-8">
      <!-- Mobile name -->
      <h1 class="md:hidden text-3xl text-blue-950 text-center pb-6 animate-fade-in-up">Bagas Adi Susetyo</h1>

      <!-- Image -->
      <img src="../assets/Bagas.jpeg" alt="Bagas Adi"
        class="rounded-2xl w-[300px] h-[400px] md:animate-fade-in-right delay-500">
      <div class="mt-5 flex flex-col md:ml-16 items-center md:items-start text-blue-950">
        <span class="block animate-fade-in-right delay-300 text-3xl md:text-4xl mb-4 font-bold">Self-taught
          developer</span>
        <p class="text-center md:text-left md:text-xl animate-fade-in-right delay-300">
          With the passion for software engineering. Focused on backend or fullstack development with <span
            class="font-bold">Go</span> and <span class="font-bold">Vue</span>.
          <br>
          Ready to bring fresh ideas and problem solving skills to new Projects.
        </p>
        <div class="flex flex-wrap my-6 space-x-4 md:space-x-8 items-center justify-center animate-fade-in-up">
          <img src="../assets/gopher.png" alt="golang" class="w-16 md:w-20 ">
          <img src="../assets/psql.png" alt="golang" class="w-16 md:w-20">
          <img src="../assets/vue.png" alt="golang" class="w-16 md:w-20">
          <img src="../assets/git.png" alt="golang" class="w-16 md:w-20">
          <img src="../assets/docker.png" alt="golang" class="w-16 md:w-20">
          <img src="../assets/tailwind.png" alt="golang" class="w-16 md:w-20">
        </div>
        <router-link to="/profile"
          class="block mt-4 px-4 py-4 md:py-6 bg-green-300 rounded-xl mb-8 text-center font-bold active:bg-green-400 transition delay-150 duration-200 ease-in-out hover:scale-110 hover:bg-green-500 animate-fade-in-up ">Get
          to
          know
          me</router-link>
      </div>
    </div>
  </div>
</template>
