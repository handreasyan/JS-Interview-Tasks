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

// Bankomat =====================================
function iWantToGet(ammountReq, limits) {
  const nominals = Object.keys(limits)
    .map(Number)
    .sort((a, b) => b - a);
  function collect(amount, noms) {
    if (amount === 0) return {};
    if (!noms.length) return;
    let current = noms[0];
    let count = Math.min(limits[current], Math.floor(amount / current));

    for (let i = count; i >= 0; i--) {
      let result = collect(amount - current * i, noms.slice(1));
      if (result) {
        return i ? { [current]: i, ...result } : result;
      }
    }
  }
  return collect(ammountReq, nominals);
}
let limits = { 1000: 5, 500: 2, 100: 5, 50: 100, 30: 6 };
console.log(iWantToGet(230, limits)); // =>  {30: 1, 100: 2}
console.log(iWantToGet(1000, limits)); // => {1000: 1}
console.log(iWantToGet(120, limits)); // => {30: 4}
console.log(iWantToGet(275, limits)); // => undefined (not valid)
console.log(iWantToGet(10000, limits)); // => {50: 70, 100: 5, 500: 2, 1000: 5}

//  Prostie chisla  ===================
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(120));

function getPrimes(num) {
  let primes = [];
  let arr = [];
  for (let i = 2; i <= num; i++) {
    if (!arr[i]) {
      primes.push(i);
      for (let j = i * i; j <= num; j += i) {
        arr[j] = true;
      }
    }
  }
  return primes;
}

console.log(getPrimes(120));

// sum of two =====================

function sumOfTwo2(arr, target) {
  let cur = null;
  let newArr = [...arr];
  arr.forEach((el, i) => {
    let n = target - el;
    if (newArr.includes(n) && !cur && newArr[i] !== n) {
      cur = n + " " + el;
    }
  });
  return cur;
}
console.log(sumOfTwo2([654, 654, 3216, 4], 658));
// Binary Search Algorithm
let arr = [-1, 0, 3, 5, 7, 9, 12];

let search = function (nums, target) {
  let left = 0;
  let rigth = nums.length - 1;
  let mid; 

  while (left <= rigth) {
    mid = Math.round((rigth - left) / 2) + left;
    if (target === nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      rigth = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

console.log(search(arr, 123));

