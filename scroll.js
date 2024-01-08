document.addEventListener("DOMContentLoaded", function() {
  const mybutton = document.getElementById("myBtn");

  function toggleButtonVisibility() {
    mybutton.style.display = (window.scrollY > 20) ? "block" : "none";
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  window.addEventListener("scroll", toggleButtonVisibility);
  mybutton.addEventListener("click", scrollToTop);
});
