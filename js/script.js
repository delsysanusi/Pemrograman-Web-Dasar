console.log("CV Online siap");

const namaLengkap = "Valeria Delsyani Sanusi";
console.log(namaLengkap);

let tahunMasuk = 2023;
console.log("Tahun masuk awal:", tahunMasuk);

tahunMasuk = 2026;
console.log("Tahun setelah diubah:", tahunMasuk);

let jurusan = "Manajemen Informasi Kesehatan";
let semester = 6;
let statusAktif = true;

console.log(jurusan);
console.log(semester);
console.log(statusAktif);

console.log(typeof jurusan);
console.log(typeof semester);
console.log(typeof statusAktif);

function sapaPengunjung() {
    console.log("Selamat datang di CV saya!");
}

sapaPengunjung();

function hitungUmur(tahunLahir) {
    return 2026 - tahunLahir;
}

console.log("Umur saya:", hitungUmur(2004));

let skills = [
    "Bisa menggunakan komputer",
    "Bisa bekerja tanpa paksaan",
    "Bisa berkomunikasi dengan baik"
];

console.log(skills[1]);

skills.push("Bisa Bekerja dimanapun");

console.log("Jumlah skills:", skills.length);
console.log("Isi skills terbaru:", skills);