window.addEventListener("scroll", function() {
  let mainNav = document.getElementById("navbar");
  let logo = document.getElementById("logo");
  let register = document.getElementById("register");
  let nav = document.getElementById("nav");
  let sticky = mainNav.offsetTop;

  if (window.pageYOffset > sticky) {
    mainNav.classList.add("sticky");
    logo.classList.add("logo-sticky");
    register.classList.add("register-sticky");
    nav.classList.add("sticky-navbar")
  } else {
    mainNav.classList.remove("sticky");
    logo.classList.remove("logo-sticky");
    register.classList.remove("register-sticky");
    nav.classList.remove("sticky-navbar")
  }
});