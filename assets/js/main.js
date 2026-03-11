// HEADER
fetch('/components/header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  });
// Toggle menú mobile
document.addEventListener("click", function (e) {
  if (e.target && e.target.id === "menuToggle") {
    document.getElementById("mainNav").classList.toggle("active");
  }
});
// FOOTER
fetch('/components/footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });