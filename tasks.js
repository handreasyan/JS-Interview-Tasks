// convert =========
const input = [
  ["usd", "buy", 10000],
  ["usd", "sell", 5000],
  ["gbp", "buy", 9000],
  ["eur", "sell", 7000],
  ["uah", "buy", 10000],
  ["usd", "sell", 25000],
];
function convert(arr) {
  let obj = {};
  arr.forEach((e) => {
    let [keyName, type, price] = e;
    if (!obj[keyName]) obj[keyName] = [0, 0];
    obj[keyName][type === "buy" ? 0 : 1] += price;
  });
  return obj;
}
console.log(convert(input));
// version 2
function convert2(arr) {
  return arr.reduce((acc, item) => {
    if (!acc[item[0]]) acc[item[0]] = [0, 0];
    acc[item[0]][item[1] === "buy" ? 0 : 1] += item[2];
    return acc;
  }, {});
}
console.log(convert2(input));

// classnames ===================================================
let classNames = [
  "header",
  "menu",
  "footer",
  "link",
  "menu",
  "link",
  "menu-item",
  "link",
  "menu-item",
  "link",
  "link",
  "menu-item",
];

function sortt(arr) {
  arr = arr.reduce((acc, el) => {
    acc[el] = acc[el] + 1 || 1;
    return acc;
  }, {});

  arr = Object.keys(arr).sort((a, b) => arr[b] - arr[a]);
  console.log(arr);
}

sortt(classNames);

// fibonacci Nums ========================================================================
function fib(n) {
  let a = 1,
    b = 1;
  for (let i = 2; i < n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}
console.log(fib(10));
// loop
function fibbonaci(n) {
  const arr = [0, 1];
  for (let i = 0; i < n; i++) {
    if (arr[arr.length - 1] > n) {
      arr.pop();
      return arr;
    } else {
      let num = arr[arr.length - 1] + arr[arr.length - 2];
      arr.push(num);
    }
  }
  return arr;
}
console.log(fibbonaci(10));
// recursion
function fibbonaciRec(n) {
  const arr = [];
  function rec(n1, n2) {
    arr.push(n1);
    if (n2 + n1 > n) return;
    rec(n1 + n2, n1);
  }
  rec(0, 1);
  return arr;
}
console.log(fibbonaciRec(50));

// anagram ===============================================================
const anagram = (str1, str2) =>
  str1.toLowerCase().split("").sort().join("") ===
  str2.toLowerCase().split("").sort().join("");

console.log(anagram("friend", "finder"));
console.log(anagram("hello", "asd"));

function anagramm(str1, str2) {
  str1 = str1.toLowerCase();
  if (str1.length !== str2.length) return false;
  let arr = str2.toLowerCase().split("");
  str1.split("").forEach((el) => {
    if (!arr.includes(el)) return false;
  });

  return true;
}

console.log(anagramm("friend", "finder"));
console.log(anagramm("hello", "asd"));

// vowels ============================================================================
const vowels = ["a", "e", "i", "o", "u"];
function findVowels(str) {
  return str.split("").filter((el) => vowels.includes(el)).length;
}
console.log(findVowels("friend", "finder"));

// palindorm  =-============================================
function pal(str) {
  str = str.toLowerCase().replace(/\s/g, "");
  for (let i = 0; i < str.length / 2 - 1; i++) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }
  return true;
}
console.log(pal("A roza upala na lapu Azora"));
console.log(pal("racecar"));

// infinite function call =========================================
function multiplyByTwo(a) {
  return (b) => {
    if (b === undefined) {
      return a;
    }
    return multiplyByTwo(a + b);
  };
}
console.log(multiplyByTwo(3)(4)(1)(1)(10)());
