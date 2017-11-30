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

// operators
add.on('click', function() {
    
    var currentValue = display2.val();
    
    // Example:
    // currentValue = "2_×_3_-_4_-_"
    // length = 12
    // indexOfLastVissibleChar = length - 2 = 10
    // lastVissibleChar = '-'
    // str = "2_×_3_-_4"
    // currentValue = "2_×_3_-_4_+_"
    var indexOfLastVissibleChar = currentValue.length - 2;
    var lastVissibleChar = currentValue.charAt(indexOfLastVissibleChar);
    var str;
    
    switch (lastVissibleChar) {
        // Last visible character is the subtraction sign
        case "\u2212":
            str = currentValue.substr(0, indexOfLastVissibleChar - 1)
            currentValue = str + ' \u002B ';
            display2.val(currentValue);
            break;
        // Last vissible character is the multiplication sign
        case "\u00D7":
            str = currentValue.substr(0, indexOfLastVissibleChar - 1)
            currentValue = str + ' \u002B ';
            display2.val(currentValue);
            break;
        // Last vissible character is the division sign
        case "\u00F7":
            str = currentValue.substr(0, indexOfLastVissibleChar - 1)
            currentValue = str + ' \u002B ';
            display2.val(currentValue);
            break;
        // Last vissible character is addition sign
        case "\u002B":
            break;
        default:
            display2.val(currentValue + ' \u002B ');
    }
})

subtract.on('click', function() {
    
    var currentValue = display2.val();
    
    // Example:
    // currentValue = "2_×_3_-_4_+_"
    // length = 12
    // indexOfLastVissibleChar = length - 2 = 10
    // lastVissibleChar = '+'
    // str = "2_×_3_-_4"
    // currentValue = "2_×_3_-_4_-_"
    var indexOfLastVissibleChar = currentValue.length - 2;
    var lastVissibleChar = currentValue.charAt(indexOfLastVissibleChar);
    var str;
    
    switch (lastVissibleChar) {
        // Last visible character is the subtraction sign
        case "\u2212":
            break;
        // Last vissible character is the multiplication sign
        case "\u00D7":
            str = currentValue.substr(0, indexOfLastVissibleChar - 1)
            currentValue = str + ' \u2212 ';
            display2.val(currentValue);
            break;
        // Last vissible character is the division sign
        case "\u00F7":
            str = currentValue.substr(0, indexOfLastVissibleChar - 1)
            currentValue = str + ' \u2212 ';
            display2.val(currentValue);
            break;
        // Last vissible character is addition sign
        case "\u002B":
            str = currentValue.substr(0, indexOfLastVissibleChar - 1)
            currentValue = str + ' \u2212 ';
            display2.val(currentValue);
            break;
        default:
            display2.val(currentValue + ' \u2212 ');
    }
})

multiply.on('click', function() {
    
    var currentValue = display2.val();
    
    // Example:
    // currentValue = "2_×_3_-_4_+_"
    // length = 12
    // indexOfLastVissibleChar = length - 2 = 10
    // lastVissibleChar = '+'
    // str = "2_×_3_-_4"
    // currentValue = "2_×_3_-_4_×_"
    var indexOfLastVissibleChar = currentValue.length - 2;
    var lastVissibleChar = currentValue.charAt(indexOfLastVissibleChar);
    var str;
    
    switch (lastVissibleChar) {
        // Last visible character is the subtraction sign
        case "\u2212":
            str = currentValue.substr(0, indexOfLastVissibleChar - 1)
            currentValue = str + ' \u00D7 ';
            display2.val(currentValue);
            break;
        // Last vissible character is the multiplication sign
        case "\u00D7":
            break;
        // Last vissible character is the division sign
        case "\u00F7":
            str = currentValue.substr(0, indexOfLastVissibleChar - 1)
            currentValue = str + ' \u00D7 ';
            display2.val(currentValue);
            break;
        // Last vissible character is addition sign
        case "\u002B":
            str = currentValue.substr(0, indexOfLastVissibleChar - 1)
            currentValue = str + ' \u00D7 ';
            display2.val(currentValue);
            break;
        default:
            display2.val(currentValue + ' \u00D7 ');
    }
})

divide.on('click', function() {
    
    var currentValue = display2.val();
    
    // Example:
    // currentValue = "2_×_3_-_4_+_"
    // length = 12
    // indexOfLastVissibleChar = length - 2 = 10
    // lastVissibleChar = '+'
    // str = "2_×_3_-_4"
    // currentValue = "2_×_3_-_4_÷_"
    var indexOfLastVissibleChar = currentValue.length - 2;
    var lastVissibleChar = currentValue.charAt(indexOfLastVissibleChar);
    var str;
    
    switch (lastVissibleChar) {
        // Last visible character is the subtraction sign
        case "\u2212":
            str = currentValue.substr(0, indexOfLastVissibleChar - 1)
            currentValue = str + ' \u00F7 ';
            display2.val(currentValue);
            break;
        // Last vissible character is the multiplication sign
        case "\u00D7":
            str = currentValue.substr(0, indexOfLastVissibleChar - 1)
            currentValue = str + ' \u00F7 ';
            display2.val(currentValue);
            break;
        // Last vissible character is the division sign
        case "\u00F7":
            break;
        // Last vissible character is addition sign
        case "\u002B":
            str = currentValue.substr(0, indexOfLastVissibleChar - 1)
            currentValue = str + ' \u00F7 ';
            display2.val(currentValue);
            break;
        default:
            display2.val(currentValue + ' \u00F7 ');
    }
})