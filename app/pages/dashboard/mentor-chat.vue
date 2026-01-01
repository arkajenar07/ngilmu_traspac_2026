<script setup>
import { ref, nextTick } from "vue";

// --- START: Helper & Data Mocks (No Change from previous step, except removing computed for formatMessage) ---
const chatInput = ref("");
const chatBox = ref(null);
const imageFiles = ref([]); 

const mentorInfo = {
  name: 'Kak Andi Pratama',
  major: 'Informatika',
  status: 'Online',
  sessionTopic: 'Penalaran Analitis & HOTS',
  sessionDuration: '30 Menit',
  remainingTime: 1800,
  avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Andi',
};

const messages = ref([
  { type: "system", text: "Sesi dimulai · AI telah mengirim ringkasan ke mentor", timestamp: '14:30' },
  { type: "mentor", text: "Halo Arka, kita mulai ya. Aku sudah baca ringkasan progresmu. Coba ceritakan bagian mana yang paling kamu bingungkan di bab Analitis ini. Jangan lupa kirim link materi kalau ada ya.", timestamp: '14:31' },
  { type: "user", text: "Tolong lihat contoh soal di link ini: https://www.materibelajar.com/soal-analitis-logika", timestamp: '14:32' }
]);

const handleImage = (e) => {
  const files = Array.from(e.target.files);
  if (files.length === 0) return;

  files.forEach(file => {
      if (imageFiles.value.length < 5) { // Batasi maksimal 5 gambar
          imageFiles.value.push({
              file,
              preview: URL.createObjectURL(file),
              name: file.name
          });
      }
  });
  e.target.value = null; 
};

const removeImage = (index) => {
    if (imageFiles.value[index] && imageFiles.value[index].preview) {
        URL.revokeObjectURL(imageFiles.value[index].preview);
    }
    imageFiles.value.splice(index, 1);
};

const getCurrentTime = () => {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
};

