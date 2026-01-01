<script setup>
// Mock data untuk membuat tampilan terasa "hidup"
const stats = [
  { label: 'Total XP', value: '12,450', icon: '⚡', color: 'text-amber-500', bg: 'bg-amber-50' },
  { label: 'Jam Belajar', value: '34.5 Jam', icon: '⏱️', color: 'text-blue-500', bg: 'bg-blue-50' },
  { label: 'Ranking', value: '#42 Top', icon: '🏆', color: 'text-emerald-500', bg: 'bg-emerald-50' },
];

const weeklyActivity = [40, 70, 30, 85, 50, 90, 60]; // Persentase tinggi bar
</script>

<template>
  <main class="min-h-screen bg-[#F8FAFC] font-sans text-slate-600">
    
    <Sidebar />

    <section class="ml-72 min-h-screen py-8 px-8 transition-all duration-300">
      <div class="max-w-[1280px] mx-auto space-y-8">
      
        <header class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 class="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              Selamat Pagi, Arka! 👋
            </h1>
            <p class="text-slate-500 mt-1">Selasa, 14 Januari • <span class="text-primary font-medium">Jadwal Padat Hari Ini</span></p>
          </div>
          
          <div class="flex items-center gap-4">
            <div class="hidden md:flex bg-white px-4 py-2.5 rounded-xl border border-slate-200 items-center gap-2 text-sm w-64 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
              <span class="text-slate-400">🔍</span>
              <input type="text" placeholder="Cari materi belajar..." class="bg-transparent outline-none w-full placeholder:text-slate-400 text-slate-700">
            </div>
            
            <button class="w-12 h-12 rounded-xl overflow-hidden border border-slate-200 hover:ring-4 hover:ring-slate-100 transition-all">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Arka" class="w-full h-full object-cover" alt="User" />
            </button>
          </div>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-2xl">🔥</div>
            <div>
              <p class="text-xs font-bold text-slate-400 uppercase tracking-wider">Streak</p>
              <p class="text-xl font-bold text-slate-900">12 Hari</p>
            </div>
          </div>

          <div v-for="(stat, index) in stats" :key="index" class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
            <div :class="['w-12 h-12 rounded-xl flex items-center justify-center text-xl', stat.bg]">
              {{ stat.icon }}
            </div>
            <div>
              <p class="text-xs font-bold text-slate-400 uppercase tracking-wider">{{ stat.label }}</p>
              <p class="text-xl font-bold text-slate-900">{{ stat.value }}</p>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div class="lg:col-span-8 space-y-8">
            
            <div class="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <div class="flex justify-between items-center mb-6">
                <h3 class="text-lg font-bold text-slate-900">Aktivitas Belajar</h3>
                <select class="bg-slate-50 border-none text-xs font-bold text-slate-600 py-2 px-4 rounded-lg cursor-pointer hover:bg-slate-100">
                  <option>Minggu Ini</option>
                  <option>Bulan Ini</option>
                </select>
              </div>
              
              <div class="flex items-end justify-between h-48 gap-2 md:gap-4">
                <div v-for="(height, i) in weeklyActivity" :key="i" class="w-full flex flex-col items-center gap-2 group cursor-pointer">
                  <div class="relative w-full max-w-[40px] bg-slate-100 rounded-t-xl overflow-hidden h-full">
                    <div 
                      class="absolute bottom-0 w-full bg-primary group-hover:bg-indigo-500 transition-all duration-500 rounded-t-xl" 
                      :style="{ height: height + '%' }"
                    ></div>
                  </div>
                  <span class="text-xs font-medium text-slate-400 group-hover:text-primary transition-colors">
                    {{ ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'][i] }}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between mb-6">
                <h2 class="text-xl font-bold text-slate-900">Lanjutkan Belajar</h2>
                <a href="#" class="text-sm font-semibold text-primary hover:text-indigo-700">Lihat Semua →</a>
              </div>

              <div class="space-y-4">
                <div class="group bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all cursor-pointer relative overflow-hidden">
                  <div class="absolute top-0 left-0 w-1 h-full bg-slate-200 group-hover:bg-primary transition-colors"></div>
                  <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div class="flex items-start gap-5">
                      <div class="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center text-2xl shrink-0">
                        🧠
                      </div>
                      <div>
                        <div class="flex gap-2 mb-1">
                          <span class="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-wide rounded-full">Mudah</span>
                          <span class="px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wide rounded-full">Logika</span>
                        </div>
                        <h3 class="text-lg font-bold text-slate-800 group-hover:text-primary transition-colors">Dasar Silogisme & Logika</h3>
                        <p class="text-sm text-slate-500 mt-1">Bab 3 • 12/20 Soal Selesai</p>
                      </div>
                    </div>
                    
                    <div class="flex items-center gap-6 md:pr-4">
                      <div class="text-right hidden md:block">
                        <p class="text-xs font-bold text-slate-400">Progress</p>
                        <p class="text-lg font-bold text-slate-900">60%</p>
                      </div>
                      <button class="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-primary transition-colors">
                        ▶
                      </button>
                    </div>
                  </div>
                  <div class="absolute bottom-0 left-0 h-1 bg-slate-100 w-full">
                    <div class="h-full bg-primary w-[60%]"></div>
                  </div>
                </div>

                 <div class="group bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:border-amber-500/30 transition-all cursor-pointer relative overflow-hidden">
                  <div class="absolute top-0 left-0 w-1 h-full bg-slate-200 group-hover:bg-amber-500 transition-colors"></div>
                  <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div class="flex items-start gap-5">
                      <div class="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center text-2xl shrink-0">
                        💡
                      </div>
                      <div>
                        <div class="flex gap-2 mb-1">
                          <span class="px-2 py-0.5 bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-wide rounded-full">Analisis</span>
                        </div>
                        <h3 class="text-lg font-bold text-slate-800 group-hover:text-amber-600 transition-colors">Critical Thinking Case #4</h3>
                        <p class="text-sm text-slate-500 mt-1">Studi Kasus • Baru dimulai</p>
                      </div>
                    </div>
                    
                    <div class="flex items-center gap-6 md:pr-4">
                      <div class="text-right hidden md:block">
                        <p class="text-xs font-bold text-slate-400">Progress</p>
                        <p class="text-lg font-bold text-slate-900">0%</p>
                      </div>
                      <button class="w-10 h-10 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors">
                        ▶
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div class="lg:col-span-4 space-y-6">
            
            <div class="relative overflow-hidden bg-slate-900 rounded-3xl p-6 text-white shadow-xl">
              <div class="absolute top-0 right-0 p-3 opacity-10">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
              </div>
              <div class="relative z-10">
                <div class="flex items-center gap-2 mb-4">
                  <span class="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">AI Insight</span>
                </div>
                <p class="text-lg font-medium leading-relaxed text-slate-100 mb-6">
                  "Pola belajarmu bagus di pagi hari. Coba ambil materi sulit sebelum jam 10 pagi untuk retensi maksimal."
                </p>
                <button class="w-full py-3 bg-white text-slate-900 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors">
                  Generate Jadwal Baru
                </button>
              </div>
            </div>

            <div class="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
              <h3 class="text-lg font-bold text-slate-900 mb-4">Jadwal Terdekat</h3>
              
              <div class="space-y-4">
                <div class="flex gap-4 items-start pb-4 border-b border-slate-50">
                  <div class="flex flex-col items-center min-w-[3rem] bg-slate-50 rounded-xl p-2 text-center">
                    <span class="text-[10px] font-bold text-slate-400 uppercase">Jan</span>
                    <span class="text-xl font-bold text-slate-900">14</span>
                  </div>
                  <div>
                    <h4 class="font-bold text-slate-800 text-sm">Mentoring Logika</h4>
                    <p class="text-xs text-slate-500 mt-1">19:00 WIB • via Zoom</p>
                    <div class="flex -space-x-2 mt-2">
                       <img class="w-6 h-6 rounded-full border-2 border-white" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mentor1" />
                       <img class="w-6 h-6 rounded-full border-2 border-white" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mentor2" />
                       <div class="w-6 h-6 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[8px] font-bold text-slate-500">+3</div>
                    </div>
                  </div>
                </div>

                 <div class="flex gap-4 items-start">
                  <div class="flex flex-col items-center min-w-[3rem] bg-slate-50 rounded-xl p-2 text-center">
                    <span class="text-[10px] font-bold text-slate-400 uppercase">Jan</span>
                    <span class="text-xl font-bold text-slate-900">15</span>
                  </div>
                  <div>
                    <h4 class="font-bold text-slate-800 text-sm">Quiz Mingguan</h4>
                    <p class="text-xs text-slate-500 mt-1">08:00 WIB • Platform</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
              <h3 class="text-lg font-bold text-slate-900 mb-4">Skill Radar</h3>
              <div class="space-y-4">
                <div v-for="skill in ['Logika Dasar', 'Reading Comp.', 'Abstract Rsng.']" :key="skill" class="space-y-2">
                   <div class="flex justify-between text-xs font-bold text-slate-600">
                     <span>{{ skill }}</span>
                     <span class="text-primary">85%</span>
                   </div>
                   <div class="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                     <div class="h-full bg-primary rounded-full w-[85%]"></div>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  </main>
</template>