var display1Secondary = $('#display1');
var display2Secondary = $('#display2');
var display1Primary;
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

// default display values
display1Secondary.val("");
display1Primary = "";
display2Secondary.val("");


// Flags
var expectingNumber = 1;
var overwriteDisplay2Secondary = 1;
var lastOpIsPercentage = 0;

// numbers
zero.on('click', function () {
    if (overwriteDisplay2Secondary === 1) {
        display2Secondary.val('0');
        overwriteDisplay2Secondary = 0;
    }
    else {
        display2Secondary.val(display2Secondary.val() + '0'); 
    }
    expectingNumber = 0;
})

one.on('click', function () {
    if (overwriteDisplay2Secondary === 1) {
        display2Secondary.val('1');
        overwriteDisplay2Secondary = 0;
    }
    else {
        display2Secondary.val(display2Secondary.val() + '1'); 
    }
    expectingNumber = 0;
})

two.on('click', function () {
    if (overwriteDisplay2Secondary === 1) {
        display2Secondary.val('2');
        overwriteDisplay2Secondary = 0;
    }
    else {
        display2Secondary.val(display2Secondary.val() + '2'); 
    }
    expectingNumber = 0;
})

three.on('click', function () {
    if (overwriteDisplay2Secondary === 1) {
        display2Secondary.val('3');
        overwriteDisplay2Secondary = 0;
    }
    else {
        display2Secondary.val(display2Secondary.val() + '3'); 
    }
    expectingNumber = 0;
})

four.on('click', function () {
    if (overwriteDisplay2Secondary === 1) {
        display2Secondary.val('4');
        overwriteDisplay2Secondary = 0;
    }
    else {
        display2Secondary.val(display2Secondary.val() + '4'); 
    }
    expectingNumber = 0;
})

five.on('click', function () {
    if (overwriteDisplay2Secondary === 1) {
        display2Secondary.val('5');
        overwriteDisplay2Secondary = 0;
    }
    else {
        display2Secondary.val(display2Secondary.val() + '5'); 
    }
    expectingNumber = 0;
})

six.on('click', function () {
    if (overwriteDisplay2Secondary === 1) {
        display2Secondary.val('6');
        overwriteDisplay2Secondary = 0;
    }
    else {
        display2Secondary.val(display2Secondary.val() + '6'); 
    }
    expectingNumber = 0;
})

seven.on('click', function () {
    if (overwriteDisplay2Secondary === 1) {
        display2Secondary.val('7');
        overwriteDisplay2Secondary = 0;
    }
    else {
        display2Secondary.val(display2Secondary.val() + '7'); 
    }
    expectingNumber = 0;
})

eight.on('click', function () {
    if (overwriteDisplay2Secondary === 1) {
        display2Secondary.val('8');
        overwriteDisplay2Secondary = 0;
    }
    else {
        display2Secondary.val(display2Secondary.val() + '8'); 
    }
    expectingNumber = 0;
})

nine.on('click', function () {
    if (overwriteDisplay2Secondary === 1) {
        display2Secondary.val('9');
        overwriteDisplay2Secondary = 0;
    }
    else {
        display2Secondary.val(display2Secondary.val() + '9'); 
    }
    expectingNumber = 0;
})

decimal.on('click', function () {
    if (overwriteDisplay2Secondary === 1) {
        display2Secondary.val('.');
        overwriteDisplay2Secondary = 0;
    }
    else {
        display2Secondary.val(display2Secondary.val() + '.'); 
    }
    expectingNumber = 0;
})

// operators
add.on('click', function () {
    
    if (expectingNumber === 0) {
        
        if (lastOpIsPercentage === 0) {
            display1Secondary.val(display1Secondary.val() + display2Secondary.val() + " \u002B ");
            display1Primary = display1Primary + display2Secondary.val() + " + ";
        }
        else {
            display1Secondary.val(display1Secondary.val() + " \u002B ");
            display1Primary = display1Primary + " + ";
            lastOpIsPercentage = 0;
        }
        
        // Expecting number input, not an operator
        expectingNumber = 1;
        // Overwrite display2Secondary content
        overwriteDisplay2Secondary = 1;
    }
})

