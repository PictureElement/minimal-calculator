document.addEventListener('DOMContentLoaded', function () {

  var model = {
    screen1: '1',
    screen2: '2'
  }

  var controller = {
    init: function () {
      screen1View.init();
      screen2View.init();
      layoutView.init();
    },
    handleOperandInput: function () {
      alert("operand button was clicked");
    },
    getScreen1: function () {
      return model.screen1;
    },
    getScreen2: function () {
      return model.screen2;
    }
  }

  var screen1View = {
    init: function () {
      this.screen1 = document.getElementById('screen1');
      this.render();
    },
    render: function () {
      this.screen1.textContent = controller.getScreen1();
    }
  }

  var screen2View = {
    init: function () {
      this.screen2 = document.getElementById('screen2');
      this.render();
    },
    render: function () {
      this.screen2.textContent = controller.getScreen2();
    }
  }
  
  var layoutView = {
    init: function () {
      this.allOperands = document.querySelectorAll('.operand-group');

      for (var i = 0; i < this.allOperands.length; i++) {
        this.allOperands[i].addEventListener('click', controller.handleOperandInput);
      }
    }
  }

  controller.init();

});