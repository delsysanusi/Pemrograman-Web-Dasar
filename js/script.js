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

skills.push("Bisa bekerja dimanapun");

console.log("Jumlah skills:", skills.length);
console.log("Isi skills terbaru:", skills);

const judulHalaman = document.querySelector("h1");
console.log("Elemen H1:", judulHalaman);

const semuaLink = document.querySelectorAll("nav a");

console.log("Jumlah tautan:", semuaLink.length);

semuaLink.forEach((link, index) => {
    console.log(`Link ${index + 1}: ${link.textContent}`);
});

judulHalaman.textContent = "Valeria Delsyani Sanusi";

const h2Pertama = document.querySelector("h2");

h2Pertama.classList.add("highlight");

const semuaH2 = document.querySelectorAll("h2");

if (semuaH2.length > 1) {
    semuaH2[1].classList.toggle("highlight");
}

function buatKartu(judul, deskripsi) {

    const div = document.createElement("div");
    div.classList.add("card");

    const h2 = document.createElement("h2");
    h2.textContent = judul;

    const p = document.createElement("p");
    p.textContent = deskripsi;

    div.appendChild(h2);
    div.appendChild(p);

    return div;
}

const containerKartu = document.querySelector(".menu");

const kartuBaru = buatKartu(
    "Pengalaman",
    "Aktif mengikuti kegiatan akademik dan organisasi kampus."
);

containerKartu.appendChild(kartuBaru);

let dataPendidikan = [
    {
        institusi: "SDK Benteng Wake",
        tahun: 2011
    },
    {
        institusi: "SMP St.Fransiskus Xaverius Ruteng",
        tahun: 2017
    },
    {
        institusi: "SMA Negeri 1 Langke Rembong",
        tahun: 2020
    }
];

function renderPendidikan() {

    const list = document.querySelector("#listPendidikan");

    list.innerHTML = "";

    dataPendidikan.forEach(item => {

        const li = document.createElement("li");

        li.textContent =
            `${item.institusi} (${item.tahun})`;

        list.appendChild(li);
    });
}

renderPendidikan();

dataPendidikan.push({
    institusi: "STIKes Panti Waluya Malang",
    tahun: 2023
});

renderPendidikan();

console.log("Data pendidikan terbaru:");
console.log(dataPendidikan);
console.log("DOM Manipulation berhasil dijalankan.");