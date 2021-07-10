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


// Binary Search Algorithm ================================
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

console.log(search(arr, 9)); // returned target values index


// sumOfThree		===========================
const array = [-1, 0, 1, 2, -1, -4];
const threeSum = function (nums, target = 0) {
  const result = [];
  if (nums.length < 3) return result;
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > target) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[j] + nums[i] + nums[k];

      if (sum === target) {
        result.push([nums[i], nums[j], nums[k]]);

        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;

        j++;
        k--;
        continue;
      }
      if (sum < target) {
        j++;
        continue;
      }
      if (sum > target) {
        k--;
        continue;
      }
    }
  }

  return result;
};
console.log(threeSum(array)); // [[-1,-1,2],[-1,0,1]]


// Remove Duplicates ====================
const arr2 = [0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 4];
function removeDulpicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr.length;
}
console.log(removeDulpicates(arr2));
console.log(arr2);


// unique num ==============================

const input = [4, 1, 2, 1, 77, 2, 4];
function singleNum(nums) {
  let uniq = Array.from(new Set(nums));
  let uniqSum = uniq.reduce((a, i) => a + i);
  let numsSum = nums.reduce((a, i) => a + i);

  return uniqSum * 2 - numsSum;
}

console.log(singleNum(input));


// max distance
const input1 = [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0]; //2
const input2 = [1, 0, 0, 0]; /// 3;
const input3 = [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]; /// 3;

function maxDistance(arr) {
  let max = 0;
  let count = 0;
  let i = 0;
  if (arr[i] === 0) {
    while (arr[i] === 0) {
      count++;
      i++;
    }
    max = count;
    count = 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1 && arr[i] === 0) {
      count++;
      max = Math.max(max, count);
      break;
    }
    if (arr[i] === 1) {
      count = 0;
    } else {
      count++;
      max = Math.max(max, Math.ceil(count / 2));
    }
  }
  return max;
}
console.log(maxDistance(input1));
console.log(maxDistance(input2));
console.log(maxDistance(input3));


// matrix zeroes ===========
const input1 = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]; // [[1,0,1],[0,0,0],[1,0,1]]

const input2 = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
]; // [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

function setZeroes(matrix) {
  let funcs = [];
  let index = 0;
  for (let i = 0; i < matrix.length; i++) {
    let arr = matrix[i];
    if (arr.includes(0)) {
      index = arr.indexOf(0);
      arr[index] = undefined;
      funcs.push(() => {
        arr.forEach((e, ind) => (arr[ind] = 0));
      }, index);
      i = -1;
    }
  }
  funcs.forEach((el, i) => {
    if (typeof el === "function") {
      el();
    } else {
      matrix.forEach((arr) => (arr[el] = 0));
    }
  });
  return matrix;
}
console.log(setZeroes(input1));
console.log(setZeroes(input2));

// sudoku===============================
let input1 = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
let input2 = [
  ["4", ".", "1", "."],
  [".", "2", ".", "."],
  [".", ".", "3", "."],
  [".", ".", "2", "."],
];
let input = [
  [
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
  ],
  [
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
  ],
  [
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
  ],
  [
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
  ],
  [
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
  ],
  [
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
  ],
  [
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
  ],
  [
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
  ],
  [
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
  ],
  [
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
  ],
  [
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
  ],
  [
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
  ],
  [
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
  ],
  [
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
  ],
  [
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
  ],
  [
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
  ],
];
function solveSudoku(board) {
  const size = board.length;
  const boxSize = Math.sqrt(size);
  const findEmpty = (board) => {
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (board[r][c] === ".") return [r, c];
      }
    }
    return null;
  };
  const validate = (num, pos, board) => {
    const [r, c] = pos;
    //check rows
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (board[i][c] === num && c !== num) {
          return false;
        }
      }
    }

    //check cols
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (board[r][j] === num && r !== num) {
          return false;
        }
      }
    }

    //check box
    const boxRow = Math.floor(r / boxSize) * boxSize;
    const boxCol = Math.floor(c / boxSize) * boxSize;
    for (let i = boxRow; i < boxRow + boxSize; i++) {
      for (let j = boxCol; j < boxCol + boxSize; j++) {
        if (board[i][j] === num && i !== r && j !== c) {
          return false;
        }
      }
    }

    return true;
  };
  const solve = () => {
    const currPos = findEmpty(board);

    if (currPos === null) {
      return true;
    }

    for (let i = 1; i < size + 1; i++) {
      const num = i.toString();
      const isValid = validate(num, currPos, board);
      const [r, c] = currPos;
      if (isValid) {
        const [x, y] = currPos;
        board[x][y] = num;

        if (solve()) {
          return true;
        }

        board[x][y] = ".";
      }
    }
  };
  solve();
  return board;
}
console.table(solveSudoku(input));
console.table(solveSudoku(input1));

