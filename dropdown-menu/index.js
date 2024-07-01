const btn = document.querySelector("button.dropdown");
const menu = btn.querySelector("ol");
let btnToggle = false;

function showDropdownMenu() {
  if (btnToggle) {
    btn.classList.add("active");
    menu.classList.add("visible");
  } else {
    btn.classList.remove("active");
    menu.classList.remove("visible");
  }
  btnToggle = !btnToggle;
}

btn.addEventListener("click", showDropdownMenu);
