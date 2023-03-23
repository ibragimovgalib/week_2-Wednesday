// Reverse Words in a String
function reverseWords (str) {
    let a = str.trim().split(" ").reverse().join(" ")
    return a
}
console.log(reverseWords(" the sky is blue"));
console.log(reverseWords("hello     world!   "));



// Move Capital Letters to the Front
function capToFront(str) {
    let a = str.toUpperCase().split("")
    for(let i = 0; i < a.length; i++){
        if(a[i] == str[i]) a[i] = a[i].toLowerCase()
    }
    return a.join("")
}
console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));




// Reverse the Odd Length Words
function reverseOdd(str) {
    let a = str.length+1
    let rev = str.split("").reverse()
    let notRev = str.split("")
    if (a % 2 == 0) return rev.join("")
    else return notRev.join("")
}
console.log(reverseOdd("Bananas"));
console.log(reverseOdd("Bananasa"));



// Find First Character That Repeats 
function firstRepeat(str) {
    str = str.toLowerCase().split("")
    let cnt = 0
    let b = 0
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < str.length; j++){
            if(i==j) continue
            if(str[i]==str[j]) {
                cnt++
                b = str[j]
            }
        }
    }
    if(cnt >= 2) return b
    else return -1
}
console.log(firstRepeat("Legolas"));
console.log(firstRepeat("Gandalf"));
console.log(firstRepeat("balrog"));