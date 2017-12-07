var display1Secondary = $('#display1');
var display2Secondary = $('#display2');
var display1Primary;
var display2Primary;
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

// default theme (light)
$(".container").addClass("container-light");
$("form").addClass("form-light");
$("form input").addClass("form-input-light");
$(".operand-group").addClass("operand-group-light");
$(".operator-group").addClass("operator-group-light");
$(".clearing-group").addClass("clearing-group-light");
$("#equal").addClass("equal-light");

// default display values
display1Secondary.val("");
display1Primary = "";
display2Secondary.val("");
display2Primary = "";

// Flags
var expectingNumber = 1;
var overwriteDisplay2Secondary = 1;
var lastOpIsPercentage = 0;
var decimalPointAllowed = 1;

// numbers
zero.on('click', function () {
    if (overwriteDisplay2Secondary === 1) {
        display2Secondary.val('0');
        display2Primary = "0";
        overwriteDisplay2Secondary = 0;
    }
    else {
        display2Secondary.val(display2Secondary.val() + '0'); 
        display2Primary = display2Primary + "0";
    }
    expectingNumber = 0;
})

one.on('click', function () {
    if (overwriteDisplay2Secondary === 1) {
        display2Secondary.val('1');
        display2Primary = "1";
        overwriteDisplay2Secondary = 0;
    }
    else {
        display2Secondary.val(display2Secondary.val() + '1'); 
        display2Primary = display2Primary + "1";
    }
    expectingNumber = 0;
})

two.on('click', function () {
    if (overwriteDisplay2Secondary === 1) {
        display2Secondary.val('2');
        display2Primary = "2";
        overwriteDisplay2Secondary = 0;
    }
    else {
        display2Secondary.val(display2Secondary.val() + '2'); 
        display2Primary = display2Primary + "2";
    }
    expectingNumber = 0;
})

three.on('click', function () {
    if (overwriteDisplay2Secondary === 1) {
        display2Secondary.val('3');
        display2Primary = "3";
        overwriteDisplay2Secondary = 0;
    }
    else {
        display2Secondary.val(display2Secondary.val() + '3'); 
        display2Primary = display2Primary + "3";
    }
    expectingNumber = 0;
})

four.on('click', function () {
    if (overwriteDisplay2Secondary === 1) {
        display2Secondary.val('4');
        display2Primary = "4";
        overwriteDisplay2Secondary = 0;
    }
    else {
        display2Secondary.val(display2Secondary.val() + '4'); 
        display2Primary = display2Primary + "4";
    }
    expectingNumber = 0;
})

five.on('click', function () {
    if (overwriteDisplay2Secondary === 1) {
        display2Secondary.val('5');
        display2Primary = "5";
        overwriteDisplay2Secondary = 0;
    }
    else {
        display2Secondary.val(display2Secondary.val() + '5');
        display2Primary = display2Primary + "5";
    }
    expectingNumber = 0;
})

six.on('click', function () {
    if (overwriteDisplay2Secondary === 1) {
        display2Secondary.val('6');
        display2Primary = "6";
        overwriteDisplay2Secondary = 0;
    }
    else {
        display2Secondary.val(display2Secondary.val() + '6'); 
        display2Primary = display2Primary + "6";
    }
    expectingNumber = 0;
})

seven.on('click', function () {
    if (overwriteDisplay2Secondary === 1) {
        display2Secondary.val('7');
        display2Primary = "7";
        overwriteDisplay2Secondary = 0;
    }
    else {
        display2Secondary.val(display2Secondary.val() + '7'); 
        display2Primary = display2Primary + "7";
    }
    expectingNumber = 0;
})

eight.on('click', function () {
    if (overwriteDisplay2Secondary === 1) {
        display2Secondary.val('8');
        display2Primary = "8";
        overwriteDisplay2Secondary = 0;
    }
    else {
        display2Secondary.val(display2Secondary.val() + '8'); 
        display2Primary = display2Primary + "8";
    }
    expectingNumber = 0;
})

