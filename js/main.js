var display1 = {
    // default display values
    op: "",
    eval: ""
};

var display2 = {
    // default display values
    op: "",
    eval: ""
};

// default display values
$('#display1').val("");
$('#display2').val("");

// default theme (light)
$(".container").addClass("container-light");
$("form").addClass("form-light");
$("form input").addClass("form-input-light");
$(".operand-group").addClass("operand-group-light");
$(".operator-group").addClass("operator-group-light");
$(".clearing-group").addClass("clearing-group-light");
$("#equal").addClass("equal-light");

// default flag values
var expectingNumber = 1;
var overwriteDisplay2 = 1;
var lastOpIsPercentage = 0;
var decimalPointAllowed = 1;

// numbers
$('#zero').on('click', function () {
    if (overwriteDisplay2 === 1) {
        $('#display2').val('0');
        display2.op = "0";
        overwriteDisplay2 = 0;
    }
    else {
        $('#display2').val($('#display2').val + '0');
        display2.op = display2.op + "0";
    }
    expectingNumber = 0;
})

$('#one').on('click', function () {
    if (overwriteDisplay2 === 1) {
        $('#display2').val('1');
        display2.op = "1";
        overwriteDisplay2 = 0;
    }
    else {
        $('#display2').val($('#display2').val + '1');
        display2.op = display2.op + "1";
    }
    expectingNumber = 0;
})

$('#two').on('click', function () {
    if (overwriteDisplay2 === 1) {
        $('#display2').val('2');
        display2.op = "2";
        overwriteDisplay2 = 0;
    }
    else {
        $('#display2').val($('#display2').val + '2');
        display2.op = display2.op + "2";
    }
    expectingNumber = 0;
})

$('#three').on('click', function () {
    if (overwriteDisplay2 === 1) {
        $('#display2').val('3');
        display2.op = "3";
        overwriteDisplay2 = 0;
    }
    else {
        $('#display2').val($('#display2').val + '3');
        display2.op = display2.op + "3";
    }
    expectingNumber = 0;
})

$('#four').on('click', function () {
    if (overwriteDisplay2 === 1) {
        $('#display2').val('4');
        display2.op = "4";
        overwriteDisplay2 = 0;
    }
    else {
        $('#display2').val($('#display2').val + '4');
        display2.op = display2.op + "4";
    }
    expectingNumber = 0;
})

$('#five').on('click', function () {
    if (overwriteDisplay2 === 1) {
        $('#display2').val('5');
        display2.op = "5";
        overwriteDisplay2 = 0;
    }
    else {
        $('#display2').val($('#display2').val + '5');
        display2.op = display2.op + "5";
    }
    expectingNumber = 0;
})

$('#six').on('click', function () {
    if (overwriteDisplay2 === 1) {
        $('#display2').val('6');
        display2.op = "6";
        overwriteDisplay2 = 0;
    }
    else {
        $('#display2').val($('#display2').val + '6');
        display2.op = display2.op + "6";
    }
    expectingNumber = 0;
})

$('#seven').on('click', function () {
    if (overwriteDisplay2 === 1) {
        $('#display2').val('7');
        display2.op = "7";
        overwriteDisplay2 = 0;
    }
    else {
        $('#display2').val($('#display2').val + '7');
        display2.op = display2.op + "7";
    }
    expectingNumber = 0;
})

$('#eight').on('click', function () {
    if (overwriteDisplay2 === 1) {
        $('#display2').val('8');
        display2.op = "8";
        overwriteDisplay2 = 0;
    }
    else {
        $('#display2').val($('#display2').val + '8');
        display2.op = display2.op + "8";
    }
    expectingNumber = 0;
})

$('#nine').on('click', function () {
    if (overwriteDisplay2 === 1) {
        $('#display2').val('9');
        display2.op = "9";
        overwriteDisplay2 = 0;
    }
    else {
        $('#display2').val($('#display2').val + '9');
        display2.op = display2.op + "9";
    }
    expectingNumber = 0;
})

$('#decimal').on('click', function () {
    if (decimalPointAllowed) {
        if (overwriteDisplay2 === 1) {
            $('#display2').val('.');
            display2.op = ".";
            overwriteDisplay2 = 0;
        }
        else {
            $('#display2').val($('#display2').val + '.');
            display2.op = display2.op + ".";
        }
        expectingNumber = 0;
        // Decimal point is allowed
        decimalPointAllowed = 0;
    }
})

// operators
$('#add').on('click', function () {
    
    if (expectingNumber === 0) {
        
        if (lastOpIsPercentage === 0) {
            $('#display1').val($('#display1').val() + $('#display2').val() + " \u002B ");
            display1.op = display1.op + display2.op + " + ";
        }
        else {
            $('#display1').val($('#display1').val() + " \u002B ");
            display1.op = display1.op + " + ";
            lastOpIsPercentage = 0;
        }
        
        // Expecting number input, not an operator
        expectingNumber = 1;
        // Overwrite $('#display2') content
        overwriteDisplay2 = 1; 
        // Decimal point is allowed
        decimalPointAllowed = 1;
    }
})

