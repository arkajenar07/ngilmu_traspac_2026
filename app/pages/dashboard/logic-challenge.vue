<script setup>
// Dummy data untuk membuat tampilan terasa "hidup"
const categories = [
  { title: 'Penalaran Numerik', icon: '🔢', desc: 'Pola, deret, dan penalaran numerik tingkat tinggi.', completed: 12, total: 15, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { title: 'Analisis Kasus', icon: '🔍', desc: 'Analisis kasus kompleks & pengambilan keputusan.', completed: 8, total: 10, color: 'text-amber-600', bg: 'bg-amber-50' },
  { title: 'Logika Verbal', icon: '🗣️', desc: 'Kesimpulan silogisme, analogi, dan argumen.', completed: 15, total: 20, color: 'text-emerald-600', bg: 'bg-emerald-50' }
];

const completedChallenges = [
  { title: 'Silogisme Majemuk', date: '21 Jan 2026', score: 92, xp: 25, difficulty: 'Sulit' },
  { title: 'Analisis Sebab-Akibat', date: '20 Jan 2026', score: 85, xp: 20, difficulty: 'Menengah' },
  { title: 'Deret Angka Fibonacci', date: '19 Jan 2026', score: 78, xp: 30, difficulty: 'Mudah' },
];

const availableChallenges = [
  { title: 'Premis Negatif', category: 'Verbal', difficulty: 'Menengah', time: '5m', xp: 20 },
  { title: 'Riddle Logika Ruang', category: 'Numerik', difficulty: 'Sulit', time: '8m', xp: 40 },
  { title: 'Studi Kasus Moral', category: 'Kasus', difficulty: 'Menengah', time: '10m', xp: 35 },
];
</script>

<template>
  <main class="min-h-screen bg-[#F8FAFC] font-sans text-slate-600">
    <Sidebar />

    <section class="ml-72 min-h-screen py-8 px-8 transition-all duration-300">
      <div class="max-w-[1280px] mx-auto space-y-10">
        
        <div>
          <h1 class="text-3xl font-bold text-slate-900 tracking-tight">Logic Challenge Hub</h1>
          <p class="text-slate-500 mt-1">Latih pola pikirmu, 3.450 siswa sudah bergabung hari ini.</p>
        </div>

        <div class="bg-slate-900 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden shadow-2xl shadow-indigo-300/30">
          <div class="absolute inset-0 opacity-10 pointer-events-none">
            <svg class="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 V0 H100 Z" fill="currentColor" class="text-indigo-800" />
            </svg>
          </div>

          <div class="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div class="max-w-2xl space-y-4">
              <div class="inline-flex items-center gap-2 bg-indigo-500/30 px-3 py-1 rounded-xl border border-indigo-500/50">
                <span class="text-xs font-bold uppercase tracking-wider text-indigo-200">Challenge Harian</span>
              </div>
              
              <h3 class="text-3xl font-bold text-white leading-tight">Penalaran Analitis: Kasus Kriminal Musim Dingin</h3>
              
              <p class="text-slate-300 text-base leading-relaxed">
                Analisis 5 petunjuk untuk menentukan siapa pelaku, korban, dan motifnya. Fokus pada eliminasi premis yang tidak valid.
              </p>

              <div class="flex flex-wrap items-center gap-6 pt-2">
                <div class="flex items-center gap-2 text-indigo-300 font-medium text-sm">
                  <span class="text-lg">⏱️</span> 8 Menit
                </div>
                <div class="flex items-center gap-2 text-indigo-300 font-medium text-sm">
                  <span class="text-lg">📈</span> Level Sulit
                </div>
                <div class="px-3 py-1 bg-primary text-white rounded-full font-bold text-xs">
                  +40 XP
                </div>
              </div>
            </div>

            <button class="w-full lg:w-auto px-8 py-3.5 bg-primary text-white rounded-xl font-bold text-base shadow-lg shadow-primary/30 hover:bg-indigo-700 transition-colors shrink-0">
              Mulai Challenge
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div class="lg:col-span-4 space-y-6">
            <h2 class="text-xl font-bold text-slate-900">Progress Kategori</h2>
            <div v-for="(cat, i) in categories" :key="i" class="group bg-white p-6 rounded-3xl border border-slate-200 hover:shadow-lg hover:shadow-slate-100/50 transition-all cursor-pointer">
              <div class="flex items-center gap-4 mb-4">
                <div :class="['w-12 h-12 rounded-xl flex items-center justify-center text-2xl', cat.bg]">
                  {{ cat.icon }}
                </div>
                <div>
                  <h4 class="text-lg font-bold text-slate-900">{{ cat.title }}</h4>
                  <p class="text-sm text-slate-500 font-medium">{{ cat.desc.split(',')[0] }}</p>
                </div>
              </div>
              
              <div class="space-y-1">
                <div class="flex justify-between items-end text-xs font-medium text-slate-500">
                  <span>{{ cat.completed }} / {{ cat.total }} Selesai</span>
                  <span :class="['font-bold text-sm', cat.color]">{{ Math.round((cat.completed / cat.total) * 100) }}%</span>
                </div>
                <div class="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div 
                    :class="['h-full rounded-full', cat.bg.replace('-50', '-600')]" 
                    :style="{ width: `${(cat.completed / cat.total) * 100}%` }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="lg:col-span-8">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-xl font-bold text-slate-900">Riwayat Challenge Selesai</h2>
              <a href="#" class="text-sm font-semibold text-primary hover:text-indigo-700">Lihat Semua →</a>
            </div>
            
            <div class="bg-white rounded-3xl p-6 border border-slate-200 space-y-4">
              <div 
                v-for="(history, i) in completedChallenges" 
                :key="i" 
                class="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors"
              >
                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center text-lg shrink-0">
                    👍
                  </div>
                  <div>
                    <p class="font-semibold text-slate-800">{{ history.title }}</p>
                    <p class="text-xs text-slate-500 mt-0.5">{{ history.date }} • <span class="text-xs font-medium text-slate-500">{{ history.difficulty }}</span></p>
                  </div>
                </div>
                
                <div class="text-right shrink-0">
                  <p class="text-sm font-bold text-slate-800">{{ history.score }}%</p>
                  <p class="text-xs text-primary font-bold mt-0.5">+{{ history.xp }} XP</p>
                </div>
              </div>

              <p class="text-center text-xs text-slate-400 pt-2">Data terakhir diperbarui hari ini.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 class="text-xl font-bold text-slate-900 mb-6 mt-4">Challenge Tersedia Minggu Ini</h2>
          
          <div class="bg-white rounded-3xl p-6 border border-slate-200">
            <div class="grid grid-cols-12 text-xs font-bold text-slate-400 uppercase tracking-wider pb-3 border-b border-slate-100 px-2">
              <span class="col-span-6">Nama Challenge</span>
              <span class="col-span-2 text-center hidden sm:block">Kategori</span>
              <span class="col-span-1 text-center hidden sm:block">Level</span>
              <span class="col-span-1 text-center hidden sm:block">Waktu</span>
              <span class="col-span-2 text-right">Aksi</span>
            </div>

            <div v-for="(item, i) in availableChallenges" :key="i" class="grid grid-cols-12 py-4 border-b border-slate-50 last:border-b-0 items-center hover:bg-slate-50 rounded-lg transition-colors px-2">
              <div class="col-span-6 flex items-center gap-3">
                <div class="w-3 h-3 rounded-full bg-indigo-500"></div>
                <span class="font-medium text-slate-800">{{ item.title }}</span>
              </div>
              <span class="col-span-2 text-center text-sm hidden sm:block">{{ item.category }}</span>
              <span :class="['col-span-1 text-center text-xs font-bold hidden sm:block', item.difficulty === 'Sulit' ? 'text-red-500' : item.difficulty === 'Menengah' ? 'text-amber-500' : 'text-emerald-500']">{{ item.difficulty }}</span>
              <span class="col-span-1 text-center text-sm text-slate-500 hidden sm:block">{{ item.time }}</span>
              <div class="col-span-2 flex justify-end">
                <button class="px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-lg hover:bg-indigo-700 transition-colors">
                  Kerjakan
                </button>
              </div>
            </div>
            
             <a href="#" class="block text-center text-sm font-semibold text-primary hover:underline mt-4">
               Muat Lebih Banyak Challenge (12 lagi) →
             </a>
          </div>
        </div>

      </div>
    </section>
  </main>
</template>