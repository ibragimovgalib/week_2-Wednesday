// Recursion to Repeat a String n Number of Times
function repetition(a, b) {
  if (b == 1) return a;
  return a + repetition(a, b - 1);
}
console.log(repetition("ab", 3));
console.log(repetition("kiwi", 1));
console.log(repetition("cherry", 2));

// Task 2----------------------------------------------------------------------------
function hackerSpeak(str) {
  let z = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") z = z + 4;
    else if (str[i] === "i") z = z + 1;
    else if (str[i] === "o") z = z + 0;
    else if (str[i] === "s") z = z + 5;
    else z = z + str[i];
  }
  return z;
}
console.log(hackerSpeak("Javascript is cool"));
console.log(hackerSpeak("programming is fun"));
console.log(hackerSpeak("become a coder"));

// Combination------------------------------------------------------------------------
function combination() {
    let s = 1
    for (let i = 0; i < arguments.length; i++) {
        s *= arguments[i]
    }
    return s
}
console.log(combination(2, 3));
console.log(combination(3, 7, 4));
console.log(combination(2, 3, 4, 5));


// Test -------------------------------------------------------------
let a 
let b = isNaN(a)
console.log(b);