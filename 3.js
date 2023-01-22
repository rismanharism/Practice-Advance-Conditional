// ============== 3 ===============
/*
Buatlah kode javascript menggunakan pseudocode di bawah ini

STORE angka1 WITH ANY POSITIVE NUMBER
STORE angka2 WITH ANY POSITIVE NUMBER
STORE operator WITH ANY STRING
STORE total WITH -1

SWITCH operator
    CASE '+'
        SET total WITH angka1 PLUS angka2
    CASE '-'
        SET total WITH angka1 MINUS angka2
    CASE '*'
        SET total WITH angka1 TIMES angka2
    CASE '/'
        SET total WITH angka1 DEVIDE angka2
    CASE '%'
        SET total WITH angka1 MODULUS angka2
    DEFAULT
        DISPLAY "Invalid Operator"
END SWITCH
DISPLAY total

*/
let angka1 = 2
let angka2 = 3
let operator = "risman"
let total = -1

switch(operator){
    case "+":
        total = angka1 + angka2
    case "-":
        total = angka1 - angka2
    case "*":
        total = angka1 * angka2
    case "/":
        total = angka1 / angka2
    case "%":
        total = angka1 % angka2
    default:
    console.log("Invalid Operator");
}
console.log(total);