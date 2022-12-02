# path.resolve 到底怎么用？
之前在项目中常用到 `path.resolve` 这个方法，知道它是处理路径的方法，但总是被它的输出整不会了[尬笑！]，来看看这几个例子！  
```js
const dir = __dirname
const p1 = path.resolve('/foo/bar', './baz')
const p2 = path.resolve('/foo/bar', '/baz')
const p3 = path.resolve(dir, '/foo/bar')
const p4 = path.resolve(dir, './foo/bar')
```
> 结果：  
p1: /foo/bar/baz  
p2: /baz  
p3: /foo/bar
p4: dir + /foo/bar

`p1` 和 `p2` 以及 `p3` 和 `p4` 的第二个参数就差了一个点（dot），但输出结果就完全不同，还有 `p3` ! 我在第一个参数填了 `__dirname`，为啥不输出  **dir + /foo/bar** ，而 `p4` 就能输出刚才谈到的结果呢？？

## 解析path.resolve {#resolve}
我在 [Node.js](https://nodejs.org/api/path.html#pathdirnamepath) 官网中找到 `path.resolve` 的定义:
> The path.resolve() method resolves a sequence of paths or path segments into an absolute path.

意思说是此方法会“解析”多路径或是路径碎片把它们加到**绝对路径**中。也就是说 `resolve` 方法最终返回的结果是一个**绝对路径**的字符串！吐槽一句，官方的说法也未免太抽象了。  

于是，我在 [stackoverflow](https://stackoverflow.com/questions/35048686/whats-the-difference-between-path-resolve-and-path-join) 中查到了关于对 `path.resolve` 的描述：
> I would say the name of resolve is not the most clear, path.cd([starting dir], [final dir]) would be much more intuitive. – 
João Pimentel Ferreira  


我觉得，`path.resolve` 这个起名不够清楚，`path.cd([starting dir], [final dir])` 会更直观。  

什么意思呢？ `cd` [Change directory] ，译为切换目录，好了那么按照👆的思路，我们以 `p1` 和 `p4` 一下上述代码 `cd` 的过程。  
### p1
1. `cd /foo/bar` 目录，也就是 `/foo/bar` 下  
2. 在 `/foo/bar` 中 `cd baz`，最终就到了 `/foo/bar/baz` 下  


p1 翻译成 `shell` 脚本 -> `cd /foo/bar && cd ./baz`
### p4
1. `cd dir`， 也就是当前文件在根目录下的绝对路径  
2. `cd /foo/bar` 也就相当于 `dir` + `foo/bar`  


p3 翻译成 `shell` 脚本 -> `cd dir && cd /foo/bar`  
p4 翻译成 `shell` 脚本 -> `cd dir && cd ./foo/bar`   

这样是不是讲清楚了呢！  
<TheEnd />


