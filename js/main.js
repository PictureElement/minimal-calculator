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

// default display1 value
display1.val("");
// default display2 value 
display2.val("0");

// numbers
zero.on('click', function() {
    var display2CurrentValue = display2.val();
    if (display2CurrentValue === '0') {
        display2.val('0');
    }
    else {
        display2.val(display2CurrentValue + '0');
    }
})

one.on('click', function() {
    var display2CurrentValue = display2.val();
    if (display2CurrentValue === '0') {
         display2.val('1');
    }
    else {
        display2.val(display2CurrentValue + '1');
    }  
})

two.on('click', function() {
    var display2CurrentValue = display2.val();
    if (display2CurrentValue === '0') {
         display2.val('2');
    }
    else {
        display2.val(display2CurrentValue + '2');
    }  
})

three.on('click', function() {
    var display2CurrentValue = display2.val();
    if (display2CurrentValue === '0') {
         display2.val('3');
    }
    else {
        display2.val(display2CurrentValue + '3');
    }  
})

four.on('click', function() {
    var display2CurrentValue = display2.val();
    if (display2CurrentValue === '0') {
         display2.val('4');
    }
    else {
        display2.val(display2CurrentValue + '4');
    }  
})

five.on('click', function() {
    var display2CurrentValue = display2.val();
    if (display2CurrentValue === '0') {
         display2.val('5');
    }
    else {
        display2.val(display2CurrentValue + '5');
    }  
})

six.on('click', function() {
    var display2CurrentValue = display2.val();
    if (display2CurrentValue === '0') {
         display2.val('6');
    }
    else {
        display2.val(display2CurrentValue + '6');
    }  
})

seven.on('click', function() {
    var display2CurrentValue = display2.val();
    if (display2CurrentValue === '0') {
         display2.val('7');
    }
    else {
        display2.val(display2CurrentValue + '7');
    }  
})

eight.on('click', function() {
    var display2CurrentValue = display2.val();
    if (display2CurrentValue === '0') {
         display2.val('8');
    }
    else {
        display2.val(display2CurrentValue + '8');
    }  
})

nine.on('click', function() {
    var display2CurrentValue = display2.val();
    if (display2CurrentValue === '0') {
         display2.val('9');
    }
    else {
        display2.val(display2CurrentValue + '9');
    }  
})

// operators
add.on('click', function() {
    
    var display2CurrentValue = display2.val();
    
    // Example:
    // display2CurrentValue = "2_×_3_-_4_-_"
    // length = 12
    // indexOfLastVissibleChar = length - 2 = 10
    // lastVissibleChar = '-'
    // str = "2_×_3_-_4"
    // display2CurrentValue = "2_×_3_-_4_+_"
    var indexOfLastVissibleChar = display2CurrentValue.length - 2;
    var lastVissibleChar = display2CurrentValue.charAt(indexOfLastVissibleChar);
    var str;
    
    switch (lastVissibleChar) {
        // Last visible character is the subtraction sign
        case "-":
            str = display2CurrentValue.substr(0, indexOfLastVissibleChar - 1)
            display2CurrentValue = str + ' + ';
            display2.val(display2CurrentValue);
            break;
        // Last vissible character is the multiplication sign
        case "*":
            str = display2CurrentValue.substr(0, indexOfLastVissibleChar - 1)
            display2CurrentValue = str + ' + ';
            display2.val(display2CurrentValue);
            break;
        // Last vissible character is the division sign
        case "/":
            str = display2CurrentValue.substr(0, indexOfLastVissibleChar - 1)
            display2CurrentValue = str + ' + ';
            display2.val(display2CurrentValue);
            break;
        // Last vissible character is addition sign
        case "+":
            break;
        default:
            display2.val(display2CurrentValue + ' + ');
    }
})