// Ubah kembali menjadi function biasa karena template v-html butuh method
const formatMessage = (text) => {
    if (!text) return '';
    const urlRegex = /(\b(https?):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    
    return text.replace(urlRegex, (url) => {
        // Gunakan warna link yang kontras dengan bubble (putih/gelap)
        const linkColorClass = 'text-indigo-300 hover:text-white underline font-semibold transition-colors';
        return `<a href="${url}" target="_blank" class="${linkColorClass}">${url}</a>`;
    });
};

const sendMessage = async () => {
  if (!chatInput.value.trim() && imageFiles.value.length === 0) return;

  const imagesToSend = imageFiles.value.map(img => img.preview);

  messages.value.push({
    type: "user",
    text: chatInput.value,
    images: imagesToSend,
    timestamp: getCurrentTime(),
  });

  chatInput.value = "";
  imageFiles.value.forEach(img => URL.revokeObjectURL(img.preview));
  imageFiles.value = []; 

  await nextTick();
  chatBox.value.scrollTop = chatBox.value.scrollHeight;

  // Simulasi mentor response
  setTimeout(async () => {
    messages.value.push({
      type: "mentor",
      text: imagesToSend.length > 0 ? `Sip, aku lihat ${imagesToSend.length} gambar dan pesanmu ya. Mohon tunggu sebentar.` : "Oke, mari kita bahas topik itu.",
      timestamp: getCurrentTime(),
    });

    await nextTick();
    chatBox.value.scrollTop = chatBox.value.scrollHeight;
  }, 1500);
};
// --- END: Helper & Data Mocks ---
</script>

<template>
  <Sidebar />
  <section class="min-h-screen bg-[#F8FAFC] ml-72 py-10 px-8 transition-all duration-300">
    <div class="max-w-[1440px] mx-auto">
        <div class="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 grid grid-cols-1 lg:grid-cols-4">

            <main class="lg:col-span-3 flex flex-col h-[700px] border-r border-slate-100">

                <header class="p-4 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full overflow-hidden border-2 border-emerald-500 shrink-0">
                            <img :src="mentorInfo.avatar" class="w-full h-full object-cover bg-indigo-50"/>
                        </div>
                        <div>
                            <h2 class="text-base font-bold text-slate-900">{{ mentorInfo.name }}</h2>
                            <p class="text-xs font-medium text-emerald-600 flex items-center gap-1">
                                <span class="w-2 h-2 bg-emerald-500 rounded-full"></span>
                                {{ mentorInfo.status }}
                            </p>
                        </div>
                    </div>
                    
                    <button class="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-xl text-sm font-semibold hover:bg-red-100 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                        </svg>
                        Akhiri Sesi
                    </button>
                </header>

                <div ref="chatBox" class="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50 no-scrollbar">
                    <div v-for="(msg, i) in messages" :key="i">

                        <div v-if="msg.type === 'system'" class="text-center my-4">
                            <span class="inline-block px-3 py-1 bg-white rounded-full text-xs font-medium text-slate-500 border border-slate-200 shadow-sm">
                                {{ msg.text }}
                            </span>
                        </div>

                        <div v-else-if="msg.type === 'mentor'" class="flex items-end gap-3 justify-start">
                            <div class="max-w-md space-y-1">
                                <div class="bg-white p-3 rounded-t-xl rounded-br-xl shadow-md text-sm text-slate-700">
                                    <p class="leading-relaxed" v-html="formatMessage(msg.text)"></p>
                                </div>
                                <span class="text-xs text-slate-400 font-medium ml-1">{{ msg.timestamp }}</span>
                            </div>
                        </div>

                        <div v-else class="flex justify-end">
                            <div class="max-w-md text-right space-y-1">
                                <div class="bg-primary text-white p-3 rounded-t-xl rounded-bl-xl shadow-md text-sm space-y-2">
                                    <p v-if="msg.text" class="text-left leading-relaxed" v-html="formatMessage(msg.text)"></p>
                                    
                                    <div v-if="msg.images && msg.images.length" :class="[
                                        'grid gap-2', 
                                        msg.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'
                                      ]">
                                        <img
                                            v-for="(imageSrc, idx) in msg.images"
                                            :key="idx"
                                            :src="imageSrc"
                                            class="rounded-lg max-w-full border-2 border-white/50 object-cover w-full h-auto max-h-40"
                                        />
                                    </div>
                                </div>
                                <span class="text-xs text-slate-400 font-medium mr-1">{{ msg.timestamp }}</span>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="border-t p-4 bg-white">
                    <form @submit.prevent="sendMessage" class="flex flex-col gap-2">
                        
                        <div v-if="imageFiles.length > 0" class="flex flex-wrap gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200">
                            <div v-for="(img, index) in imageFiles" :key="index" class="relative w-20 h-20 group">
                                <img :src="img.preview" class="w-full h-full object-cover rounded-lg" :alt="img.name" />
                                <button type="button" @click="removeImage(index)" class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    &times;
                                </button>
                            </div>
                            <span v-if="imageFiles.length > 0" class="text-xs text-slate-500 self-center">({{ imageFiles.length }}/5 gambar terlampir)</span>
                        </div>
                        
                        <div class="flex items-center gap-3">
                            <label class="cursor-pointer text-xl text-slate-500 hover:text-primary transition-colors shrink-0 p-1">
                                📸
                                <input
                                    type="file"
                                    accept="image/*"
                                    class="hidden"
                                    @change="handleImage"
                                    multiple
                                />
                            </label>

                            <input
                                v-model="chatInput"
                                type="text"
                                placeholder="Ketik pesan atau lampirkan gambar..."
                                class="flex-1 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-primary focus:border-primary transition-all"
                            />

                            <button :disabled="!chatInput.trim() && imageFiles.length === 0" class="bg-primary text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-indigo-700 transition-colors disabled:bg-slate-300 disabled:cursor-not-allowed shrink-0">
                                Kirim
                            </button>
                        </div>
                    </form>
                </div>
            </main>

            <aside class="lg:col-span-1 p-6 bg-white space-y-6">
                
                <h3 class="text-lg font-bold text-slate-900 border-b pb-3 border-slate-100">
                    Detail Sesi
                </h3>

                <div class="space-y-3">
                    <div class="flex items-center gap-3 p-3 bg-indigo-50 rounded-xl">
                        <span class="text-2xl">💡</span>
                        <div>
                            <p class="text-xs font-semibold text-slate-600">Topik Diskusi</p>
                            <p class="text-sm font-bold text-slate-900">{{ mentorInfo.sessionTopic }}</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-3 p-3 bg-indigo-50 rounded-xl">
                        <span class="text-2xl">⏳</span>
                        <div>
                            <p class="text-xs font-semibold text-slate-600">Durasi Sesi</p>
                            <p class="text-sm font-bold text-slate-900">{{ mentorInfo.sessionDuration }}</p>
                        </div>
                    </div>
                </div>

                <div class="p-4 bg-white border border-slate-200 rounded-xl space-y-3">
                    <p class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Waktu Tersisa</p>
                    <div class="text-center">
                        <span class="text-4xl font-extrabold text-primary">28:45</span>
                    </div>
                    <div class="h-1.5 bg-slate-100 rounded-full">
                        <div class="bg-primary h-full rounded-full" style="width: 95%;"></div>
                    </div>
                </div>

                <div class="space-y-3">
                    <h4 class="text-sm font-bold text-slate-800 border-t pt-3 border-slate-100">
                        Materi Terkait
                    </h4>
                    <div class="space-y-2">
                        <a href="#" class="block p-3 bg-slate-50 rounded-lg hover:bg-slate-100 text-xs font-medium text-slate-700 transition-colors">
                            📖 PDF: Trik Pola Angka
                        </a>
                        <a href="#" class="block p-3 bg-slate-50 rounded-lg hover:bg-slate-100 text-xs font-medium text-slate-700 transition-colors">
                            🔗 Video: Penalaran Deduktif
                        </a>
                    </div>
                </div>
                
            </aside>

        </div>
    </div>
  </section>
</template>

<style scoped>
/* Preserve chatbox scrollbar styles */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>