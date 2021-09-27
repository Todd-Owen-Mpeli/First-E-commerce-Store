/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
	navToggle = document.getElementById("nav-toggle"),
	navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
	navToggle.addEventListener("click", () => {
		navMenu.classList.add("show-menu");
	});
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navToggle) {
	navClose.addEventListener("click", () => {
		navMenu.classList.remove("show-menu");
	});
}

/*==================== ABOUT ME SECTION (Profile Picture change) ====================*/
function setNewIcon() {
	document.getElementById("website-icon").src =
		"/Projects/Online-Store/Online-Store-Images/Picture4-removebg-preview.png";
}

function setOldIcon() {
	document.getElementById("website-icon").src =
		"/Projects/Online-Store/Online-Store-Images/Picture2-removebg-preview.png";
}

// Footer Section Icon

function setFooterNewIcon() {
	document.getElementById("footer-icon").src =
		"/Projects/Online-Store/Online-Store-Images/Picture4-removebg-preview.png";
}

function setFooterOldIcon() {
	document.getElementById("footer-icon").src =
		"/Projects/Online-Store/Online-Store-Images/Picture2-removebg-preview.png";
}

/*==================== PRODUCT IMAGE SLIDER ====================*/
const imgs = document.querySelectorAll(".img-select a");
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
	imgItem.addEventListener("click", (event) => {
		event.preventDefault();
		imgId = imgItem.dataset.id;
		slideImage();
	});
});

function slideImage() {
	const displayWidth = document.querySelector(
		".img-showcase img:first-child"
	).clientWidth;

	document.querySelector(".img-showcase").style.transform = `translateX(${
		-(imgId - 1) * displayWidth
	}px)`;
}

window.addEventListener("resize", slideImage);

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
	const navMenu = document.getElementById("nav-menu");
	// When we click on each nav__link, we remove the show-menu class
	navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== MAIN DISPLAY SECTION ====================*/
// First Slider
$(".slider-one").not(".slick-initialized").slick({
	autoplay: true,
	autoplaySpeed: 3000,
	dots: true,
	prevArrow: ".site-slider .slider-btn .prev",
	nextArrow: ".site-slider .slider-btn .next",
});

/*==================== PRODUCT DISPLAY SECTION ====================*/
var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function () {
	MainImg.src = smallimg[0].src;
};

smallimg[1].onclick = function () {
	MainImg.src = smallimg[1].src;
};

smallimg[2].onclick = function () {
	MainImg.src = smallimg[2].src;
};

smallimg[3].onclick = function () {
	MainImg.src = smallimg[3].src;
};

/*==================== Change Section ====================*/
function myFunction() {
	const clothesSectionHidden = document.getElementById("clothes");

	if (clothesSectionHidden.style.display === "none") {
		clothesSectionHidden.style.display = "block";
		element.classList.toggle("mystyle");
	} else {
		clothesSectionHidden.style.display = "none";
	}
}

function myFunction2() {
	const clothesSectionHidden = document.getElementById("clothes");

	if (clothesSectionHidden.style.display === "block") {
		clothesSectionHidden.style.display = "none";
		element.classList.toggle("mystyle");
	} else {
		clothesSectionHidden.style.display = "block";
	}
}
