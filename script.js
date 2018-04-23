document.addEventListener("DOMContentLoaded", function(){

// ==============[PIXEL GENERATOR]============== //
  let canvas = document.getElementsByClassName("canvas")[0]
  for (let i = 0; i < 2500; i++){
    let item = document.createElement("div")
    item.classList.add("item")
    canvas.appendChild(item)
  }
// ============================================ //

// ============[PAINTING/CANVAS FUNCTIONALITY]========= //
let paint = function(){
  event.target.classList.remove("red")
  event.target.classList.remove("blue")
  event.target.classList.remove("yellow")
  event.target.classList.remove("green")
  event.target.classList.remove("purple")
  event.target.classList.remove("orange")
  event.target.classList.remove("lite-blue")
  event.target.classList.remove("pink")
  event.target.classList.remove("pastel-green")
  event.target.classList.remove("pastel-yellow")
  event.target.classList.remove("lite-purple")
  event.target.classList.remove("lite-orange")
  event.target.classList.add(currentColor)
}
canvas.addEventListener("click", paint)
// ============================================= //

// ==============[COLOR SELECTION]=============== //
let paletteCollection = document.getElementsByClassName("picker")
let currentColor
let selectColor = function(){
  currentColor = event.target.classList[0]
}

for (let i = 0; i < paletteCollection.length; i++){
  paletteCollection[i].addEventListener("click", selectColor)
}
// =============================================== //

// ===============[CURRENT COLOR INDICATOR]============= //
let currentPanel = document.getElementsByClassName("current")[0]
let currentColorUpdate = function(){
  let color = event.target.classList[0]
  currentPanel.classList.remove("red")
  currentPanel.classList.remove("blue")
  currentPanel.classList.remove("yellow")
  currentPanel.classList.remove("green")
  currentPanel.classList.remove("purple")
  currentPanel.classList.remove("orange")
  currentPanel.classList.remove("lite-blue")
  currentPanel.classList.remove("pink")
  currentPanel.classList.remove("pastel-green")
  currentPanel.classList.remove("pastel-yellow")
  currentPanel.classList.remove("lite-purple")
  currentPanel.classList.remove("lite-orange")
  currentPanel.classList.add(color)
}

for (let i = 0; i < paletteCollection.length; i++){
  paletteCollection[i].addEventListener("click", currentColorUpdate)
}
// ==================================================== //

// =================[RESET BUTTON]================ //
let pixels = document.getElementsByClassName("item")
let resetButton = document.getElementsByClassName("reset")[0]
let resetCanvas = function(){
  for (let i = 0; i < pixels.length; i++){
    pixels[i].classList.remove("red")
    pixels[i].classList.remove("blue")
    pixels[i].classList.remove("yellow")
    pixels[i].classList.remove("green")
    pixels[i].classList.remove("purple")
    pixels[i].classList.remove("orange")
    pixels[i].classList.remove("lite-blue")
    pixels[i].classList.remove("pink")
    pixels[i].classList.remove("pastel-green")
    pixels[i].classList.remove("pastel-yellow")
    pixels[i].classList.remove("lite-purple")
    pixels[i].classList.remove("lite-orange")
  }
}

resetButton.addEventListener("click", resetCanvas)

}) // ==============[END OF DOMCONTENTLOADED]============== //
