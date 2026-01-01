<template>
    <Navbar />
    <!-- Hero Section -->
  <section class="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
    <img src="/assets/images/hero-bg.png" alt="Hero Background" class="absolute inset-0 w-full h-full object-cover scale-105" />
    <div class="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/40"></div>

    <div class="hidden xl:block absolute left-20 top-1/3 z-10 animate-float">
        <div class="bg-white/80 backdrop-blur-lg p-6 rounded-[32px] shadow-2xl border border-white max-w-[240px]">
            <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">85%</div>
                <p class="text-xs font-bold text-slate-800 tracking-tight">Daily Habit Done</p>
            </div>
            <div class="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div class="bg-primary h-full w-[85%] rounded-full"></div>
            </div>
        </div>
    </div>

    <div class="hidden xl:block absolute right-20 bottom-1/3 z-10 animate-float-delayed">
        <div class="bg-white/80 backdrop-blur-lg p-4 rounded-[24px] shadow-2xl border border-white flex items-center gap-4">
            <div class="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200">
                <img src="/assets/icons/spark.svg" class="w-6 h-6 brightness-0 invert" alt="spark">
            </div>
            <div>
                <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Active Path</p>
                <p class="text-sm font-black text-slate-900 leading-none">UTBK Fighter</p>
            </div>
        </div>
    </div>

    <div class="max-w-[1000px] text-center mb-12 flex flex-col items-center gap-8 z-20">
        
        <div class="animate-bounce-slow bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-white shadow-sm mb-2">
            <span class="text-primary text-xs md:text-sm font-black tracking-[0.2em] uppercase italic flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                Pick Your Path Now
            </span>
        </div>

        <h1 class="text-5xl md:text-[72px] text-slate-900 font-black leading-[1.05] tracking-tighter">
            Temukan Program Belajar <br> Yang <span class="text-primary italic">Cocok Untukmu</span>
        </h1>

        <p class="max-w-[700px] text-slate-600 font-normal text-lg md:text-xl leading-relaxed">
            Pilih jalur belajar yang telah dirancang khusus untuk membantumu membangun <span class="font-bold text-slate-800">habits, logika,</span> dan <span class="font-bold text-slate-800">strategi masa depan</span> yang presisi.
        </p>

        <div class="flex flex-wrap justify-center gap-4">
             <button class="px-8 py-4 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all">Lihat Semua Kurikulum</button>
             <button class="px-8 py-4 bg-white/50 backdrop-blur-sm border border-slate-200 text-slate-800 rounded-full font-bold hover:bg-white transition-all">Hubungi Admin</button>
        </div>
    </div>

    <div class="absolute bottom-10 animate-bounce opacity-40 z-10">
        <div class="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center pt-2">
            <div class="w-1 h-2 bg-slate-400 rounded-full"></div>
        </div>
    </div>
