<template>
    <Sidebar />
  <main class="min-h-screen bg-[#F8FAFC]">
    <section class="ml-72 min-h-screen py-8 px-8 transition-all duration-300">
      <div>
        <header class="mb-12">
          <h1 class="text-3xl font-bold text-dark tracking-tight">
            Jalur Belajar Kustom
          </h1>
          <p class="text-slate-500 font-medium mt-2">Selesaikan kuis singkat ini untuk menyusun kurikulum yang pas buat cara belajarmu.</p>
        </header>

        <div v-if="!roadmap" class="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl mb-12">
          <div class="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
            <h2 class="text-lg font-black text-primary uppercase tracking-widest flex items-center gap-2">
                <span class="text-2xl">🧠</span> Analisis Gaya Belajar
            </h2>
            <span class="text-primary font-black text-xl">{{ currentStep + 1 }} / {{ questions.length }}</span>
          </div>

          <div class="w-full bg-slate-100 h-2 rounded-full mb-10">
            <div 
              class="bg-primary h-full rounded-full transition-all duration-500 shadow-md shadow-primary/50" 
              :style="{ width: ((currentStep + 1) / questions.length) * 100 + '%' }"
            ></div>
          </div>

          <Transition name="fade-slide" mode="out-in">
            <div :key="currentStep" class="space-y-8">
              <p class="text-2xl font-black text-slate-800 leading-snug">
                {{ questions[currentStep].label }}
              </p>
              
              <div class="grid grid-cols-1 gap-4">
                <button 
                  v-for="opt in questions[currentStep].options" 
                  :key="opt.text"
                  @click="handleAnswer(opt.type)"
                  class="group flex items-center justify-between p-6 rounded-2xl border-2 border-slate-200 bg-white hover:border-primary hover:bg-indigo-50 transition-all text-left shadow-sm hover:shadow-lg"
                >
                  <span class="font-bold text-slate-700 group-hover:text-primary transition-colors">{{ opt.text }}</span>
                  <div class="w-6 h-6 rounded-full border-2 border-slate-300 group-hover:border-primary group-hover:bg-primary/10 flex items-center justify-center transition-colors shrink-0">
                    <div class="w-2.5 h-2.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </button>
              </div>
            </div>
          </Transition>
        </div>

        <div v-else class="space-y-12">
          <div class="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl shadow-slate-400">
            <div class="relative z-10">
              <span class="text-emerald-400 font-black uppercase tracking-[0.3em] text-xs">Roadmap Berhasil Disusun</span>
              <h2 class="text-4xl font-black mt-2 mb-4">
                Jalur <span class="italic text-primary">Mastery</span> Fisika & Matematika
              </h2>
              <p class="text-slate-300 text-sm max-w-lg mb-4">
                Kurikulum ini disusun khusus dengan prioritas pada **{{ dominantStyle.toUpperCase() }} Learning** untuk memastikan kamu belajar dengan cara yang paling efektif.
              </p>
              
              <div class="flex flex-wrap gap-4 items-center">
                <span class="bg-white/10 px-4 py-2 rounded-xl text-xs font-bold shadow-inner">📚 {{ generatedPath.length }} Modul</span>
                <span class="bg-white/10 px-4 py-2 rounded-xl text-xs font-bold shadow-inner">⏳ Estimasi 4 Minggu</span>
                <span class="bg-primary px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-primary/30">
                    Gaya Utama: {{ dominantStyle.toUpperCase() }}
                </span>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="absolute left-6 top-0 bottom-0 w-1 bg-slate-200 rounded-full hidden md:block z-0"></div>

            <div class="space-y-10">
              <div v-for="(module, index) in generatedPath" :key="index" class="relative md:pl-20 group">
                
                <div class="absolute left-6 top-6 -translate-x-1/2 w-10 h-10 bg-white border-4 border-slate-300 rounded-full z-10 flex items-center justify-center transition-all duration-300"
                    :class="{ 'border-primary': index === 0, 'border-emerald-500': index > 0 && index < generatedPath.length }">
                  <span class="text-xs font-black" :class="index === 0 ? 'text-primary' : 'text-slate-400'">{{ index + 1 }}</span>
                </div>

                <div 
                  class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-md transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
                  :class="{
                    'shadow-2xl border-primary/50 scale-[1.01]': index === 0,
                    'opacity-60 grayscale hover:opacity-100 hover:grayscale-0 cursor-default': index > 0
                  }"
                >
                  <div class="space-y-3">
                    <div class="flex items-center gap-3">
                      <span class="px-3 py-1 bg-indigo-100 rounded-lg text-[10px] font-black uppercase text-indigo-600 tracking-widest">{{ module.category }}</span>
                      <span v-if="index === 0" class="text-xs font-bold text-emerald-500 flex items-center gap-1">
                        <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span> Sedang Aktif
                      </span>
                    </div>
                    <h3 class="text-xl md:text-2xl font-black text-slate-900 tracking-tight">{{ module.title }}</h3>
                    <p class="text-slate-600 font-medium max-w-lg">{{ module.desc }}</p>
                    
                    <div class="flex gap-4 text-xs font-bold text-slate-500 pt-1">
                        <span>🎬 {{ module.videos }} Video</span>
                        <span>📝 {{ module.quizzes }} Quiz</span>
                        <span :class="module.priority === dominantStyle ? 'text-primary' : 'text-slate-400'">✨ Priority: {{ module.priority.toUpperCase() }}</span>
                    </div>
                  </div>

                  <div class="w-full md:w-auto flex flex-col items-center gap-3 shrink-0">
                    <button 
                      class="w-full md:w-auto px-6 md:px-8 py-3 rounded-xl font-black text-sm uppercase tracking-widest transition-all"
                      :class="index === 0 ? 'bg-primary text-white shadow-lg shadow-primary/30 hover:bg-indigo-700' : 'bg-slate-100 text-slate-400 cursor-not-allowed'"
                      :disabled="index !== 0"
                    >
                      {{ index === 0 ? 'Mulai Modul Ini' : 'Terkunci' }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="text-center pt-8">
              <p class="text-sm text-slate-500 mb-4">Ingin coba gaya belajar lain? Reset untuk mencoba kuis lagi.</p>
             <button @click="resetRoadmap" class="text-slate-500 font-bold hover:text-primary transition-colors uppercase tracking-widest text-xs py-2 px-4 border border-slate-300 rounded-xl">
                 <span class="mr-2">🔄</span> Atur Ulang Roadmap
             </button>
          </div>
        </div>

      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const currentStep = ref(0)
const roadmap = ref(false)
// Mengubah skor menjadi objek dengan string style
const score = reactive({ visual: 0, logic: 0, practice: 0 }) 

const questions = [
  { label: "Gimana caramu paling cepat paham materi baru?", options: [{text: "Nonton video animasi / diagram", type: "visual"}, {text: "Baca rumus & bukti logisnya", type: "logic"}, {text: "Langsung coba kerjain soal", type: "practice"}] },
  { label: "Kalau lagi belajar fisika, kamu lebih suka...", options: [{text: "Lihat simulasi gerakannya", type: "visual"}, {text: "Nurunin rumusnya dari awal", type: "logic"}, {text: "Eksperimen pake alat sendiri", type: "practice"}] },
  { label: "Apa yang bikin kamu bosan pas belajar?", options: [{text: "Kebanyakan teks tanpa gambar", type: "visual"}, {text: "Langkah yang nggak sistematis", type: "logic"}, {text: "Terlalu banyak teori tanpa aksi", type: "practice"}] },
  { label: "Di sekolah, catatanmu biasanya penuh dengan...", options: [{text: "Mindmap & coretan warna-warni", type: "visual"}, {text: "List poin-poin yang rapi", type: "logic"}, {text: "Contoh soal & coretan hitungan", type: "practice"}] },
  { label: "Pas lagi ujian, kamu biasanya...", options: [{text: "Ngebayangin posisi jawaban di buku", type: "visual"}, {text: "Nganalisis pola soalnya dulu", type: "logic"}, {text: "Coba-coba pake angka permisalan", type: "practice"}] },
  { label: "Mentor favoritmu itu yang kayak gimana?", options: [{text: "Pinter bikin ilustrasi keren", type: "visual"}, {text: "Penjelasannya tajam & logis", type: "logic"}, {text: "Banyak kasih tips trik ngerjain", type: "practice"}] }
]

// Pool Data Materi (Bab)
const allChapters = [
  { title: "Fondasi Aljabar & Logika", desc: "Membangun cara berpikir sistematis sebelum masuk ke materi berat.", category: "MATH", videos: 4, quizzes: 2, priority: "logic" },
  { title: "Visualisasi Fungsi & Grafik", desc: "Memahami hubungan angka lewat representasi visual yang intuitif.", category: "MATH", videos: 6, quizzes: 3, priority: "visual" },
  { title: "Mekanika Dasar & Gerak", desc: "Penerapan logika matematika ke dalam benda nyata di sekitar kita.", category: "PHYSICS", videos: 5, quizzes: 2, priority: "practice" },
  { title: "Logika Termodinamika", desc: "Analisis mendalam tentang energi dan hukum-hukum alam.", category: "PHYSICS", videos: 3, quizzes: 4, priority: "logic" },
  { title: "Eksperimen Listrik Statis", desc: "Praktik langsung memahami aliran elektron dan muatan.", category: "PHYSICS", videos: 7, quizzes: 1, priority: "practice" },
  { title: "Pengantar Kalkulus Visual", desc: "Pendekatan visual untuk turunan dan integral sederhana.", category: "MATH", videos: 5, quizzes: 2, priority: "visual" }
]

const handleAnswer = (type) => {
  score[type]++
  if (currentStep.value < questions.length - 1) {
    currentStep.value++
  } else {
    // Selesai kuis, tunggu sedikit delay sebelum menampilkan hasil
    setTimeout(() => {
        roadmap.value = true
    }, 300) 
  }
}

// Menentukan gaya belajar dominan
const dominantStyle = computed(() => {
  // Mengubah hasil (visual, logic, practice) menjadi string kapitalisasi yang lebih enak dilihat
  const style = Object.keys(score).reduce((a, b) => score[a] > score[b] ? a : b)
  return style.charAt(0).toUpperCase() + style.slice(1);
})

// Menyusun path berdasarkan dominantStyle
const generatedPath = computed(() => {
  return [...allChapters].sort((a, b) => {
    // Mengutamakan modul yang prioritasnya sesuai dengan gaya dominan
    if (a.priority === dominantStyle.value.toLowerCase()) return -1
    if (b.priority === dominantStyle.value.toLowerCase()) return 1
    
    // Sort sisanya by category (atau biarkan default)
    return 0
  })
})

const resetRoadmap = () => {
  roadmap.value = false
  currentStep.value = 0
  score.visual = 0; score.logic = 0; score.practice = 0
}
</script>

<style scoped>
/* Transisi untuk Kuis */
.fade-slide-enter-active, .fade-slide-leave-active { transition: all 0.4s ease; }
.fade-slide-enter-from { opacity: 0; transform: translateY(15px); }
.fade-slide-leave-to { opacity: 0; transform: translateY(-15px); }
</style>