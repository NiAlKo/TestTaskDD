import * as usefulFunctions from "./modules/functions.js";

usefulFunctions.isWebp();

// Burger menu
const burger = document.querySelector(".icon-menu");
const menu = document.querySelector(".menu__body");
const body = document.querySelector("body");

if (burger){
	burger.addEventListener('click', function(){
	burger.classList.toggle('__active');
	menu.classList.toggle('__active');
	body.classList.toggle('__lock');
});
}

// Toggler themes
const themeBtn = document.querySelector(".theme-site__toggler");
const currentTheme = localStorage.getItem("theme");
if(currentTheme == "dark"){
	document.body.classList.add("theme-dark");
}

themeBtn.addEventListener('click', function(evt){
	themeBtn.classList.toggle('__active');
	body.classList.toggle('theme-dark');
	let theme = "light";
	if (document.body.classList.contains("theme-dark")) {
    theme = "dark";
  }
	localStorage.setItem("theme", theme);
})


// Btn up
const btnUp = document.querySelector(".btn-up");

window.onscroll = function() {
	scrollFunction()
};
// Show the hidden button
function scrollFunction() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
			btnUp.style.display = "block";
    } else {
			btnUp.style.display = "none";
    }
}

btnUp.addEventListener("click",topFunction);
function topFunction() {
		body.scrollIntoView({
      behavior: 'smooth'
    })
}


// SPOLLERS
const bntMenu = document.querySelector(".menu__btn");
const subLinks = document.querySelectorAll(".menu__sub-link");

bntMenu.addEventListener('click', function(){
	bntMenu.classList.toggle('__active');
	if (subLinks.length > 0) {
		subLinks.forEach(subLink => {
			subLink.addEventListener('click', scrollLink);
			});
		}

			function scrollLink() { 
			burger.classList.remove('__active');
			menu.classList.remove('__active');
			body.classList.remove('__lock');
			bntMenu.classList.remove('__active');
		}
});

// Task
const dateBtn = document.querySelector(".function-task__btn");
const dateInputGet = document.querySelector(".function-task__get-info");
const dateInputSet = document.querySelector(".function-task__input-set");


let months = [
	'Января', 
	'Февраля', 
	'Марта', 
	'Апреля',
	'Мая', 
	'Июня',
	'Июля', 
	'Августа', 
	'Сентября', 
	'Октября', 
	'Ноября', 
	'Декабря'
];

let days = [
	'Воскресенье', 
	'Понедельник', 
	'Вторник', 
	'Среда', 
	'Четверг', 
	'Пятница', 
	'Суббота'
];


function getDayInfo(date) {
 date = dateInputSet.value;
 	let selectedDate = new Date(date);
	let day = days[selectedDate.getDay()];
	let month = months[selectedDate.getMonth()];
	let year = selectedDate.getFullYear();
	let week = Math.ceil((selectedDate.getDate()) / 7);
	if (day == undefined){
		dateInputGet.innerText = "Необходимо выбрать дату!"
	}
	else{
		dateInputGet.innerText = day +', ' + week + ' ' + 'неделя ' + month +' '+ year+' года';
	}
	}
dateBtn.addEventListener("click",getDayInfo);