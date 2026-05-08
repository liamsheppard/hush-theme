// =============================================================
// JavaScript theme sampler — exercises common TextMate scopes
// =============================================================

/* Block comment
 * spans multiple lines
 */

/**
 * Doc comment (JSDoc).
 * @param {number} x  the input
 * @returns {number}  doubled
 */
function double(x) {
  return x * 2;
}

// ---- Imports / exports ---------------------------------------
import fs from "node:fs";
import { readFile, writeFile as write } from "node:fs/promises";
export const VERSION = "1.0.0";
export default double;

// ---- Primitives, language constants --------------------------
const aNumber = 42;
const aFloat = 3.14;
const aHex = 0xff;
const aBigInt = 9007199254740993n;
const aString = "double quotes";
const aString2 = "single quotes";
const aTemplate = `hello ${aString}, value is ${1 + 2}`;
const aRegex = /^foo(bar)?$/gi;
const truthy = true;
const falsy = false;
const nada = null;
const nope = undefined;
const notANum = NaN;
const big = Infinity;

// ---- Operators -----------------------------------------------
const sum = 1 + 2 - (((3 * 4) / 5) % 6);
const eq = 1 === 1 && 2 !== 3;
const or = (a) => a ?? "default";
const chain = obj?.prop?.[0];
const spread = [...[1, 2, 3], 4];
const arrow = (a, b) => a + b;

// ---- Variables / declarations --------------------------------
let mutable = 1;
var legacy = 2;
const { destructured, renamed: alias = 0 } = { destructured: 1, renamed: 2 };
const [first, , third, ...rest] = [10, 20, 30, 40, 50];

// ---- Functions -----------------------------------------------
function regular(a, b = 10, ...args) {
  return a + b + args.length;
}

const anon = function (x) {
  return x;
};
const fat = (x, y) => x ** y;
async function fetchThing(url) {
  const res = await fetch(url);
  return res.json();
}
function* generator() {
  yield 1;
  yield 2;
}

// ---- Classes -------------------------------------------------
class Animal {
  static species = "unknown";
  #privateField = 0;

  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hi, I'm ${this.name}`;
  }

  get label() {
    return this.name.toUpperCase();
  }
  set label(v) {
    this.name = v.toLowerCase();
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  bark() {
    return "woof";
  }
}

const rex = new Dog("Rex", "lab");

// ---- Built-in classes / support.class ------------------------
const arr = new Array(3);
const map = new Map();
const set = new Set([1, 2, 3]);
const date = new Date();
const err = new Error("nope");
const promise = Promise.resolve(42);

// ---- Built-in support.constant / support.function ------------
Math.floor(Math.PI);
Number.MAX_SAFE_INTEGER;
JSON.stringify({ ok: true });
console.log("hello");
Object.keys({ a: 1 });

// ---- Control flow --------------------------------------------
if (eq) {
  // do stuff
} else if (sum > 0) {
  // ...
} else {
  // ...
}

for (let i = 0; i < 3; i++) {}
for (const item of arr) {
}
for (const key in { a: 1 }) {
}
while (false) {
  break;
}
do {
  /* once */
} while (false);

switch (sum) {
  case 1:
    break;
  case 2:
  case 3:
    break;
  default:
    break;
}

// ---- Exceptions ----------------------------------------------
try {
  throw new TypeError("boom");
} catch (e) {
  console.error(e);
} finally {
  // always
}

// ---- Strings: escape sequences -------------------------------
const escapes = "tab:\t newline:\n unicode:\u00e9 hex:\x41";

// ---- Object literals / shorthand -----------------------------
const x = 1,
  y = 2;
const point = {
  x,
  y,
  toString() {
    return `(${x},${y})`;
  },
  [`computed_${x}`]: true,
};

// ---- JSX-ish (won't highlight as JSX in .js, but harmless) ---
// const el = <div className="x">hi</div>;