console.table(solveSudoku(input2));

// palindrome num (do not use toString method) ====================

const isPalindrome = function (x) {
  if (x < 0 || x % 10 === 0) return false;
  if (x < 10) return true;

  let revNum = 0;
  while (x > revNum) {
    revNum *= 10;
    revNum += x % 10;
    x = Math.trunc(x / 10);
  }

  return revNum === x || x === Math.trunc(revNum / 10);
};
console.log(isPalindrome(12321));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(4));



// longest Plaindrome substring ==========================
const longestPlaindrome = function (str) {
  if (str.length <= 1) return str;
  let lastPal = "";
  const palindroms = [];
  str = str.split("");

  function isPal(str) {
    return str === str.split("").reverse().join("");
  }

  for (let i = 0; i < str.length; i++) {
    lastPal += str[i];
    if (isPal(lastPal)) {
      palindroms.push(lastPal);
    } else if (isPal(lastPal.slice(1, lastPal.length - 1))) {
      palindroms.push(lastPal.slice(1, lastPal.length - 1));
    }
  }
  return palindroms.reduce((agg, el, i) => {
    if (i < palindroms.length - 1) {
      agg = el.length > palindroms[i + 1].length ? el : palindroms[i + 1];
    }
    return agg;
  }, 0);
};

console.log(longestPlaindrome("babad"));
console.log(longestPlaindrome("mississippi"));
console.log(longestPlaindrome("ac"));
console.log(longestPlaindrome("x"));
console.log(longestPlaindrome("a asdf ytreqw an x na wqerty fdsa a"));

// random shuffle ============
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let tmp = arr[i];
    let rnd = Math.floor(Math.random() * (i + 1));
    arr[i] = arr[rnd];
    arr[rnd] = tmp;
  }
  return arr;
}
// or `

const shuffle2 = (arr) => arr.sort(() => 0.5 - Math.random());


for (let i = 0; i < 10; i++) {
  console.log(shuffle(input));
  console.log(shuffle2(input));
}


// functions ================
function logic([x, z, y]) {
  switch (z) {
    case "+":
      return y + x;
    case "-":
      return y - x;
    case "/":
      return y / x;
    case "*":
      return y * x;
  }
}
const one = (arr) => (arr ? logic([...arr, 1]) : 1);
const two = (arr) => (arr ? logic([...arr, 2]) : 2);
const three = (arr) => (arr ? logic([...arr, 3]) : 3);
const four = (arr) => (arr ? logic([...arr, 4]) : 4);
const five = (arr) => (arr ? logic([...arr, 5]) : 5);
const six = (arr) => (arr ? logic([...arr, 6]) : 6);
const seven = (arr) => (arr ? logic([...arr, 7]) : 7);
const eigth = (arr) => (arr ? logic([...arr, 8]) : 8);
const nine = (arr) => (arr ? logic([...arr, 9]) : 9);
//-
const plus = (x) => [x, "+"];
const minus = (x) => [x, "-"];
const divide = (x) => [x, "/"];
const multi = (x) => [x, "*"];

console.log(one(plus(one(plus(one()))))); // 3
console.log(five(plus(six(minus(seven(multi(eigth(divide(two()))))))))); // -17
console.log(one(minus(nine(multi(six(multi(eigth()))))))); // -431
console.log(four(multi(three()))); // 12
console.log(four(divide(two()))); // 2


// get contcert times  - ------------------------
const concerts = {
  Russia: new Date("2020-04-01"),
  USA: new Date("2021-09-02"),
  France: new Date("2028-04-21"),
  Armenia: new Date("2021-07-15"),
  German: new Date("2019-01-08"),
  Italy: new Date("2021-04-03"),
};

function concertSort(obj) {
  return Object.keys(obj)
    .filter((name) => obj[name] > new Date())
    .sort((a, b) => obj[a] - obj[b]);
}
console.log(concertSort(concerts));
