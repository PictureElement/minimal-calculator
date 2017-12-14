//math.eval('sqrt(-4)')); 


var display1 = {
    /*
    operation: "",
    evaluation: "",
    numOfOperands: 0,
    operator: "",
    operand: "",
    previousOperand: "",
    numOfPct: 0,
    answer: ""
    */
    operation: "",
    evaluation: ""
};

// default flag values
var flag = {
    /*
    decimalPointAllowed: true,
    pctAllowed: false,
    ansAllowed: false,
    digitAllowed: true
    */
    
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
/*
try {
    myroutine(); // may throw three types of exceptions
} catch (e) {
    if (e instanceof TypeError) {
        // statements to handle TypeError exceptions
    } else if (e instanceof RangeError) {
        // statements to handle RangeError exceptions
    } else if (e instanceof EvalError) {
        // statements to handle EvalError exceptions
    } else {
       // statements to handle any unspecified exceptions
       logMyErrors(e); // pass exception object to error handler
    }
}
*/
/*
function isValidJSON(text) {
    try {
        JSON.parse(text);
        return true;
    } catch {
        return false;
    }
}
*/
function evaluate() {
    try {
        math.eval(display1.operation);
        display1.evaluation = math.eval(display1.operation);
        return true; // no exception occured
    } catch (e) {
        if (e instanceof SyntaxError) { // Syntax error exception
            display1.evaluation = "E";
            return false; // exception occured
        }
        else {// Unspecified exceptions
            display1.evaluation = "UE";
            return false; // exception occured
        }
    }
}

$('#zero').on('click', function () {
    display1.operation = display1.operation + "0";
    $('#display1').val($('#display1').val() + '\u0030');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#one').on('click', function () {
    display1.operation = display1.operation + "1";
    $('#display1').val($('#display1').val() + '\u0031');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#two').on('click', function () {
    display1.operation = display1.operation + "2";
    $('#display1').val($('#display1').val() + '\u0032');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#three').on('click', function () {
    display1.operation = display1.operation + "3";
    $('#display1').val($('#display1').val() + '\u0033');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#four').on('click', function () {
    display1.operation = display1.operation + "4";
    $('#display1').val($('#display1').val() + '\u0034');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#five').on('click', function () {
    display1.operation = display1.operation + "5";
    $('#display1').val($('#display1').val() + '\u0035');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#six').on('click', function () {
    display1.operation = display1.operation + "6";
    $('#display1').val($('#display1').val() + '\u0036');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#seven').on('click', function () {
    display1.operation = display1.operation + "7";
    $('#display1').val($('#display1').val() + '\u0037');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#eight').on('click', function () {
    display1.operation = display1.operation + "8";
    $('#display1').val($('#display1').val() + '\u0038');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#nine').on('click', function () {
    display1.operation = display1.operation + "9";
    $('#display1').val($('#display1').val() + '\u0039');
    evaluate();
    $('#display2').val(display1.evaluation);
})
              
$('#decimal').on('click', function () {
    display1.operation = display1.operation + ".";
    $('#display1').val($('#display1').val() + '\u002e');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#left-parenthesis').on('click', function () {
    display1.operation = display1.operation + ".";
    display1.evaluation = math.eval(display1.operation);
    $('#display1').val($('#display1').val() + '\u0028');
    $('#display2').val(display1.evaluation.toString());
})

$('#left-parenthesis').on('click', function () {
    display1.operation = display1.operation + ".";
    display1.evaluation = math.eval(display1.operation);
    $('#display1').val($('#display1').val() + '\u0029');
    $('#display2').val(display1.evaluation.toString());
})

$('#square-root').on('click', function () {
})

// operators
$('#add').on('click', function () {
    display1.operation = display1.operation + "+";
    display1.evaluation = math.eval(display1.operation);
    $('#display1').val($('#display1').val() + '\u002b');
    $('#display2').val(display1.evaluation.toString());
})

$('#subtract').on('click', function () {
    display1.operation = display1.operation + "-";
    display1.evaluation = math.eval(display1.operation);
    $('#display1').val($('#display1').val() + '\u2212');
    $('#display2').val(display1.evaluation.toString());
})

$('#multiply').on('click', function () {
    display1.operation = display1.operation + "*";
    display1.evaluation = math.eval(display1.operation);
    $('#display1').val($('#display1').val() + '\u00d7');
    $('#display2').val(display1.evaluation.toString());
})

$('#divide').on('click', function () {
    display1.operation = display1.operation + "/";
    display1.evaluation = math.eval(display1.operation);
    $('#display1').val($('#display1').val() + '\u00f7');
    $('#display2').val(display1.evaluation.toString());
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
    display1.numOfOperands = 0;
    display1.operator = "";
    display1.operand = "";
    display1.previousOperand = "";
    display1.numOfPct = 0;
    
    flag.decimalPointAllowed = true;
    flag.pctAllowed = false;
    flag.digitAllowed = true;
})

// Equal button
$('#equal').on('click', function () {
    var result = $('#display2').val();
    $('#display2').val("");
    $('#display1').val(result);
    display1.operation = "";
    display1.evaluation = "";
    display1.numOfOperands = 0;
    display1.operator = "";
    display1.operand = result;
    display1.previousOperand = "";
    display1.numOfPct = 0;
    display1.answer = result;
    
    // If the result is an integer
    if (Number(result) % 1 === 0) {
        flag.decimalPointAllowed = true;
    }
    // If the result is decimal
    else {
        flag.decimalPointAllowed = false;
    }
    
    // Update ans flag
    flag.pctAllowed = true;
    flag.ansAllowed = true;
    flag.digitAllowed = true;
})

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