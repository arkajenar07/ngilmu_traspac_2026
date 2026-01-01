<template>
    <Navbar />
<section class="relative min-h-[120vh] md:min-h-screen flex flex-col items-center justify-start pt-32 pb-20 overflow-hidden px-6">
    <img src="/assets/images/hero-bg.png" alt="Hero Background" class="absolute inset-0 w-full h-full object-cover scale-105" />
    <div class="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60"></div>

    <div class="max-w-[1440px] text-center mb-16 flex flex-col items-center gap-6 z-10">
        <div class="animate-bounce-slow bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/50 shadow-sm">
            <span class="text-primary text-xs md:text-sm font-black tracking-[0.2em] uppercase italic">Expert Insight</span>
        </div>

        <h1 class="text-5xl md:text-[64px] text-slate-900 font-black leading-tight tracking-tighter">
            Kenalan Yuk sama Para <span class="text-primary italic">Mentor!</span> 👀
        </h1>

        <p class="max-w-[700px] text-slate-600 font-normal text-lg leading-relaxed">
            Belajar langsung dari mahasiswa berprestasi dan profesional yang siap membimbingmu dengan cara yang <span class="text-slate-900 font-bold underline decoration-primary/40">paling relate</span> buat anak muda.
        </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 z-10 w-full max-w-[1280px]">
        
        <div class="group relative h-[420px] rounded-[40px] overflow-hidden bg-slate-200 shadow-xl hover:-translate-y-3 transition-all duration-500">
            <NuxtImg src="/assets/images/mentor-1.png" alt="Akram Tikum" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"></NuxtImg>
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
            <div class="absolute bottom-0 left-0 w-full p-6 space-y-2">
                <span class="px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-full">Mentor Matematika</span>
                <h3 class="text-2xl font-bold text-white">Akram Tikum</h3>
                <p class="text-white/70 text-sm font-light">UI - Matematika</p>
            </div>
        </div>

        <div class="group relative h-[420px] rounded-[40px] overflow-hidden bg-slate-200 shadow-xl hover:-translate-y-3 transition-all duration-500">
            <NuxtImg src="/assets/images/mentor-1.png" alt="Akram Tikum" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"></NuxtImg>
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
            <div class="absolute bottom-0 left-0 w-full p-6 space-y-2">
                <span class="px-3 py-1 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">Mentor Fisika</span>
                <h3 class="text-2xl font-bold text-white">Budi Santoso</h3>
                <p class="text-white/70 text-sm font-light">ITB - Teknik Elektro</p>
            </div>
        </div>

        <div class="group relative h-[420px] rounded-[40px] overflow-hidden bg-slate-200 shadow-xl hover:-translate-y-3 transition-all duration-500">
            <NuxtImg src="/assets/images/mentor-1.png" alt="Mentor 3" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"></NuxtImg>
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
            <div class="absolute bottom-0 left-0 w-full p-6 space-y-2">
                <span class="px-3 py-1 bg-amber-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">Mentor Biologi</span>
                <h3 class="text-2xl font-bold text-white">Siti Sarah</h3>
                <p class="text-white/70 text-sm font-light">UGM - Kedokteran</p>
            </div>
        </div>

        <div class="group relative h-[420px] rounded-[40px] overflow-hidden bg-slate-200 shadow-xl hover:-translate-y-3 transition-all duration-500">
            <NuxtImg src="/assets/images/mentor-1.png" alt="Mentor 4" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"></NuxtImg>
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
            <div class="absolute bottom-0 left-0 w-full p-6 space-y-2">
                <span class="px-3 py-1 bg-rose-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">Mentor Kimia</span>
                <h3 class="text-2xl font-bold text-white">Andi Wijaya</h3>
                <p class="text-white/70 text-sm font-light">UNAIR - Farmasi</p>
            </div>
        </div>

    </div>

    <div class="mt-16 animate-bounce opacity-40 z-10">
        <div class="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center pt-2">
            <div class="w-1 h-2 bg-slate-400 rounded-full"></div>
        </div>
    </div>
