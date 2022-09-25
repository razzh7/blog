# var、let、const 的区别

本文来介绍一下面试常问的 `var`、`let`、`const` 有什么区别

## 1.作用域不同 {#zone}

`var` 没有块级作用域，`let`和 `const`有 `块级作用域`
用 `var` 声明变量：

```js
for (var i = 0; i < 3; i++) {
  console.log(`循环内i的值:${i}`)
}
console.log(`循环外i的值：${i}`)
```

运行结果：

循环内 i 的值：0  
循环内 i 的值：1  
循环内 i 的值：2  
循环外 i 的值：3

用 `let` 声明变量：

```js
for (let i = 0; i < 3; i++) {
  console.log(`循环内i的值：${i}`)
}
console.log(`循环外i的值：${i}`)
```

运行结果：

循环内 i 的值：0  
循环内 i 的值：1  
循环内 i 的值：2  
Uncaught ReferenceError: i is not defined

## 2.暂时性死区 {#stashzone}

只要使用了 let 和 const 声明的变量就会绑定这个**块级作用域**，不受外部影响  
使用 `var` 来声明变量:

```js
var a = 10
if (true) {
  console.log(a) // 10
  var a = 20
}
```

使用 `let` 声明变量:

```js
var a = 10
if (true) {
  console.log(a)
  let a = 20
  // 报错：Uncaught ReferenceError: Cannot access 'a' before initialization
}
```

使用 `const` 声明变量:

```js
var a = 10
if (true) {
  console.log(a)
  const a = 20
  // 报错：Uncaught ReferenceError: Cannot access 'a' before initialization
}
```

## 3.变量提升 {#promote}

`var` 声明的变量存在变量提升，`let`、`const` 不存在变量提升
使用 `var` 声明变量

```js
console.log(a) // undefined
var a = 10
```

由于 `var` 存在变量提升的特性，这段代码会在 JS 引擎预编译的时候变成这样：

```js
var a
console.log(a)
a = 10
```

使用 `let` 的变量或 `const` 声明的常量

```js
console.log(a)
let a = 10 || const a = 10
// 报错：Uncaught ReferenceError: Cannot access 'a' before initialization
```

## 4.重复声明 {#repeat}

`var` 声明的变量可以重复声明, `let` 和 `const` 声明的不可以重复声明

```js
var a = 10
var a = 20
console.log(a) // 20
```

```js
var a = 10
let a = 20 || const a = 20
console.log(a)
// 报错：Uncaught SyntaxError: Identifier 'a' has already been declared
```

## 5.变量能否被修改 {#modify}

`var` 和 `let` 声明的变量可以修改，但 `const` 声明的常量不能修改

```js
var a = 10  || let a = 10
a = 20
console.log(a) // 20
```

```js
const a = 10
a = 20
console.log(a)
// 报错：Uncaught TypeError: Assignment to constant variable
```
<theEnd/>