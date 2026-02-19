function daftar() {
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;

    if(nama === "" || email === "") {
        alert("Isi semua data!");
        return;
    }

    let peserta = JSON.parse(localStorage.getItem("peserta")) || [];
    peserta.push({nama: nama, email: email});
    localStorage.setItem("peserta", JSON.stringify(peserta));

    alert("Pendaftaran berhasil!");
}

function login() {
    let email = document.getElementById("loginEmail").value;
    let peserta = JSON.parse(localStorage.getItem("peserta")) || [];

    let ditemukan = peserta.find(p => p.email === email);

    if(ditemukan) {
        window.location.href = "menu.html";
    } else {
        alert("Email tidak ditemukan!");
    }
}

function bukaVideo(jenis) {
    let container = document.getElementById("videoContainer");

    if(jenis === "video1") {
        container.innerHTML = `<iframe width="300" src="https://www.youtube.com/embed/VIDEO_ID_1"></iframe>`;
    } else if(jenis === "video2") {
        container.innerHTML = `<iframe width="300" src="https://www.youtube.com/embed/VIDEO_ID_2"></iframe>`;
    } else {
        container.innerHTML = `<iframe width="300" src="https://www.youtube.com/embed/VIDEO_ID_3"></iframe>`;
    }
}

if(document.getElementById("dataPeserta")) {
    let peserta = JSON.parse(localStorage.getItem("peserta")) || [];
    let tabel = document.getElementById("dataPeserta");

    peserta.forEach(p => {
        tabel.innerHTML += `<tr><td>${p.nama}</td><td>${p.email}</td></tr>`;
    });
}
