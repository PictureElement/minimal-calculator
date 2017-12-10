var display1 = {
    // default display1 values
    op: "",
    eval: "",
    lastOp: "",
    lastOpIndex: -1
};

// default flag values
var flag = {
    operatorAllowed: false,
    lastOpIsPct: false,
    decimalPointAllowed: true
}

// default display values
$('#display1').val("");

// default theme (light)
$(".container").addClass("container-light");
$("form").addClass("form-light");
$("form input").addClass("form-input-light");
$(".operand-group").addClass("operand-group-light");
$(".operator-group").addClass("operator-group-light");
$("#equal").addClass("equal-light");
$("#clear").addClass("clear-light");
$("#clear-entry").addClass("clear-entry-light");
$("#backspace").addClass("backspace-light");

// numbers
$('#zero').on('click', function () {
    $('#display1').val($('#display1').val() + '\u0030');
    display1.op = display1.op + "0";
})

$('#one').on('click', function () {
    $('#display1').val($('#display1').val() + '\u0031');
    display1.op = display1.op + "1";
})

$('#two').on('click', function () {
    $('#display1').val($('#display1').val() + '\u0032');
    display1.op = display1.op + "2";
})

$('#three').on('click', function () {
    $('#display1').val($('#display1').val() + '\u0033');
    display1.op = display1.op + "3";
})

$('#four').on('click', function () {
    $('#display1').val($('#display1').val() + '\u0034');
    display1.op = display1.op + "4";
})

$('#five').on('click', function () {
    $('#display1').val($('#display1').val() + '\u0035');
    display1.op = display1.op + "5";
})

$('#six').on('click', function () {
    $('#display1').val($('#display1').val() + '\u0036');
    display1.op = display1.op + "6";
})

$('#seven').on('click', function () {
    $('#display1').val($('#display1').val() + '\u0037');
    display1.op = display1.op + "7";
})

$('#eight').on('click', function () {
    $('#display1').val($('#display1').val() + '\u0038');
    display1.op = display1.op + "8";
})

$('#nine').on('click', function () {
    $('#display1').val($('#display1').val() + '\u0039');
    display1.op = display1.op + "9";
})
              
$('#decimal').on('click', function () {
    if (flag.decimalPointAllowed) {
        $('#display1').val($('#display1').val() + '\u002e');
        display1.op = display1.op + "."; 
        flag.decimalPointAllowed = false;
    }
})

// operators
$('#add').on('click', function () {
    if(display1.op.endsWith("+") || display1.op.endsWith("-") || display1.op.endsWith("*") || display1.op.endsWith("/")) {
        // replace last character with +
        $('#display1').val($('#display1').val().replace(/.$/,"\u002b"));
        display1.op = display1.op.replace(/.$/,"+"); 
    }
    else {
        $('#display1').val($('#display1').val() + "\u002b");
        display1.op = display1.op + "+";
    }
    display1.lastOp = "+";
    display1.lastOpIndex = display1.op.length - 1;
    flag.decimalPointAllowed = true;
})

$('#subtract').on('click', function () {
    if(display1.op.endsWith("+") || display1.op.endsWith("-") || display1.op.endsWith("*") || display1.op.endsWith("/")) {
        // replace last character with -
        $('#display1').val($('#display1').val().replace(/.$/,"\u2212"));
        display1.op = display1.op.replace(/.$/,"-"); 
    }
    else {
        $('#display1').val($('#display1').val() + "\u2212");
        display1.op = display1.op + "-";
    }
    display1.lastOp = "-";
    display1.lastOpIndex = display1.op.length - 1;
    flag.decimalPointAllowed = true;
})

$('#multiply').on('click', function () {
    if(display1.op.endsWith("+") || display1.op.endsWith("-") || display1.op.endsWith("*") || display1.op.endsWith("/")) {
        // replace last character with *
        $('#display1').val($('#display1').val().replace(/.$/,"\u00d7"));
        display1.op = display1.op.replace(/.$/,"*"); 
    }
    else {
        $('#display1').val($('#display1').val() + "\u00d7");
        display1.op = display1.op + "*";
    }
    display1.lastOp = "*";
    display1.lastOpIndex = display1.op.length - 1;
    flag.decimalPointAllowed = true;
})

$('#divide').on('click', function () {
    if(display1.op.endsWith("+") || display1.op.endsWith("-") || display1.op.endsWith("*") || display1.op.endsWith("/")) {
        // replace last character with /
        $('#display1').val($('#display1').val().replace(/.$/,"\u00f7"));
        display1.op = display1.op.replace(/.$/,"/"); 
    }
    else {
        $('#display1').val($('#display1').val() + "\u00f7");
        display1.op = display1.op + "/";
    }
    display1.lastOp = "/";
    display1.lastOpIndex = display1.op.length - 1;
    flag.decimalPointAllowed = true;
})

$('#percentage').on('click', function () {
    /*
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
    */
    
    // display1.op = 2 + 4 - 50
    display1.op = "(" + display1.op + ")" + "*" + "";
    $('#display1').val($('#display1').val() + '\u0025');
    display1.op = display1.op + "%";
})

// Clear button 
$('#clear').on('click', function () {
    $('#display1').val("");
    display1.op = "";
    display1.eval = "";
    display1.lastOp = "";
    display1.lastOpIndex = -1;
})

// Equal button
$('#equal').on('click', function () {
    display1.eval = eval(display1.op).toString();
    display1.op = display1.eval;
    $('#display1').val(display1.eval);
})

// Backspace button
$('#backspace').on('click', function () {
    
    var len = $('#display1').val().length;
    var lastChar = $('#display1').val().charAt(len-1);
    
    // Update display1
    var str1 = $('#display1').val().slice(0, len-1);
    $('#display1').val(str1);
    
    var str2 = display1.op.slice(0, len-1);
    display1.op = str2;
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
        $("#equal").removeClass("equal-light");
        $("#equal").addClass("equal-dark");
        $("#clear").removeClass("clear-light");
        $("#clear").addClass("clear-dark");
        $("#clear-entry").removeClass("clear-entry-light");
        $("#clear-entry").addClass("clear-entry-dark");
        $("#backspace").removeClass("backspace-light");
        $("#backspace").addClass("backspace-dark");
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
        $("#equal").removeClass("equal-dark");
        $("#equal").addClass("equal-light");
        $("#clear").removeClass("clear-dark");
        $("#clear").addClass("clear-light");
        $("#clear-entry").removeClass("clear-entry-dark");
        $("#clear-entry").addClass("clear-entry-light");
        $("#backspace").removeClass("backspace-dark");
        $("#backspace").addClass("backspace-light");
    }
})