subtract.on('click', function () {
    
    if (expectingNumber === 0) {
        
        if (lastOpIsPercentage === 0) {
            display1Secondary.val(display1Secondary.val() +  display2Secondary.val() + " \u2212 ");
            display1Primary = display1Primary + display2Secondary.val() + " - ";
        }
        else {
            display1Secondary.val(display1Secondary.val() + " \u2212 ");
            display1Primary = display1Primary + " - ";
            lastOpIsPercentage = 0;
        }
        
        expectingNumber = 1;
        overwriteDisplay2Secondary = 1;
    }
})

multiply.on('click', function () {
    
    if (expectingNumber === 0) {
        
        if (lastOpIsPercentage === 0) {
            display1Secondary.val(display1Secondary.val() + display2Secondary.val() + " \u00D7 ");
            display1Primary = display1Primary + display2Secondary.val() + " * ";
        }
        else {
            display1Secondary.val(display1Secondary.val() + " \u00D7 ");
            display1Primary = display1Primary + " * ";
            lastOpIsPercentage = 0;
        }
        
        expectingNumber = 1;
        overwriteDisplay2Secondary = 1;
    }
})

divide.on('click', function () {
    
    if (expectingNumber === 0) {
        
        if (lastOpIsPercentage === 0) {
            display1Secondary.val(display1Secondary.val() + display2Secondary.val() + " \u00F7 ");
            display1Primary = display1Primary + display2Secondary.val() + " / ";
        }
        else {
            display1Secondary.val(display1Secondary.val() + " \u00F7 ");
            display1Primary = display1Primary + " / ";
            lastOpIsPercentage = 0;
        }
        
        expectingNumber = 1;
        overwriteDisplay2Secondary = 1;
    }
})

percentage.on('click', function () {
    
    if (expectingNumber === 0) {
        
        var operand, operation, evaluation, result;
        
        // if display1Primary = "" then result = display2/100
        alert(display1Primary.length);
        if (display1Primary.length === 0) {
            result = display2Secondary.val() / 100;
        }
        else {
            // Strip the last operand from display1
            // if display1Primary = "2_+_3_-_" then operand = "_-_" operation = "2_+_3"
            operand = display1Primary.substr(display1Primary.length - 3, 3);
            operation = display1Primary.substr(0, display1Primary.length - 3);
            evaluation = eval(operation);
            result = evaluation * display2Secondary.val() / 100;
        }
        
        display1Secondary.val(display1Secondary.val() + result);
        display1Primary = display1Primary + result;
        
        console.log("display1Secondary = " + display1Secondary.val());
        console.log("display1Primary = " + display1Primary);
        
        expectingNumber = 0;
        overwriteDisplay2Secondary = 1;
        lastOpIsPercentage = 1;
    }
})

// Clear button 
clear.on('click', function () {
    display1Secondary.val("");
    display2Secondary.val("");
    display1Primary = "";
    // Reset flags
    expectingNumber = 1;
    overwriteDisplay2Secondary = 1;
    lastOpIsPercentage = 0;
})

// Equal button
equal.on('click', function () {
    
    if (lastOpIsPercentage === 1) {
        var operation = display1Primary;
    }
    else {
        var operation = display1Primary + display2Secondary.val();
    }
    
    // Clear display 1
    display1Secondary.val("");
    display1Primary = "";
    
    var evaluation = eval(operation);
    
    switch (evaluation) {
        case Infinity:
            evaluation = '\u221E';
            break;
        case -Infinity:
            evaluation = '-\u221E';
            break;
    }
    
    display2Secondary.val(evaluation);
    
    lastOpIsPercentage = 0;
})

// Backspace button
backspace.on('click', function () {
    var display2SecondaryValue = display2Secondary.val();
    var length = display2SecondaryValue.length;
    var str = display2SecondaryValue.slice(0, length-1);
    display2Secondary.val(str);
})