$('#subtract').on('click', function () {
    
    if (expectingNumber === 0) {
        
        if (lastOpIsPercentage === 0) {
            $('#display1').val($('#display1').val() +  $('#display2').val() + " \u2212 ");
            display1.op = display1.op + display2.op + " - ";
        }
        else {
            $('#display1').val($('#display1').val() + " \u2212 ");
            display1.op = display1.op + " - ";
            lastOpIsPercentage = 0;
        }
        
        expectingNumber = 1;
        overwriteDisplay2 = 1;
        // Decimal point is allowed
        decimalPointAllowed = 1;
    }
})

$('#multiply').on('click', function () {
    
    if (expectingNumber === 0) {
        
        if (lastOpIsPercentage === 0) {
            $('#display1').val($('#display1').val() + $('#display2').val() + " \u00D7 ");
            display1.op = display1.op + display2.op + " * ";
        }
        else {
            $('#display1').val($('#display1').val() + " \u00D7 ");
            display1.op = display1.op + " * ";
            lastOpIsPercentage = 0;
        }
        
        expectingNumber = 1;
        overwriteDisplay2 = 1;
        // Decimal point is allowed
        decimalPointAllowed = 1;
    }
})

$('#divide').on('click', function () {
    
    if (expectingNumber === 0) {
        
        if (lastOpIsPercentage === 0) {
            $('#display1').val($('#display1').val() + $('#display2').val() + " \u00F7 ");
            display1.op = display1.op + display2.op + " / ";
        }
        else {
            $('#display1').val($('#display1').val() + " \u00F7 ");
            display1.op = display1.op + " / ";
            lastOpIsPercentage = 0;
        }
        
        expectingNumber = 1;
        overwriteDisplay2 = 1;
        // Decimal point is allowed
        decimalPointAllowed = 1;
    }
})

$('#percentage').on('click', function () {
    
    if (expectingNumber === 0) {
        
        var operator, operation, evaluation, result;
        
        // if display1.op = "" then result = display2.op/100
        if (display1.op.length === 0) {
            // typeof(result) = number
            result = Number(display2.op) / 100;
        }
        else {
            // Strip the last operator from display1
            // if display1.op = "2_+_3_-_" then operator = "_-_" operation = "2_+_3"
            operator = display1.op.substr(display1.op.length - 3, 3);
            operation = display1.op.substr(0, display1.op.length - 3);
            // typeof(evaluation) = number
            evaluation = eval(operation);
            // typeof(result) = number
            result = evaluation * Number(display2.op) / 100;
        }
        
        // Update display1 value
        $('#display1').val($('#display1').val() + result.toString());
        display1.op = display1.op + result.toString();
        
        // Update flags
        expectingNumber = 0;
        overwriteDisplay2 = 1;
        lastOpIsPercentage = 1;
    }
})

// Sign button
$('#sign').on('click', function() {

    if (expectingNumber === 0) {
        
        // If the number being displayed on display2 is negative, remove the (-) sign.
        // ex. "-234" becomes "234"
        if (display2.op.charAt(0) === "-") {
            // str1 = "234"
            var str1 = $('#display2').val().slice(1);
            $('#display2').val(str1);
            
            // str2 = "234" 
            var str2 = display1.op.slice(1);
            display2.op = str2;
        }
        // Else add the (-) sign.
        // ex. "234" becomes "-234"
        else {
            $('#display2').val("\u2212" + $('#display2').val());
            display2.op = "-" + display2.op;
        }
    }
})

// Clear button 
$('#clear').on('click', function () {
    $('#display1').val("");
    $('#display2').val("");
    display1.op = "";
    display2.op = "";
    // Reset flags
    expectingNumber = 1;
    overwriteDisplay2 = 1;
    lastOpIsPercentage = 0; 
    decimalPointAllowed = 1;
})

// Equal button
$('#equal').on('click', function () {
    
    if (lastOpIsPercentage === 1) {
        var operation = display1.op;
    }
    else {
        var operation = display1.op + display2.op;
    }
    
    // Clear display 1
    $('#display1').val("");
    display1.op = "";
    
    // typeof(evaluation) = number
    var evaluation = eval(operation);
    
    // Display result
    switch (evaluation) {
        // typeof(Infinity) = number
        case Infinity:
            $('#display2').val('\u221E');
            display2.op = "Infinity";
            break;
        // typeof(-Infinity) = number
        case -Infinity:
            $('#display2').val('\u2212\u221E');
            display2.op = "-Infinity";
            break;
        default:
            $('#display2').val(evaluation.toString());
            display2.op = evaluation.toString();
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
$('#backspace').on('click', function () {
    
    var len = $('#display2').val().length;
    var lastChar = $('#display2').val().charAt(len-1);
    
    // Update flag
    if (lastChar === ".") {
        decimalPointAllowed = 1;
    }
    
    // Update display2
    var str1 = $('#display2').val().slice(0, len-1);
    $('#display2').val(str1);
    
    var str2 = display2.op.slice(0, len-1);
    display2.op = str2;
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