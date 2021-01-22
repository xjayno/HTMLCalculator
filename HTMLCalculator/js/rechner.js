(function () {
    window.onload = function () {
        //Saving operator
        let operation = null;
        //Boolean to clear input after Calculation has been done
        let isCalculated = false;

        let root = document.getElementById("taschenrechner");
        let display = root.querySelector(".display");
        let equation = root.querySelector(".equation");
        let keys = root.querySelector('.keys');

        let input = display.querySelector('.display');
        let equationvalue = equation.querySelector('.equation');


        //numbers
        keys.querySelectorAll('.number.btn').forEach(element => {
            element.onclick = function () {
                if (isCalculated === true) {
                    input.value = null;
                    isCalculated = false;
                }
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
                let value = null;
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
                    isCalculated = true;
                    if (isOdd(value) === 0) {
                        input.value = value;
                    } else {
                        input.value = value.toFixed(2);
                    }
                }
                equationvalue.value = null;
            }
        });
    };
    function isOdd(num) {
        return num % 2;
    }
}())