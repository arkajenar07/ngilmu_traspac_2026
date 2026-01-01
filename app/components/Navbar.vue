<template>
  <header
    class="fixed w-full top-0 left-0 bg-white/70 backdrop-blur-xl px-6 md:px-16 py-4 flex justify-between items-center z-50 border-b border-white/20 shadow-sm"
  >
    <div class="flex items-center gap-12">
      <NuxtLink to="/" class="flex items-center gap-2 group">
        <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
           <img src="/assets/icons/spark.svg" class="w-5 h-5 brightness-0 invert" alt="Logo Icon" />
        </div>
        <h1 class="text-2xl font-black text-slate-900 tracking-tighter">Ngilmu<span class="text-primary">.</span></h1>
      </NuxtLink>

      <nav class="hidden lg:block">
        <ul class="flex gap-8 items-center">
          <li
            v-for="item in [
              { name: 'Beranda', path: '/' },
              { name: 'Mentor', path: '/mentor' },
              { name: 'Learning Path', path: '/learning-path' },
              { name: 'Event', path: '/event' },
              { name: 'Testimoni', path: '/testimoni' },
            ]"
            :key="item.name"
          >
            <NuxtLink
              :to="item.path"
              class="text-slate-600 hover:text-primary font-medium text-sm transition-all duration-300 relative group py-2"
            >
              {{ item.name }}
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

    <div class="flex gap-4 items-center">
      <NuxtLink 
        to="/login" 
        class="text-slate-700 hover:text-primary font-semibold text-sm px-4 py-2 transition-colors"
      >
        Masuk
      </NuxtLink>
      
      <NuxtLink 
        to="/register" 
        class="bg-primary hover:bg-primary/90 text-white font-bold text-sm px-6 py-2.5 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transform hover:-translate-y-0.5 transition-all flex items-center gap-2"
      >
        <span>Daftar</span>
        <img src="/assets/icons/spark.svg" class="w-4 h-4 brightness-0 invert" alt="Spark" />
      </NuxtLink>

      <button class="lg:hidden p-2 text-slate-900">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>
  </header>
</template>