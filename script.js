const bars=document.querySelectorAll('.progress_bar');
    bars.forEach(function(bar){
        let percentage = bar.dataset.percent;
        bar.style.width = percentage + '%'

    
})

// ON MOUSE

function mouseOverLinkedin() {
    document.getElementById("linkedin").innerHTML = "&nbsp @hegde-shashi";   
}
function mouseOverGithub(){
    document.getElementById("github").innerHTML = "&nbsp @hegde-shashi</a>";    
}
function mouseOverTwitter(){
    document.getElementById("twitter").innerHTML = "&nbsp @__hegdeshashi__";    
}
function mouseOverInsta(){
    document.getElementById("insta").innerHTML = "&nbsp @__hegde.shashi__";   
}

function mouseOutLinkedin() {
    document.getElementById("linkedin").innerHTML = "&nbsp  LinkedIn";
}
function mouseOutGithub(){
    document.getElementById("github").innerHTML = "&nbsp  GitHub";
}
function mouseOutTwitter(){
    document.getElementById("twitter").innerHTML = "&nbsp  Twitter";
}    
function mouseOutInsta(){
    document.getElementById("insta").innerHTML = "&nbsp  Instagram";
}

// DARK THEME

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}
// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon()) 
    if (document.body.classList[0] === 'dark-theme') {
        document.getElementById('themeImg').src = "./images/logo-dark.jpg"
        document.getElementById('download').href = "./images/Resume-dark.pdf"
        document.getElementById('downloadMbl').href = "./images/Resume-dark.pdf"
    }
    else{
        document.getElementById('themeImg').src = "./images/logo-light.jpg"
        document.getElementById('download').href = "./images/Resume-light.pdf"
        document.getElementById('downloadMbl').href = "./images/Resume-light.pdf"
    }
})
if (document.body.classList[0] === 'dark-theme') {
    document.getElementById('themeImg').src = "./images/logo-dark.jpg"
    document.getElementById('download').href = "./images/Resume-dark.pdf"
    document.getElementById('downloadMbl').href = "./images/Resume-dark.pdf"
}
else{
    document.getElementById('themeImg').src = "./images/logo-light.jpg"
    document.getElementById('download').href = "./images/Resume-light.pdf"
    document.getElementById('downloadMbl').href = "./images/Resume-light.pdf"
}


const skillSection = document.getElementById('skillSec')
// const progressBars = document.querySelectorAll('.progress_bar')

