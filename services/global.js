function toggleMenu() {
  const menu = document.getElementById("myTopnav");
  menu.classList.toggle("responsive");
}

function toggleDarkMode() {
  const body = document.body;
  const icon = document.querySelector('.dark-mode-toggle i');

  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
}
