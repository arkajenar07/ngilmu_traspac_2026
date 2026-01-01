<template>
  <footer class="bg-white border-t border-slate-100 text-slate-600">
    <div class="max-w-[1440px] mx-auto px-6 md:px-16 py-20">

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">

        <div class="lg:col-span-2 pr-0 md:pr-12">
          <div class="flex items-center gap-2 mb-6">
            <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
               <img src="/assets/icons/spark.svg" class="w-5 h-5 brightness-0 invert" alt="Logo" />
            </div>
            <h3 class="text-2xl font-black text-slate-900 tracking-tighter">Ngilmu<span class="text-primary">.</span></h3>
          </div>
          <p class="text-base text-slate-500 leading-relaxed max-w-xs">
            Belajar dengan cara yang mengerti kamu. Ekosistem pendidikan berbasis AI untuk masa depan siswa Indonesia.
          </p>
        </div>

        <div>
          <h4 class="font-bold text-slate-900 mb-6 text-sm uppercase tracking-widest">Features</h4>
          <ul class="space-y-4 text-sm">
            <li><a href="#" class="hover:text-primary transition-colors duration-300">AI Learning Companion</a></li>
            <li><a href="#" class="hover:text-primary transition-colors duration-300">Visi & Misi</a></li>
            <li><a href="#" class="hover:text-primary transition-colors duration-300">Critical Thinking Lab</a></li>
            <li><a href="#" class="hover:text-primary transition-colors duration-300">Home</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold text-slate-900 mb-6 text-sm uppercase tracking-widest">Learning Path</h4>
          <ul class="space-y-4 text-sm">
            <li><a href="#" class="hover:text-primary transition-colors duration-300">UTBK SNBT Fighter</a></li>
            <li><a href="#" class="hover:text-primary transition-colors duration-300">Teman Belajar Harian</a></li>
            <li><a href="#" class="hover:text-primary transition-colors duration-300">Math & Physics Mastery</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold text-slate-900 mb-6 text-sm uppercase tracking-widest">Panduan</h4>
          <ul class="space-y-4 text-sm">
            <li><a href="#" class="hover:text-primary transition-colors duration-300">Tentang Kami</a></li>
            <li><a href="#" class="hover:text-primary transition-colors duration-300">Kebijakan Privasi</a></li>
            <li><a href="#" class="hover:text-primary transition-colors duration-300">Syarat & Ketentuan</a></li>
            <li><a href="#" class="hover:text-primary transition-colors duration-300">Bantuan</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold text-slate-900 mb-6 text-sm uppercase tracking-widest">Kontak</h4>
          <ul class="space-y-4 text-sm">
            <li class="flex items-start gap-3 group">
              <span class="p-2 bg-slate-50 rounded-lg group-hover:bg-primary/10 transition-colors">📧</span>
              <div class="flex flex-col">
                <span class="text-[10px] font-bold text-slate-400 uppercase">Email</span>
                <span class="text-slate-700 font-medium">about@ngilmu.com</span>
              </div>
            </li>
            <li class="flex items-start gap-3 group">
              <span class="p-2 bg-slate-50 rounded-lg group-hover:bg-primary/10 transition-colors">📞</span>
              <div class="flex flex-col">
                <span class="text-[10px] font-bold text-slate-400 uppercase">WhatsApp</span>
                <span class="text-slate-700 font-medium">0812-3456-7890</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-slate-100 mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <p class="text-slate-400 text-sm">
          © 2025 <span class="text-slate-900 font-semibold">Ngilmu.</span> All rights reserved. Built for the future of education.
        </p>

        <div class="flex gap-4">
          <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full border border-slate-100 hover:bg-primary hover:border-primary group transition-all duration-300 shadow-sm">
            <svg class="w-5 h-5 text-slate-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
          </a>
          <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full border border-slate-100 hover:bg-primary hover:border-primary group transition-all duration-300 shadow-sm">
            <svg class="w-5 h-5 text-slate-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full border border-slate-100 hover:bg-primary hover:border-primary group transition-all duration-300 shadow-sm">
            <svg class="w-5 h-5 text-slate-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
        </div>
      </div>

    </div>
  </footer>
</template>