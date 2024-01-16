const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

console.log(slides.length); // compte le nombre d'images

let arrowLeft = document.querySelector(".arrow_left") // objet arrow left
let arrowRight = document.querySelector(".arrow_right") // objet arrow right
let index = 0 

console.log(arrowLeft);
console.log(arrowRight);

// ***** Event Listener sur arrow left
arrowLeft.addEventListener("click", () => {  

	console.log("T'as cliqué à gauche")
	index--
	console.log(index);
	sliderMoteur(index)
})

// ***** Event Listener sur arrow right

arrowRight.addEventListener("click", () => {

	console.log("T'as cliqué à droite")
	index++
	console.log(index);
	sliderMoteur(index)
})

// ajout des bullets points 

let divContainerDot = document.querySelector(".dots")

console.log(divContainerDot);

for (let i = 0; i < slides.length; i++) {

	let pointsSlider = document.createElement("div")
	pointsSlider.classList.add("dot")
	pointsSlider.setAttribute("id", i)
	divContainerDot.appendChild(pointsSlider)
}


let bannerImg = document.querySelector(".banner-img")

console.log(bannerImg);

console.log(index);

function sliderMoteur(x) {

	let sourceImage = slides[x].image
	console.log(sourceImage);
	bannerImg.setAttribute("src","./assets/images/slideshow/" + sourceImage)

	let containerTextImage = document.querySelector("#banner p")
	console.log(containerTextImage);

	let textImage = slides[x].tagLine
	containerTextImage.innerHTML = textImage

	let dotSelected = document.getElementById(x)
	console.log(dotSelected);
	dotSelected.classList.toggle("dot_selected")


}



