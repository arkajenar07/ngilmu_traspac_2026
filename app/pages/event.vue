<template>
    <Navbar />
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 px-6 py-20">
    <div class="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-3xl"></div>

    <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
      
      <div class="space-y-8 text-left">
        <div class="animate-bounce-slow bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/50 shadow-sm w-fit">
            <span class="text-primary text-xs md:text-sm font-black tracking-[0.2em] uppercase italic">Expert Insight</span>
        </div>

        <h1 class="text-5xl md:text-5xl text-slate-900 font-extrabold leading-[1.1]">
          Perluas <span class="text-primary">Wawasan</span>, Bangun <span class="relative">Koneksi <svg class="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 25 0 50 5 T 100 5" stroke="#4F46E5" stroke-width="2" fill="transparent"/></svg></span>
        </h1>

        <p class="text-slate-600 text-lg md:text-xl leading-relaxed max-w-lg">
          Ikuti berbagai event eksklusif, webinar, dan bootcamp yang dirancang untuk mempersiapkanmu menghadapi tantangan masa depan bersama para mentor ahli.
        </p>

        <div class="flex flex-col sm:flex-row gap-4">
          <button class="px-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/30 hover:scale-105 transition-all">
            Lihat Jadwal Event
          </button>
          <button class="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-2xl hover:bg-slate-50 transition-all">
            Dokumentasi
          </button>
        </div>

        <div class="pt-8 flex items-center gap-8 border-t border-slate-200">
          <div>
            <p class="text-2xl font-bold text-slate-900">50+</p>
            <p class="text-sm text-slate-500">Event Selesai</p>
          </div>
          <div class="w-px h-10 bg-slate-200"></div>
          <div>
            <p class="text-2xl font-bold text-slate-900">10k+</p>
            <p class="text-sm text-slate-500">Alumni Peserta</p>
          </div>
        </div>
      </div>

      <div class="relative group">
        <div class="absolute -top-6 -left-6 z-20 animate-float bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
          <div class="flex items-center gap-3">
            <div class="p-2 bg-orange-100 rounded-lg text-orange-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p class="text-[10px] text-slate-400 font-bold uppercase">Reminder</p>
              <p class="text-sm font-bold text-slate-800">2 Hari Lagi!</p>
            </div>
          </div>
        </div>

        <div class="relative rounded-[40px] overflow-hidden shadow-2xl transform group-hover:rotate-1 transition-transform duration-500">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000" 
            alt="Ngilmu Event" 
            class="w-full h-[500px] object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
          
          <div class="absolute bottom-8 left-8 right-8 text-white">
            <p class="text-white/80 text-sm mb-1">Interactive Webinar</p>
            <h3 class="text-2xl font-bold">Tips Lolos PTN Impian 2024</h3>
          </div>
        </div>

        <div class="absolute -bottom-6 -right-6 z-20 animate-float-delayed bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
          <p class="text-[10px] text-slate-400 font-bold uppercase mb-2">Speakers</p>
          <div class="flex -space-x-3">
            <img class="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/150?u=1" alt="avatar">
            <img class="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/150?u=2" alt="avatar">
            <div class="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600">+3</div>
          </div>
        </div>
      </div>

    </div>
  </section>
