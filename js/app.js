/**
 * Define Global Variables
 * 
 */
const allSections = document.getElementsByTagName('section');
const navigationBar = document.getElementById('navbar__list');



// build the nav

function addNavButtons() {
    var unorderedList = document.getElementById('navbar__list');
    var navMenu = document.createElement('li');
    var anchorMenu = document.createElement('a');
    anchorMenu.className = 'menu__link';
    anchorMenu.innerText = 'Home';
    anchorMenu.href = "../index.html";
    navMenu.appendChild(anchorMenu);
    unorderedList.appendChild(navMenu);



    for (var pointer of allSections) {
        var navMenu = document.createElement('li');
        var anchorMenu = document.createElement('a');
        anchorMenu.className = 'menu__link';
        anchorMenu.innerText = pointer.dataset.nav;
        anchorMenu.dataset.nav = pointer.id;
        navMenu.appendChild(anchorMenu);
        unorderedList.appendChild(navMenu);

    }


}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

function navigationClicks() {
    navigationBar.addEventListener('click', function(eventInfo) {
        var findSection = document.getElementById(eventInfo.target.dataset.nav);
        findSection.scrollIntoView();



    });
}

/**
 * End Main Functions
 * Begin Events
 * 
 */
// On Screen section finder

function sectionFinder() {
    currentSection = allSections[0];
    minDist = 90000000;
    for (pointer of allSections) {
        var sizeChecker = pointer.getBoundingClientRect();
        if (sizeChecker.top > -320 & sizeChecker.top < minDist) {
            currentSection = pointer;
            minDist = sizeChecker.top;
        }
    }
    return currentSection;

}

// active class manipulator function

function activeClassAdder() {
    window.addEventListener('scroll', function(eventInfo) {
        // setting new active class
        var currentSection = sectionFinder();
        currentSection.classList.add('your-active-class');

        for (var pointer of allSections) {
            if (pointer.id != currentSection.id && pointer.classList.contains('your-active-class')) {
                // removing old active class
                pointer.classList.remove('your-active-class');
                break;

            }

        }

        var currentHeading = document.querySelector('a[data-nav="' + currentSection.id + '"]');

        // setting new active heading
        currentHeading.id = 'active-heading';

        this.console.log(currentSection.id + currentHeading.innerText);

        // removing old active heading

        const allHeadings = this.document.querySelectorAll('a.menu__link');

        for (var pointer of allHeadings) {
            if (pointer.dataset.nav != currentHeading.dataset.nav && pointer.id == 'active-heading') {
                pointer.id = "";
            }
        }

    });
}

//function for displaying Back to Top button
document.documentElement.scrollTop = 0;
window.onscroll = function() {
    var Top = this.document.getElementById('back-to-top');
    if (this.document.body.scrollTop > 320 || document.documentElement.scrollTop > 320) Top.style.display = "block";
    else Top.style.display = "none";
}

// Build menu 

// Scroll to section on link click

// Set sections as active



addNavButtons();

navigationClicks();

activeClassAdder();
