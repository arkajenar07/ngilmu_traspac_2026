<template>
    <Navbar />
    <!-- Hero Section -->
    <section class="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
        <img src="/assets/images/hero-bg.png" alt="Hero Background" class="absolute inset-0 w-full h-full object-cover scale-105" />
        
        <div class="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/40"></div>
        <div class="hidden lg:block absolute left-20 top-1/3 z-10 animate-float">
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

        <div class="hidden lg:block absolute right-20 bottom-1/3 z-10 animate-float-delayed">
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

        <div class="max-w-[1000px] text-center mb-12 flex flex-col items-center gap-8 z-10">

            <div class="animate-bounce-slow bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/50 shadow-sm mb-2">
                <span class="text-primary text-xs md:text-sm font-bold tracking-widest uppercase italic">Elevate Your Learning Journey</span>
            </div>

            <h1 class="text-5xl md:text-[72px] text-slate-900 font-bold leading-[1.1] tracking-tight">
                Saatnya Belajar dengan <br> Cara yang <span class="text-primary relative inline-block">Mengerti Kamu <span class="absolute -bottom-2 left-0 w-full h-2 bg-primary/20 rounded-full"></span></span> 🫵
            </h1>

            <p class="max-w-[750px] text-slate-600 font-normal text-lg md:text-xl leading-relaxed">
                <span class="font-bold text-slate-800">Ngilmu</span> adalah ekosistem belajar berbasis <span class="underline decoration-primary/30 underline-offset-4">AI & Mentor Manusia</span> yang membantu siswa membangun habit, logika kritis, dan arah masa depan yang presisi.
            </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-5 z-10 w-full sm:w-auto px-4">
            <button class="px-10 py-4 flex items-center justify-center text-lg bg-primary rounded-full text-white font-bold shadow-xl shadow-primary/25 hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300">
                Yuk Belajar Bareng
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </button>

            <button class="px-10 py-4 flex items-center justify-center text-lg bg-white/40 backdrop-blur-md rounded-full border-2 border-slate-200 text-slate-800 font-bold hover:bg-white transition-all duration-300">
                Explore Dulu
            </button>
        </div>

        <div class="absolute bottom-10 animate-bounce opacity-40 z-10">
            <div class="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center pt-2">
                <div class="w-1 h-2 bg-slate-400 rounded-full"></div>
            </div>
        </div>
    </section>
    <!-- Challenges Section -->
    <section class="max-w-[1440px] mx-auto my-20 flex flex-col lg:flex-row gap-16 lg:gap-[75px] px-6 md:px-16 py-12 items-center">
    <div class="flex flex-col gap-8 lg:w-1/2">
        <div class="space-y-4">
            <div class="tag flex items-center gap-2.5 px-4 py-2 bg-rose-50 rounded-full w-fit border border-rose-100">
                <img src="/assets/icons/warning.svg" class="w-5 h-5" alt="warning" />
                <span class="text-sm text-rose-600 font-bold uppercase tracking-[0.15em]">Tantangan Belajar</span>
            </div>
            <h2 class="text-3xl md:text-[44px] font-bold leading-tight text-slate-900 tracking-tight">
                Bukan Kurang Pintar, Hanya Belum Menemukan Cara Belajar yang <span class="text-primary italic">"Klik"</span>.
            </h2>
        </div>
        <p class="max-w-[759px] text-slate-500 font-normal text-lg leading-relaxed">
            Banyak siswa Indonesia memiliki potensi luar biasa, namun sering terhambat oleh sistem belajar <span class="text-slate-800 font-medium">satu-pintu</span> yang belum tentu sesuai dengan keunikan cara berpikir setiap individu.
        </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 lg:w-1/2">
        <div class="flex flex-col items-start gap-4 group">
            <div class="w-14 h-14 flex items-center justify-center bg-slate-50 rounded-2xl group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300 shadow-sm border border-slate-100">
                <img src="/assets/icons/moon.svg" class="w-7 h-7" alt="Burnout Icon">
            </div>
            <div class="space-y-2">
                <h3 class="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">Demotivasi Belajar</h3>
                <p class="text-slate-500 font-light text-base leading-relaxed">Munculnya rasa enggan belajar bukan karena malas, tapi karena belum paham metode yang paling efektif untuk diri sendiri.</p>
            </div>
        </div>

        <div class="flex flex-col items-start gap-4 group">
            <div class="w-14 h-14 flex items-center justify-center bg-slate-50 rounded-2xl group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300 shadow-sm border border-slate-100">
                <img src="/assets/icons/ideas.svg" class="w-7 h-7" alt="Understanding Icon">
            </div>
            <div class="space-y-2">
                <h3 class="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">Hafalan Tanpa Esensi</h3>
                <p class="text-slate-500 font-light text-base leading-relaxed">Seringkali siswa hanya mengejar nilai dengan menghafal materi, tanpa benar-benar menguasai logika dan konsep dasarnya.</p>
            </div>
        </div>

        <div class="flex flex-col items-start gap-4 group">
            <div class="w-14 h-14 flex items-center justify-center bg-slate-50 rounded-2xl group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300 shadow-sm border border-slate-100">
                <img src="/assets/icons/art.svg" class="w-7 h-7" alt="Potential Icon">
            </div>
            <div class="space-y-2">
                <h3 class="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">Potensi yang Terpendam</h3>
                <p class="text-slate-500 font-light text-base leading-relaxed">Banyak talenta hebat belum terlihat karena kurangnya ruang eksplorasi untuk mengenali minat dan bakat sejak dini.</p>
            </div>
        </div>

        <div class="flex flex-col items-start gap-4 group">
            <div class="w-14 h-14 flex items-center justify-center bg-slate-50 rounded-2xl group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300 shadow-sm border border-slate-100">
                <img src="/assets/icons/books.svg" class="w-7 h-7" alt="Future Icon">
            </div>
            <div class="space-y-2">
                <h3 class="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">Arah Masa Depan</h3>
                <p class="text-slate-500 font-light text-base leading-relaxed">Kebingungan dalam menentukan langkah akademik dan pilihan jurusan yang selaras dengan profil diri.</p>
            </div>
        </div>
    </div>
    </section>
  <section class="max-w-[1440px] mx-auto my-24 flex flex-col gap-16 items-center px-6 md:px-16 py-12">
    <div class="flex flex-col items-center gap-6 text-center max-w-4xl">
        <div class="flex flex-col items-center gap-4">
            <div class="tag flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/10">
                <img src="/assets/icons/star.svg" class="w-4 h-4" alt="icon" />
                <span class="text-xs md:text-sm text-primary font-bold uppercase tracking-[0.2em]">Solusi Unggulan</span>
            </div>
            <h2 class="text-3xl md:text-[44px] font-bold leading-[1.2] text-slate-900 tracking-tight">
                Lebih dari Sekadar Platform, Ngilmu adalah <span class="text-primary italic">Partner Transformasi</span> Belajarmu
            </h2>
        </div>
        <p class="max-w-3xl text-slate-500 font-normal text-lg leading-relaxed">
            Kami menjembatani celah antara potensi besar siswa Indonesia dengan sistem pembelajaran adaptif yang dirancang khusus mengikuti cara berpikir, minat, dan kecepatan belajar setiap individu.
        </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        
        <div class="group bg-white p-8 flex flex-col gap-8 rounded-[32px] border border-slate-100 hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 transform hover:-translate-y-2">
            <div class="flex flex-col gap-5">
                <div class="bg-indigo-50 w-14 h-14 flex justify-center items-center rounded-2xl group-hover:bg-primary group-hover:rotate-6 transition-all duration-500">
                    <img src="/assets/icons/star.svg" class="w-6 h-6 group-hover:invert transition-all" alt="AI Icon">
                </div>
                <div class="space-y-1">
                    <span class="text-primary font-bold text-[10px] uppercase tracking-widest">Personalisasi Cerdas</span>
                    <h3 class="text-slate-900 font-bold text-xl tracking-tight">AI Learning Companion</h3>
                </div>
            </div>
            <p class="text-slate-500 font-light text-sm leading-relaxed group-hover:text-slate-600 transition-colors">
                Asisten AI yang memahami pola belajarmu secara mendalam, menyesuaikan kurikulum latihan, dan mendeteksi area pengembangan secara otomatis.
            </p>
        </div>

        <div class="group bg-white p-8 flex flex-col gap-8 rounded-[32px] border border-slate-100 hover:border-emerald-200 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 transform hover:-translate-y-2">
            <div class="flex flex-col gap-5">
                <div class="bg-emerald-50 w-14 h-14 flex justify-center items-center rounded-2xl group-hover:bg-emerald-500 group-hover:rotate-6 transition-all duration-500">
                    <img src="/assets/icons/star.svg" class="w-6 h-6 group-hover:invert transition-all" alt="Habit Icon">
                </div>
                <div class="space-y-1">
                    <span class="text-emerald-600 font-bold text-[10px] uppercase tracking-widest">Konsistensi Terukur</span>
                    <h3 class="text-slate-900 font-bold text-xl tracking-tight">Study Habit System</h3>
                </div>
            </div>
            <p class="text-slate-500 font-light text-sm leading-relaxed group-hover:text-slate-600 transition-colors">
                Membangun disiplin belajar yang berkelanjutan dengan metode mikrolesi untuk menciptakan kebiasaan positif yang bertahan lama.
            </p>
        </div>

        <div class="group bg-white p-8 flex flex-col gap-8 rounded-[32px] border border-slate-100 hover:border-amber-200 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 transform hover:-translate-y-2">
            <div class="flex flex-col gap-5">
                <div class="bg-amber-50 w-14 h-14 flex justify-center items-center rounded-2xl group-hover:bg-amber-500 group-hover:rotate-6 transition-all duration-500">
                    <img src="/assets/icons/star.svg" class="w-6 h-6 group-hover:invert transition-all" alt="Logic Icon">
                </div>
                <div class="space-y-1">
                    <span class="text-amber-600 font-bold text-[10px] uppercase tracking-widest">Analisis Kritis</span>
                    <h3 class="text-slate-900 font-bold text-xl tracking-tight">Logic Training</h3>
                </div>
            </div>
            <p class="text-slate-500 font-light text-sm leading-relaxed group-hover:text-slate-600 transition-colors">
                Asah kemampuan *problem solving* dan logika berpikir melalui modul interaktif yang dirancang untuk mempertajam daya nalar siswa.
            </p>
        </div>

        <div class="group bg-white p-8 flex flex-col gap-8 rounded-[32px] border border-slate-100 hover:border-rose-200 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 transform hover:-translate-y-2">
            <div class="flex flex-col gap-5">
                <div class="bg-rose-50 w-14 h-14 flex justify-center items-center rounded-2xl group-hover:bg-rose-500 group-hover:rotate-6 transition-all duration-500">
                    <img src="/assets/icons/star.svg" class="w-6 h-6 group-hover:invert transition-all" alt="Mentoring Icon">
                </div>
                <div class="space-y-1">
                    <span class="text-rose-600 font-bold text-[10px] uppercase tracking-widest">Bimbingan Ahli</span>
                    <h3 class="text-slate-900 font-bold text-xl tracking-tight">Human Mentoring</h3>
                </div>
            </div>
            <p class="text-slate-500 font-light text-sm leading-relaxed group-hover:text-slate-600 transition-colors">
                Dapatkan perspektif langsung dari mentor profesional untuk bimbingan kurikulum maupun konsultasi pengembangan diri yang lebih personal.
            </p>
        </div>
        
    </div>
