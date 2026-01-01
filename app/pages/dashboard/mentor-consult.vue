<script setup>
import { ref } from 'vue';

// --- STATE MANAGEMENT ---
const isMatching = ref(false); // State untuk menampilkan Matchmaking Form
const isLoading = ref(false); // State untuk menampilkan Loading
const showResult = ref(false); // State untuk menampilkan Popup Hasil
const matchStep = ref(1); 
const matchAnswers = ref({}); 

// Mock Hasil Mentor yang Cocok (berdasarkan kriteria "Advanced/Saintek/Sat-Set")
const recommendedMentor = ref({
    id: 3, 
    name: 'Kak Raka Dwiputra', 
    major: 'Fisika Teknik', 
    alumni: 'ITS', 
    desc: 'Spesialis mentor Advanced dan Saintek. Pendekatan sat-set berbasis problem solving dan logika kuantitatif.',
    rating: 5.0, 
    reviews: 55,
    level: 'Intermediate - Advanced',
    tags: ['#Saintek', '#Fisika', '#Advanced'],
    price: 30000,
    avatar: `https://api.dicebear.com/7.x/adventurer/svg?seed=KakRakaDwiputra`
});

const startMatchmaking = () => {
  isMatching.value = true;
  matchStep.value = 1;
  matchAnswers.value = {};
};

const finishMatchmaking = () => {
  isMatching.value = false;
  isLoading.value = true;

  // Simulasi proses Matching di server (3 detik)
  setTimeout(() => {
    isLoading.value = false;
    showResult.value = true;
  }, 3000);
};

const nextStep = (answer) => {
  if (matchStep.value < 4) {
    matchAnswers.value[`q${matchStep.value}`] = answer;
    matchStep.value++;
  } else if (matchStep.value === 4) {
    matchAnswers.value[`q${matchStep.value}`] = answer;
    finishMatchmaking();
  }
};

const questions = {
    1: { 
        text: 'Bagaimana preferensi gaya bimbingan mentor yang kamu suka?', 
        options: [
            { label: 'Sat-Set, langsung ke inti & efisien waktu', value: 'sat-set' },
            { label: 'Slow, detail, butuh penjelasan yang mendalam', value: 'slow-detail' }
        ] 
    },
    2: { 
        text: 'Bidang studi utama apa yang ingin kamu diskusikan?', 
        options: [
            { label: 'Penalaran/Logika (Numerik/Verbal)', value: 'logika' },
            { label: 'Sains & Teknik (Fisika, Matematika)', value: 'saintek' },
            { label: 'Bisnis & Sosial (Critical Thinking, Wawancara)', value: 'sosial' }
        ] 
    },
    3: { 
        text: 'Level mana yang paling sesuai dengan kebutuhanmu saat ini?', 
        options: [
            { label: 'Basic/Pemula (Mulai dari dasar)', value: 'basic' },
            { label: 'Intermediate (Memperkuat konsep)', value: 'intermediate' },
            { label: 'Advanced/HOTS (Siap ujian sulit)', value: 'advanced' }
        ] 
    },
    4: { 
        text: 'Apa tujuan utama dari sesi mentoring ini?', 
        options: [
            { label: 'Perbaikan nilai/akademik', value: 'nilai' },
            { label: 'Persiapan ujian masuk PTN/Kedinasan', value: 'ptn' },
            { label: 'Pengembangan skill non-akademik', value: 'skill' }
        ] 
    }
};

// Mock data for mentor listing
const mentors = [
  // ... (Data mentors tetap sama untuk list di bawah)
  { 
    id: 1, 
    name: 'Kak Akram Hidayat', 
    major: 'Informatika', 
    alumni: 'UI', 
    desc: 'Spesialis di penalaran komputasional & HOTS. Suka ngajar dari nol sampai siap tempur.',
    rating: 4.9, 
    reviews: 145,
    level: 'Basic - Intermediate',
    tags: ['#IT', '#Logika', '#HOTS'],
    price: 30000 
  },
  { 
    id: 2, 
    name: 'Kak Luna Puspita', 
    major: 'Manajemen Bisnis', 
    alumni: 'ITB', 
    desc: 'Berpengalaman membimbing siswa ke jurusan Ekonomi/Bisnis. Fokus pada analisis dan komunikasi.',
    rating: 4.7, 
    reviews: 89,
    level: 'Basic - Intermediate',
    tags: ['#Bisnis', '#Verbal', '#Wawancara'],
    price: 30000 
  },
  { 
    id: 3, 
    name: 'Kak Raka Dwiputra', 
    major: 'Fisika Teknik', 
    alumni: 'ITS', 
    desc: 'Cocok untuk yang ingin masuk Teknik atau Saintek. Mengajar dengan pendekatan berbasis problem solving.',
    rating: 5.0, 
    reviews: 55,
    level: 'Intermediate - Advanced',
    tags: ['#Saintek', '#Fisika', '#Advanced'],
    price: 30000 
  },
];
</script>

