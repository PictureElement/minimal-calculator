var display1 = $('#display1');
var display2 = $('#display2');
var clear = $('#clear');
var backspace = $('#backspace');
var percentage = $('#percentage');
var divide = $('#divide');
var seven = $('#seven');
var eight = $('#eight');
var nine = $('#nine');
var multiply = $('#multiply');
var four = $('#four');
var five = $('#five');
var six = $('#six');
var subtract = $('#subtract');
var one = $('#one');
var two = $('#two');
var three = $('#three');
var add = $('#add');
var zero = $('#zero');
var decimal = $('#decimal');
var sign = $('#sign');
var equal = $('#equal');

// default display value 
display2.val('0');

// numbers
zero.on('click', function() {
    var currentValue = display2.val();
    if (currentValue === '0') {
        display2.val('0');
    }
    else {
        display2.val(currentValue + '0');
    }
})

one.on('click', function() {
    var currentValue = display2.val();
    if (currentValue === '0') {
         display2.val('1');
    }
    else {
        display2.val(currentValue + '1');
    }  
})

two.on('click', function() {
    var currentValue = display2.val();
    if (currentValue === '0') {
         display2.val('2');
    }
    else {
        display2.val(currentValue + '2');
    }  
})

three.on('click', function() {
    var currentValue = display2.val();
    if (currentValue === '0') {
         display2.val('3');
    }
    else {
        display2.val(currentValue + '3');
    }  
})

four.on('click', function() {
    var currentValue = display2.val();
    if (currentValue === '0') {
         display2.val('4');
    }
    else {
        display2.val(currentValue + '4');
    }  
})

five.on('click', function() {
    var currentValue = display2.val();
    if (currentValue === '0') {
         display2.val('5');
    }
    else {
        display2.val(currentValue + '5');
    }  
})

six.on('click', function() {
    var currentValue = display2.val();
    if (currentValue === '0') {
         display2.val('6');
    }
    else {
        display2.val(currentValue + '6');
    }  
})

seven.on('click', function() {
    var currentValue = display2.val();
    if (currentValue === '0') {
         display2.val('7');
    }
    else {
        display2.val(currentValue + '7');
    }  
})

eight.on('click', function() {
    var currentValue = display2.val();
    if (currentValue === '0') {
         display2.val('8');
    }
    else {
        display2.val(currentValue + '8');
    }  
})

nine.on('click', function() {
    var currentValue = display2.val();
    if (currentValue === '0') {
         display2.val('9');
    }
    else {
        display2.val(currentValue + '9');
    }  
})