nine.on('click', function () {
    if (overwriteDisplay2Secondary === 1) {
        display2Secondary.val('9');
        display2Primary = "9";
        overwriteDisplay2Secondary = 0;
    }
    else {
        display2Secondary.val(display2Secondary.val() + '9'); 
        display2Primary = display2Primary + "9";
    }
    expectingNumber = 0;
})

decimal.on('click', function () {
    if (decimalPointAllowed) {
        if (overwriteDisplay2Secondary === 1) {
            display2Secondary.val('.');
            display2Primary = ".";
            overwriteDisplay2Secondary = 0;
        }
        else {
            display2Secondary.val(display2Secondary.val() + '.'); 
            display2Primary = display2Primary + ".";
        }
        expectingNumber = 0;
        // Decimal point is allowed
        decimalPointAllowed = 0;
    }
})

// operators
add.on('click', function () {
    
    if (expectingNumber === 0) {
        
        if (lastOpIsPercentage === 0) {
            display1Secondary.val(display1Secondary.val() + display2Secondary.val() + " \u002B ");
            display1Primary = display1Primary + display2Primary + " + ";
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
        // Decimal point is allowed
        decimalPointAllowed = 1;
    }
})

subtract.on('click', function () {
    
    if (expectingNumber === 0) {
        
        if (lastOpIsPercentage === 0) {
            display1Secondary.val(display1Secondary.val() +  display2Secondary.val() + " \u2212 ");
            display1Primary = display1Primary + display2Primary + " - ";
        }
        else {
            display1Secondary.val(display1Secondary.val() + " \u2212 ");
            display1Primary = display1Primary + " - ";
            lastOpIsPercentage = 0;
        }
        
        expectingNumber = 1;
        overwriteDisplay2Secondary = 1;
        // Decimal point is allowed
        decimalPointAllowed = 1;
    }
})

multiply.on('click', function () {
    
    if (expectingNumber === 0) {
        
        if (lastOpIsPercentage === 0) {
            display1Secondary.val(display1Secondary.val() + display2Secondary.val() + " \u00D7 ");
            display1Primary = display1Primary + display2Primary + " * ";
        }
        else {
            display1Secondary.val(display1Secondary.val() + " \u00D7 ");
            display1Primary = display1Primary + " * ";
            lastOpIsPercentage = 0;
        }
        
        expectingNumber = 1;
        overwriteDisplay2Secondary = 1;
        // Decimal point is allowed
        decimalPointAllowed = 1;
    }
})

divide.on('click', function () {
    
    if (expectingNumber === 0) {
        
        if (lastOpIsPercentage === 0) {
            display1Secondary.val(display1Secondary.val() + display2Secondary.val() + " \u00F7 ");
            display1Primary = display1Primary + display2Primary + " / ";
        }
        else {
            display1Secondary.val(display1Secondary.val() + " \u00F7 ");
            display1Primary = display1Primary + " / ";
            lastOpIsPercentage = 0;
        }
        
        expectingNumber = 1;
        overwriteDisplay2Secondary = 1;
        // Decimal point is allowed
        decimalPointAllowed = 1;
    }
})

percentage.on('click', function () {
    
    if (expectingNumber === 0) {
        
        var operator, operation, evaluation, result;
        
        // if display1Primary = "" then result = display2/100
        if (display1Primary.length === 0) {
            // typeof(result) = number
            result = Number(display2Primary) / 100;
        }
        else {
            // Strip the last operator from display1
            // if display1Primary = "2_+_3_-_" then operator = "_-_" operation = "2_+_3"
            operator = display1Primary.substr(display1Primary.length - 3, 3);
            operation = display1Primary.substr(0, display1Primary.length - 3);
            // typeof(evaluation) = number
            evaluation = eval(operation);
            // typeof(result) = number
            result = evaluation * Number(display2Primary) / 100;
        }
        
        // Update display1 value
        display1Secondary.val(display1Secondary.val() + result.toString());
        display1Primary = display1Primary + result.toString();
        
        // Update flags
        expectingNumber = 0;
        overwriteDisplay2Secondary = 1;
        lastOpIsPercentage = 1;
    }
})

// Sign button
sign.on('click', function() {

    if (expectingNumber === 0) {
        
        // If the number being displayed on display2 is negative, remove the (-) sign.
        // ex. "-234" becomes "234"
        if (display2Primary.charAt(0) === "-") {
            // str1 = "234"
            var str1 = display2Secondary.val().slice(1);
            display2Secondary.val(str1);
            
            // str2 = "234" 
            var str2 = display1Primary.slice(1);
            display2Primary = str2;
        }
        // Else add the (-) sign.
        // ex. "234" becomes "-234"
        else {
            display2Secondary.val("\u2212" + display2Secondary.val());
            display2Primary = "-" + display2Primary;
        }
    }
})

// Clear button 
clear.on('click', function () {
    display1Secondary.val("");
    display2Secondary.val("");
    display1Primary = "";
    display2Primary = "";
    // Reset flags
    expectingNumber = 1;
    overwriteDisplay2Secondary = 1;
    lastOpIsPercentage = 0; 
    decimalPointAllowed = 1;
})

// Equal button
equal.on('click', function () {
    
    if (lastOpIsPercentage === 1) {
        var operation = display1Primary;
    }
    else {
        var operation = display1Primary + display2Primary;
    }
    
    // Clear display 1
    display1Secondary.val("");
    display1Primary = "";
    
    // typeof(evaluation) = number
    var evaluation = eval(operation);
    
    // Display result
    switch (evaluation) {
        // typeof(Infinity) = number
        case Infinity:
            display2Secondary.val('\u221E');
            display2Primary = "Infinity";
            break;
        // typeof(-Infinity) = number
        case -Infinity:
            display2Secondary.val('\u2212\u221E');
            display2Primary = "-Infinity";
            break;
        default:
            display2Secondary.val(evaluation.toString());
            display2Primary = evaluation.toString();
    }
    
    // Update flags
    lastOpIsPercentage = 0;
    // Need to check if the result is decimal
    if (evaluation % 1 === 0) {
        decimalPointAllowed = 1;
    }
    else {
        decimalPointAllowed= 0;
    }
})

// Backspace button
backspace.on('click', function () {
    
    var len = display2Secondary.val().length;
    var lastChar = display2Secondary.val().charAt(len-1);
    
    // Update flag
    if (lastChar === ".") {
        decimalPointAllowed = 1;
    }
    
    // Update display2
    var str1 = display2Secondary.val().slice(0, len-1);
    display2Secondary.val(str1);
    
    var str2 = display2Primary.slice(0, len-1);
    display2Primary = str2;
})

// The change event is sent to an element when its value changes
$("input[type='checkbox']").change(function () {
    // dark theme
    if (this.checked) {
        //alert("dark");
        $(".container").removeClass("container-light");
        $(".container").addClass("container-dark");
        $("form").removeClass("form-light");
        $("form").addClass("form-dark");
        $("form input").removeClass("form-input-light");
        $("form input").addClass("form-input-dark");
        $(".operand-group").removeClass("operand-group-light");
        $(".operand-group").addClass("operand-group-dark");
        $(".operator-group").removeClass("operator-group-light");
        $(".operator-group").addClass("operator-group-dark");
        $(".clearing-group").removeClass("clearing-group-light");
        $(".clearing-group").addClass("clearing-group-dark");
        $("#equal").removeClass("equal-light");
        $("#equal").addClass("equal-dark");
    }
    // light theme (default)
    else {
        //alert("light");
        $(".container").removeClass("container-dark");
        $(".container").addClass("container-light");
        $("form").removeClass("form-dark");
        $("form").addClass("form-light");
        $("form input").removeClass("form-input-dark");
        $("form input").addClass("form-input-light");
        $(".operand-group").removeClass("operand-group-dark");
        $(".operand-group").addClass("operand-group-light");
        $(".operator-group").removeClass("operator-group-dark");
        $(".operator-group").addClass("operator-group-light");
        $(".clearing-group").removeClass("clearing-group-dark");
        $(".clearing-group").addClass("clearing-group-light");
        $("#equal").removeClass("equal-dark");
        $("#equal").addClass("equal-light");
    }
})