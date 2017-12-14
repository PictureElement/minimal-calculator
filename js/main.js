var display1 = {
    // default display1 values
    operation: "",
    evaluation: "",
    numOfOperands: 0,
    operator: "",
    operand: "",
    previousOperand: "",
    numOfPct: 0,
    answer: ""
};

// default flag values
var flag = {
    decimalPointAllowed: true,
    pctAllowed: false,
    ansAllowed: false,
    digitAllowed: true
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
$("#equal").addClass("equal-light");
$("#clear").addClass("clear-light");
$("#ans").addClass("ans-light");
$("#backspace").addClass("backspace-light");

// numbers
$('#zero').on('click', function () {
    if (flag.digitAllowed) {
        display1.operand = display1.operand + "0";
        $('#display1').val($('#display1').val() + '\u0030');
        $('#display2').val(eval(display1.operation + display1.operator + display1.operand).toString());
        flag.pctAllowed = true;
    }
})

$('#one').on('click', function () {
    if (flag.digitAllowed) {
        display1.operand = display1.operand + "1";
        $('#display1').val($('#display1').val() + '\u0031');
        $('#display2').val(eval(display1.operation + display1.operator + display1.operand).toString());
        flag.pctAllowed = true;
    }
})

$('#two').on('click', function () {
    if (flag.digitAllowed) {
        display1.operand = display1.operand + "2";
        $('#display1').val($('#display1').val() + '\u0032');
        $('#display2').val(eval(display1.operation + display1.operator + display1.operand).toString());
        flag.pctAllowed = true;
    }
})

$('#three').on('click', function () {
    if (flag.digitAllowed) {
        display1.operand = display1.operand + "3";
        $('#display1').val($('#display1').val() + '\u0033');
        $('#display2').val(eval(display1.operation + display1.operator + display1.operand).toString());
        flag.pctAllowed = true;
    }
})

$('#four').on('click', function () {
    if (flag.digitAllowed) {
        display1.operand = display1.operand + "4";
        $('#display1').val($('#display1').val() + '\u0034');
        $('#display2').val(eval(display1.operation + display1.operator + display1.operand).toString());
        flag.pctAllowed = true;
    }
})

$('#five').on('click', function () {
    if (flag.digitAllowed) {
        display1.operand = display1.operand + "5";
        $('#display1').val($('#display1').val() + '\u0035');
        $('#display2').val(eval(display1.operation + display1.operator + display1.operand).toString());
        flag.pctAllowed = true;
    }
})

$('#six').on('click', function () {
    if (flag.digitAllowed) {
        display1.operand = display1.operand + "6";
        $('#display1').val($('#display1').val() + '\u0036');
        $('#display2').val(eval(display1.operation + display1.operator + display1.operand).toString());
        flag.pctAllowed = true;
    }
})

$('#seven').on('click', function () {
    if (flag.digitAllowed) {
        display1.operand = display1.operand + "7";
        $('#display1').val($('#display1').val() + '\u0037');
        $('#display2').val(eval(display1.operation + display1.operator + display1.operand).toString());
        flag.pctAllowed = true;
    }
})

$('#eight').on('click', function () {
    if (flag.digitAllowed) {
        display1.operand = display1.operand + "8";
        $('#display1').val($('#display1').val() + '\u0038');
        $('#display2').val(eval(display1.operation + display1.operator + display1.operand).toString());
        flag.pctAllowed = true;
    }
})

$('#nine').on('click', function () {
    if (flag.digitAllowed) {
        display1.operand = display1.operand + "9";
        $('#display1').val($('#display1').val() + '\u0039');
        $('#display2').val(eval(display1.operation + display1.operator + display1.operand).toString());
        flag.pctAllowed = true;
    }
})
              
$('#decimal').on('click', function () {
    if (flag.decimalPointAllowed) {
        display1.operand = display1.operand + ".";
        $('#display1').val($('#display1').val() + '\u002e');
        $('#display2').val(eval(display1.operation + display1.operator + display1.operand).toString());
        flag.decimalPointAllowed = false;
    }
})

$('#left-parenthesis').on('click', function () {
    display1.operand = display1.operand + "(";
    $('#display1').val($('#display1').val() + '\u0028');
    $('#display2').val(eval(display1.operation + display1.operator + display1.operand).toString());
})

$('#right-parenthesis').on('click', function () {
    display1.operand = display1.operand + ")";
    $('#display1').val($('#display1').val() + '\u0029');
    $('#display2').val(eval(display1.operation + display1.operator + display1.operand).toString());
})

$('#square-root').on('click', function () {
})

// operators
$('#add').on('click', function () {
    if($('#display1').val().endsWith("\u002b") || $('#display1').val().endsWith("\u2212") || $('#display1').val().endsWith("\u00d7") || $('#display1').val().endsWith("\u00f7")) {
        // replace last character with +
        $('#display1').val($('#display1').val().replace(/.$/,"\u002b"));
    }
    /*
    // Handle %
    else if ($('#display1').val().endsWith("\u0025")) {
        
    }
    */
    else {
        display1.operation = display1.operation + display1.operator + display1.operand;
        display1.evaluation = eval(display1.operation).toString();
        $('#display1').val($('#display1').val() + "\u002b");
        display1.numOfOperands ++;
    }
    display1.previousOperand = display1.operand;
    display1.operand = "";
    display1.operator = "+";
    flag.decimalPointAllowed = true;
    flag.digitAllowed = true;
})

$('#subtract').on('click', function () {
    if ($('#display1').val().endsWith("\u002b") || $('#display1').val().endsWith("\u2212") || $('#display1').val().endsWith("\u00d7") || $('#display1').val().endsWith("\u00f7")) {
        // replace last character with -
        $('#display1').val($('#display1').val().replace(/.$/,"\u2212"));
    }
    else {
        display1.operation = display1.operation + display1.operator + display1.operand;
        display1.evaluation = eval(display1.operation).toString();
        $('#display1').val($('#display1').val() + "\u2212");
        display1.numOfOperands ++;
    }
    display1.previousOperand = display1.operand;
    display1.operand = "";
    display1.operator = "-";
    flag.decimalPointAllowed = true;
    flag.digitAllowed = true;
})

$('#multiply').on('click', function () {
    if ($('#display1').val().length !== 0) {
        if($('#display1').val().endsWith("\u002b") || $('#display1').val().endsWith("\u2212") || $('#display1').val().endsWith("\u00d7") || $('#display1').val().endsWith("\u00f7")) {
            // replace last character with *
            $('#display1').val($('#display1').val().replace(/.$/,"\u00d7"));
        }
        else {
            display1.operation = display1.operation + display1.operator + display1.operand;
            display1.evaluation = eval(display1.operation).toString();
            $('#display1').val($('#display1').val() + "\u00d7");
            display1.numOfOperands ++;
        }
        display1.previousOperand = display1.operand;
        display1.operand = "";
        display1.operator = "*";
        flag.decimalPointAllowed = true;
        flag.digitAllowed = true;
    }
})

$('#divide').on('click', function () {
    if ($('#display1').val().length !== 0) {
        if($('#display1').val().endsWith("\u002b") || $('#display1').val().endsWith("\u2212") || $('#display1').val().endsWith("\u00d7") || $('#display1').val().endsWith("\u00f7")) {
            // replace last character with /
            $('#display1').val($('#display1').val().replace(/.$/,"\u00f7"));
        }
        else {
            display1.operation = display1.operation + display1.operator + display1.operand;
            display1.evaluation = eval(display1.operation).toString();
            $('#display1').val($('#display1').val() + "\u00f7");
            display1.numOfOperands ++;
        }
        display1.previousOperand = display1.operand;
        display1.operand = "";
        display1.operator = "/";
        flag.decimalPointAllowed = true;
        flag.digitAllowed = true;
    }
})

$('#percentage').on('click', function () {

    // Only one % is allowed for the entire operation.
    // The last % indicates the end of the entire operation and triggers the equal button.
    if (display1.numOfPct < 1 && flag.pctAllowed) {
        //Num
        if (display1.numOfOperands === 0) {
            display1.operand = eval(display1.operand + "/" + "100").toString();
            $('#display1').val(display1.operand);
            $('#display2').val(display1.operand);
        }
        else {
            $('#display1').val($('#display1').val() + '\u0025');
            display1.numOfPct ++;
            flag.percentageAllowed = false;
            switch (display1.operator) {
                // a*b%
                case "*":
                    // a*b/100
                    display1.operand = eval(display1.evaluation + "*" + display1.operand + "/" + "100").toString();
                    display1.operation = "1";
                    // result = 1 * (a*b/100)
                    $('#display2').val(eval(display1.operation + display1.operator + display1.operand).toString());
                    if (display1.numOfOperands)
                    break;

                // a/b%
                case "/":
                    // a/b*100
                    display1.operand = eval(display1.evaluation + "/" + display1.operand + "*" + "100").toString();
                    display1.operation = "1";
                    display1.operator = "*";
                    // result = 1 * (a/b*100)
                    $('#display2').val(eval(display1.operation + display1.operator + display1.operand).toString());
                    break;

                // a+b%, a-b%
                default:
                    // a*b/100
                    display1.operand = eval(display1.evaluation + "*" + display1.operand + "/" + "100").toString();
                    // result = a + (a*b/100), result = a - (a*b/100)
                    $('#display2').val(eval(display1.operation + display1.operator + display1.operand).toString());
                    break;
            }
            // Execute the handler attached to the $("#equal") element for the 'click' event type.
            $("#equal").trigger("click");
        }
    }
})

// Clear button 
$('#clear').on('click', function () {
    $('#display1').val("");
    $('#display2').val("");
    display1.operation = "";
    display1.evaluation = "";
    display1.operator = "";
    display1.operand = "";
    flag.decimalPointAllowed = true;
})

// Equal button
$('#equal').on('click', function () {
    var result = $('#display2').val();
    $('#display2').val("");
    $('#display1').val(result);
    display1.answer = result;
    display1.operand = result;
    display1.operation = "";
    display1.evaluation = "";
    display1.operator = "";
    
    // If the result is an integer
    if (Number(result) % 1 === 0) {
        flag.decimalPointAllowed = true;
    }
    // If the result is decimal
    else {
        flag.decimalPointAllowed = false;
    }
    
    // Update ans flag
    flag.ansAllowed = true;
})

/*
if (flag.digitAllowed) {
        display1.operand = display1.operand + "5";
        $('#display1').val($('#display1').val() + '\u0035');
        $('#display2').val(eval(display1.operation + display1.operator + display1.operand).toString());
        flag.pctAllowed = true;
    }
    */
$('#ans').on('click', function () {
    if (flag.ansAllowed) {
        display1.operand = display1.answer;
        $('#display1').val($('#display1').val() + '\u0041' + '\u006E' + '\u0073' + '\u0028' + display1.answer + '\u0029');
        $('#display2').val(eval(display1.operation + display1.operator + display1.operand).toString());
        flag.digitAllowed = false;
    }
})

// Backspace button
$('#backspace').on('click', function () {
    
    // Update ('#display1')
    var str1 = $('#display1').val().slice(0, $('#display1').val().length-1);
    $('#display1').val(str1);
    
    // Update display1
    var str2 = display1.operation.slice(0, $('#display1').val().length-1);
    display1.operation = str2;
    
    // Update current operand
    display1.operand = display1.operand.slice(0, display1.operand.length-1);
    
    // Update ('#display2')
    if (display1.operand === "") {
        //alert("1");
        $('#display2').val(eval(display1.operation.slice(0, display1.operation.length-1)));
    }
    else {
        //alert("2");
        $('#display2').val(eval(display1.operation + display1.operator + display1.operand).toString());
    }
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
        $("#ans").removeClass("ans-light");
        $("#ans").addClass("ans-dark");
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
        $("#ans").removeClass("ans-dark");
        $("#ans").addClass("ans-light");
        $("#backspace").removeClass("backspace-dark");
        $("#backspace").addClass("backspace-light");
    }
})