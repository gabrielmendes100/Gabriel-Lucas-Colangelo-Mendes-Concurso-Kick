var i
var walls = document.getElementsByClassName("wall")
var slideIndex = 0
autoSlides()
var time


function autoSlides() {
  for (i = 0; i < walls.length; i++) {
    walls[i].style.display = "none"
  }
  slideIndex++;
  if (slideIndex > walls.length) { slideIndex = 1 }
  walls[slideIndex - 1].style.display = "block"
  time = setTimeout(autoSlides, 4000)
}

function nextSlide(n) {
  mostraSlide(slideIndex += n);
  clearTimeout(time)
  time = setTimeout(autoSlides, 5000)
}

function currentSlide(n) {
  mostraSlide(slideIndex = n)
}

function mostraSlide(n) {
  if (n > walls.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = walls.length; }
  for (i = 0; i < walls.length; i++) {
    walls[i].style.display = "none"
  }
  walls[slideIndex - 1].style.display = "block"
}