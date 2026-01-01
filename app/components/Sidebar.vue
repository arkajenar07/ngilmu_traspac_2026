<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const menus = [
  { label: 'Dashboard', to: '/dashboard', icon: 'grid' },
  { label: 'Program Belajar', to: '/dashboard/learning', icon: 'book' },
  { label: 'Konsultasi Mentor', to: '/dashboard/mentor-consult', icon: 'calendar' },
  { label: 'Logic Challenge', to: '/dashboard/logic-challenge', icon: 'trophy' },
  { label: 'Komunitas', to: '/dashboard/community', icon: 'users' },
];

const secondaryMenus = [
  { label: 'Pengaturan', to: '/settings', icon: 'settings' },
  { label: 'Bantuan', to: '/help', icon: 'help' },
];

// Helper icon component
const Icon = ({ name, className }) => {
  const icons = {
    grid: '<path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />',
    trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    settings: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
    help: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>'
  };
  return h('svg', { 
    xmlns: 'http://www.w3.org/2000/svg', 
    viewBox: '0 0 24 24', 
    fill: 'none', 
    stroke: 'currentColor', 
    'stroke-width': 2, 
    'stroke-linecap': 'round', 
    'stroke-linejoin': 'round',
    class: className,
    innerHTML: icons[name] 
  });
};
</script>

<template>
  <aside class="fixed left-0 top-0 h-screen w-72 bg-white border-r border-slate-200 flex flex-col z-50 transition-all duration-300">
    
    <div class="h-20 flex items-center px-8 border-b border-slate-50">
      <div class="flex items-center gap-2.5">
        <div class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
            <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.949 49.949 0 0 0-9.902 3.912l-.003.002-.34.18a.75.75 0 0 1-.707 0A50.009 50.009 0 0 0 7.5 12.174v-.224c0-.131.067-.248.182-.311a51.002 51.002 0 0 1 6.89-3.432.75.75 0 0 1 .732 1.339 49.51 49.51 0 0 0-6.291 3.123c.231.115.467.232.7.352l.34-.182a48.441 48.441 0 0 1 8.875-3.517 59.17 59.17 0 0 0-8.875-5.516z" />
          </svg>
        </div>
        <span class="text-xl font-bold text-slate-800 tracking-tight">
          Ngilmu<span class="text-indigo-600">.</span>
        </span>
      </div>
    </div>

    <div class="flex-1 overflow-y-auto py-6 px-4 space-y-8 no-scrollbar">
      
      <nav class="space-y-1">
        <p class="px-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Menu Utama</p>
        <div v-for="(menu, index) in menus" :key="index">
          <NuxtLink 
            :to="menu.to"
            custom
            v-slot="{ isActive, navigate }"
          >
            <button
              @click="navigate"
              class="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 group relative text-left"
              :class="[
                isActive 
                ? 'bg-indigo-50 text-indigo-600 font-semibold' 
                : 'text-slate-500 font-medium hover:bg-slate-50 hover:text-slate-900'
              ]"
            >
              <div v-if="isActive" class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-indigo-600 rounded-r-full"></div>
              
              <Icon :name="menu.icon" :class="[
                'w-5 h-5 transition-colors', 
                isActive ? 'text-indigo-600' : 'text-slate-400 group-hover:text-indigo-500'
              ]" />
              <span class="text-sm">{{ menu.label }}</span>
            </button>
          </NuxtLink>
        </div>
      </nav>

      <nav class="space-y-1">
        <p class="px-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Lainnya</p>
        <div v-for="(menu, index) in secondaryMenus" :key="index">
          <NuxtLink 
            :to="menu.to"
            custom
            v-slot="{ isActive, navigate }"
          >
            <button
              @click="navigate"
              class="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 group text-left"
              :class="[
                isActive 
                ? 'bg-slate-100 text-slate-900 font-semibold' 
                : 'text-slate-500 font-medium hover:bg-slate-50 hover:text-slate-900'
              ]"
            >
              <Icon :name="menu.icon" :class="[
                'w-5 h-5 transition-colors',
                isActive ? 'text-slate-600' : 'text-slate-400 group-hover:text-slate-600'
              ]" />
              <span class="text-sm">{{ menu.label }}</span>
            </button>
          </NuxtLink>
        </div>
      </nav>

      <div class="px-2">
        <div class="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl p-5 text-white relative overflow-hidden shadow-lg shadow-indigo-200">
           <div class="absolute -top-6 -right-6 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
           <div class="absolute bottom-4 right-2 w-10 h-10 bg-white/10 rounded-full blur-lg"></div>

           <div class="relative z-10">
             <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3 backdrop-blur-sm">
               <span class="text-lg">💎</span>
             </div>
             <h4 class="font-bold text-sm mb-1">Upgrade ke Pro</h4>
             <p class="text-[11px] text-indigo-100 leading-relaxed mb-3 opacity-90">Dapatkan akses mentor eksklusif dan materi tanpa batas.</p>
             <button class="w-full py-2 bg-white text-indigo-700 text-[10px] font-bold uppercase tracking-wide rounded-lg hover:bg-indigo-50 transition-colors shadow-sm">
               Lihat Paket
             </button>
           </div>
        </div>
      </div>

    </div>

    <div class="p-4 border-t border-slate-100 bg-white">
      <div class="flex items-center justify-between gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-full overflow-hidden border border-slate-200">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Arka" class="w-full h-full object-cover" />
          </div>
          <div class="flex flex-col">
            <span class="text-sm font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">Arka Pratama</span>
            <span class="text-[10px] font-medium text-slate-400">Siswa Basic</span>
          </div>
        </div>
        
        <button class="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all" title="Keluar">
           <Icon name="logout" class="w-4 h-4" />
        </button>
      </div>
    </div>

  </aside>
</template>