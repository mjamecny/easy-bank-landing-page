const hamburgerMenuEl = document.querySelector(".hamburger-icon")
const closeMenuEl = document.querySelector(".close-icon")
const navMenuEl = document.querySelector(".nav-menu")

hamburgerMenuEl.addEventListener("click", () => {
  hamburgerMenuEl.classList.add("hidden")
  closeMenuEl.classList.remove("hidden")
  navMenuEl.classList.remove("hidden")
  navMenuEl.classList.add("flex")
})

closeMenuEl.addEventListener("click", () => {
  closeMenuEl.classList.add("hidden")
  hamburgerMenuEl.classList.remove("hidden")
  navMenuEl.classList.add("hidden")
  navMenuEl.classList.remove("flex")
})
