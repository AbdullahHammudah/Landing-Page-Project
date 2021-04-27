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


/*********************Global Variables*********************/

const sections = document.querySelectorAll('section');
const fragmant = document.createDocumentFragment();
const navBar = document.getElementById('navbar__list');
const linkClass = document.querySelectorAll('link-class')
let navItem;

/*********************Helper Functions*********************/

// Tests which section in the Viewport and return Boolean value
const isItVisual = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.top <= sections[0].clientHeight
    )
}

/*********************Main Functions*********************/

// build the nav-bar & add smooth transition to links
for (let [index, sec] of sections.entries()) {
    navItem = document.createElement('li');
    navItem.innerHTML = `<a href ='#section${index + 1}'> ${sec.getAttribute('data-nav')}</a>` //adding <a> to each <li> with href to the target section
    navItem.className = 'menu__link';
    navItem.addEventListener('click', (evt) => {
        evt.preventDefault();
        sec.scrollIntoView({ behavior: "smooth" })
    })
    fragmant.appendChild(navItem); //to increase performance
}
navBar.appendChild(fragmant);


// listen to scroll event and activate the right section using 'isItVisual' func 
window.addEventListener('scroll', (evt) => {
    for (let sec of sections) {
        sec.classList.remove('your-active-class')
        navItem.classList.remove('your-active-class')
        if (isItVisual(sec)) {
            sec.classList.add('your-active-class')
            navItem.classList.add('your-active-class')
        }
    }
})
console.log(sections[0].clientHeight)