<section class="max-w-[1440px] mx-auto my-20 flex flex-col gap-12 items-center px-6 md:px-16 py-12">
    
    <div class="w-full flex flex-col lg:flex-row justify-between items-end gap-8">
      <div class="max-w-3xl space-y-4">
        <div class="flex items-center gap-2 text-primary font-bold uppercase tracking-[0.3em] text-xs">
          <span class="w-10 h-[2px] bg-primary"></span>
          Ngilmu Event Hub
        </div>
        <h2 class="text-3xl md:text-5xl font-black leading-tight text-slate-900">
          Temukan Event yang <br> Mengakselerasi <span class="text-primary italic">Potensimu</span>
        </h2>
        <p class="text-slate-500 font-normal text-lg leading-relaxed max-w-2xl">
          Dari webinar teknis hingga workshop tatap muka, pilih pengalaman belajar yang paling sesuai dengan caramu bertumbuh.
        </p>
      </div>
    </div>

    <div class="w-full flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-50 p-4 rounded-[32px] border border-slate-100">
      <div class="flex items-center gap-2 p-1 bg-white rounded-2xl border border-slate-100 w-full md:w-auto overflow-x-auto no-scrollbar">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="activeCategory = category"
          :class="[
            'px-6 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap',
            activeCategory === category ? 'bg-primary text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'
          ]"
        >
          {{ category }}
        </button>
      </div>

      <div class="relative w-full md:w-80 group">
        <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
        <input type="text" placeholder="Cari workshop atau webinar..." class="w-full pl-12 pr-6 py-3.5 bg-white border border-slate-100 rounded-2xl text-sm outline-none focus:border-primary/30 focus:ring-4 focus:ring-primary/5 transition-all">
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      <div v-for="event in events" :key="event.id" class="group bg-white flex flex-col rounded-[32px] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/60 transform hover:-translate-y-2 transition-all duration-500 overflow-hidden">
        
        <div class="relative h-52 overflow-hidden">
          <img :src="event.image" :alt="event.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
          
          <div class="absolute top-4 right-4">
            <span :class="[
              'px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg backdrop-blur-md',
              event.type === 'Online' ? 'bg-emerald-500/90 text-white' : 'bg-orange-500/90 text-white'
            ]">
              ● {{ event.type }}
            </span>
          </div>
        </div>

        <div class="p-8 flex flex-col flex-grow">
          <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
            {{ event.title }}
          </h3>

          <p class="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-2">
            {{ event.description }}
          </p>

          <div class="mt-auto space-y-3 pt-6 border-t border-slate-50">
            <div class="flex items-center gap-3 text-slate-600">
              <div class="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span class="text-xs font-bold text-slate-700">{{ event.date }}</span>
            </div>

            <div class="flex items-center gap-3 text-slate-600">
              <div class="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span class="text-xs font-medium text-slate-500">{{ event.location }}</span>
            </div>
          </div>

          <a href="#" class="mt-8 w-full py-4 flex justify-center items-center gap-2 bg-primary/5 text-primary rounded-2xl text-sm font-bold hover:bg-primary hover:text-white transition-all duration-300">
            Amankan Slot
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
    <Footer />
</template>

<script setup>
import { ref } from 'vue'

const activeCategory = ref('Semua')
const categories = ['Semua', 'Webinar', 'Workshop', 'Bootcamp', 'Competition']

const events = ref([
  {
    id: 1,
    title: "Mastering AI for Academic Success",
    description: "Belajar cara menggunakan AI secara etis dan produktif untuk membantu riset serta tugas sekolahmu.",
    image: "https://images.unsplash.com/photo-1591115765373-520b7a217286?auto=format&fit=crop&q=80&w=800",
    type: "Online",
    date: "24 Okt 2024, 19:00 WIB",
    location: "Zoom Meeting & Youtube Live"
  },
  {
    id: 2,
    title: "Ngilmu Offline Meetup: Jakarta",
    description: "Sesi networking bareng mentor Ngilmu dan diskusi santai mengenai strategi karier di masa depan.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800",
    type: "Offline",
    date: "12 Nov 2024, 10:00 WIB",
    location: "Kuningan City Mall, Jakarta Selatan"
  },
  {
    id: 3,
    title: "Logic & Critical Thinking Bootcamp",
    description: "Pertajam kemampuan logikamu untuk menaklukkan soal-soal penalaran matematika dan bahasa.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    type: "Online",
    date: "01 - 03 Des 2024",
    location: "Google Meet Exclusive"
  }
])
</script>

<style scoped>

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}
.animate-float-delayed {
  animation: float 6s ease-in-out infinite;
  animation-delay: 3s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
</style>