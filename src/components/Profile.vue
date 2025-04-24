<script setup lang="ts">
import { ref } from 'vue';

const isBackgroundOpen = ref(false)
const isSkillsOpen = ref(false)
</script>
<template>
  <div class="bg-gradient-to-tl from-blue-100 to-blue-300 py-24 px-6 md:px-8 min-h-screen animate-fade-in-up delay-200">
    <h1 class="pb-2 border-b-2 border-blue-950 text-2xl text-center mb-4 text-blue-950 md:text-left">Profile</h1>
    <div class="flex flex-col items-center space-y-4 md:flex-row-reverse md:space-y-0 md:space-x-8 md:justify-between">
      <img src="../assets/bagas-red.jpeg" alt="bagas"
        class="rounded-xl w-[150px] h-[200px] object-cover shrink-0 animate-fade-in-right">
      <div class="overflow-x-auto w-full max-w-md md:flex-1">
        <table class="md:w-full border border-gray-300 animate-fade-in-left">
          <tbody>
            <tr class="bg-gray-100">
              <td class="border px-4 py-2 font-semibold">Name</td>
              <td class="border px-4 py-2">Bagas Adi Susetyo</td>
            </tr>
            <tr>
              <td class="border px-4 py-2 font-semibold">Birth</td>
              <td class="border px-4 py-2">Ngawi, 22 March 2001</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="border px-4 py-2 font-semibold">Education</td>
              <td class="border px-4 py-2 ">Bachelor of literature in Hasanuddin University</td>
            </tr>
            <tr>
              <td class="border px-4 py-2 font-semibold">Address</td>
              <td class="border px-4 py-2">Sentul, West Java</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="border px-4 py-2 font-semibold">Email</td>
              <td class="border px-4 py-2">bagasadisusetyo2@gmail.com</td>
            </tr>
            <tr>
              <td class="border px-4 py-2 font-semibold">Number</td>
              <td class="border px-4 py-2">+62 819 0524 1234</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div>
      <!-- Background Menu -->
      <button
        class="text-blue-950 text-2xl my-2 pb-2 border-b-2 border-blue-950 active:bg-blue-400 active:scale-90 animate-fade-in-left delay-300"
        @click="isBackgroundOpen = !isBackgroundOpen" aria-label="Toggle Background">
        Background >
      </button>
      <br>
      <Transition enter-active-class="transition ease-out duration-300" enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-200"
        leavehover:text-blue-500-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-4">
        <div v-if="isBackgroundOpen" class="m-2">
          <div class="md:text-lg text-blue-950">
            <p>
              Ever since I was a child, I’ve been fascinated by computers and mobile phones—especially how software
              works behind the scenes. I was always curious about how games were made or how people could connect
              through the internet. That curiosity led me to choose Software Engineering as my major in vocational high
              school, where I learned the fundamentals of web development—HTML, CSS, and JavaScript.
            </p>
            <br>
            <p>
              After graduating in 2018, I decided to pursue a Bachelor’s degree in English Literature at Hasanuddin
              University. I believed that being fluent in English would open up more opportunities, especially in the
              tech industry. During my time at university, I developed strong skills in academic writing, critical
              thinking, and communication. I graduated in August 2023 with a <span class="font-bold">GPA of 3.46.</span>
            </p>
            <br>
            <p>
              Shortly after, I returned to Bogor and got my first job in January 2024 as a Credit Marketing Officer at
              Mandiri Utama Finance. However, by May 2024, things didn’t work out as expected, and I had to move on. I
              kept applying for jobs, attended a few interviews, but didn't land a new position right away—so I started
              working as a ShopeeFood driver while continuing my job search.
              But deep down, I knew I couldn’t stay stuck. I went back to my original passion: programming. I began
              self-studying, practicing consistently, and rebuilding my skills from the ground up—driven by the hope
              that one day, I’ll become a full-time programmer.
              And here I am—committed, constantly learning, and ready to grow in the world of tech.
            </p>
            <br>
            <p>
              Right now, I’m focused on backend and fullstack development using <span class="font-bold">Golang,
                PostgreSQL, Docker, and Vue.js.</span> I'm committed to continuous learning and building real-world
              projects to sharpen my skills.
            </p>
          </div>
          <br>
        </div>
      </Transition>

      <!-- Skills Menu -->
      <button
        class="text-blue-950 text-2xl my-2 pb-2 border-b-2 border-blue-950 active:bg-blue-400 active:scale-90 animate-fade-in-left delay-300"
        @click="isSkillsOpen = !isSkillsOpen" aria-label="Toggle skills">
        Skills >
      </button>

      <Transition enter-active-class="transition ease-out duration-300" enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-200"
        leavehover:text-blue-500-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-4">
        <div v-if="isSkillsOpen" class="m-2 text-blue-950 text-sm">
          <div class="flex flex-wrap gap-4">
            <div
              class="bg-gradient-to-bl from-cyan-400 via-blue-300 to-blue-100 flex-grow basis-full py-2 sm:basis-[48%] lg:basis-[30%] flex items-center px-4 rounded-2xl transform transition hover:scale-105 duration-300">
              <img src="../assets/gopher.png" alt="gopher logo" class=" block w-16 mr-4">
              <div>
                <h3 class="font-bold text-lg mb-1">Go</h3>
                <p>I Used golang as my primary language for building RESTful API services, connecting to database and
                  many more.</p>
              </div>
            </div>
            <div
              class="bg-gradient-to-tl from-cyan-400 via-blue-300 to-blue-100  flex-grow basis-full py-2 sm:basis-[48%] lg:basis-[30%] flex items-center px-4 rounded-2xl transform transition hover:scale-105 duration-300">
              <img src="../assets/docker.png" alt="docker logo" class=" block w-16 mr-4">
              <div>
                <h3 class="font-bold text-lg mb-1">Docker</h3>
                <p>Using Docker for containerization, building and deploying app for portability so it can be used on
                  other machine.</p>
              </div>
            </div>
            <div
              class="bg-gradient-to-bl from-cyan-400 via-blue-300 to-blue-100 flex-grow basis-full py-2 sm:basis-[48%] lg:basis-[30%] flex items-center px-4 rounded-2xl transform transition hover:scale-105 duration-300">
              <img src="../assets/git.png" alt="git logo" class=" block w-16 mr-4">
              <div>
                <h3 class="font-bold text-lg mb-1">Git</h3>
                <p>Managing, organizing and saving using git versioning. Also share source code to github for people to
                  see</p>
              </div>
            </div>
            <div
              class="bg-gradient-to-t from-cyan-400 via-blue-300 to-blue-100 flex-grow basis-full py-2 sm:basis-[48%] lg:basis-[30%] flex items-center px-4 rounded-2xl transform transition hover:scale-105 duration-300">
              <img src="../assets/vue.png" alt="vue logo" class=" block w-16 mr-4">
              <div>
                <h3 class="font-bold text-lg mb-1">Vue</h3>
                <p>I use Vue to build interactive and reactive frontend components. It's lightweight, easy to learn, and
                  perfect for building modern single-page applications.</p>
              </div>
            </div>
            <div
              class="bg-gradient-to-r from-cyan-400 via-blue-300 to-blue-100 flex-grow basis-full py-2 sm:basis-[48%] lg:basis-[30%] flex items-center px-4 rounded-2xl transform transition hover:scale-105 duration-300">
              <img src="../assets/linux.png" alt="linux logo" class=" block w-16 mr-4">
              <div>
                <h3 class="font-bold text-lg mb-1">Linux</h3>
                <p>Linux is my daily operating system. I use it for development, server deployment, and system
                  customization to boost performance. <span class="font-bold">I use Arch btw.</span></p>
              </div>
            </div>
            <div
              class="bg-gradient-to-l from-cyan-400 via-blue-300 to-blue-100 flex-grow basis-full py-2 sm:basis-[48%] lg:basis-[30%] flex items-center px-4 rounded-2xl transform transition hover:scale-105 duration-300">
              <img src="../assets/tailwind.png" alt="tailwind logo" class=" block w-16 mr-4">
              <div>
                <h3 class="font-bold text-lg mb-1">Tailwind</h3>
                <p>Tailwind CSS to style my projects efficiently. Utility-first approach helps me build responsive,
                  clean, and modern UI without writing tons of custom CSS.</p>
              </div>
            </div>
            <div
              class="bg-gradient-to-t from-cyan-400 via-blue-300 to-blue-100 flex-grow basis-full py-2 sm:basis-[48%] lg:basis-[30%] flex items-center px-4 rounded-2xl transform transition hover:scale-105 duration-300">
              <img src="../assets/psql.png" alt="postgresql logo" class=" block w-16 mr-4">
              <div>
                <h3 class="font-bold text-lg mb-1">PostgreSQL</h3>
                <p>I use PostgreSQL as my main relational database to store, query, and manage structured data. It's
                  powerful, open-source, and reliable for backend applications.</p>
              </div>
            </div>
            <div
              class="bg-gradient-to-tr from-cyan-400 via-blue-300 to-blue-100 flex-grow basis-full py-2 sm:basis-[48%] lg:basis-[30%] flex items-center px-4 rounded-2xl transform transition hover:scale-105 duration-300">
              <img src="../assets/neovim.png" alt="word logo" class=" block w-16 mr-4">
              <div>
                <h3 class="font-bold text-lg mb-1">Neovim</h3>
                <p>Neovim is my primary code editor. I’ve customized it with Lua, integrated LSP support, and Treesitter
                  for syntax highlighting, making it a powerful and minimal environment tailored to my workflow.</p>
              </div>
            </div>
            <div
              class="bg-gradient-to-tl from-cyan-400 via-blue-300 to-blue-100 flex-grow basis-full py-2 sm:basis-[48%] lg:basis-[30%] flex items-center px-4 rounded-2xl transform transition hover:scale-105 duration-300">
              <img src="../assets/word.png" alt="word logo" class=" block w-16 mr-4">
              <div>
                <h3 class="font-bold text-lg mb-1">Word</h3>
                <p>Microsoft Word for creating professional documents, reports, and proposals. It helps me organize
                  thoughts and present ideas clearly with formatting tools and collaboration features.</p>
              </div>
            </div>
            <div
              class="bg-gradient-to-bl from-cyan-400 via-blue-300 to-blue-100 flex-grow basis-full py-2 sm:basis-[48%] lg:basis-[30%] flex items-center px-4 rounded-2xl transform transition hover:scale-105 duration-300">
              <img src="../assets/problem-solving.png" alt="problem solving logo" class=" block w-16 mr-4">
              <div>
                <h3 class="font-bold text-lg mb-1">Problem Solving</h3>
                <p>Problem-solving is one of my core strengths. I approach challenges with a logical mindset, breaking
                  down complex issues into manageable steps and finding effective solutions.</p>
              </div>
            </div>
            <div
              class="bg-gradient-to-l from-cyan-400 via-blue-300 to-blue-100 flex-grow basis-full py-2 sm:basis-[48%] lg:basis-[30%] flex items-center px-4 rounded-2xl transform transition hover:scale-105 duration-300">
              <img src="../assets/adaptable.png" alt="adaptable logo" class=" block w-16 mr-4">
              <div>
                <h3 class="font-bold text-lg mb-1">Adaptable</h3>
                <p>I am highly adaptable, quickly adjusting to new environments, technologies, or tasks. Whether it's
                  learning a new tool or taking on a different role, I thrive in dynamic settings.</p>
              </div>
            </div>
            <div
              class="bg-gradient-to-r from-cyan-400 via-blue-300 to-blue-100 flex-grow basis-full py-2 sm:basis-[48%] lg:basis-[30%] flex items-center px-4 rounded-2xl transform transition hover:scale-105 duration-300">
              <img src="../assets/fast-learning.png" alt="fast learning logo" class=" block w-16 mr-4">
              <div>
                <h3 class="font-bold text-lg mb-1">Fast learning</h3>
                <p>I am a fast learner, able to quickly pick up new technologies and concepts. This allows me to stay
                  up-to-date with industry trends and adapt my skills to new challenges efficiently.</p>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
