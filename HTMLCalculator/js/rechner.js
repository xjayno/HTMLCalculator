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

        keys.addEventListener("click", function (event) {
            if (event.target.classList.contains('number')) {
                if (isCalculated === true) {
                    input.value = null;
                    isCalculated = false;
                }
                input.value += event.target.value;
            }
            if (event.target.classList.contains('operation')) {
                operation = event.target.value;
                value = parseFloat(input.value);
                equationvalue.value = value + operation;
                input.value = null;
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
                    input.value = null;
                    equationvalue.value = null;
                    operation = null;
                    value = null;
                }
            }
            if (event.target.classList.contains('ce')) {
                input.value = null;
            }
            if (event.target.classList.contains('del')) {
                input.value = input.value.substr(0, input.value.length);
            }
            if (event.target.classList.contains('equals')) {
                if (value) {
                    let result;
                    switch (operation) {
                        case "+":
                            result = value + parseFloat(input.value);
                            break;
                        case "-":
                            result = value - parseFloat(input.value);
                            break;
                        case "/":
                            result = value / parseFloat(input.value);
                            break;
                        case "x":
                            result = value * parseFloat(input.value);
                            break;
                        default:
                            result = parseFloat(input.value);
                    }
                    if(hasdecimals(result.toString())){
                        input.value = result.toFixed(2);
                    }else {
                        input.value = result;
                    }
                    isCalculated = true;
                    equationvalue.value = null;
                }
            }
        }, false);

    };

    function hasdecimals(str){
        return str.endsWith(".00");
    }

    //returns 0 if even, 1 if odd
    function isOdd(num) {
        return num % 2;
    }


}())