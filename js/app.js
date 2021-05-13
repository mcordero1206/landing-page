/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const nav = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const links = nav.children;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// build the nav
function buildNav() {
	
	let navLinks = '';
	for(let i = 0;i < sections.length; i++ ) {
		const sectionId = sections[i].id;
		const sectionData = sections[i].dataset.nav;
		
		navLinks += `<li><a class='menu__link' href='#${sectionId}'>${sectionData}</a></li>`
	};
	nav.innerHTML = navLinks;
}

// Add class 'active' to section when near top of viewport
function addActive() {
	//loop through sections 
	document.addEventListener('scroll', function(e){
		sections.forEach(function(section, i){
			const bounding = section.getBoundingClientRect();
			//round the value of top to 0 then add one to offset the 1px of padding added to .main__hero
			const top = Math.floor(bounding.top)+1;
//			console.log(`Section ${i+1} is: ${top}`);
			

			if(top === 0 || top === 1) {
				section.classList.add('your-active-class');
				links[i].classList.add('active');
			}
			else {
				section.classList.remove('your-active-class');
				links[i].classList.remove('active');
			}
		});
	});
	
}



// Hide Navbar when scrolling. Src: W3 Schools (https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp)

var prevScrollpos = window.pageYOffset;
console.log(`previous scroll pos: ${prevScrollpos} `);
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
	
  if (prevScrollpos <= currentScrollPos) {
    document.querySelector(".page__header").style.top = "0";
//	  console.log(`current scroll pos: ${currentScrollPos} `);
  } else {
    document.querySelector(".page__header").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

buildNav();

// Scroll to section on link click
addActive();
// Set sections as active


