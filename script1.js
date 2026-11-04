document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("PendaftaranWorkshop");
    const inputNama = document.getElementById("namaPendaftar");
    const spanKarakter = document.getElementById("Karakter");
    const inputEmail = document.getElementById("email");
    const selectWorkshop = document.getElementById("workshop");
    const pesanWorkshop = document.getElementById("pesanWorkshop");
    const tombolReset = form.querySelector("button[type='reset']");

    // 1. Fitur Penghitung Karakter Secara Langsung (Event: input)
    inputNama.addEventListener("input", function () {
        spanKarakter.textContent = inputNama.value.length;
    });

    // 2. Validasi Form saat tombol Daftar diklik (Event: submit)
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah reload halaman secara otomatis

        const nama = inputNama.value.trim();
        const email = inputEmail.value.trim();
        const workshop = selectWorkshop.value;
        const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validasi Nama Kosong
        if (nama === "") {
            pesanWorkshop.textContent = "Error: Nama peserta wajib diisi!";
            pesanWorkshop.style.color = "red";
            inputNama.focus();
            return;
        }

        // Validasi Email Kosong atau Format Salah
        if (email === "" || !polaEmail.test(email)) {
            pesanWorkshop.textContent = "Error: Masukkan alamat email yang valid!";
            pesanWorkshop.style.color = "red";
            inputEmail.focus();
            return;
        }

        // Validasi Pilihan Workshop
        if (workshop === "") {
            pesanWorkshop.textContent = "Error: Silakan pilih jenis workshop terlebih dahulu!";
            pesanWorkshop.style.color = "red";
            selectWorkshop.focus();
            return;
        }

        // Jika Semua Validasi Berhasil (Sukses)
        pesanWorkshop.textContent = "Sukses! Pendaftaran workshop Anda berhasil dikirim.";
        pesanWorkshop.style.color = "#004d00"; // Hijau gelap kontras
    });

    // 3. Tombol Reset untuk membersihkan form dan penghitung karakter
    tombolReset.addEventListener("click", function () {
        form.reset();
        spanKarakter.textContent = "0";
        
        // Menampilkan teks konten pemberitahuan bahwa form sudah direset
        pesanWorkshop.textContent = "Form telah direset. Silakan isi kembali jika diperlukan.";
        pesanWorkshop.style.color = "#0056b3"; // Warna biru informasi
    });
});