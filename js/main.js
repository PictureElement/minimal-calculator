var display1 = $('#display1');
var display2 = $('#display2');
var display1ValueHidden;
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
display1.val("");
display1ValueHidden = "";
display2.val("");


// Flags
var expectingNumber = 1;
var overwriteDisplay2 = 1;

// numbers
zero.on('click', function () {
    if (overwriteDisplay2 === 1) {
        display2.val('0');
        overwriteDisplay2 = 0;
    }
    else {
        display2.val(display2.val() + '0'); 
    }
    expectingNumber = 0;
})

one.on('click', function () {
    if (overwriteDisplay2 === 1) {
        display2.val('1');
        overwriteDisplay2 = 0;
    }
    else {
        display2.val(display2.val() + '1'); 
    }
    expectingNumber = 0;
})

two.on('click', function () {
    if (overwriteDisplay2 === 1) {
        display2.val('2');
        overwriteDisplay2 = 0;
    }
    else {
        display2.val(display2.val() + '2'); 
    }
    expectingNumber = 0;
})

three.on('click', function () {
    if (overwriteDisplay2 === 1) {
        display2.val('3');
        overwriteDisplay2 = 0;
    }
    else {
        display2.val(display2.val() + '3'); 
    }
    expectingNumber = 0;
})

four.on('click', function () {
    if (overwriteDisplay2 === 1) {
        display2.val('4');
        overwriteDisplay2 = 0;
    }
    else {
        display2.val(display2.val() + '4'); 
    }
    expectingNumber = 0;
})

five.on('click', function () {
    if (overwriteDisplay2 === 1) {
        display2.val('5');
        overwriteDisplay2 = 0;
    }
    else {
        display2.val(display2.val() + '5'); 
    }
    expectingNumber = 0;
})

six.on('click', function () {
    if (overwriteDisplay2 === 1) {
        display2.val('6');
        overwriteDisplay2 = 0;
    }
    else {
        display2.val(display2.val() + '6'); 
    }
    expectingNumber = 0;
})

seven.on('click', function () {
    if (overwriteDisplay2 === 1) {
        display2.val('7');
        overwriteDisplay2 = 0;
    }
    else {
        display2.val(display2.val() + '7'); 
    }
    expectingNumber = 0;
})

eight.on('click', function () {
    if (overwriteDisplay2 === 1) {
        display2.val('8');
        overwriteDisplay2 = 0;
    }
    else {
        display2.val(display2.val() + '8'); 
    }
    expectingNumber = 0;
})

nine.on('click', function () {
    if (overwriteDisplay2 === 1) {
        display2.val('9');
        overwriteDisplay2 = 0;
    }
    else {
        display2.val(display2.val() + '9'); 
    }
    expectingNumber = 0;
})

// operators
add.on('click', function () {
    
    if (expectingNumber === 0) {
        
        var display1Value = display1.val();
        var display2Value = display2.val();

        // Example:
        // display1CurrentValue = "2_×_3_-_4_-_"
        // length = 12
        // indexOfLastVissibleChar = length - 2 = 10
        // lastVissibleChar = '-'
        // str = "2_×_3_-_4"
        // display1CurrentValue = "2_×_3_-_4_+_"
        var indexOfLastVissibleChar = display1Value.length - 2;
        var lastVissibleChar = display1Value.charAt(indexOfLastVissibleChar);
        var str, operation, evaluation;

        display1.val(display1Value + display2Value + " \u002B ");
        display1ValueHidden = display1ValueHidden + display2Value + " + ";
        
        // Expecting number input, not an operator
        expectingNumber = 1;
        // Overwrite display2 content
        overwriteDisplay2 = 1;

        /*
        if (display1Value === "") {
            display1.val(display2Value + " + ");
        }
        else {
            switch (lastVissibleChar) {
                // Last visible character is the subtraction sign
                case "-":
                    str = display1Value.substr(0, indexOfLastVissibleChar - 1)
                    display1Value = str + ' + ';
                    display1.val(display1Value + display2Value);
                    break;
                // Last vissible character is the multiplication sign
                case "*":
                    str = display1Value.substr(0, indexOfLastVissibleChar - 1)
                    display1Value = str + ' + ';
                    display1.val(display1Value);
                    break;
                // Last vissible character is the division sign
                case "/":
                    str = display1Value.substr(0, indexOfLastVissibleChar - 1)
                    display1Value = str + ' + ';
                    display1.val(display1Value);
                    break;
                // Last vissible character is addition sign
                case "+":
                    display1.val(display1Value + display2Value + " + ");
                    operation = display1.val() + "0";
                    evaluation = eval(operation);
                    display2.val(evaluation);
                    break;
            }
        }
        */
    }
})

subtract.on('click', function () {
    
    if (expectingNumber === 0) {
        var display1Value = display1.val();
        var display2Value = display2.val();

        var indexOfLastVissibleChar = display1Value.length - 2;
        var lastVissibleChar = display1Value.charAt(indexOfLastVissibleChar);
        var str, operation, evaluation;

        display1.val(display1Value + display2Value + " \u2212 ");
        display1ValueHidden = display1ValueHidden + display2Value + " - ";
        
        expectingNumber = 1;
        overwriteDisplay2 = 1;
    }
})

multiply.on('click', function () {
    
    if (expectingNumber === 0) {
        var display1Value = display1.val();
        var display2Value = display2.val();

        var indexOfLastVissibleChar = display1Value.length - 2;
        var lastVissibleChar = display1Value.charAt(indexOfLastVissibleChar);
        var str;

        display1.val(display1Value + display2Value + " \u00D7 ");
        display1ValueHidden = display1ValueHidden + display2Value + " * ";
        
        expectingNumber = 1;
        overwriteDisplay2 = 1;
    }
})

divide.on('click', function () {
    
    if (expectingNumber === 0) {
        var display1Value = display1.val();
        var display2Value = display2.val();

        var indexOfLastVissibleChar = display1Value.length - 2;
        var lastVissibleChar = display1Value.charAt(indexOfLastVissibleChar);
        var str;

        display1.val(display1Value + display2Value + " \u00F7 ");
        display1ValueHidden = display1ValueHidden + display2Value + " / ";
        
        expectingNumber = 1;
        overwriteDisplay2 = 1;
    }
})

// Clear button 
clear.on('click', function () {
    display1.val("");
    display2.val("");
})

// Equal button
equal.on('click', function () {
    var operation = display1ValueHidden + display2.val();
    // Clear display 1
    display1.val("");
    display1ValueHidden = "";
    var evaluation = eval(operation);
    
    switch (evaluation) {
        case Infinity:
            evaluation = '\u221E';
            break;
        case -Infinity:
            evaluation = '-\u221E';
            break;
    }
    
    display2.val(evaluation);
})

// Backspace button
backspace.on('click', function () {
    var display2Value = display2.val();
    var length = display2Value.length;
    var str = display2Value.slice(0, length-1);
    display2.val(str);
})