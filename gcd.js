// Find GCD
function gcd(a,b){
    while(b !== 0){
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
let num1 = 48;
let num2 = 18;
console.log("GCD of" + num1 + "and" + num2 + "is:" + gcd(num1,num2));