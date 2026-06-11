//script js
const inputTugas = document.getElementById("tugas");
const tombolTambah = document.getElementById("tambah");
const daftarTugas = document.getElementById("daftarTugas");

tombolTambah.addEventListener("click", function () {
    if (inputTugas.value.trim() === "") {
        alert("Tugas tidak boleh kosong!");
        return;
    }
    const li = document.createElement("li");
    li.textContent = inputTugas.value;
    const tombolHapus = document.createElement("button");
    tombolHapus.textContent = "Hapus";
    tombolHapus.classList.add("hapus");

    tombolHapus.addEventListener("click", function () {
        li.remove();
    });
    li.appendChild(tombolHapus);
    daftarTugas.appendChild(li);
    inputTugas.value = "";
});