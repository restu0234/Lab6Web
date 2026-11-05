// script.js
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");
judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh Javascript.";
const tombol = document.getElementById("tombolAksi");
tombol.addEventListener("click", function() {
    pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
});


const tombolGaya =document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");
tombolGaya.addEventListener("click", function() {
    teksGaya.classList.toggle("highlight");
    teksGaya.classList.toggle("teks-besar");
});

const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");


namaInput.addEventListener("input", function() {
    jumlahKarakter.textContent = namaInput.value.length;
});


const form = document.getElementById("FormPendaftaran");
const pesanForm = document.getElementById("pesanForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const usiaInput = document.getElementById("usia").value;
    const usia = Number(usiaInput);
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nama === "") {
        pesanForm.textContent = "Nama Wajib diisi.";
    } else if (nama.length < 3) {
        pesanForm.textContent = "Nama harus memiliki minimal 3 karakter.";
    } else if (!polaEmail.test(email)) {
        pesanForm.textContent = "Masukkan email yang valid.";
    } else if (usiaInput === "" || !Number.isInteger(usia) || usia < 17 || usia > 100) {
        pesanForm.textContent = "Usia harus berupa bilangan bulat antara 17 dan 100.";
    } else { 
        pesanForm.textContent = "Validasi berhasil. Form siap diproses.";
        form.reset(); // Reset form setelah validasi berhasil
    }
    // Validasi form dapat ditambahkan di sini
});

const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const pesanTugas = document.getElementById("pesanTugas");
const daftarTugas = document.getElementById("daftarTugas");
const hapusTugas = document.getElementById("hapusTugas");

tambahTugas.addEventListener("click", function() {
    const teks = inputTugas.value.trim();
    if (teks === "") {
        pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
        return;
    }
    const item = document.createElement("li");
    const label = document.createElement("span");
    const selesai = document.createElement("button");
    label.textContent = teks + " ";
    selesai.textContent = "Tandai Selesai";
    selesai.addEventListener("click", function() {
        item.classList.toggle("selesai");
        selesai.textContent = item.classList.contains("selesai") ? "Batalkan Selesai" : "Tandai Selesai";
    });
   // Tambahkan event click pada item (li) untuk memilih banyak tugas sekaligus
    item.addEventListener("click", function(e) {
        // Mencegah klik pada tombol "Tandai Selesai" memicu seleksi
        if (e.target.tagName === "BUTTON") return;

        // Menggunakan toggle agar bisa menambah atau membatalkan pilihan secara independen
        item.classList.toggle("terpilih");

        if (item.classList.contains("terpilih")) {
            item.style.backgroundColor = "#e0f7fa"; // Warna latar saat dipilih
        } else {
            item.style.backgroundColor = ""; // Hapus warna jika batal dipilih
        }
        
        pesanTugas.textContent = ""; 
    });
    item.append(label, selesai);
    daftarTugas.appendChild(item);
    inputTugas.value = "";
    pesanTugas.textContent = "Tugas berhasil ditambahkan.";
    inputTugas.focus();
});

hapusTugas.addEventListener("click", function() {
    // Mencari SEMUA elemen li yang memiliki kelas "terpilih"
    const tugasTerpilih = daftarTugas.querySelectorAll("li.terpilih");
    
    // Cek apakah ada tugas yang dipilih (panjangnya lebih dari 0)
    if (tugasTerpilih.length > 0) {
        tugasTerpilih.forEach(function(item) {
            daftarTugas.removeChild(item);
        });
        pesanTugas.textContent = "Semua tugas terpilih berhasil dihapus.";
    } else {
        pesanTugas.textContent = "Tidak ada tugas yang dipilih untuk dihapus.";
    }
});

