// 1 Return Something to me!
function giveMeSomething(str) {
  let txt = "something";
  let rez = txt.concat(" ", str);
  return rez;
}
console.log(giveMeSomething("Bob Jane"));

// 2 Basic Variable Assignment-----------------------------------------------
function nameString(str) {
  let txt = "Edabit";
  let rez = str.concat(txt);
  return rez;
}
console.log(nameString("Matt"));

// 3 Compare Strings by Count of Charachers----------------------------
function comp(a, b) {
  return a.length == b.length;
}
console.log(comp("AB", "CD"));
console.log(comp("ABC", "DE"));

// 4 Is the String Empty?---------------------------------------------
function isEmpty(a) {
  return a.length == 0;
}
console.log(isEmpty(""));
console.log(isEmpty(" "));

// 5 Return a String as an Integer---------------------------------------
function stringInt(s) {
  return Number(s);
}
console.log(stringInt("6"));
console.log(stringInt("1000"));

// 6 Boolean to String Conversion-------------------------------------
function boolToString(bool) {
  return String(bool);
}
console.log(boolToString(true));
console.log(boolToString(false));

// 7 Concatenate First and Last Name into One String----------------------
function concatName(a, b) {
  let rez = b.concat(", ", a);
  let rez2 = rez.toString();
  return rez;
}
console.log(concatName("First", "Last"));

// 8 Is the String Odd or Even-------------------------------------------
function oddOrEven(str) {
  return str.length % 2 == 0;
}
console.log(oddOrEven("apples"));
console.log(oddOrEven("pears"));

// 9 Word without Forst Character-------------------------------------
function newWord(str) {
  return str.slice(1);
}
console.log(newWord("apple"));

// 10 Is the Last Character an "N"?-------------------------------------
function isLestCharacterN(str) {
  return str.includes("n");
}
console.log(isLestCharacterN("Aiden"));
console.log(isLestCharacterN("Piet"));

// 11 Concatenating First and Last Character of a String----------------------
function firstLast(str) {
  let first = str.slice(0, 1);
  let last = str.slice(-1);
  return first.concat(last);
}
console.log(firstLast("absdefg"));
console.log(firstLast("1234567"));

// 12 Repeat String--------------------------------------------------
function repeatString(str, n) {
  if (typeof str == `string`) return str.repeat(n);
  else return "Not A String !!";
}
console.log(repeatString("Mubashir", 2));
console.log(repeatString("Matt", 3));
console.log(repeatString(1990, 3));

// 13 Modifyng the Last Character----------------------------------
function modifyLast(str, n) {
  return str + str.slice(str.length - 1).repeat(n - 1);
}
console.log(modifyLast("Hello", 3));
console.log(modifyLast("hey", 6));

// 14 Count Instances of a Character in a String-----------------------------
function charCount(s, str) {
  let cnt = 0;
  for (let i = str.length; i >= 0; i--) {
    if (str[i] == s) cnt++;
  }
  return cnt;
}
console.log(charCount("a", "edabit"));
console.log(charCount("b", "big fat bubble"));

// 15 Repeating Letters--------------------------------------------------
function doubleChar(str) {
  let rez = 0;
  for (let i = 0; i < str.length; i++) {
    rez += str.charAt(i).repeat(2);
  }
  return rez;
}
console.log(doubleChar("String"));
console.log(doubleChar("1234_ "));

// 16 Say "Hello" Say "Bye"---------------------------------------------------
function sayHelloBye(str, b) {
  let up = str.charAt(0).toUpperCase();
  str = str.slice(1);
  let name = up.concat(str);
  if (b) return `Hello ${name}`;
  else return `Bye ${name}`;
}
console.log(sayHelloBye("Tomi", 0));
console.log(sayHelloBye("jose", 1));

// 17 Reverse the Case--------------------------------------------------------
function capToFront(str) {
  let a = str.toUpperCase().split("");
  for (let i = 0; i < a.length; i++) {
    if (a[i] == str[i]) a[i] = a[i].toLowerCase();
  }
  return a.join("");
}
console.log(capToFront("Happy Birthday"));
console.log(capToFront("MANY THANKS"));

// Find Nemo-----------------------------------------------------------
function findNemo(str) {
  let cnt = 0;
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "Nemo") cnt = i + 1;
  }
  return `I found Nemo at ${cnt}!`;
}
console.log(findNemo("I am finding Nemo !"));
console.log(findNemo("Nemo is me"));

// How Many Vowels?---------------------------------------------------------
function countVowels(str) {
  let cnt = 0;
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == 'a' ||
      str[i] == 'e' ||
      str[i] == 'i' ||
      str[i] == 'o' ||
      str[i] == 'u' ||
      str[i] == 'y' ||

      str[i] == 'A' ||
      str[i] == 'E' ||
      str[i] == 'I' ||
      str[i] == 'O' ||
      str[i] == 'U' ||
      str[i] == 'Y'
    )
      cnt++;
  }

  return cnt;
}
console.log(countVowels("Celebration"));
console.log(countVowels("Palm"));
console.log(countVowels("Prediction"));

// find the Amount of potatoes-------------------------------------------------
function potatoes(str) {
  let cnt = 0
  str = str.replaceAll("potato", '*').split("")
  for(let i = 0; i < str.length; i++){
    if(str[i]=='*') cnt ++
  }
  return cnt
}
console.log(potatoes("potato"));
console.log(potatoes("potatopotato"));
console.log(potatoes("potatoapple"));



// Capitalize the Firse Letter of Each Word----------------------------------------
function makeTitle(str){
  str = str.split(" ")
  let rez = ""
  for(let i = 0; i < str.length; i++){
    rez +=str[i].charAt(0).toUpperCase() + str[i].slice(1)+" "
  }
  return rez
}
console.log(makeTitle("This is a title"));
console.log(makeTitle("capitalize every word"));
console.log(makeTitle("I Like Pizza"));
console.log(makeTitle("PIZZA PIZZA"));




// Dashed Vowels----------------------------------------------------------------------
function dashed (str) {
  let v = ""
  let m = '-'
  for(let i = 0; i < str.length; i++){
    if (
      str[i] == 'a' ||
      str[i] == 'e' ||
      str[i] == 'i' ||
      str[i] == 'o' ||
      str[i] == 'u' ||
      str[i] == 'y' ||

      str[i] == 'A' ||
      str[i] == 'E' ||
      str[i] == 'I' ||
      str[i] == 'O' ||
      str[i] == 'U' ||
      str[i] == 'Y'
    )
      { v += m + str[i] + m }
    else { v += str[i] }
  }
  return v
}
console.log(dashed("Edabit"));
console.log(dashed("Carpe Diem"));