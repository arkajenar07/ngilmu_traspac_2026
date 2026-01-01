<template>
    <section class="relative min-h-screen flex w-full overflow-hidden bg-white">
        
        <div class="w-full lg:w-[45%] flex flex-col justify-center px-8 md:px-16 2xl:px-24 py-12 overflow-y-auto">
            <div class="mb-8">
                <h1 class="text-3xl font-black text-primary tracking-tighter">Ngilmu<span class="text-slate-900">.</span></h1>
            </div>

            <div class="mb-8 space-y-3">
                <h2 class="text-4xl font-black text-slate-900 tracking-tight">Buat Akun Baru 🚀</h2>
                <p class="text-slate-500 font-medium">Lengkapi data diri untuk mulai perjalanan belajarmu.</p>
            </div>

            <form @submit.prevent="" class="space-y-5">
                <div class="flex flex-col gap-2">
                    <label for="username" class="text-sm font-black text-slate-900 uppercase tracking-widest">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        placeholder="Contoh: akram_tikum" 
                        class="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-[20px] focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all"
                        required
                    >
                </div>

                <div class="flex flex-col gap-2">
                    <label for="email" class="text-sm font-black text-slate-900 uppercase tracking-widest">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Masukkan email aktif Anda" 
                        class="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-[20px] focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all"
                        required
                    >
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="flex flex-col gap-2">
                        <label for="password" class="text-sm font-black text-slate-900 uppercase tracking-widest">Kata Sandi</label>
                        <input 
                            type="password" 
                            id="password" 
                            placeholder="••••••••" 
                            class="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-[20px] focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all"
                            required
                        >
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="confirm_password" class="text-sm font-black text-slate-900 uppercase tracking-widest">Konfirmasi</label>
                        <input 
                            type="password" 
                            id="confirm_password" 
                            placeholder="••••••••" 
                            class="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-[20px] focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all"
                            required
                        >
                    </div>
                </div>

                <div class="flex items-start gap-3 py-2">
                    <input type="checkbox" id="terms" class="mt-1 w-4 h-4 rounded text-primary border-slate-300 focus:ring-primary">
                    <label for="terms" class="text-xs text-slate-500 leading-relaxed font-medium">
                        Saya menyetujui <span class="text-primary font-bold">Syarat & Ketentuan</span> serta <span class="text-primary font-bold">Kebijakan Privasi</span> yang berlaku di Ngilmu.
                    </label>
                </div>

                <button type="submit" class="w-full py-5 bg-primary text-white rounded-full font-black text-lg shadow-xl shadow-primary/25 hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300">
                    Daftar Sekarang
                </button>
            </form>

            <div class="mt-8 text-center">
                <p class="text-slate-500 font-medium">
                    Sudah punya akun? 
                    <NuxtLink to="/login" class="text-primary font-black hover:underline ml-1">Masuk Saja</NuxtLink>
                </p>
            </div>
        </div>

        <div class="hidden lg:flex lg:w-[55%] relative bg-slate-900 overflow-hidden">
            <NuxtImg 
                src="/assets/images/login.png" 
                class="absolute inset-0 w-full h-full object-cover opacity-50 scale-110" 
                alt="Community Background"
            />
            
            <div class="absolute inset-0 bg-gradient-to-br from-indigo-600/60 via-transparent to-primary/40"></div>

            <div class="relative z-10 w-full h-full flex flex-col justify-center p-20">
                <div class="max-w-md space-y-8">
                    <div class="w-fit bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-2 rounded-2xl">
                        <span class="text-white text-xs font-black uppercase tracking-[0.2em]">✨ Join the Tribe</span>
                    </div>
                    
                    <h3 class="text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
                        Belajar <br> Bareng yang <br> <span class="italic">Sefrekuensi.</span>
                    </h3>
                    
                    <p class="text-white/70 text-lg leading-relaxed font-medium">
                        Jangan berjuang sendirian. Bergabunglah dengan ribuan siswa lainnya dan dapatkan akses ke mentor-mentor inspiratif setiap hari.
                    </p>

                    <div class="flex items-center gap-6 pt-6">
                        <div class="flex -space-x-4">
                            <div v-for="i in 4" :key="i" class="w-12 h-12 rounded-full border-4 border-slate-900 overflow-hidden bg-slate-200">
                                <NuxtImg :src="`/assets/images/mentor-${i}.png`" class="w-full h-full object-cover" />
                            </div>
                        </div>
                        <p class="text-white/90 text-sm font-bold italic">Banyak teman baru menunggumu!</p>
                    </div>
                </div>
            </div>

            <img src="/assets/icons/math-mentor-deco.svg" class="absolute -bottom-10 -right-10 w-64 h-64 opacity-10 -rotate-12" alt="deco">
        </div>

    </section>
</template>