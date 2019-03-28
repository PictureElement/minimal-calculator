document.addEventListener('DOMContentLoaded', function () {

  var model = {
    screen1: '',
    screen2: ''
  };

  var controller = {
    flags: {
      isAdditionAllowed: false,
      isSubtractionAllowed: true,
      isMultiplicationAllowed: false,
      isDivisionAllowed: false
    },
    init: function () {
      screen1View.init();
      screen2View.init();
      layoutView.init();
    },
    getScreen1: function () {
      return model.screen1;
    },
    getScreen2: function () {
      return model.screen2;
    },
    evaluate: function () {
      try {
        var result = math.eval(model.screen1);
        model.screen2 = result;
        screen2View.render();
      } catch (e) {
        if (e instanceof SyntaxError) { // Syntax error exception
          model.evaluation = "E";
        } else { // Unspecified exceptions
          model.evaluation = "UE";
        }
      }
    },
    handleNumberInput: function (e) {
      //alert("A number key was pressed");
      model.screen1 = model.screen1 + e.target.value;
      screen1View.render();
      this.evaluate();
      this.allowAllBasicOperations();
    },
    handleAdditionInput: function (e) {
      if (this.flags.isAdditionAllowed) {
        //alert("+ was pressed");
        model.screen1 = model.screen1 + e.target.value;
        screen1View.render();
        this.DisableAllBasicOperations();
      }
    },
    handleSubtractionInput: function (e) {
      if (this.flags.isSubtractionAllowed) {
        //alert("- was pressed");
        model.screen1 = model.screen1 + e.target.value;
        screen1View.render();
        this.DisableAllBasicOperations();
      }
    },
    handleMultiplicationInput: function (e) {
      if (this.flags.isMultiplicationAllowed) {
        //alert("* was pressed");
        model.screen1 = model.screen1 + e.target.value;
        screen1View.render();
        this.DisableAllBasicOperations();
      }
    },
    handleDivisionInput: function (e) {
      if (this.flags.isDivisionAllowed) {
        //alert("/ was pressed");
        model.screen1 = model.screen1 + e.target.value;
        screen1View.render();
        this.DisableAllBasicOperations();
      }
    },
    handleEqualitySignInput: function () {
      alert("= was pressed");
      model.screen1 = model.screen2;
      screen1View.render();
      screen2View.clear();
    },
    allowAllBasicOperations: function () {
      this.flags.isAdditionAllowed = true;
      this.flags.isSubtractionAllowed = true;
      this.flags.isMultiplicationAllowed = true;
      this.flags.isDivisionAllowed = true;
    },
    DisableAllBasicOperations: function () {
      this.flags.isAdditionAllowed = false;
      this.flags.isSubtractionAllowed = false;
      this.flags.isMultiplicationAllowed = false;
      this.flags.isDivisionAllowed = false;
    }
  };

  var screen1View = {
    init: function () {
      this.screen1 = document.getElementById('screen1');
      this.render();
    },
    render: function () {
      this.screen1.textContent = controller.getScreen1();
    }
  };

  var screen2View = {
    init: function () {
      this.screen2 = document.getElementById('screen2');
      this.render();
    },
    render: function () {
      this.screen2.textContent = controller.getScreen2();
    },
    clear: function () {
      this.screen2.textContent = '';
    }
  };
  
  var layoutView = {
    init: function () {
      this.numberKeys = document.querySelectorAll('.number');
      this.addition = document.querySelector('.addition');
      this.subtraction = document.querySelector('.subtraction');
      this.multiplication = document.querySelector('.multiplication');
      this.division = document.querySelector('.division');
      this.equalitySign = document.querySelector('.equality-sign');

      // Attach click event listeners to number keys
      for (var i = 0; i < this.numberKeys.length; i++) {
        this.numberKeys[i].addEventListener('click', controller.handleNumberInput.bind(controller));
      }

      // Attach a click event listener to the + key
      this.addition.addEventListener('click', controller.handleAdditionInput.bind(controller));

      // Attach a click event listener to the - key
      this.subtraction.addEventListener('click', controller.handleSubtractionInput.bind(controller));

      // Attach a click event listener to the * key
      this.multiplication.addEventListener('click', controller.handleMultiplicationInput.bind(controller));

      // Attach a click event listener to the / key
      this.division.addEventListener('click', controller.handleDivisionInput.bind(controller));

      // Attach a click event listener to the = key
      this.equalitySign.addEventListener('click', controller.handleEqualitySignInput.bind(controller));
    }
  };

  controller.init();

});