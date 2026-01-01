<template>
    <Navbar />
    <section class="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-20">
    <img src="/assets/images/hero-bg.png" alt="Hero Background" class="absolute inset-0 w-full h-full object-cover scale-105" />
    <div class="absolute inset-0 bg-gradient-to-b from-white/40 via-white/5 to-white/60"></div>

    <div class="max-w-[1100px] text-center flex flex-col items-center gap-8 z-10">
        
        <div class="animate-bounce-slow bg-primary/10 backdrop-blur-md px-5 py-2 rounded-full border border-primary/20 shadow-sm">
            <span class="text-primary text-xs md:text-sm font-black tracking-[0.2em] uppercase italic">Real Stories, Real Results</span>
        </div>

        <h1 class="text-5xl md:text-[80px] text-slate-900 font-black leading-[1] tracking-tighter">
            Mereka Sudah <br> <span class="text-primary italic">Membuktikannya.</span>
        </h1>

        <p class="max-w-[700px] text-slate-600 font-normal text-lg md:text-xl leading-relaxed">
            Lebih dari <span class="text-slate-900 font-bold italic">1.000+ siswa</span> telah bertransformasi bersama Ngilmu. Dari yang bingung arah, jadi juara di kampus impian.
        </p>

        <div class="flex flex-wrap justify-center gap-8 md:gap-16 mt-6 bg-white/50 backdrop-blur-sm p-8 rounded-[40px] border border-white">
            <div class="text-center">
                <p class="text-3xl md:text-4xl font-black text-slate-900 leading-none">98%</p>
                <p class="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest mt-2">Kepuasan Siswa</p>
            </div>
            <div class="w-[1px] h-12 bg-slate-200 hidden md:block"></div>
            <div class="text-center">
                <p class="text-3xl md:text-4xl font-black text-slate-900 leading-none">500+</p>
                <p class="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest mt-2">Lolos PTN Favorit</p>
            </div>
            <div class="w-[1px] h-12 bg-slate-200 hidden md:block"></div>
            <div class="text-center">
                <p class="text-3xl md:text-4xl font-black text-slate-900 leading-none">120+</p>
                <p class="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest mt-2">Mentor Berpengalaman</p>
            </div>
        </div>
    </div>

    <div class="absolute bottom-10 animate-bounce opacity-40 z-10">
        <div class="w-6 h-10 border-2 border-slate-400 rounded-full mx-auto flex justify-center pt-2">
            <div class="w-1 h-2 bg-slate-400 rounded-full"></div>
        </div>
    </div>
</section>
<section class="max-w-[1440px] mx-auto px-6 md:px-16 py-24 bg-white">
    <div class="text-center mb-20 space-y-4">
        <h2 class="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Kata Mereka</h2>
        <div class="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
        <p class="text-slate-500 text-lg">Cerita sukses dan perjalanan belajar dari pejuang masa depan.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-8">
        
        <div class="relative group bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 break-inside-avoid overflow-hidden">
            
            <img src="/assets/icons/cta-deco.svg" class="absolute top-0 right-0 w-40 group-hover:scale-110 transition-transform duration-700" alt="deco">

            <div class="relative z-10 flex flex-col gap-6">
                <div class="flex items-center gap-4">
                    <div class="relative">
                        <div class="w-16 h-16 rounded-2xl overflow-hidden border-2 border-slate-50 shadow-sm group-hover:rotate-3 transition-transform">
                            <NuxtImg src="/assets/images/mentor-1.png" class="w-full h-full object-cover" />
                        </div>
                        <div class="absolute -bottom-2 -right-2 bg-primary p-1.5 rounded-lg shadow-lg">
                            <img src="/assets/icons/spark.svg" class="w-3 h-3 brightness-0 invert" alt="spark" />
                        </div>
                    </div>
                    <div>
                        <h4 class="text-lg font-black text-slate-900 leading-none">Andini Putri</h4>
                        <p class="text-primary text-xs font-bold uppercase tracking-widest mt-1">Kelas 12 - SMAN 1 Jakarta</p>
                    </div>
                </div>

                <div class="space-y-3">
                    <p class="text-slate-600 leading-relaxed italic">
                        "Belajar di Ngilmu bener-bener ngerubah cara pandang aku soal belajar. Dulu aku kira belajar itu cuma ngafal, tapi bareng mentor aku diajarin cara bangun logika yang kuat. Akhirnya materi sesulit apapun jadi kerasa masuk akal banget!"
                    </p>
                </div>

                <div class="space-y-4 pt-6 border-t border-slate-50">
                    <p class="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Hasil Pembelajaran:</p>
                    <div class="space-y-2">
                        <div class="flex items-center gap-3 bg-slate-50 p-3 rounded-2xl group-hover:bg-primary/5 transition-colors">
                            <img src="/assets/icons/trophy.svg" class="w-5 h-5" alt="trophy">
                            <span class="text-slate-800 text-sm font-bold tracking-tight">Lolos SNBT 2024 - Akuntansi UI</span>
                        </div>
                        <div class="flex items-center gap-3 bg-slate-50 p-3 rounded-2xl group-hover:bg-primary/5 transition-colors">
                            <img src="/assets/icons/trophy.svg" class="w-5 h-5" alt="trophy">
                            <span class="text-slate-800 text-sm font-bold tracking-tight">Skor UTBK Matematika 850+</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>
<Footer />
</template>

<style>
@keyframes float {
    0%, 100% { transform: translateY(0) rotate(-4deg); }
    50% { transform: translateY(-15px) rotate(-2deg); }
}
@keyframes float-delayed {
    0%, 100% { transform: translateY(0) rotate(6deg); }
    50% { transform: translateY(-15px) rotate(8deg); }
}
.animate-float { animation: float 4s ease-in-out infinite; }
.animate-float-delayed { animation: float-delayed 5s ease-in-out infinite; animation-delay: 1.5s; }
</style>