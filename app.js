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

// Jump To Sections
function scrollAbout() {
    window.scrollTo(0, 550);
}
function scrollProjects() {
    window.scrollTo(0, 1000);
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

// Toggle between demo components
const calculator = document.querySelector(".calculator");
const keypad = document.querySelector(".keypad");
const navigation = document.querySelector(".navigation");
const figma = document.querySelector(".figma");
// Calculator
function projectToggleCalculator() {
    keypad.style.display = "none";
    navigation.style.display = "none";
    figma.style.display = "none";
    if (calculator.style.display == "" || calculator.style.display == "none") {
        calculator.style.display = "block";
    } else {
        calculator.style.display = "none";
}};
// Keypad
function projectToggleKeypad() {
    calculator.style.display = "none";
    navigation.style.display = "none";
    figma.style.display = "none";
    if (keypad.style.display == "" || keypad.style.display == "none") {
        keypad.style.display = "grid";
    } else {
        keypad.style.display = "none";
}};
// Navbar
function projectToggleNavbar() {
    calculator.style.display = "none";
    keypad.style.display = "none";
    figma.style.display = "none";
    if (navigation.style.display == "" || navigation.style.display == "none") {
        navigation.style.display = "flex";
    } else {
        navigation.style.display = "none";
}};
// Figma
function projectToggleFigma() {
    calculator.style.display = "none";
    keypad.style.display = "none";
    navigation.style.display = "none";
    if (figma.style.display == "" || figma.style.display == "none") {
        figma.style.display = "block";
    } else {
        figma.style.display = "none";
}};

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
