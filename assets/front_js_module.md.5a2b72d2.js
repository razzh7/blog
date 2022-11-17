import{_ as n,o as a,c as o,b as l,e as p,r as e}from"./app.34a7315f.js";const u=JSON.parse('{"title":"JS \u6A21\u5757\u5316","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6A21\u5757\u5316\u7684\u4F18\u70B9","slug":"advantage","link":"#advantage","children":[]},{"level":2,"title":"AMD","slug":"amd","link":"#amd","children":[]},{"level":2,"title":"CMD","slug":"cmd","link":"#cmd","children":[]},{"level":2,"title":"AMD/CMD \u533A\u522B","slug":"difference","link":"#difference","children":[]},{"level":2,"title":"CommonJS","slug":"commonjs","link":"#commonjs","children":[]},{"level":2,"title":"ESModule","slug":"esmodule","link":"#esmodule","children":[]},{"level":2,"title":"CommonJS \u548C ESModule \u533A\u522B","slug":"commonjsandesmodule","link":"#commonjsandesmodule","children":[]}],"relativePath":"front/js/module.md"}'),t={name:"front/js/module.md"},c=p(`<h1 id="js-\u6A21\u5757\u5316" tabindex="-1">JS \u6A21\u5757\u5316 <a class="header-anchor" href="#js-\u6A21\u5757\u5316" aria-hidden="true">#</a></h1><p>\u53C2\u8003\u6587\u7AE0:<br><a href="https://segmentfault.com/a/1190000017466120" target="_blank" rel="noreferrer">segmentfault - \u524D\u7AEF\u6A21\u5757\u5316</a><br><a href="https://codingwithalice.github.io/2020/03/17/%E9%9D%A2%E8%AF%95-AMD%E5%92%8CCMD%E5%8C%BA%E5%88%AB/" target="_blank" rel="noreferrer">blog - \u524D\u7AEF\u6A21\u5757\u5316</a><br><a href="https://juejin.cn/post/6844903469933920263" target="_blank" rel="noreferrer">\u6398\u91D1 - \u524D\u7AEF\u6A21\u5757\u5316</a></p><p>\u4ECB\u7ECD\uFF1A<br> \u5F53\u4ECA\u4E3B\u6D41\u7684\u6A21\u5757\u5316\u65B9\u6848\u4E3B\u8981\u6709\u56DB\u79CD\uFF1A</p><ul><li>AMD</li><li>CMD</li><li>CommonJS</li><li>ESModule</li></ul><p><code>AMD/RequireJS</code> \u89C4\u8303\u80FD\u4F7F\u6D4F\u89C8\u5668\u5F02\u6B65\u52A0\u8F7D\u6A21\u5757\uFF0C\u539F\u5219\u662F<strong>\u4F9D\u8D56\u524D\u7F6E</strong></p><p><code>CMD/SeaJS</code> \u89C4\u8303\u548C AMD \u89C4\u8303\u7C7B\u4F3C\uFF0C\u90FD\u7528\u4E8E\u6D4F\u89C8\u5668\u73AF\u5883\u7684\u6A21\u5757\u5316\u52A0\u8F7D\uFF0C\u539F\u5219\u662F<strong>\u5C31\u8FD1\u4F9D\u8D56</strong></p><p><code>CommonJS</code> \u89C4\u8303\u4E3B\u8981\u7528\u4E8E<strong>\u670D\u52A1\u7AEF\u7F16\u7A0B</strong>\uFF0C\u7531\u4E8E\u5B83\u7684\u540C\u6B65\u52A0\u8F7D\u673A\u5236\u5BFC\u81F4\u7684\u4EE3\u7801\u963B\u585E\uFF0C\u5E76\u4E0D\u9002\u5408\u6D4F\u89C8\u5668\u73AF\u5883\uFF0C\u56E0\u6B64\u5C31\u6709\u4E86 <code>AMD</code> \u548C <code>CMD</code> \u89E3\u51B3\u65B9\u6848\u3002</p><p><code>ESModule</code> \u662F <strong>ES6 \u63D0\u4F9B\u7684</strong>\u7684\u6A21\u5757\u5316\u6807\u51C6\uFF0C\u5173\u952E\u5B57\u6709 <code>import</code> \u3001<code>export</code> \u3001<code>exprot default</code> \u3001<code>as</code>\u3001<code>from</code></p><h2 id="advantage" tabindex="-1">\u6A21\u5757\u5316\u7684\u4F18\u70B9 <a class="header-anchor" href="#advantage" aria-hidden="true">#</a></h2><ul><li>\u53EF\u590D\u7528\u6027\u9AD8</li><li>\u4EE3\u7801\u53EF\u4EE5\u89E3\u8026\uFF0C\u66F4\u597D\u7EF4\u62A4</li><li>\u907F\u514D\u547D\u540D\u51B2\u7A81\uFF08\u5168\u5C40\u53D8\u91CF\u6C61\u67D3\uFF09</li><li>\u53EF\u5F02\u6B65\u52A0\u8F7D\u6A21\u5757\uFF0C\u907F\u514D\u53D1\u9001\u591A\u4E2A\u8BF7\u6C42</li><li>\u4F9D\u8D56\u660E\u786E\uFF0C\u4E0D\u9700\u8981\u5173\u6CE8\u4F9D\u8D56\u5F15\u5165\u7684\u987A\u5E8F\u95EE\u9898</li></ul><h2 id="amd" tabindex="-1">AMD <a class="header-anchor" href="#amd" aria-hidden="true">#</a></h2><p><code>AMD</code> \uFF0C\u5F02\u6B65\u6A21\u5757\u5B9A\u4E49\uFF08Asynchronous Module Definition\uFF09\uFF0C\u5B83\u7684\u7279\u70B9\u662F<strong>\u4F9D\u8D56\u524D\u7F6E</strong>\uFF0C\u4F9D\u8D56\u5FC5\u987B\u5728\u6700\u5148\u5B9A\u4E49\u597D\uFF0C\u7B49\u5230\u5F02\u6B65\u52A0\u8F7D\u5B8C\u6210\u8FD9\u4E9B\u4F9D\u8D56\u540E\u4F1A<strong>\u7ACB\u523B\u6267\u884C</strong>\u8FD9\u4E9B\u4F9D\u8D56\u4EE3\u7801\u3002</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// \u4F9D\u8D56\u5FC5\u987B\u4E00\u5F00\u59CB\u5C31\u5199\u597D</span></span>
<span class="line"><span style="color:#82AAFF;">define</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">doSomething</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u6B64\u5904\u7701\u53BB 100 \u884C</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">doSomething</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="cmd" tabindex="-1">CMD <a class="header-anchor" href="#cmd" aria-hidden="true">#</a></h2><p><code>CMD</code> \uFF0C\u901A\u7528\u6A21\u5757\u5B9A\u4E49\uFF08Common Module Definition\uFF09\uFF0C\u5B83\u7684\u7279\u70B9\u662F<strong>\u5C31\u8FD1\u4F9D\u8D56</strong>\uFF0C\u4E5F\u5C31\u662F\u4EC0\u4E48\u65F6\u5019 <code>require</code> \uFF0C\u5C31\u4EC0\u4E48\u65F6\u5019\u6267\u884C\u4F9D\u8D56\u4EE3\u7801\u3002</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">define</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">require</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">exports</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">module</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">require</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">doSomething</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u6B64\u5904\u7701\u7565 100 \u884C</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">require</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">doSomething</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="difference" tabindex="-1">AMD/CMD \u533A\u522B <a class="header-anchor" href="#difference" aria-hidden="true">#</a></h2><p>1\u3001<code>AMD</code> \u63A8\u5D07<strong>\u4F9D\u8D56\u524D\u7F6E</strong>\uFF0C\u5728\u5B9A\u4E49\u6A21\u5757\u7684\u65F6\u5019\u5C31\u8981\u58F0\u660E\u5176\u4F9D\u8D56\u7684\u6A21\u5757<br> 2\u3001<code>CMD</code> \u63A8\u5D07<strong>\u5C31\u8FD1\u4F9D\u8D56</strong>\uFF0C\u53EA\u6709\u5728\u7528\u5230\u67D0\u4E2A\u6A21\u5757\u7684\u65F6\u5019\u518D\u53BB <code>require</code></p><h2 id="commonjs" tabindex="-1">CommonJS <a class="header-anchor" href="#commonjs" aria-hidden="true">#</a></h2><p><code>CommonJS</code> \u6A21\u5757\u4E2D\uFF0C\u901A\u8FC7 <code>require</code> \u5BFC\u5165\u6A21\u5757\uFF0C\u901A\u8FC7 <code>exports/modeule.exports</code>\u6765\u5BFC\u51FA\u3002</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// \u5BFC\u5165</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> sum </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./add.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">sum</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// 5</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// \u5BFC\u51FA</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  sum</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">// \u6216</span></span>
<span class="line"><span style="color:#89DDFF;">exports.</span><span style="color:#A6ACCD;">sum </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> sum</span></span>
<span class="line"></span></code></pre></div><p>\u5176\u5185\u5728\u673A\u5236\u662F\u5C06 <code>exports</code> \u6307\u5411\u4E86 <code>module.exports</code> \uFF0C\u800C <code>module.exports</code> \u5728\u521D\u59CB\u5316\u65F6\u662F\u4E00\u4E2A\u7A7A\u5BF9\u8C61\u3002\u6211\u4EEC\u53EF\u4EE5\u7B80\u5355\u5730\u7406\u89E3\u4E3A\uFF0C<code>CommonJS</code> \u5728\u6BCF\u4E2A\u6A21\u5757\u7684\u9996\u90E8\u9ED8\u8BA4\u6DFB\u52A0\u4E86\u4EE5\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> module </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">exports</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> exports </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">module.exports</span></span>
<span class="line"></span></code></pre></div><p>\u6B64\u5916 \u6BCF\u4E2A\u6A21\u5757\u52A0\u8F7D\u5B8C\u6210<strong>\u4E00\u6B21</strong>\u4E4B\u540E\u4F1A\u88AB\u7F13\u5B58\uFF0C\u5BF9\u4E8E\u539F\u59CB\u7C7B\u578B\u6765\u8BF4\uFF0C\u5728\u6A21\u5757\u5185\u4FEE\u6539\u5BFC\u5165\u7684\u539F\u59CB\u7C7B\u578B\uFF0C\u88AB\u5BFC\u5165\u6A21\u5757\u4E2D\u7684\u539F\u59CB \u7C7B\u578B\u662F\u4E0D\u4F1A\u6539\u53D8\u7684\uFF0C\u5F15\u7528\u7C7B\u578B\u9664\u5916\u3002\u4E5F\u53EF\u4EE5\u7406\u89E3\u4E3A\u6BCF\u4E2A\u6A21\u5757\u5728\u52A0\u8F7D\u4E00\u6B21\u4E4B\u540E\u5C31\u4F1A\u88AB\u7F13\u5B58\u3002</p><p>\u603B\u7ED3\u4E00\u4E0B <code>CommonJS</code> :<br> \u4F18\u70B9\uFF1A</p><ul><li>\u6BCF\u4E2A\u6587\u4EF6\u90FD\u662F\u4E00\u4E2A\u6A21\u5757\u5B9E\u4F8B\uFF0C\u4EE3\u7801\u8FD0\u884C\u5728<strong>\u6A21\u5757\u4F5C\u7528\u57DF</strong>\uFF0C\u4E0D\u4F1A\u6C61\u67D3\u5168\u5C40\u4F5C\u7528\u57DF</li><li>\u6587\u4EF6\u5185\u901A\u8FC7 <code>require</code> \u5BF9\u8C61\u5F15\u5165\u6307\u5B9A\u6A21\u5757\uFF0C\u901A\u8FC7 <code>exports</code> \u5BF9\u8C61\u6765\u5411\u5916\u66B4\u6F0F <code>API</code>\uFF0C\u6587\u4EF6\u5185\u5B9A\u4E49\u7684\u53D8\u91CF\u3001\u51FD\u6570\uFF0C\u90FD\u662F \u79C1\u6709 \u7684\uFF0C\u5BF9\u5176\u4ED6\u6587\u4EF6\u4E0D\u53EF\u89C1</li><li>\u6BCF\u4E2A\u6A21\u5757\u52A0\u8F7D\u4E00\u6B21\u4E4B\u540E\u5C31\u4F1A\u88AB\u7F13\u5B58</li><li>\u6240\u6709\u6587\u4EF6\u52A0\u8F7D\u5747\u662F \u540C\u6B65 \u5B8C\u6210\uFF0C\u52A0\u8F7D\u7684\u987A\u5E8F\uFF0C\u6309\u7167\u5176\u5728\u4EE3\u7801\u4E2D\u51FA\u73B0\u7684\u987A\u5E8F</li><li>\u6A21\u5757\u8F93\u51FA\u7684\u662F\u4E00\u4E2A\u503C\u7684\u62F7\u8D1D\uFF0C\u4FEE\u6539\u6A21\u5757\u5185\u90E8\u7684\u539F\u59CB\u7C7B\u578B\u7684\u503C\u5E76\u4E0D\u4F1A\u6539\u53D8\u6A21\u5757\u5185\u539F\u59CB\u7C7B\u578B\u7684\u503C</li></ul><p>\u7F3A\u70B9\uFF1A</p><ul><li>\u53D1\u9001\u591A\u4E2A\u8BF7\u6C42\uFF0C\u6A21\u5757\u540C\u6B65\u52A0\u8F7D\uFF0C\u8D44\u6E90\u6D88\u8017\u548C\u7B49\u5F85\u65F6\u95F4 \uFF0C\u9002\u7528\u4E8E\u670D\u52A1\u5668\u7F16\u7A0B</li><li>\u5F15\u5165\u7684 js \u6587\u4EF6\u987A\u5E8F\u4E0D\u80FD\u641E\u9519\uFF0C\u5426\u5219\u4F1A\u62A5\u9519</li></ul><h2 id="esmodule" tabindex="-1">ESModule <a class="header-anchor" href="#esmodule" aria-hidden="true">#</a></h2><p>ESModule \u662F ES6 \u7684\u6A21\u5757\u5316\u89C4\u8303\uFF0C\u5B83\u7684\u7279\u70B9\u662F\u8F93\u51FA\u7684\u662F\u503C\u7684\u5F15\u7528\uFF0C\u811A\u672C\u6267\u884C\u65F6\uFF0C\u6839\u636E\u5F15\u7528\uFF0C\u5230\u6A21\u5757\u91CC\u9762\u53D6\u503C\uFF0C\u82E5\u539F\u59CB\u503C\u53D8\u4E86\uFF0C<code>import</code> \u52A0\u8F7D\u7684\u503C\u4E5F\u4F1A\u8DDF\u7740\u53D8\uFF09\u3002<a href="https://zh.javascript.info/import-export" target="_blank" rel="noreferrer">\u57FA\u672C\u8BED\u6CD5</a>\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// export</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sum</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sub</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">div</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mult</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">// import</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sum</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sub</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">div</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mult</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./math</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">sum</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">sub</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">div</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">mult</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\u89C9\u5F97\u4E0A\u9762\u770B\u7740\u592A\u5197\u4F59\uFF0C\u53EF\u4EE5\u4F7F\u7528\u8FD9\u6837\u7684\u5199\u6CD5\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// export</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sum</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sub</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">div</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mult</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">// import</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">as</span><span style="color:#A6ACCD;"> myMath </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./math</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">myMath</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sum</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">myMath</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sub</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">myMath</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">div</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">myMath</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mult</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="commonjsandesmodule" tabindex="-1">CommonJS \u548C ESModule \u533A\u522B <a class="header-anchor" href="#commonjsandesmodule" aria-hidden="true">#</a></h2><table><thead><tr><th></th><th>CommonJS \u6A21\u5757</th><th>ESModule</th></tr></thead><tbody><tr><td>\u5173\u952E\u5B57</td><td><code>require</code> <code>exports</code></td><td><code>import\u3001export\u3001default\u3001as\u3001from</code></td></tr><tr><td>\u6267\u884C\u65B9\u5F0F</td><td><code>require</code> \u9700\u8981\u4EE3\u7801\u540C\u6B65\u6267\u884C - \u4E0D\u9002\u5408\u6D4F\u89C8\u5668\u7AEF</td><td>\u5F02\u6B65</td></tr><tr><td>\u8F93\u51FA</td><td>\u8F93\u51FA\u7684\u662F\u4E00\u4E2A\u503C\u7684<strong>\u62F7\u8D1D</strong><br>\uFF08\u4E00\u65E6\u8F93\u51FA\u4E00\u4E2A\u503C\uFF0C\u6A21\u5757\u5185\u90E8\u7684\u53D8\u5316\u5C31\u5F71\u54CD\u4E0D\u5230\u8FD9\u4E2A\u503C\uFF09</td><td>\u8F93\u51FA\u7684\u662F<strong>\u503C\u7684\u5F15\u7528</strong><br>\uFF08\u52A8\u6001\u5F15\u7528\uFF0C\u811A\u672C\u6267\u884C\u65F6\uFF0C\u518D\u6839\u636E\u5F15\u7528\uFF0C\u5230\u6A21\u5757\u91CC\u9762\u53D6\u503C\uFF0C\u82E5\u539F\u59CB\u503C\u53D8\u4E86\uFF0C<code>import</code> \u52A0\u8F7D\u7684\u503C\u4E5F\u4F1A\u8DDF\u7740\u53D8\uFF09</td></tr><tr><td>\u65F6\u673A</td><td><strong>\u8FD0\u884C\u65F6\u52A0\u8F7D</strong>\uFF0C\u52A0\u8F7D\u7684\u662F <strong>\u6574\u4E2A\u6A21\u5757 - \u6240\u6709\u63A5\u53E3</strong>\uFF0C\u53EA\u6709\u5728 <u>\u811A\u672C\u8FD0\u884C</u> \u5B8C\u624D\u4F1A\u751F\u6210</td><td><strong>\u7F16\u8BD1\u65F6\u8F93\u51FA</strong> \u63A5\u53E3\uFF0C<strong>\u53EF\u4EE5\u5355\u72EC\u52A0\u8F7D\u67D0\u4E2A\u63A5\u53E3</strong>\uFF0C\u5728\u4EE3\u7801 <u>\u9759\u6001\u89E3\u6790</u> \u9636\u6BB5\u5C31\u4F1A\u751F\u6210</td></tr><tr><td>\u52A0\u8F7D\u539F\u7406</td><td>\u4E00\u4E2A\u6A21\u5757\u5C31\u662F\u4E00\u4E2A\u811A\u672C\uFF0C<code>require</code> \u547D\u4EE4\u7B2C\u4E00\u6B21\u52A0\u8F7D\u8BE5\u811A\u672C\uFF0C\u5C31\u4F1A\u6267\u884C\u6574\u4E2A\u811A\u672C\uFF0C\u7136\u540E\u5728\u5185\u5B58\u751F\u6210\u4E00\u4E2A\u5BF9\u8C61<br>\u4EE5\u540E\u9700\u8981\u7528\u5230\u8FD9\u4E2A\u6A21\u5757\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u5230 <code>exports</code> \u5C5E\u6027\u4E0A\u9762\u53D6\u503C\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C<strong>\u4E0D\u4F1A\u518D\u6B21\u6267\u884C\u8BE5\u6A21\u5757\uFF0C\u800C\u662F\u5230 \u7F13\u5B58 \u4E4B\u4E2D\u53D6\u503C\uFF0C\u53EA\u4F1A\u5728\u7B2C\u4E00\u6B21\u52A0\u8F7D\u65F6\u8FD0\u884C\u4E00\u6B21</strong></td><td></td></tr></tbody></table>`,36);function r(y,D,C,F,d,A){const s=e("theEnd");return a(),o("div",null,[c,l(s)])}const m=n(t,[["render",r]]);export{u as __pageData,m as default};
