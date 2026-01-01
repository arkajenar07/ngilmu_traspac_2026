<template>
    <section class="min-h-screen bg-gray-50 px-4 py-8">
  <div class="max-w-6xl mx-auto space-y-8">

    <!-- HEADER -->
    <div class="bg-white rounded-2xl p-6 shadow-sm">
      <h1 class="text-2xl font-semibold text-gray-800">
        Analisa Progres Belajar
      </h1>
      <p class="text-sm text-gray-500 mt-1">
        Ringkasan perkembangan dan rekomendasi pembelajaranmu
      </p>

      <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div class="bg-gray-100 p-4 rounded-xl">
          🔥 Streak Aktif
          <p class="text-lg font-semibold text-gray-800 mt-1">12 Hari</p>
        </div>
        <div class="bg-gray-100 p-4 rounded-xl">
          ⏱ Total Waktu Belajar
          <p class="text-lg font-semibold text-gray-800 mt-1">4 Jam 35 Menit</p>
        </div>
        <div class="bg-gray-100 p-4 rounded-xl">
          🎯 Konsistensi
          <p class="text-lg font-semibold text-gray-800 mt-1">80%</p>
        </div>
      </div>
    </div>

    <!-- SKILL BREAKDOWN -->
    <div class="bg-white rounded-2xl p-6 shadow-sm">
      <h2 class="text-xl font-semibold text-gray-800 mb-4">
        Breakdown Kemampuan
      </h2>

      <div class="space-y-5">
        <!-- LOGIKA -->
        <div>
          <div class="flex justify-between text-sm mb-1">
            <span class="text-gray-600">Logika Dasar</span>
            <span class="font-medium text-gray-800">65%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div class="bg-indigo-600 h-2 rounded-full" style="width:65%"></div>
          </div>
          <p class="text-xs text-gray-500 mt-1">
            Lemah di penalaran deduktif & pola angka
          </p>
        </div>

        <!-- CRITICAL THINKING -->
        <div>
          <div class="flex justify-between text-sm mb-1">
            <span class="text-gray-600">Critical Thinking</span>
            <span class="font-medium text-gray-800">52%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div class="bg-indigo-500 h-2 rounded-full" style="width:52%"></div>
          </div>
          <p class="text-xs text-gray-500 mt-1">
            Perlu peningkatan dalam analisis argumen & sebab-akibat
          </p>
        </div>
      </div>
    </div>

    <!-- AI WEAKNESS ANALYSIS -->
    <div class="bg-indigo-50 rounded-2xl p-6">
      <h2 class="text-lg font-semibold text-indigo-800 mb-2">
        🧠 Analisa AI
      </h2>
      <p class="text-sm text-indigo-700 leading-relaxed">
        Kamu memiliki konsistensi belajar yang sangat baik.  
        Namun, AI mendeteksi bahwa kamu sering langsung menjawab tanpa
        mengevaluasi alternatif solusi terlebih dahulu.
        <br /><br />
        Fokuskan latihan pada:
        <ul class="list-disc ml-5 mt-2">
          <li>Membandingkan dua kemungkinan jawaban</li>
          <li>Menjelaskan alasan sebelum memilih jawaban</li>
        </ul>
      </p>
    </div>

    <!-- RIWAYAT LATIHAN -->
    <div class="bg-white rounded-2xl p-6 shadow-sm">
      <h2 class="text-xl font-semibold text-gray-800 mb-4">
        Riwayat Latihan Terakhir
      </h2>

      <div class="space-y-3 text-sm">
        <div class="flex justify-between bg-gray-100 p-4 rounded-xl">
          <span>Latihan Logika Dasar</span>
          <span class="text-green-600 font-medium">✔ Selesai</span>
        </div>
        <div class="flex justify-between bg-gray-100 p-4 rounded-xl">
          <span>Critical Thinking Case #3</span>
          <span class="text-yellow-600 font-medium">⏳ Perlu Review</span>
        </div>
        <div class="flex justify-between bg-gray-100 p-4 rounded-xl">
          <span>Logic Pattern Challenge</span>
          <span class="text-red-500 font-medium">✖ Salah</span>
        </div>
      </div>
    </div>

    <!-- ACTION RECOMMENDATION -->
    <div class="bg-white rounded-2xl p-6 shadow-sm">
      <h2 class="text-xl font-semibold text-gray-800 mb-4">
        Rekomendasi Langkah Selanjutnya
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="border border-gray-200 rounded-xl p-4">
          <p class="font-medium text-gray-700">
            🔁 Latihan Tambahan
          </p>
          <p class="text-sm text-gray-500 mt-1">
            3 latihan logika deduktif (±10 menit)
          </p>
        </div>

        <div class="border border-gray-200 rounded-xl p-4">
          <p class="font-medium text-gray-700">
            🤝 Sesi Mentor
          </p>
          <p class="text-sm text-gray-500 mt-1">
            Diskusi cara berpikir & strategi menjawab soal
          </p>
        </div>
      </div>

      <div class="mt-6 flex flex-wrap gap-3">
        <button class="bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-indigo-700">
          Mulai Latihan
        </button>
        <button class="border border-indigo-600 text-indigo-600 px-5 py-2 rounded-lg text-sm hover:bg-indigo-50">
          Booking Mentor
        </button>
      </div>
    </div>

  </div>
</section>
</template>