subtract.on('click', function() {
    
    var display2CurrentValue = display2.val();
    
    // Example:
    // display2CurrentValue = "2_×_3_-_4_+_"
    // length = 12
    // indexOfLastVissibleChar = length - 2 = 10
    // lastVissibleChar = '+'
    // str = "2_×_3_-_4"
    // display2CurrentValue = "2_×_3_-_4_-_"
    var indexOfLastVissibleChar = display2CurrentValue.length - 2;
    var lastVissibleChar = display2CurrentValue.charAt(indexOfLastVissibleChar);
    var str;
    
    switch (lastVissibleChar) {
        // Last visible character is the subtraction sign
        case "-":
            break;
        // Last vissible character is the multiplication sign
        case "*":
            str = display2CurrentValue.substr(0, indexOfLastVissibleChar - 1)
            display2CurrentValue = str + ' - ';
            display2.val(display2CurrentValue);
            break;
        // Last vissible character is the division sign
        case "/":
            str = display2CurrentValue.substr(0, indexOfLastVissibleChar - 1)
            display2CurrentValue = str + ' - ';
            display2.val(display2CurrentValue);
            break;
        // Last vissible character is addition sign
        case "+":
            str = display2CurrentValue.substr(0, indexOfLastVissibleChar - 1)
            display2CurrentValue = str + ' - ';
            display2.val(display2CurrentValue);
            break;
        default:
            display2.val(display2CurrentValue + ' - ');
    }
})

multiply.on('click', function() {
    
    var display2CurrentValue = display2.val();
    
    // Example:
    // display2CurrentValue = "2_×_3_-_4_+_"
    // length = 12
    // indexOfLastVissibleChar = length - 2 = 10
    // lastVissibleChar = '+'
    // str = "2_×_3_-_4"
    // display2CurrentValue = "2_×_3_-_4_×_"
    var indexOfLastVissibleChar = display2CurrentValue.length - 2;
    var lastVissibleChar = display2CurrentValue.charAt(indexOfLastVissibleChar);
    var str;
    
    switch (lastVissibleChar) {
        // Last visible character is the subtraction sign
        case "-":
            str = display2CurrentValue.substr(0, indexOfLastVissibleChar - 1)
            display2CurrentValue = str + ' * ';
            display2.val(display2CurrentValue);
            break;
        // Last vissible character is the multiplication sign
        case "*":
            break;
        // Last vissible character is the division sign
        case "/":
            str = display2CurrentValue.substr(0, indexOfLastVissibleChar - 1)
            display2CurrentValue = str + ' * ';
            display2.val(display2CurrentValue);
            break;
        // Last vissible character is addition sign
        case "+":
            str = display2CurrentValue.substr(0, indexOfLastVissibleChar - 1)
            display2CurrentValue = str + ' * ';
            display2.val(display2CurrentValue);
            break;
        default:
            display2.val(display2CurrentValue + ' * ');
    }
})

divide.on('click', function() {
    
    var display2CurrentValue = display2.val();
    
    // Example:
    // display2CurrentValue = "2_×_3_-_4_+_"
    // length = 12
    // indexOfLastVissibleChar = length - 2 = 10
    // lastVissibleChar = '+'
    // str = "2_×_3_-_4"
    // display2CurrentValue = "2_×_3_-_4_÷_"
    var indexOfLastVissibleChar = display2CurrentValue.length - 2;
    var lastVissibleChar = display2CurrentValue.charAt(indexOfLastVissibleChar);
    var str;
    
    switch (lastVissibleChar) {
        // Last visible character is the subtraction sign
        case "-":
            str = display2CurrentValue.substr(0, indexOfLastVissibleChar - 1)
            display2CurrentValue = str + ' / ';
            display2.val(display2CurrentValue);
            break;
        // Last vissible character is the multiplication sign
        case "*":
            str = display2CurrentValue.substr(0, indexOfLastVissibleChar - 1)
            display2CurrentValue = str + ' / ';
            display2.val(display2CurrentValue);
            break;
        // Last vissible character is the division sign
        case "/":
            break;
        // Last vissible character is addition sign
        case "+":
            str = display2CurrentValue.substr(0, indexOfLastVissibleChar - 1)
            display2CurrentValue = str + ' / ';
            display2.val(display2CurrentValue);
            break;
        default:
            display2.val(display2CurrentValue + ' / ');
    }
})

// Clear button 
clear.on('click', function() {
    display1.val("");
    display2.val("0");
})