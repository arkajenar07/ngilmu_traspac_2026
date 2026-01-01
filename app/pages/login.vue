<template>
    <section class="relative min-h-screen flex w-full overflow-hidden bg-white">
        
        <div class="w-full lg:w-[45%] flex flex-col justify-center px-8 md:px-16 2xl:px-24 py-12">
            <div class="mb-12">
                <h1 class="text-3xl font-black text-primary tracking-tighter">Ngilmu<span class="text-slate-900">.</span></h1>
            </div>

            <div class="mb-10 space-y-3">
                <h2 class="text-4xl font-black text-slate-900">Selamat Datang! 👋</h2>
                <p class="text-slate-500 font-medium">Lanjutkan perjalanan belajarmu bersama para mentor terbaik.</p>
            </div>

            <form @submit.prevent="" class="space-y-6">
                <div class="flex flex-col gap-2">
                    <label for="email" class="text-sm font-black text-slate-900 uppercase tracking-widest">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Masukkan email Anda" 
                        class="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-[20px] focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-slate-400"
                        required
                    >
                </div>

                <div class="flex flex-col gap-2">
                    <div class="flex justify-between items-center">
                        <label for="password" class="text-sm font-black text-slate-900 uppercase tracking-widest">Kata Sandi</label>
                        <a href="#" class="text-xs font-bold text-primary hover:underline">Lupa Password?</a>
                    </div>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="••••••••" 
                        class="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-[20px] focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-slate-400"
                        required
                    >
                </div>

                <button type="submit" class="w-full py-5 bg-primary text-white rounded-full font-black text-lg shadow-xl shadow-primary/25 hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300">
                    Masuk Sekarang
                </button>
            </form>

            <div class="mt-10 text-center">
                <p class="text-slate-500 font-medium">
                    Belum punya akun? 
                    <a href="/register" class="text-primary font-black hover:underline ml-1">Daftar Gratis</a>
                </p>
            </div>
        </div>

        <div class="hidden lg:flex lg:w-[55%] relative bg-slate-900 overflow-hidden">
            <NuxtImg 
                src="/assets/images/login.png" 
                class="absolute inset-0 w-full h-full object-cover opacity-60 scale-105" 
                alt="Login Background"
            />
            
            <div class="absolute inset-0 bg-gradient-to-tr from-primary/80 via-transparent to-slate-900/40"></div>

            <div class="relative z-10 w-full h-full flex flex-col justify-end p-20">
                <div class="max-w-md space-y-6">
                    <div class="w-fit bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 rounded-2xl">
                        <span class="text-white text-xs font-bold uppercase tracking-[0.2em]">🚀 Member Benefit</span>
                    </div>
                    
                    <h3 class="text-5xl font-black text-white leading-tight">
                        Wujudkan Mimpimu <br> Jadi Nyata.
                    </h3>
                    
                    <p class="text-white/80 text-lg leading-relaxed font-medium">
                        "Berkat Ngilmu, aku nggak cuma paham materi, tapi juga punya habit belajar yang jauh lebih baik."
                    </p>

                    <div class="flex items-center gap-4 pt-4">
                        <div class="w-12 h-12 rounded-full border-2 border-white/50 overflow-hidden">
                            <NuxtImg src="/assets/images/mentor-1.png" class="w-full h-full object-cover" />
                        </div>
                        <div>
                            <p class="text-white font-bold leading-none">Akram Tikum</p>
                            <p class="text-white/60 text-xs">Alumni UI & Mentor Matematika</p>
                        </div>
                    </div>
                </div>
            </div>

            <img src="/assets/icons/spark.svg" class="absolute top-20 right-20 w-32 h-32 opacity-20 animate-pulse" alt="">
        </div>

    </section>
</template>