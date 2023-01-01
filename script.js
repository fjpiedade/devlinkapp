function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }
  html.classList.toggle("light")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "avatar of profile in light mode")
  } else {
    img.setAttribute("src", "./assets/avatar-1.png")
    img.setAttribute("alt", "avatar of profile in dark mode")
  }
}
