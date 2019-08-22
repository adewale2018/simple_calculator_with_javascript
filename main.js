//Target the result output
let screen = document.querySelector('.screen');

// Target the buttons with numbers 0-9 using DOM 
let zero  = document.querySelector('.zero'),  one   = document.querySelector('.one') ,
    two   = document.querySelector('.two'),   three = document.querySelector('.three'), 
    four  = document.querySelector('.four'),  five  = document.querySelector('.five'),
    six   = document.querySelector('.six'),   seven = document.querySelector('.seven'), 
    eight = document.querySelector('.eight'), nine  = document.querySelector('.nine');

// Target the buttons for the operations +, -, /, *
let addition = document.querySelector('.addition'), subtraction = document.querySelector('.subtraction'),
    division = document.querySelector('.division'), multiplication = document.querySelector('.multiplication');

//Target other buttons ., AC, =

let decimal = document.querySelector('.decimal'), clear = document.querySelector('.clear'),
  equality = document.querySelector('.equality');

//add EventListener to the buttons
const buttons = [
                  zero, one, two, three, four, five, 
                  six, seven, eight, nine, addition, subtraction, 
                  division, multiplication, decimal, clear,
                ];
for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    screen.value = buttons[i].value;
    console.log(buttons[i].value);
  });
}
