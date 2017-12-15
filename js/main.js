var display1 = {
    operation: "",
    evaluation: "",
    answer: "",
    unbalancedParentheses: 0 // Number of unbalanced parentheses
};

// default flag values
var flag = {
    ansAllowed: false, // Initially do not allow the use of Ans button
    squareRoot: false, // Square root evaluation
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

// Set default theme (light)
$(".container").addClass("container-light");
$("form").addClass("form-light");
$("form input").addClass("form-input-light");
$(".operand-group").addClass("operand-group-light");
$(".operator-group").addClass("operator-group-light");
$("#equal").addClass("equal-light");
$("#clear").addClass("clear-light");
$("#backspace").addClass("backspace-light");

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

// Digits
$('#zero').on('click', function () {
    if (flag.squareRoot) {
        display1.operation = display1.operation.substring(0, display1.operation.length-1) + "0" + ")";
    }
    else {
        display1.operation = display1.operation + "0";
    }
    $('#display1').val($('#display1').val() + '\u0030');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#one').on('click', function () {
    if (flag.squareRoot) {
        display1.operation = display1.operation.substring(0, display1.operation.length-1) + "1" + ")";
    }
    else {
        display1.operation = display1.operation + "1";
    }
    $('#display1').val($('#display1').val() + '\u0031');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#two').on('click', function () {
    if (flag.squareRoot) {
        display1.operation = display1.operation.substring(0, display1.operation.length-1) + "2" + ")";
    }
    else {
        display1.operation = display1.operation + "2";
    }
    $('#display1').val($('#display1').val() + '\u0032');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#three').on('click', function () {
    if (flag.squareRoot) {
        display1.operation = display1.operation.substring(0, display1.operation.length-1) + "3" + ")";
    }
    else {
        display1.operation = display1.operation + "3";
    }
    $('#display1').val($('#display1').val() + '\u0033');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#four').on('click', function () {
    if (flag.squareRoot) {
        display1.operation = display1.operation.substring(0, display1.operation.length-1) + "4" + ")";
    }
    else {
        display1.operation = display1.operation + "4";
    }
    $('#display1').val($('#display1').val() + '\u0034');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#five').on('click', function () {
    if (flag.squareRoot) {
        display1.operation = display1.operation.substring(0, display1.operation.length-1) + "5" + ")";
    }
    else {
        display1.operation = display1.operation + "5";
    }
    $('#display1').val($('#display1').val() + '\u0035');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#six').on('click', function () {
    if (flag.squareRoot) {
        display1.operation = display1.operation.substring(0, display1.operation.length-1) + "6" + ")";
    }
    else {
        display1.operation = display1.operation + "6";
    }
    $('#display1').val($('#display1').val() + '\u0036');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#seven').on('click', function () {
    if (flag.squareRoot) {
        display1.operation = display1.operation.substring(0, display1.operation.length-1) + "7" + ")";
    }
    else {
        display1.operation = display1.operation + "7";
    }
    $('#display1').val($('#display1').val() + '\u0037');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#eight').on('click', function () {
    if (flag.squareRoot) {
        display1.operation = display1.operation.substring(0, display1.operation.length-1) + "8" + ")";
    }
    else {
        display1.operation = display1.operation + "8";
    }
    $('#display1').val($('#display1').val() + '\u0038');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#nine').on('click', function () {
    if (flag.squareRoot) {
        display1.operation = display1.operation.substring(0, display1.operation.length-1) + "9" + ")";
    }
    else {
        display1.operation = display1.operation + "9";
    }
    $('#display1').val($('#display1').val() + '\u0039');
    evaluate();
    $('#display2').val(display1.evaluation);
})
              
$('#decimal').on('click', function () {
    if (flag.squareRoot) {
        display1.operation = display1.operation.substring(0, display1.operation.length-1) + "." + ")";
    }
    else {
        display1.operation = display1.operation + ".";
    }
    $('#display1').val($('#display1').val() + '\u002e');
    evaluate();
    $('#display2').val(display1.evaluation);
})

// Operators
$('#left-parenthesis').on('click', function () {
    if (flag.squareRoot) {
        display1.operation = display1.operation.substring(0, display1.operation.length-1) + "(" + ")";
        display1.unbalancedParentheses ++;
    }
    else {
        display1.operation = display1.operation + "(";
    }
    $('#display1').val($('#display1').val() + '\u0028');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#right-parenthesis').on('click', function () {
    if (flag.squareRoot) {
        display1.operation = display1.operation.substring(0, display1.operation.length-1) + ")" + ")";
        display1.unbalancedParentheses --;
        if (flag.unbalancedParentheses <= 0) {
            display1.squareRoot = false;
        }
    }
    else {
        display1.operation = display1.operation + ")";
    }
    $('#display1').val($('#display1').val() + '\u0029');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#add').on('click', function () {
    if (flag.squareRoot) {
        flag.squareRoot = false;
    }
    display1.operation = display1.operation + "+";
    $('#display1').val($('#display1').val() + '\u002b');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#subtract').on('click', function () {
    if (flag.squareRoot) {
        flag.squareRoot = false;
    }
    display1.operation = display1.operation + "-";
    $('#display1').val($('#display1').val() + '\u2212');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#multiply').on('click', function () {
    if (flag.squareRoot) {
        flag.squareRoot = false;
    }
    display1.operation = display1.operation + "*";
    $('#display1').val($('#display1').val() + '\u00d7');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#divide').on('click', function () {
    if (flag.squareRoot) {
        flag.squareRoot = false;
    }
    display1.operation = display1.operation + "/";
    $('#display1').val($('#display1').val() + '\u00f7');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#square-root').on('click', function () {
    flag.squareRoot = true; // Raise the flag
    display1.operation = display1.operation + "sqrt()";
    $('#display1').val($('#display1').val() + '\u221a');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#square').on('click', function () {
    display1.operation = display1.operation + "^2";
    $('#display1').val($('#display1').val() + '\u00b2');
    evaluate();
    $('#display2').val(display1.evaluation);
})

$('#percentage').on('click', function () {
    /*
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
    */
})

// Clear
$('#clear').on('click', function () {
    display1.operation = "",
    display1.evaluation = "",
    $('#display1').val("");
    $('#display2').val("");
    display1.unbalancedParentheses = 0;
    flag.squareRoot = false;
})

// Equal
$('#equal').on('click', function () {
    display1.answer = display1.evaluation; // Store the answer (Ans button)
    $('#display1').val(display1.answer); // Update display1
    $('#display2').val(""); // Update display2
    display1.operation = display1.answer; // Current operation equals the answer
    display1.unbalancedParentheses = 0;
    flag.ansAllowed = true; // Allow the use of Ans button
    flag.squareRoot = false;
})

$('#ans').on('click', function () {    
    // Allow 'Ans' to be used when its flag is enabled AND only after a [+,-,*,/] character OR an empty operation
    if (flag.ansAllowed && (display1.operation.endsWith('+') || display1.operation.endsWith('-') || display1.operation.endsWith('*') || display1.operation.endsWith('/') || display1.operation === "")) {
        display1.operation = display1.operation + display1.answer;
        $('#display1').val($('#display1').val() + 'Ans');
        evaluate();
        $('#display2').val(display1.evaluation);
    }
})

// Backspace
$('#backspace').on('click', function () {    
    display1.operation = display1.operation.slice(0, display1.operation.length-1);
    $('#display1').val($('#display1').val().slice(0, $('#display1').val().length-1));
    evaluate();
    $('#display2').val(display1.evaluation);
})

// Theme system
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
        $("#backspace").removeClass("backspace-dark");
        $("#backspace").addClass("backspace-light");
    }
})