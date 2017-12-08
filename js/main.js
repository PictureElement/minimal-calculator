var display1 = {
    // default display1 values
    op: "",
    eval: ""
};

var display2 = {
    // default display2 values
    op: "",
    eval: ""
};

// default flag values
var flag = {
    numberAllowed: true,
    display2Overwrite: true,
    lastOpIsPct: false,
    decimalPointAllowed: true
}

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

// numbers
$('#zero').on('click', function () {
    if (flag.display2Overwrite === true) {
        $('#display2').val('0');
        display2.op = "0";
        flag.display2Overwrite = false;
    }
    else {
        $('#display2').val($('#display2').val() + '0');
        display2.op = display2.op + "0";
    }
    flag.numberAllowed = false;
})

$('#one').on('click', function () {
    if (flag.display2Overwrite === true) {
        $('#display2').val('1');
        display2.op = "1";
        flag.display2Overwrite = false;
    }
    else {
        $('#display2').val($('#display2').val() + '1');
        display2.op = display2.op + "1";
    }
    flag.numberAllowed = false;
})

$('#two').on('click', function () {
    if (flag.display2Overwrite === true) {
        $('#display2').val('2');
        display2.op = "2";
        flag.display2Overwrite = false;
    }
    else {
        $('#display2').val($('#display2').val() + '2');
        display2.op = display2.op + "2";
    }
    flag.numberAllowed = false;
})

$('#three').on('click', function () {
    if (flag.display2Overwrite === true) {
        $('#display2').val('3');
        display2.op = "3";
        flag.display2Overwrite = false;
    }
    else {
        $('#display2').val($('#display2').val() + '3');
        display2.op = display2.op + "3";
    }
    flag.numberAllowed = false;
})

$('#four').on('click', function () {
    if (flag.display2Overwrite === true) {
        $('#display2').val('4');
        display2.op = "4";
        flag.display2Overwrite = false;
    }
    else {
        $('#display2').val($('#display2').val() + '4');
        display2.op = display2.op + "4";
    }
    flag.numberAllowed = false;
})

$('#five').on('click', function () {
    if (flag.display2Overwrite === true) {
        $('#display2').val('5');
        display2.op = "5";
        flag.display2Overwrite = false;
    }
    else {
        $('#display2').val($('#display2').val() + '5');
        display2.op = display2.op + "5";
    }
    flag.numberAllowed = false;
})

$('#six').on('click', function () {
    if (flag.display2Overwrite === true) {
        $('#display2').val('6');
        display2.op = "6";
        flag.display2Overwrite = false;
    }
    else {
        $('#display2').val($('#display2').val() + '6');
        display2.op = display2.op + "6";
    }
    flag.numberAllowed = false;
})

$('#seven').on('click', function () {
    if (flag.display2Overwrite === true) {
        $('#display2').val('7');
        display2.op = "7";
        flag.display2Overwrite = false;
    }
    else {
        $('#display2').val($('#display2').val() + '7');
        display2.op = display2.op + "7";
    }
    flag.numberAllowed = false;
})

$('#eight').on('click', function () {
    if (flag.display2Overwrite === true) {
        $('#display2').val('8');
        display2.op = "8";
        flag.display2Overwrite = false;
    }
    else {
        $('#display2').val($('#display2').val() + '8');
        display2.op = display2.op + "8";
    }
    flag.numberAllowed = false;
})

$('#nine').on('click', function () {
    if (flag.display2Overwrite === true) {
        $('#display2').val('9');
        display2.op = "9";
        flag.display2Overwrite = false;
    }
    else {
        $('#display2').val($('#display2').val() + '9');
        display2.op = display2.op + "9";
    }
    flag.numberAllowed = false;
})

$('#decimal').on('click', function () {
    if (flag.decimalPointAllowed === true) {
        if (flag.display2Overwrite === true) {
            $('#display2').val('.');
            display2.op = ".";
            flag.display2Overwrite = false;
        }
        else {
            $('#display2').val($('#display2').val() + '.');
            display2.op = display2.op + ".";
        }
        flag.numberAllowed = false;
        // Decimal point is allowed
        flag.decimalPointAllowed = false;
    }
})

