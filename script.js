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
  event.target.classList.remove(...classList)
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
let classList = ["red","blue","yellow","green","purple","orange","lite-blue","pink","pastel-green","pastel-yellow","lite-purple","lite-orange"]
let currentColorUpdate = function(){
  let color = event.target.classList[0]
  currentPanel.classList.remove(...classList)
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
    pixels[i].classList.remove(...classList)
  }
}

resetButton.addEventListener("click", resetCanvas)

}) // ==============[END OF DOMCONTENTLOADED]============== //
