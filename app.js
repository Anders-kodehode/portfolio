// Jump to sections
jumpToMe = document.querySelector("about-me")

jumpToMe.addEventListener('click'), function(e) {
    window.onclick
}
// Scroll To Top Button
scrollTop = document.querySelector(".top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 400) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Pokeball
const ball = document.querySelector(".ball");
const innerButton = document.querySelector(".inner-button");

ball.addEventListener('click', function(e) {
    e.preventDefault;

    ball.classList.remove('ball');

    void ball.offsetWidth;

    ball.classList.add('ball');
}, false);

innerButton.addEventListener('click', function(e) {
    e.preventDefault;

    innerButton.classList.remove("inner-button");

    void innerButton.offsetWidth;

    innerButton.classList.add("inner-button");
}, false);

// Calculator
const display = document.querySelector(".result-screen")
const buttons = Array.from(document.querySelectorAll("button:not(.checkpoint)"))

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
