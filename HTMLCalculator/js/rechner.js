(function () {
    window.onload = function () {
        //Cache for first value
        let value = null;
        //Saving operator
        let operation = null;


        let root = document.getElementById("taschenrechner");
        let display = root.querySelector(".display");
        let equation = root.querySelector(".equation");
        let keys = root.querySelector('.keys');

        let input = display.querySelector('.display');
        let equationvalue = equation.querySelector('.equation');

        //numbers
        keys.querySelectorAll('.number.btn').forEach(element => {
            element.onclick = function () {
                input.value += element.value;
            }
        });

        //Operator
        keys.querySelectorAll('.operation.btn').forEach(element => {
            element.onclick = function () {
                operation = element.value;
                equationvalue.value = input.value + operation;
                input.value = null;
            }
        });
        //dot
        keys.querySelectorAll('.dot.btn').forEach(element => {
            element.onclick = function () {
                if (input.value) {
                    if (!input.value.includes('.')) {
                        input.value += element.value;
                    }
                } else {
                    input.value += '0' + element.value;
                }
            }
        });

        //C
        keys.querySelectorAll('.c.btn').forEach(element => {
            element.onclick = function () {
                input.value = null;
                equationvalue.value = null;
            }
        });

        //CE
        keys.querySelectorAll('.ce.btn').forEach(element => {
            element.onclick = function () {
                input.value = null;
            }
        });

        //del
        keys.querySelectorAll('.del.btn').forEach(element => {
            element.onclick = function () {
                input.value = input.value.substr(0, input.value.length - 1);
            }
        });


        //equals
        keys.querySelectorAll('.equals.btn').forEach(element => {
            element.onclick = function () {
                let firstvalue = parseFloat(equationvalue.value.substr(0, equationvalue.value.length - 1));
                let secondvalue = parseFloat(input.value);

                switch (operation) {
                    case "+":
                        value = firstvalue + secondvalue;
                        break;
                    case "-":
                        value = firstvalue - secondvalue;
                        break;
                    case "/":
                        value = firstvalue / secondvalue;
                        break;
                    case "x":
                        value = firstvalue * secondvalue;
                        break;
                    default:
                        input.value = secondvalue;
                        break;
                }
                if (value) {
                    value = value.toFixed(2);
                    input.value = value;
                }
                equationvalue.value = null;
            }
        });
    };
}())