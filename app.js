"use strict"

// Intervalschatelungsverfahren
let sqrt = 1, sqrtValue = Math.sqrt(sqrt), number = 0, presision = 4, s = 0; 
function returnPairs(sqrt) {
    if (sqrt <= 0) {console.error("Number has to be greater than 0!"); return;}
    else if (sqrt == 1) {console.log("The sqrt is 1"); return;}
    let v1 = 0, v2 = 0, values = []; 
    while (((v1**2) < sqrt)) {v1++}
    values.push(v1-1)
    while (!((v2**2) > sqrt)) {v2++}
    values.push(v2)
    console.log(`The first values are: ${values}`);
    return values
}
function findPoints(arr) {
    let v = arr, g = (v[0]+v[1])/2; 
    if ((g**2) > sqrt) {v.pop(); v.push(g)}
    else {v.shift(); v.unshift(g)}
    console.log(`Under Border: ${v[0]} \n Upper Border: ${v[1]} \n Center: ${g} \n END`)
    s++
    if (s >= presision) {console.log((v[0]+v[1])/2); return}
    findPoints(v)
}
// findPoints(returnPairs(sqrt));


// Heronverfahren 
function herons() {
    let value = 13, presision = 10, arr = returnPairs(value);
    arr.shift()
    for (let i = 0; i < presision; i++) {
        let v = (arr[0] + value/arr[0])/2
        console.log(`(${arr[0]} + ${value} / ${arr[0]})/${2} = ${v}`);
        arr.pop();
        arr.push(v)
    }
}
herons();