</section>
  <!-- How it works section -->
  <section class="max-w-[1440px] mx-auto my-20 flex gap-[75px] px-6 md:px-16 py-12">
    <div class="bg-white gap-12 py-[60px] px-8 md:px-[78px] flex flex-col rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100/80 transition-all duration-500">
        
        <div class="flex flex-col gap-5">
            <div class="space-y-4">
                <div class="tag flex items-center gap-2.5 px-4 py-2 bg-primary/5 rounded-full w-fit">
                    <img src="/assets/icons/warning.svg" class="w-5 h-5" alt="icon" />
                    <span class="text-sm text-primary font-bold tracking-[0.15em] uppercase">Alur Belajar</span>
                </div>
                <h2 class="text-4xl md:text-[48px] font-bold leading-[1.15] text-slate-900 tracking-tight">4 Langkah Menuju Cara Belajar <br class="hidden md:block" /> yang <span class="text-primary">Lebih Cerdas</span></h2>
            </div>
            <p class="max-w-[800px] text-slate-500 font-normal text-lg leading-relaxed italic border-l-4 border-primary/20 pl-6">
                Kami merancang ekosistem yang memadukan teknologi mutakhir dengan pendekatan personal, memastikan setiap menit waktu belajarmu menjadi lebih efektif dan berdampak nyata.
            </p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div class="flex flex-col items-start relative px-8 py-10 min-h-[260px] rounded-[32px] overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500">
                <NuxtImg src="/assets/images/how-it-works-list-bg.png" class="absolute object-cover w-full h-full inset-0 transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2 brightness-[0.4]"></NuxtImg>
                <div class="flex flex-col z-10 h-full justify-between">
                    <h2 class="text-[72px] font-black leading-none bg-clip-text text-transparent bg-[linear-gradient(180deg,#FFFFFF_0%,rgba(255,255,255,0.1)_100%)] select-none">
                      01
                    </h2>
                    <div class="space-y-2">
                        <h3 class="text-white font-bold text-[24px] tracking-tight group-hover:text-primary-light transition-colors">Discovery</h3>
                        <p class="text-white/70 font-light text-sm leading-relaxed group-hover:text-white transition-colors">Awali dengan pemetaan minat, bakat, dan gaya belajar unikmu.</p>
                    </div>
                </div>
            </div>

            <div class="flex flex-col items-start relative px-8 py-10 min-h-[260px] rounded-[32px] overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500">
                <NuxtImg src="/assets/images/how-it-works-list-bg.png" class="absolute object-cover w-full h-full inset-0 transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2 brightness-[0.4]"></NuxtImg>
                <div class="flex flex-col z-10 h-full justify-between">
                    <h2 class="text-[72px] font-black leading-none bg-clip-text text-transparent bg-[linear-gradient(180deg,#FFFFFF_0%,rgba(255,255,255,0.1)_100%)] select-none">
                      02
                    </h2>
                    <div class="space-y-2">
                        <h3 class="text-white font-bold text-[24px] tracking-tight group-hover:text-primary-light transition-colors">Adaptive Path</h3>
                        <p class="text-white/70 font-light text-sm leading-relaxed group-hover:text-white transition-colors">AI menyesuaikan tingkat kesulitan materi berdasarkan kecepatan pahamu.</p>
                    </div>
                </div>
            </div>

            <div class="flex flex-col items-start relative px-8 py-10 min-h-[260px] rounded-[32px] overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500">
                <NuxtImg src="/assets/images/how-it-works-list-bg.png" class="absolute object-cover w-full h-full inset-0 transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2 brightness-[0.4]"></NuxtImg>
                <div class="flex flex-col z-10 h-full justify-between">
                    <h2 class="text-[72px] font-black leading-none bg-clip-text text-transparent bg-[linear-gradient(180deg,#FFFFFF_0%,rgba(255,255,255,0.1)_100%)] select-none">
                      03
                    </h2>
                    <div class="space-y-2">
                        <h3 class="text-white font-bold text-[24px] tracking-tight group-hover:text-primary-light transition-colors">Gamified Habit</h3>
                        <p class="text-white/70 font-light text-sm leading-relaxed group-hover:text-white transition-colors">Bangun konsistensi dengan tantangan harian dan sistem streak yang seru.</p>
                    </div>
                </div>
            </div>

            <div class="flex flex-col items-start relative px-8 py-10 min-h-[260px] rounded-[32px] overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500">
                <NuxtImg src="/assets/images/how-it-works-list-bg.png" class="absolute object-cover w-full h-full inset-0 transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2 brightness-[0.4]"></NuxtImg>
                <div class="flex flex-col z-10 h-full justify-between">
                    <h2 class="text-[72px] font-black leading-none bg-clip-text text-transparent bg-[linear-gradient(180deg,#FFFFFF_0%,rgba(255,255,255,0.1)_100%)] select-none">
                      04
                    </h2>
                    <div class="space-y-2">
                        <h3 class="text-white font-bold text-[24px] tracking-tight group-hover:text-primary-light transition-colors">Direct Mentoring</h3>
                        <p class="text-white/70 font-light text-sm leading-relaxed group-hover:text-white transition-colors">Validasi pemahamanmu melalui diskusi mendalam bersama mentor ahli.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  <section class="max-w-[1440px] mx-auto my-24 flex flex-col gap-16 items-center px-6 md:px-16">
    <div class="flex flex-col items-center gap-6 text-center max-w-3xl">
        <div class="flex flex-col items-center gap-3">
            <div class="tag flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full">
                <img src="/assets/icons/star.svg" class="w-4 h-4" alt="icon" />
                <span class="text-sm text-primary font-bold tracking-widest uppercase">Solusi Unggulan</span>
            </div>
            <h2 class="text-3xl md:text-[44px] font-bold leading-tight text-slate-900">Fitur yang Dibangun untuk Mengubah <br class="hidden md:block"> Cara Siswa Belajar</h2>
        </div>
        <p class="text-slate-500 font-normal text-lg leading-relaxed">Setiap fitur <span class="text-primary font-semibold">Ngilmu</span> dirancang secara strategis untuk menjawab hambatan utama dalam perjalanan akademikmu.</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        
        <div class="group bg-white p-4 pl-6 flex items-center gap-6 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 w-full justify-between">
            <div class="flex items-center gap-5">
                <div class="bg-primary/10 min-w-[64px] h-[64px] flex justify-center items-center rounded-2xl group-hover:bg-primary group-hover:rotate-6 transition-all duration-500">
                    <img src="/assets/icons/star.svg" class="w-7 h-7 group-hover:invert transition-all" alt="AI Icon">
                </div>
                <div class="flex flex-col gap-1">
                    <span class="text-primary font-bold text-[10px] uppercase tracking-[0.2em]">Personalisasi Cerdas</span>
                    <h3 class="text-slate-800 font-bold text-lg leading-tight">Daily Logic & Critical Thinking</h3>
                </div>
            </div>
            <a href="#" class="px-6 py-3 flex text-sm font-bold bg-slate-50 text-slate-700 rounded-2xl border border-slate-200 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                Explore
            </a>
        </div>

        <div class="group bg-white p-4 pl-6 flex items-center gap-6 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 w-full justify-between">
            <div class="flex items-center gap-5">
                <div class="bg-indigo-50 min-w-[64px] h-[64px] flex justify-center items-center rounded-2xl group-hover:bg-indigo-500 group-hover:rotate-6 transition-all duration-500">
                    <img src="/assets/icons/star.svg" class="w-7 h-7 group-hover:invert transition-all" alt="AI Icon">
                </div>
                <div class="flex flex-col gap-1">
                    <span class="text-indigo-500 font-bold text-[10px] uppercase tracking-[0.2em]">AI Powered</span>
                    <h3 class="text-slate-800 font-bold text-lg leading-tight">AI Weakness Detector</h3>
                </div>
            </div>
            <a href="#" class="px-6 py-3 flex text-sm font-bold bg-slate-50 text-slate-700 rounded-2xl border border-slate-200 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all duration-300">
                Explore
            </a>
        </div>

        <div class="group bg-white p-4 pl-6 flex items-center gap-6 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 w-full justify-between">
            <div class="flex items-center gap-5">
                <div class="bg-emerald-50 min-w-[64px] h-[64px] flex justify-center items-center rounded-2xl group-hover:bg-emerald-500 group-hover:rotate-6 transition-all duration-500">
                    <img src="/assets/icons/star.svg" class="w-7 h-7 group-hover:invert transition-all" alt="AI Icon">
                </div>
                <div class="flex flex-col gap-1">
                    <span class="text-emerald-600 font-bold text-[10px] uppercase tracking-[0.2em]">Human Connection</span>
                    <h3 class="text-slate-800 font-bold text-lg leading-tight">Mentoring + Consultation</h3>
                </div>
            </div>
            <a href="#" class="px-6 py-3 flex text-sm font-bold bg-slate-50 text-slate-700 rounded-2xl border border-slate-200 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300">
                Explore
            </a>
        </div>

        <div class="group bg-white p-4 pl-6 flex items-center gap-6 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 w-full justify-between">
            <div class="flex items-center gap-5">
                <div class="bg-amber-50 min-w-[64px] h-[64px] flex justify-center items-center rounded-2xl group-hover:bg-amber-500 group-hover:rotate-6 transition-all duration-500">
                    <img src="/assets/icons/star.svg" class="w-7 h-7 group-hover:invert transition-all" alt="AI Icon">
                </div>
                <div class="flex flex-col gap-1">
                    <span class="text-amber-600 font-bold text-[10px] uppercase tracking-[0.2em]">Career Path</span>
                    <h3 class="text-slate-800 font-bold text-lg leading-tight">Skill Roadmap & Portfolio</h3>
                </div>
            </div>
            <a href="#" class="px-6 py-3 flex text-sm font-bold bg-slate-50 text-slate-700 rounded-2xl border border-slate-200 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-300">
                Explore
            </a>
        </div>

        </div>
