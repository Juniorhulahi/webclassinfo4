// LOGIN SYSTEM
function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  if ((user === "info4" && pass === "info4keren") || (user === "mahasiswa" && pass === "mahasiswa")) {
    localStorage.setItem("loginUser", user);
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("mainPage").style.display = "block";
  } else {
    alert("Username atau Password salah!");
  }
}

function logout() {
  localStorage.removeItem("loginUser");
  document.getElementById("mainPage").style.display = "none";
  document.getElementById("loginPage").style.display = "flex";
}

// CEK LOGIN
window.onload = () => {
  if (localStorage.getItem("loginUser")) {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("mainPage").style.display = "block";
  } else {
    document.getElementById("mainPage").style.display = "none";
    document.getElementById("loginPage").style.display = "flex";
  }
};

// SWITCH SECTION
function showSection(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// ABSEN SYSTEM
const absenForm = document.getElementById("absenForm");
const absenList = document.getElementById("absenList");
let absenData = JSON.parse(localStorage.getItem("absenData")) || [];

absenForm.addEventListener("submit", e => {
  e.preventDefault();
  const nama = document.getElementById("nama").value.trim();
  const status = document.getElementById("status").value;

  if (nama) {
    const data = {
      nama,
      status,
      waktu: new Date().toLocaleString()
    };
    absenData.push(data);
    localStorage.setItem("absenData", JSON.stringify(absenData));
    renderAbsen();
    absenForm.reset();
  }
});

function renderAbsen() {
  absenList.innerHTML = "";
  absenData.forEach((item, i) => {
    const li = document.createElement("li");
    li.textContent = `${i + 1}. ${item.nama} - ${item.status} (${item.waktu})`;
    absenList.appendChild(li);
  });
}

function printAbsen() {
  window.print();
}

// Render awal
renderAbsen();

