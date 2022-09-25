# Javascript 继承

本文介绍了 `Javascript` 中常见的继承方式

## 1、基本继承

首先来说说 `Javascript` 中实现继承的基本方式，如下代码所示：

```javascript {13}
function SuperType() {
  this.superOwner = 'razzh'
  this.brand = ['Ford', 'Cadillac']
}
SuperType.prototype.getSuperValue = function () {
  return this.superOwner
}

function SubType() {
  this.subOwner = 'ff'
}
SubType.prototype.subProperty = '我是子属性'
SubType.prototype = new SuperType()

var instance1 = new SubType()
var instance2 = new SubType()
instance1.brand.push('Benz')
console.log(instance1.getSuperValue()) // razzh
console.log(instance1.subProperty) // undefined
console.log(instance1.brand) // ['Ford', 'Cadillac', 'Benz']
console.log(instance2.brand) // ['Ford', 'Cadillac', 'Benz']
```

实际上，基本继承只是**重写**了子构造函数的原型链以达到继承的目的。但是虽然继承的目的达到了，但是我们要知道如果 `SubType` 之前的原型上如果存在属性，通过上面的打印 `instance1.subProperty` 可以知道，我们并没有办法访问属性 `subProperty` ，再者，我们通过打印 `instance2.brand` 发现，我们并没有对 `instance2` 的 `brand` 属性进行 `push` 操作，但是我们打印出来的 `brand` 中会多出这个 `Benz` 属性。  
这主要跟 **引用类型的地址** 有关系:

> SubType.prototype = new SuperType()  
> 在原型上添加了 `SuperType` 上的属性， 实际上，后续的 `instance1` 和 `instance2` 使用的都是**同一引用**。

上述是对基本继承的描述，主要能看出两个缺点：

- 子级构造函数原型链上面的属性会被覆盖
- 若父级构造函数中存在引用类型的时候，各个实例对该引用的操作会影响其他实例。那么我们怎样才能做到继承 `SuperType` 上面的属性，在操作其引用类型的属性时，各实例之间不会相互影响呢？

## 2、借用继承(经典继承)

这时，就需要介绍一下**借用继承**了：

```javascript {18}
function SuperType() {
  this.superOwner = 'razzh'
  this.brand = ['Ford', 'Cadillac']
}
SuperType.prototype.getSuperValue = function () {
  return this.superOwner
}

function SubType() {
  SuperType.call(this)
  this.subOwner = 'ff'
}
SubType.prototype.subProperty = '我是子属性'

var instance1 = new SubType()
var instance2 = new SubType()
instance1.brand.push('Benz')
// console.log(instance.getSuperValue()) // throw error
console.log(instance1.subProperty) // 我是子属性
console.log(instance1.brand) // ['Ford', 'Cadillac', 'Benz']
console.log(instance2.brand) // ['Ford', 'Cadillac']
```

借用构造函数的原理是利用 [使用 call 方法调用父构造函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call#%E7%A4%BA%E4%BE%8B)。可以看到这时操作 `instance1` 后，打印 `instance2` 的值不会存在引用相互影响的情况，但是**不能继承**父构造函数的原型方法。

- 优点：实现属性的继承
- 缺点：不能继承父类的方法

## 3、组合继承

组合继承（combination inheritance），有时候也叫做**伪经典继承**。是将基本继承和借用构造函数的技术组合到一块，从而发挥二者之长的一种继承模式。

```javascript
function SuperType() {
  this.superOwner = 'razzh'
  this.brand = ['Ford', 'Cadillac']
}
SuperType.prototype.getSuperValue = function () {
  return this.superOwner
}

function SubType() {
  SuperType.call(this)
  this.subOwner = 'ff'
}
SubType.prototype.subProperty = '我是子属性'
SubType.prototype = new SuperType()
SubType.prototype.constructor = SubType // 修正constructor指向

var instance1 = new SubType()
var instance2 = new SubType()
instance1.brand.push('Benz')
// console.log(instance.oldProperty) // error
console.log(instance1.getSuperValue()) // razzh
console.log(instance1.skill) // ['Ford', 'Cadillac', 'Benz']
console.log(instance2.skill) // ['Ford', 'Cadillac']
```

从打印结果来看，`组合继承` 在 `借用继承` 的基础上又将父级构造函数的原型赋值给子类的构造函数，是其子拥有父级完整的属性，各个实例操作并不影响。

- 优点：可以实现属性、以及方法的继承
- 缺点：调用了 2 次父类的构造函数，一次是 `SuperType.call()`，还有一次是 `new SuperType()`

## 4、寄生组合式继承

寄生组合式继承**避免了组合继承中调用两次父类构造函数**，是引用类型最理想的继承范式。

```javascript
function object(o) {
  function W() {}
  W.prototype = o
  return new W()
}

function SuperType() {
  this.superOwner = 'razzh'
  this.brand = ['Ford', 'Cadillac']
}
SuperType.prototype.getBrand = function () {
  return this.brand
}

function SubType() {
  SuperType.call(this)
  this.subOwner = 'ff'
}

function inheritPrototype(SubType, SuperType) {
  var prototype = object(SuperType.prototype) // Object.create() Pollify
  prototype.constructor = SubType
  SubType.prototype = prototype
}

inheritPrototype(SubType, SuperType)
var t = new SubType()
console.log(t.getBrand()) // ['Ford', 'Cadillac']
console.log(t.superOwner) // razzh
```

实际上，这个 `object` 函数其实是 ES5 新增的 `Object.create()` 方法的**Pollify**。

- 优点：这种方式的高效率体现在它只调用了一次 `SuperType` 构造函数，并且因此避免了 `SubType.prototype` 上面创建不必要、多余的属性。

## 5、Class 继承

ES6 中 `class` 的出现，让我们能够轻松完成 ES5 中复杂的继承模式:

```javascript
class SuperType {
  constructor(name) {
    this.superProperty = name
  }

  getValue() {
    return this.superProperty
  }
}
class SubType extends SuperType {
  constructor(name) {
    super(name)
    this.subProperty = 'ff'
  }
}
var t = new SubType('razzh')
console.log(t.getValue()) // razzh
```

其采用了 `extends` 和 `super` 关键字, `extends` 可以指定类继承的函数，用于调整原型，`super` 等同于寄生组合式继承的父类执行 call 方法。

<theEnd/>