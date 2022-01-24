// Language Switch
let isNorsk = true;

function buttonToggle() {
  const check = document.querySelector(".check");
  if (isNorsk) {
      document.querySelectorAll(".contentnorsk").forEach(node => node.style.display = "none")
      document.querySelectorAll(".contentenglish").forEach(node => node.style.display = "block")
      isNorsk = false
    } else {
        document.querySelectorAll(".contentnorsk").forEach(node => node.style.display = "block")
        document.querySelectorAll(".contentenglish").forEach(node => node.style.display = "none")
        isNorsk = true
    }
}
// Toggle between demo components
function projectToggle(keypadActive) {
    const keypad = document.querySelector("keypad");
    if (keypadActive.style == "none") {
        keypad.style.display = "block";
    }
}

// Jump To Sections
function scrollAbout() {
    window.scrollTo(0, 500);
}
function scrollProjects() {
    window.scrollTo(0, 1050);
}
function scrollContact() {
    window.scrollTo(0, 1650);
}

// Scroll To Top Button
scrollTop = document.querySelector(".top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 499) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Navbar
// Indicator moves to active list item
let list = document.querySelectorAll('.list');
list.forEach((item) =>
item.addEventListener('click', activeLink));

function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}

// Calculator
const display = document.querySelector(".result-screen");
const buttons = Array.from(document.querySelectorAll("button:not(.checkpoint)"));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'RESET':
                display.value = '';
                break;
            case 'DEL':
                if(display.value){
                    display.value = display.value.slice(0, -1);
                }
                break;
            case '=':
                try{
                    display.value = eval(display.value);
                } catch {
                    display.value = "Use a valid input"
                }
                break;
            default:
                display.value += e.target.innerText;
        }
    });
});
