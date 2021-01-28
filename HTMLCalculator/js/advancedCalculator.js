(function () {
    window.onload = function () {
        //Saving operator
        let operation = null;
        //Cache for first value
        let value = null;
        //Boolean to clear input after Calculation has been done
        let isCalculated = false;
        let root = document.getElementById("taschenrechner");
        let input = root.querySelector('.display-Input');
        let equationvalue = root.querySelector('.equation-Input');
        let keys = root.querySelector('.keys');
        let logo = root.querySelector('.Logo');

        input.value = '0';

        logo.addEventListener("click", function (event) {
            window.open("https://hl-solutions.de/", "_blank");
        });

        keys.addEventListener("click", function (event) {
            if (event.target.classList.contains('number')) {
                if (isCalculated === true || input.value === '0') {
                    isCalculated = false;
                    input.value = event.target.value;
                }else {
                    input.value += event.target.value;
                }
            }
            if (event.target.classList.contains('operation')) {
                operation = event.target.value;
                value = parseFloat(input.value);
                equationvalue.value = value + operation; //+=
                input.value = '0';
            }
            if (event.target.classList.contains('dot')) {
                if (input.value) {
                    if (!input.value.includes('.')) {
                        input.value += event.target.value;
                    }
                } else {
                    input.value += '0' + event.target.value;
                }
            }
            if (event.target.classList.contains('c')) {
                if (event.target.value === 'c') {
                    input.value = '0';
                    equationvalue.value = null;
                    operation = null;
                    value = null;
                }
            }
            if (event.target.classList.contains('ce')) {
                input.value = '0';
            }
            if (event.target.classList.contains('del')) {
                input.value = input.value.substr(0, input.value.length);
            }
            if (event.target.classList.contains('square')) {
                input.value = input.value * input.value;
            }
            if (event.target.classList.contains('root')) {
                input.value = Math.sqrt(parseFloat(input.value));
            }
            if (event.target.classList.contains('plusminus')) {
                if (input.value) {
                    input.value = negate(parseFloat(input.value));
                }
            }
            if (event.target.classList.contains('reciprocal')) {
                input.value = 1 / input.value;
            }
            if (event.target.classList.contains('pi')) {
                input.value = Math.PI;
            }
            if (event.target.classList.contains('faculty')) {
                if (input.value) {
                    input.value = faculty(parseFloat(input.value));
                }
            }
            if (event.target.classList.contains('equals')) {
                if (value) {
                    input.value = calculate(value,operation,parseFloat(input.value));
                    equationvalue.value = null;
                    isCalculated = true;
                    operation = null;
                } else {
                    input.value = "No operation!";
                    isCalculated = true;
                }
            }
        }, false);
    };

    function calculate(x,operation,y){
        let result;
        switch (operation){
            case "+":
                result = x + y;
                break;
            case "-":
                result = x - y;
                break;
            case "/":
                result = x / y;
                break;
            case "x":
                result = x * y;
                break;
            case "%":
                result = x % y;
                break;
            case "log":
                result = logarithm(x, y);
                break;
            case "^":
                result = Math.pow(x, y);
                break;
            default:
                result = x;
                break;
        }
        if(hasdecimals(result.toString())){
            return result.toFixed(2);
        }else {
            return result;
        }
    }

    function hasdecimals(str) {
        return str.endsWith(".00");
    }

    function negate(num) {
        if (num > 0) {
            return -Math.abs(num);
        } else {
            return Math.abs(num);
        }
    }

    function logarithm(x, y) {
        return Math.log(x) / Math.log(y);
    }

    function faculty(num) {
        let result = num;
        if (num < 0) {
            return -1;
        }
        if (num === 0 || num === 1) {
            return 1;
        }
        while (num > 1) {
            num--;
            result = result * num;
        }
        return result;
    }
    //returns 0 if even, 1 if odd
    function isOdd(num) {
        return num % 2;
    }
}())