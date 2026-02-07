# JavaScript Basics – Notes

## 1. Running JavaScript

* JavaScript can be run using **Node.js** outside the browser.
* `console.log()` is used to print output to the console.

```js
console.log('Sarang');
```

---

## 2. Strict Mode

* `"use strict";` treats JavaScript code as a newer, safer version.
* Helps catch common mistakes (e.g., undeclared variables).

```js
"use strict";
```

---

## 3. Comments

* Single-line comments use `//`.
* Used to explain code or disable execution temporarily.

```js
// this is a comment
```

---

## 4. Code Readability

* Code should be easy to read and understand.
* Avoid confusing formatting.

```js
console.log(3 + 3);
```

---

## 5. Variables in JavaScript

### `let`

* Can be **reassigned** but **not redeclared** in the same scope.

```js
let name = "Sarang";
let age = 18;
```

### `const`

* Cannot be changed once assigned.
* Must be initialized at declaration.

```js
const accountId = 1039;
```

### `var`

* Old method of declaring variables.
* Has scope issues (function-scoped).
* Not recommended in modern JS.

```js
var accountPassword = "12345";
```

### Without Declaration (❌ Not Recommended)

* Creates a global variable.

```js
accountCity = "Pune";
```

---

## 6. Data Types in JavaScript

### Primitive Data Types

* **number** → up to 2^53
* **bigint** → very large numbers
* **string** → text (`""`)
* **boolean** → `true` / `false`
* **null** → standalone value (intentional empty)
* **undefined** → variable declared but not assigned
* **symbol** → unique values

```js
let state;
```

---

## 7. `typeof` Operator

* Used to check the data type of a value.

```js
console.log(typeof undefined); // undefined
console.log(typeof null);      // object (JS bug)
```

---

## 8. Updating Variables

```js
let accountEmail = "sarangakhade@prisms.in";
accountEmail = "akhadesarang1@gmail.com";
```

---

## 9. Displaying Data Using `console.table()`

* Displays data in tabular format.

```js
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState
]);
```

---

## Key Takeaways

* Always use `let` and `const` instead of `var`.
* Prefer clean, readable code.
* Understand JavaScript data types clearly.
* Use `"use strict"` for safer coding.