</section>
  <!-- Learning Path Section -->
  <section class="max-w-[1440px] mx-auto my-20 flex flex-col gap-16 items-center px-6 md:px-16 py-12">
    <div class="flex flex-col items-center gap-6 text-center max-w-3xl">
        <div class="flex flex-col items-center gap-3">
            <div class="tag flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full">
                <img src="/assets/icons/star.svg" alt="icon" class="w-4 h-4" />
                <span class="text-sm text-primary font-bold tracking-widest uppercase">Program Pilihan</span>
            </div>
            <h2 class="text-3xl md:text-5xl font-bold leading-tight text-slate-900">Pilih Jalur Belajar yang Sesuai dengan Targetmu</h2>
        </div>
        <p class="text-slate-600 font-normal text-lg leading-relaxed">Mulai dari persiapan ujian hingga penguasaan <span class="font-semibold text-slate-800 italic">skill</span> masa depan, kami dampingi setiap langkahmu dengan kurikulum yang terukur.</p>
        <button class="mt-4 px-10 py-4 flex text-lg bg-primary rounded-full text-white font-semibold hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/20 transform hover:-translate-y-0.5 transition-all duration-300">
            Lihat Semua Program
        </button>
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

<section class="max-w-[1440px] mx-auto px-16 py-12">
    <div class="flex flex-col lg:flex-row gap-[75px] items-start">
        
        <div class="lg:w-1/2 flex flex-col gap-8">
            <div>
                <div class="tag flex items-center gap-2 mb-4">
                    <div class="p-1.5 bg-primary/10 rounded-lg">
                        <img src="/assets/icons/star.svg" class="w-5 h-5" alt="icon" />
                    </div>
                    <span class="text-sm text-primary font-bold uppercase tracking-widest">Misi Kami</span>
                </div>
                <h2 class="text-[48px] font-semibold leading-[1.1] text-dark">
                    Mempersiapkan Generasi <span class="text-primary italic">Problem Solver</span> Masa Depan
                </h2>
            </div>
            <p class="text-secondary font-light text-xl leading-relaxed">
                Kami percaya setiap siswa punya "tombol" suksesnya masing-masing. Ngilmu hadir untuk membantu mereka menemukan cara belajar yang paling personal, efektif, dan menyenangkan.
            </p>
            
            <div class="flex gap-4 items-center p-6 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                <div class="flex -space-x-3">
                    <div class="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"></div>
                    <div class="w-10 h-10 rounded-full bg-primary border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">+1k</div>
                </div>
                <p class="text-sm text-secondary font-medium">Telah membantu siswa SMA/SMK di seluruh Indonesia.</p>
            </div>
        </div>

        <div class="lg:w-1/2 w-full bg-white p-8 lg:p-12 rounded-[32px] shadow-2xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
            
            <div class="flex justify-between items-center mb-10 relative z-10">
                <h3 class="text-2xl font-semibold text-dark">Fokus Utama Ngilmu</h3>
                <img src="/assets/icons/browser-deco.svg" class="opacity-50" alt="deco">
            </div>

            <div class="flex flex-col gap-6 relative z-10">
                <div class="group flex items-start gap-4 transition-all">
                    <div class="mt-1 bg-primary/10 p-2 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <div>
                        <h4 class="font-medium text-dark text-lg">Membangun Growth Mindset</h4>
                        <p class="text-sm text-secondary font-light">Mengubah cara pandang siswa terhadap tantangan menjadi peluang belajar.</p>
                    </div>
                </div>

                <div class="group flex items-start gap-4 transition-all">
                    <div class="mt-1 bg-primary/10 p-2 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <div>
                        <h4 class="font-medium text-dark text-lg">Habit Berbasis Sains</h4>
                        <p class="text-sm text-secondary font-light">Menghilangkan prokrastinasi dengan sistem kebiasaan kecil yang konsisten.</p>
                    </div>
                </div>

                <div class="group flex items-start gap-4 transition-all">
                    <div class="mt-1 bg-primary/10 p-2 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <div>
                        <h4 class="font-medium text-dark text-lg">Logika & Analisis Kritis</h4>
                        <p class="text-sm text-secondary font-light">Melatih kemampuan berpikir mendalam, bukan sekadar menghafal jawaban.</p>
                    </div>
                </div>

                <div class="group flex items-start gap-4 transition-all">
                    <div class="mt-1 bg-primary/10 p-2 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <div>
                        <h4 class="font-medium text-dark text-lg">Navigasi Karier Terarah</h4>
                        <p class="text-sm text-secondary font-light">Membantu memetakan masa depan agar tidak salah dalam memilih jurusan.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="max-w-[1440px] mx-auto px-6 md:px-16 py-20">
    <div class="relative bg-gradient-to-br from-primary to-[#5A52B5] rounded-[48px] px-8 md:px-20 py-16 md:py-24 overflow-hidden shadow-2xl shadow-primary/20">
        
        <img 
            src="/assets/icons/cta-deco.svg" 
            class="absolute top-0 right-0 h-full object-contain opacity-20 pointer-events-none transform translate-x-1/4 md:translate-x-0" 
            alt="decoration"
        >

        <div class="relative z-10 flex flex-col items-center md:items-start text-center md:text-left gap-10">
            <div class="space-y-4">
                <h2 class="text-3xl md:text-5xl font-bold text-white leading-[1.2] tracking-tight">
                    Ngilmu hadir untuk menemani proses <br class="hidden md:block"> 
                    <span class="text-white/80">belajarmu, langkah demi langkah.</span>
                </h2>
                <p class="text-white/70 text-lg font-light max-w-xl">
                    Temukan cara belajar yang paling cocok untuk kepribadianmu dan mulai perjalanan akademik yang lebih menyenangkan.
                </p>
            </div>

            <button class="group flex items-center gap-3 bg-white px-8 py-4 rounded-full text-primary font-bold text-lg hover:bg-slate-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                <span>Mulai Tes Minat & Cara Belajar</span>
                <div class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>
            </button>
        </div>

        <div class="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-[80px]"></div>
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
  @keyframes bounce-slow {
    0%, 100% { transform: translateY(-5%); }
    50% { transform: translateY(0); }
  }
  .animate-bounce-slow {
    animation: bounce-slow 3s infinite;
  }
</style>