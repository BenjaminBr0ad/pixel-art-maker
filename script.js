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
// -----Click & Paint Pixels
let clickPaint = function(){
  event.target.classList.remove(...classList)
  event.target.classList.add(currentColor)
}
canvas.addEventListener("click", clickPaint)
// -----Drag & Paint Functionality
let isPainting = false
let setTrue = function(){
  isPainting = true
}
let setFalse = function(){
  isPainting = false
}
let dragPaint = function(){
  if (isPainting === true){
    event.target.classList.remove(...classList)
    event.target.classList.add(currentColor)
  }
}

canvas.addEventListener("mousedown", setTrue)
canvas.addEventListener("mouseover", dragPaint)
canvas.addEventListener("mouseup", setFalse)
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
let classList = ["red","blue","yellow","green","purple","orange","lite-blue","pink","pastel-green","pastel-yellow","lite-purple","lite-orange","white","black"]
let currentColorUpdate = function(){
  let color = event.target.classList[0]
  currentPanel.classList.remove(...classList)
  currentPanel.classList.add(color)
  if (currentPanel.classList.contains("black")){
    currentPanel.style.color="white"
  } else {
    currentPanel.style.color="black"
  }
}

for (let i = 0; i < paletteCollection.length; i++){
  paletteCollection[i].addEventListener("click", currentColorUpdate)
}
// ==================================================== //

// =================[RESET BUTTON]================ //
let resetButton = document.getElementsByClassName("reset")[0]
let pixels = document.getElementsByClassName("item")
let resetCanvas = function(){
  for (let i = 0; i < pixels.length; i++){
    pixels[i].classList.remove(...classList)
  }
}

resetButton.addEventListener("click", resetCanvas)

}) // ==============[END OF DOMCONTENTLOADED]============== //