</section>
<section class="max-w-[1440px] mx-auto px-6 md:px-16 py-24 bg-slate-50/50 rounded-[60px] my-10">
    <div class="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
        <div class="max-w-2xl space-y-4">
            <div class="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm">
                <span class="w-8 h-[2px] bg-primary"></span>
                Direktori Mentor
            </div>
            <h2 class="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Temukan Mentor dengan <br> Berbagai <span class="text-primary italic">Spesialisasi</span>
            </h2>
        </div>
        <button class="px-10 py-5 flex items-center bg-primary rounded-full text-white font-bold shadow-xl shadow-primary/25 hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300">
            Cobain Fitur Mentor Match
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
        </button>
    </div>

    <div class="flex flex-col gap-16">
        
        <div class="space-y-8">
            <div class="flex items-center gap-4 border-b border-slate-200 pb-4">
                <div class="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-2xl">📐</div>
                <div>
                    <h3 class="text-2xl font-black text-slate-900">Si Master Matematika</h3>
                    <p class="text-slate-500 font-medium">Siap bantuin kamu jadi juara di Matematika!</p>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="relative group bg-slate-900 rounded-[40px] p-8 md:p-10 overflow-hidden shadow-2xl">
                    <img src="/assets/icons/math-mentor-deco.svg" class="absolute top-0 right-0 w-48 opacity-20 group-hover:scale-110 transition-transform duration-700" alt="deco">
                    <img src="/assets/icons/math-mentor-deco.svg" class="absolute -bottom-10 -left-10 w-32 opacity-10 rotate-45" alt="deco">

                    <div class="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                        <div class="flex flex-col items-center text-center space-y-4 min-w-[160px]">
                            <div class="relative">
                                <div class="w-32 h-32 rounded-[28px] overflow-hidden border-4 border-white/10 shadow-inner group-hover:rotate-3 transition-transform">
                                    <NuxtImg src="/assets/images/mentor-1.png" class="w-full h-full object-cover" />
                                </div>
                                <div class="absolute -bottom-2 -right-2 bg-primary p-2 rounded-lg shadow-lg">
                                    <img src="/assets/icons/spark.svg" class="w-4 h-4 brightness-0 invert" />
                                </div>
                            </div>
                            <div>
                                <h4 class="text-xl font-bold text-white">Akram Tikum</h4>
                                <p class="text-primary text-xs font-black uppercase tracking-tighter">UI - Matematika</p>
                            </div>
                        </div>

                        <div class="flex-1 w-full space-y-4">
                            <p class="text-white/60 text-xs font-bold uppercase tracking-widest mb-2 italic">🏆 Prestasi Utama:</p>
                            <div class="space-y-3">
                                <div v-for="i in 3" :key="i" class="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-2xl hover:bg-white/10 transition-colors">
                                    <img src="/assets/icons/trophy.svg" class="w-5 h-5" alt="trophy">
                                    <span class="text-white/90 text-[13px] leading-tight font-medium tracking-tight">Juara 1 ITB Mathematics Olympiad - MCF ITB</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="relative group bg-slate-900 rounded-[40px] p-8 md:p-10 overflow-hidden shadow-2xl">
                    <img src="/assets/icons/math-mentor-deco.svg" class="absolute top-0 right-0 w-48 opacity-20 group-hover:scale-110 transition-transform duration-700" alt="deco">
                    <div class="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                        <div class="flex flex-col items-center text-center space-y-4 min-w-[160px]">
                            <div class="w-32 h-32 rounded-[28px] overflow-hidden border-4 border-white/10 shadow-inner group-hover:-rotate-3 transition-transform">
                                <NuxtImg src="/assets/images/mentor-1.png" class="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h4 class="text-xl font-bold text-white">Akram Tikum</h4>
                                <p class="text-primary text-xs font-black uppercase tracking-tighter">UI - Matematika</p>
                            </div>
                        </div>
                        <div class="flex-1 w-full space-y-4">
                            <p class="text-white/60 text-xs font-bold uppercase tracking-widest mb-2 italic">🏆 Prestasi Utama:</p>
                            <div class="space-y-3">
                                <div v-for="i in 3" :key="i" class="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-2xl hover:bg-white/10 transition-colors">
                                    <img src="/assets/icons/trophy.svg" class="w-5 h-5" alt="trophy">
                                    <span class="text-white/90 text-[13px] leading-tight font-medium tracking-tight">Juara 1 ITB Mathematics Olympiad - MCF ITB</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="space-y-8 opacity-90">
             <div class="flex items-center gap-4 border-b border-slate-200 pb-4">
                <div class="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-2xl">⚡</div>
                <div>
                    <h3 class="text-2xl font-black text-slate-900">The Physics Guru</h3>
                    <p class="text-slate-500 font-medium">Taklukkan hukum alam dengan logika yang asik!</p>
                </div>
            </div>
            <p class="text-center py-10 border-2 border-dashed border-slate-200 rounded-[40px] text-slate-400 font-medium uppercase tracking-widest">Mentor lainnya sedang bersiap untukmu...</p>
        </div>
    </div>
</section>

<section class="max-w-[1440px] mx-auto px-6 md:px-16 py-24">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <div class="relative overflow-hidden bg-primary rounded-[48px] p-10 md:p-16 shadow-2xl shadow-primary/30 group">
            <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
            <img src="/assets/icons/spark.svg" class="absolute bottom-10 right-10 w-24 h-24 opacity-10 rotate-12 group-hover:rotate-45 transition-transform duration-500" alt="spark">

            <div class="relative z-10 flex flex-col h-full justify-between gap-12">
                <div class="space-y-6">
                    <span class="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-widest">For Students</span>
                    <h2 class="text-4xl md:text-5xl font-black text-white leading-tight">
                        Bingung Pilih Jurusan? <br> <span class="text-white/70">Konsul Aja!</span>
                    </h2>
                    <p class="text-white/80 text-lg leading-relaxed max-w-md">
                        Ngobrol santai bareng mentor pilihanmu. Tanya tips masuk PTN, strategi belajar, sampai spill suka duka jurusan impianmu.
                    </p>
                </div>

                <button class="w-fit flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-black text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    Mulai Konsultasi
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                </button>
            </div>
        </div>

        <div class="relative overflow-hidden bg-slate-900 rounded-[48px] p-10 md:p-16 shadow-2xl group">
            <div class="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px] group-hover:bg-primary/30 transition-all duration-700"></div>
            
            <div class="relative z-10 flex flex-col h-full justify-between gap-12">
                <div class="space-y-6">
                    <span class="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-primary text-xs font-bold uppercase tracking-widest border border-white/10">For High Achievers</span>
                    <h2 class="text-4xl md:text-5xl font-black text-white leading-tight">
                        Punya Skill? <br> <span class="text-slate-500">Jadi Mentor Yuk!</span>
                    </h2>
                    <p class="text-slate-400 text-lg leading-relaxed max-w-md">
                        Bantu adik kelasmu meraih mimpi sambil nambah penghasilan dan bangun portofolio sebagai edukator masa depan.
                    </p>
                </div>

                <button class="w-fit flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-black text-lg hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300">
                    Daftar Jadi Mentor
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                </button>
            </div>
        </div>

    </div>
</section>
<Footer />
</template>