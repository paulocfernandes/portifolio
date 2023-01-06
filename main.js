const butao = document.getElementById("switch")
butao.addEventListener("click", toggleMode )

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains('light')) {

    img.setAttribute("src", "./assed/Ellipse.png")
  } else {
    img.setAttribute("src", "./assed/paulo02.png")
  }
}
