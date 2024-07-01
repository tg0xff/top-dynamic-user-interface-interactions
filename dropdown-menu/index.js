function toggleDropdownMenu(e) {
  const btn = e.target;
  const menu = btn.querySelector("ol");
  if (!btn.classList.contains("active")) {
    btn.classList.add("active");
    menu.classList.add("visible");
  } else {
    btn.classList.remove("active");
    menu.classList.remove("visible");
  }
}

const btns = document.querySelectorAll("button.dropdown");
btns.forEach((btn) => btn.addEventListener("click", toggleDropdownMenu));
