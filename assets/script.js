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

// ***** Event Listener sur arrow left
arrowLeft.addEventListener("click", () => {  

	console.log("T'as cliqué à gauche")
	index-- 
	console.log(index);
	sliderInteract(index) // lance la fonction sliderInteract
})

// ***** Event Listener sur arrow right

arrowRight.addEventListener("click", () => {

	console.log("T'as cliqué à droite")
	index++
	console.log(index)
	sliderInteract(index) // lance la fonction sliderInteract
})

// Ajout des bullets points 

let divContainerDot = document.querySelector(".dots") // Recup objet div .dots qui sera parent des .dot
console.log(divContainerDot);

for (let i = 0; i < slides.length; i++) {

	let pointsSlider = document.createElement("div") // Création d'une div
	pointsSlider.classList.add("dot") // ajout de la class "dot" à la div
	pointsSlider.setAttribute("id", i) // ajout d'un attribut ID avec valeur i
	divContainerDot.appendChild(pointsSlider) // Rattachement de la div au container
}

let bannerImg = document.querySelector(".banner-img") // Recup objet img .banner-img

sliderInteract(index) // lance la fonction par defaut avec l'index initialisé à 0

function sliderInteract(x) {

	let sourceImage = slides[x].image // Recup la valeur de la clef 'image' de l'élément x du tableau slides
	bannerImg.setAttribute("src","./assets/images/slideshow/" + sourceImage) // modifie l'attribut src avec la valeur de la clef du tableau (avec une concaténation pour ajouter le chemin)

	let containerTextImage = document.querySelector("#banner p") // Recup le texte de la balise p dans l'objet ID "banner"

	let textImage = slides[x].tagLine //Recup la valeur de la clef 'tagline' dans le tableau
	containerTextImage.innerHTML = textImage // modification du contenu de la balise p par la valeur tagline du tableau

	let allDots = document.querySelectorAll(".dot") // Recup de la Nodelist de toutes les div .dot 
	console.log(allDots)

	allDots.forEach(function(dot) {
	dot.classList.remove("dot_selected") // pour chaque element de la Nodelist, supprimer la class .dot_selected

	let dotSelected = document.getElementById(x) // Recup de l'élément qui a un ID qui correspond à la valeur de l'index
	console.log(dotSelected);
	
	dotSelected.classList.add("dot_selected") // Ajout de la class .dot_selected à l'élément qui à un ID qui correspond à l'index
	console.log(dotSelected.id);

})
}