// operators
$('#add').on('click', function () {
    
    if (flag.numberAllowed === false) {
        
        if (flag.lastOpIsPct === false) {
            $('#display1').val($('#display1').val() + $('#display2').val() + " \u002B ");
            display1.op = display1.op + display2.op + " + ";
        }
        else {
            $('#display1').val($('#display1').val() + " \u002B ");
            display1.op = display1.op + " + ";
            flag.lastOpIsPct = false;
        }
        
        // Expecting number input, not an operator
        flag.numberAllowed = true;
        // Overwrite $('#display2') content
        flag.display2Overwrite = true; 
        // Decimal point is allowed
        flag.decimalPointAllowed = true;
    }
})

$('#subtract').on('click', function () {
    
    if (flag.numberAllowed === false) {
        
        if (flag.lastOpIsPct === false) {
            $('#display1').val($('#display1').val() +  $('#display2').val() + " \u2212 ");
            display1.op = display1.op + display2.op + " - ";
        }
        else {
            $('#display1').val($('#display1').val() + " \u2212 ");
            display1.op = display1.op + " - ";
            flag.lastOpIsPct = false;
        }
        
        flag.numberAllowed = true;
        flag.display2Overwrite = true;
        // Decimal point is allowed
        flag.decimalPointAllowed = true;
    }
})

$('#multiply').on('click', function () {
    
    if (flag.numberAllowed === false) {
        
        if (flag.lastOpIsPct === false) {
            $('#display1').val($('#display1').val() + $('#display2').val() + " \u00D7 ");
            display1.op = display1.op + display2.op + " * ";
        }
        else {
            $('#display1').val($('#display1').val() + " \u00D7 ");
            display1.op = display1.op + " * ";
            flag.lastOpIsPct = false;
        }
        
        flag.numberAllowed = true;
        flag.display2Overwrite = true;
        // Decimal point is allowed
        flag.decimalPointAllowed = true;
    }
})

$('#divide').on('click', function () {
    
    if (flag.numberAllowed === false) {
        
        if (flag.lastOpIsPct === false) {
            $('#display1').val($('#display1').val() + $('#display2').val() + " \u00F7 ");
            display1.op = display1.op + display2.op + " / ";
        }
        else {
            $('#display1').val($('#display1').val() + " \u00F7 ");
            display1.op = display1.op + " / ";
            flag.lastOpIsPct = false;
        }
        
        flag.numberAllowed = true;
        flag.display2Overwrite = true;
        // Decimal point is allowed
        flag.decimalPointAllowed = true;
    }
})

$('#percentage').on('click', function () {
    
    if (flag.numberAllowed === false) {
        
        var operator, operation, evaluation, result;
        
        // if display1.op = "" then result = display2.op/100
        if (display1.op.length === false) {
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
        flag.numberAllowed = false;
        flag.display2Overwrite = true;
        flag.lastOpIsPct = true;
    }
})

// Clear button 
$('#clear').on('click', function () {
    $('#display1').val("");
    $('#display2').val("");
    display1.op = "";
    display2.op = "";
    // Reset flags
    flag.numberAllowed = true;
    flag.display2Overwrite = true;
    flag.lastOpIsPct = false; 
    flag.decimalPointAllowed = true;
})

// Equal button
$('#equal').on('click', function () {
    
    if (flag.lastOpIsPct === true) {
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
    flag.lastOpIsPct = false;
    // Need to check if the result is decimal
    if (evaluation % 1 === 0) {
        flag.decimalPointAllowed = true;
    }
    else {
        flag.decimalPointAllowed = false;
    }
})

// Backspace button
$('#backspace').on('click', function () {
    
    var len = $('#display2').val().length;
    var lastChar = $('#display2').val().charAt(len-1);
    
    // Update flag
    if (lastChar === ".") {
        flag.decimalPointAllowed = true;
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