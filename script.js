document.querySelector("button").addEventListener("click", function () {
    window.location.href = "voting.html"; // Ganti dengan URL halaman utama
  });

  document.getElementById("card-toggle").addEventListener("click", function () {
    document.getElementById("target").classList.toggle("clicked");
  });