</section>
<section class="max-w-[1440px] mx-auto my-20 flex flex-col gap-12 items-center px-6 md:px-16 py-12">
    
    <div class="w-full flex flex-col lg:flex-row justify-between items-end gap-8">
        <div class="max-w-3xl space-y-4">
            <div class="flex items-center gap-2 text-primary font-bold uppercase tracking-[0.3em] text-xs">
                <span class="w-10 h-[2px] bg-primary"></span>
                Curriculum Path
            </div>
            <h2 class="text-3xl md:text-5xl font-black leading-tight text-slate-900">
                Pilih Jalur Belajar yang <br> Sesuai dengan <span class="text-primary italic">Targetmu</span>
            </h2>
            <p class="text-slate-500 font-normal text-lg leading-relaxed max-w-2xl">
                Mulai dari persiapan ujian hingga penguasaan <span class="font-semibold text-slate-800 italic">skill</span> masa depan, kami dampingi setiap langkahmu dengan kurikulum yang terukur.
            </p>
        </div>
    </div>

    <div class="w-full flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-50 p-4 rounded-[32px] border border-slate-100">
        <div class="flex items-center gap-2 p-1 bg-white rounded-2xl border border-slate-100 w-full md:w-auto overflow-x-auto no-scrollbar">
            <button class="px-6 py-2.5 rounded-xl text-sm font-bold bg-primary text-white shadow-md transition-all">Semua</button>
            <button class="px-6 py-2.5 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-50 transition-all whitespace-nowrap">Persiapan Ujian</button>
            <button class="px-6 py-2.5 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-50 transition-all whitespace-nowrap">Skill Masa Depan</button>
            <button class="px-6 py-2.5 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-50 transition-all whitespace-nowrap">Harian</button>
        </div>

        <div class="relative w-full md:w-80 group">
            <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <input type="text" placeholder="Cari program belajar..." class="w-full pl-12 pr-6 py-3.5 bg-white border border-slate-100 rounded-2xl text-sm outline-none focus:border-primary/30 focus:ring-4 focus:ring-primary/5 transition-all">
        </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        <div class="group bg-white p-6 flex flex-col gap-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/60 transform hover:-translate-y-2 transition-all duration-500">
            
            <div class="flex flex-col gap-3 bg-slate-900 items-center text-center text-white relative p-6 rounded-2xl overflow-hidden shadow-inner">
                <img src="/assets/images/learning-path-list-bg.png" class="absolute object-cover inset-0 w-full h-full opacity-20 group-hover:scale-110 transition-transform duration-700" alt="">
                <div class="z-10">
                    <h3 class="font-bold text-xl mb-1 text-white">UTBK SNBT Fighter</h3>
                    <span class="font-semibold text-[10px] uppercase tracking-[0.2em] text-primary-light/90 bg-white/10 px-3 py-1 rounded-full">Target Kampus Impian 🔥</span>
                </div>
            </div>

            <div class="flex flex-col gap-4 flex-grow">
                <div class="flex items-start gap-3">
                    <div class="mt-1 flex-shrink-0 w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                        <img src="/assets/icons/check.svg" class="w-3 h-3" alt="check" />
                    </div>
                    <p class="text-sm text-slate-600 leading-snug">Simulasi <span class="font-medium text-slate-800">Try Out</span> berkala dengan sistem IRT terbaru.</p>
                </div>
                <div class="flex items-start gap-3">
                    <div class="mt-1 flex-shrink-0 w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                        <img src="/assets/icons/check.svg" class="w-3 h-3" alt="check" />
                    </div>
                    <p class="text-sm text-slate-600 leading-snug">Bedah materi Tes Potensi Skolastik (TPS) secara mendalam.</p>
                </div>
                <div class="flex items-start gap-3">
                    <div class="mt-1 flex-shrink-0 w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                        <img src="/assets/icons/check.svg" class="w-3 h-3" alt="check" />
                    </div>
                    <p class="text-sm text-slate-600 leading-snug">Analisis peluang lolos di jurusan pilihanmu.</p>
                </div>
                <div class="flex items-start gap-3">
                    <div class="mt-1 flex-shrink-0 w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                        <img src="/assets/icons/check.svg" class="w-3 h-3" alt="check" />
                    </div>
                    <p class="text-sm text-slate-600 leading-snug">Strategi khusus manajemen waktu saat ujian.</p>
                </div>
            </div>

            <div class="flex flex-col gap-5 pt-4 border-t border-slate-50">
                <div class="flex flex-col">
                    <h3 class="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Mulai investasi</h3>
                    <div class="flex items-baseline gap-1">
                        <span class="text-2xl text-primary font-black">Rp 40.000</span>
                        <span class="text-slate-400 text-xs font-medium">/ bln</span>
                    </div>
                </div>
                <a href="#" class="w-full py-3.5 flex justify-center bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 text-sm font-bold hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                    Detail Program
                </a>
            </div>
        </div>
    </div>
</section>
<Footer />
</template>

<style>
@keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(2deg); }
}
@keyframes float-delayed {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(20px) rotate(-2deg); }
}
.animate-float {
    animation: float 6s ease-in-out infinite;
}
.animate-float-delayed {
    animation: float-delayed 8s ease-in-out infinite;
}
</style>