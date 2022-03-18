"use strict"
let sqrt = 1000, sqrtValue = Math.sqrt(sqrt), number = 0, presision = 4, s = 0; 
function returnPairs(sqrt) {
    let v1 = 0, v2 = 0, values = []; 
    while ((v1**2) < sqrt) { v1++ }
    values.push(v1-1)
    while (!((v2**2) > sqrt)) {v2++}
    values.push(v2)
    return values
}
function findPoints(arr) {
    let v = arr, g = (v[0]+v[1])/2; 
    if ((g**2) > sqrt) {v.pop(); v.push(g)}
    else {v.shift(); v.unshift(g)}
    console.log(`Under Border: ${v[0]} \n Upper Border: ${v[1]} \n Center: ${g} \n ENDE`)
    s++
    if (s >= presision) {console.log((v[0]+v[1])/2); return}
    findPoints(v)
}
findPoints(returnPairs(sqrt));
