document.addEventListener("DOMContentLoaded", () => {

    console.log("DOM siap digunakan");
    console.log("CV Online siap");
    console.log(
    "Halaman berhasil dimuat sepenuhnya"
);
    

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

        console.log(
            "Selamat datang di CV saya!"
        );

    }

    sapaPengunjung();

    function hitungUmur(
        tahunLahir
    ) {

        return 2026 - tahunLahir;

    }

    console.log(
        "Umur saya:",
        hitungUmur(2004)
    );

    let skills = [

        "Bisa menggunakan komputer",

        "Bisa bekerja tanpa paksaan",

        "Bisa berkomunikasi dengan baik"

    ];

    console.log(
        skills[1]
    );

    skills.push(
        "Bisa bekerja dimanapun"
    );

    console.log(
        "Jumlah skills:",
        skills.length
    );

    console.log(
        skills
    );

    const judulHalaman =
        document.querySelector(
            "h1"
        );

    if (
        judulHalaman
    ) {

        judulHalaman.textContent =
            "Valeria Delsyani Sanusi";

    }

    const semuaLink =
        document.querySelectorAll(
            "nav a"
        );

    console.log(
        "Jumlah tautan:",
        semuaLink.length
    );

    semuaLink.forEach(
        (
            link,
            index
        ) => {

            console.log(
                `Link ${index + 1}: ${link.textContent}`
            );

        }
    );

    const h2Pertama =
        document.querySelector(
            "h2"
        );

    if (
        h2Pertama
    ) {

        h2Pertama.classList.add(
            "highlight"
        );

    }

    const semuaH2 =
        document.querySelectorAll(
            "h2"
        );

    if (
        semuaH2.length > 1
    ) {

        semuaH2[1].classList.toggle(
            "highlight"
        );

    }

    function buatKartu(
        judul,
        deskripsi
    ) {

        const div =
            document.createElement(
                "div"
            );

        div.classList.add(
            "card"
        );

        const h2 =
            document.createElement(
                "h2"
            );

        h2.textContent =
            judul;

        const p =
            document.createElement(
                "p"
            );

        p.textContent =
            deskripsi;

        div.appendChild(
            h2
        );

        div.appendChild(
            p
        );

        return div;

    }

    const containerKartu =
        document.querySelector(
            ".menu"
        );

    if (
        containerKartu
    ) {

        const kartuBaru =
            buatKartu(
                "Pengalaman",
                "Aktif mengikuti kegiatan akademik dan organisasi kampus."
            );

        containerKartu.appendChild(
            kartuBaru
        );

    }

    let dataPendidikan = [

        {
            institusi:
                "SDK Benteng Wake",

            tahun:
                2011
        },

        {
            institusi:
                "SMP St.Fransiskus Xaverius Ruteng",

            tahun:
                2017
        },

        {
            institusi:
                "SMA Negeri 1 Langke Rembong",

            tahun:
                2020
        }

    ];

    function renderPendidikan() {

        const list =
            document.querySelector(
                "#listPendidikan"
            );

        if (
            !list
        ) return;

        list.innerHTML =
            "";

        dataPendidikan.forEach(
            item => {

                const li =
                    document.createElement(
                        "li"
                    );

                li.textContent =
                    `${item.institusi} (${item.tahun})`;

                list.appendChild(
                    li
                );

            }
        );

    }

    renderPendidikan();

    dataPendidikan.push({

        institusi:
            "STIKes Panti Waluya Malang",

        tahun:
            2023

    });

    renderPendidikan();

    console.log(
        dataPendidikan
    );

    const semuaKartu =
    document.querySelectorAll(
        ".kartu"
    );

semuaKartu.forEach(
    (kartu) => {

        kartu.addEventListener(
            "mouseover",
            () => {

                kartu.style.boxShadow =
                    "0 8px 20px rgba(0,0,0,0.3)";

                kartu.style.transition =
                    "0.3s";

                kartu.style.transform =
                    "scale(1.03)";

            }
        );

        kartu.addEventListener(
            "mouseout",
            () => {

                kartu.style.boxShadow =
                    "none";

                kartu.style.transform =
                    "scale(1)";

            }
        );

    }
);
    console.log(
        "DOM Manipulation berhasil dijalankan."
    );

});

const kartuContainer =
    document.querySelector(
        ".kartu-container"
    );

if (kartuContainer) {

    kartuContainer.addEventListener(
        "click",
        (e) => {

            if (
                e.target.tagName === "H3"
            ) {

                console.log(
                    "Judul diklik:",
                    e.target.textContent
                );

            }

        }
    );

}