<template>
  <Sidebar />
  <section class="min-h-screen bg-[#F8FAFC] py-8 px-8 font-sans text-slate-600 ml-72">
    <div class="max-w-[1280px] mx-auto space-y-8">

      <div>
        <h1 class="text-3xl font-bold text-slate-900 tracking-tight">
          Konsultasi & Mentoring Khusus
        </h1>
        <p class="text-slate-500 mt-1">
          Temukan mentor yang paling sesuai dengan kebutuhan belajarmu hari ini.
        </p>
      </div>

      <div v-if="isLoading" class="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-[999] flex items-center justify-center p-4">
        <div class="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl space-y-4 text-center">
            <svg class="animate-spin h-8 w-8 text-primary mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p class="text-lg font-semibold text-slate-700">Mencari Mentor Paling Cocok...</p>
            <p class="text-sm text-slate-500">Ini mungkin membutuhkan waktu 3 detik.</p>
        </div>
      </div>
      
      <div v-if="isMatching" class="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-[999] flex items-center justify-center p-4">
        <div class="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl space-y-6">
          <div class="flex justify-between items-center border-b border-slate-100 pb-4">
            <h2 class="text-xl font-bold text-slate-800">
                ⚡ Mentor Match (Langkah {{ matchStep }}/4)
            </h2>
            <button @click="isMatching = false" class="text-slate-400 hover:text-red-500 text-2xl leading-none">
                &times;
            </button>
          </div>
          
          <div class="space-y-6">
            <p class="text-lg font-semibold text-slate-700">{{ questions[matchStep].text }}</p>
            
            <div class="space-y-3">
              <button 
                v-for="option in questions[matchStep].options" 
                :key="option.value"
                @click="nextStep(option.value)"
                class="w-full text-left p-4 rounded-xl border-2 border-slate-200 hover:border-primary hover:bg-indigo-50 transition-all font-medium text-slate-700"
              >
                {{ option.label }}
              </button>
            </div>
          </div>
          
          <div class="h-2 bg-slate-100 rounded-full overflow-hidden">
            <div 
                class="bg-primary h-full rounded-full transition-all duration-300" 
                :style="{ width: `${(matchStep / 4) * 100}%` }"
            ></div>
          </div>
        </div>
      </div>

      <div v-if="showResult && recommendedMentor" class="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-[999] flex items-center justify-center p-4">
        <div class="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl space-y-6 text-center">
            
            <span class="text-4xl">🎉</span>
            <h2 class="text-2xl font-bold text-slate-800">
                Mentor Terbaikmu Ditemukan!
            </h2>
            <p class="text-slate-600">
                Berdasarkan jawabanmu, **{{ recommendedMentor.name }}** sangat cocok untuk membimbingmu!
            </p>

            <div class="p-4 bg-slate-50 rounded-2xl flex items-center gap-4 text-left">
                <div class="w-14 h-14 rounded-full overflow-hidden border-2 border-primary shrink-0">
                    <img :src="recommendedMentor.avatar" class="w-full h-full object-cover bg-indigo-50" />
                </div>
                <div>
                    <h3 class="font-bold text-slate-900">{{ recommendedMentor.name }}</h3>
                    <p class="text-xs text-slate-500">{{ recommendedMentor.major }} · {{ recommendedMentor.level }}</p>
                    <p class="text-xs font-semibold text-emerald-600">🌟 {{ recommendedMentor.rating }} ({{ recommendedMentor.reviews }} Review)</p>
                </div>
            </div>

            <div class="flex flex-col gap-3 pt-2">
                 <button class="w-full py-3 bg-primary text-white rounded-xl font-bold text-sm hover:bg-indigo-700 transition-colors shadow-md shadow-primary/30">
                    Sesi Mentoring (Rp{{ recommendedMentor.price.toLocaleString('id-ID') }})
                 </button>
                 <button @click="showResult = false" class="w-full py-3 bg-emerald-500 text-white rounded-xl font-bold text-sm hover:bg-emerald-600 transition-colors">
                    Konsultasi Cepat (Gratis)
                 </button>
                 <button @click="showResult = false" class="w-full text-sm font-medium text-slate-500 hover:text-primary mt-2">
                    Lihat Pilihan Mentor Lain
                 </button>
            </div>
        </div>
      </div>
      
      <div class="space-y-8">
        
        <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
            <h2 class="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span class="text-2xl text-amber-500">✨</span> Rekomendasi Mentor Cerdas
            </h2>
            <p class="text-sm text-slate-500">
                Gunakan fitur *Mentor Match* untuk menemukan mentor yang paling sesuai dengan gaya belajar, level, dan tujuanmu hanya dalam 4 pertanyaan.
            </p>
            <button @click="startMatchmaking" class="px-6 py-3 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-indigo-700 transition-colors shadow-md shadow-primary/30">
                Mulai Matchmaking Sekarang
            </button>
        </div>

        <div class="flex flex-col md:flex-row gap-4">
            <div class="flex-1 relative">
                <input type="text" placeholder="Cari mentor berdasarkan nama, jurusan, atau fokus..." class="w-full bg-white border border-slate-200 text-sm p-3 pl-10 rounded-xl focus:ring-primary focus:border-primary transition-all shadow-sm">
                <span class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
            </div>
            <button class="flex items-center gap-2 px-4 py-3 bg-white border border-slate-200 rounded-xl font-semibold text-sm hover:bg-slate-50 transition-colors shadow-sm shrink-0">
                <span class="text-xl align-middle">⚙️</span> Filter Detail
            </button>
        </div>


        <div class="space-y-6">
          <h2 class="text-xl font-bold text-slate-900">Mentor Tersedia (3 Mentor)</h2>
          
          <div v-for="mentor in mentors" :key="mentor.id" class="bg-white rounded-3xl p-6 border border-slate-200 shadow-md hover:shadow-lg transition-all space-y-5">
            <div class="flex flex-col md:flex-row justify-between items-start gap-4">
              
              <div class="flex items-center gap-4">
                <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-primary shrink-0">
                  <img :src="`https://api.dicebear.com/7.x/adventurer/svg?seed=${mentor.name.replace(' ', '')}`" class="w-full h-full object-cover bg-indigo-50" :alt="mentor.name" />
                </div>
                <div>
                  <h3 class="text-lg font-bold text-slate-900">{{ mentor.name }}</h3>
                  <p class="text-sm text-slate-500">{{ mentor.major }} · Alumni {{ mentor.alumni }}</p>
                  <p class="text-xs font-semibold text-emerald-600 mt-1">
                    <span class="text-xl align-middle">🌟</span> {{ mentor.rating }} ({{ mentor.reviews }} Review)
                  </p>
                </div>
              </div>

              <div class="flex flex-col sm:flex-row items-end sm:items-center gap-3 shrink-0">
                <div class="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-bold">{{ mentor.level }}</div>
                 
                <button class="px-4 py-2 bg-emerald-500 text-white rounded-xl font-bold text-sm hover:bg-emerald-600 transition-colors shadow-md shadow-emerald-200 w-full sm:w-auto">
                   Konsultasi (Gratis)
                </button>
                 
                <button class="px-4 py-2 bg-primary text-white rounded-xl font-bold text-sm hover:bg-indigo-700 transition-colors shadow-md shadow-primary/30 w-full sm:w-auto">
                   Sesi Mentoring (Rp{{ mentor.price.toLocaleString('id-ID') }})
                </button>
              </div>
            </div>
            
            <div class="border-t border-slate-100 pt-4">
              <p class="text-sm text-slate-700 italic mb-3">{{ mentor.desc }}</p>
              
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in mentor.tags" :key="tag" class="text-xs font-medium bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                  {{ tag }}
                </span>
                <span class="text-xs font-medium text-primary cursor-pointer hover:underline">Lihat Semua Fokus...</span>
              </div>
            </div>
          </div>
          
          <div class="text-center pt-4">
            <button class="text-sm font-semibold text-primary hover:text-indigo-700 transition-colors">
              Muat Mentor Lebih Banyak ↓
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>