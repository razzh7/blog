import{_ as n,o as a,c as o,b as p,e as l,r as e}from"./app.34a7315f.js";const _=JSON.parse('{"title":"\u731C\u60F3","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B9E\u73B0","slug":"realize","link":"#realize","children":[]}],"relativePath":"front/js/instanceof.md"}'),t={name:"front/js/instanceof.md"},r=l(`<h1 id="idea" tabindex="-1">\u731C\u60F3 <a class="header-anchor" href="#idea" aria-hidden="true">#</a></h1><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof" target="_blank" rel="noreferrer">instanceof</a> \u662F\u7528\u4E8E\u68C0\u6D4B\u5BF9\u8C61\u7684\u539F\u578B\u94FE\u4E0A\u662F\u5426\u4E0E\u68C0\u6D4B\u51FD\u6570\u7684 <code>prototype</code> \u539F\u578B\u662F\u5426\u662F<strong>\u540C\u4E00\u5F15\u7528</strong>\u3002<br> \u90A3\u4E48\u662F\u4E0D\u662F\u6211\u5728\u4E00\u4E2A\u5BF9\u8C61\u7684 <code>__proto__</code> \u4E0A\u6307\u5411\u68C0\u6D4B\u51FD\u6570\u7684 <code>prototype</code> \uFF0C\u90A3\u4E48\u7ECF\u8FC7 <code>instanceof</code> \u68C0\u6D4B\u4E4B\u540E\u662F\u5426\u5C31\u4F1A\u8FD4\u56DE <code>true</code> \u4E86\u5462\uFF1F\u90A3\u6211\u4EEC\u6765\u8BD5\u8BD5\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">mine</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#FFCB6B;">mine</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">razzh</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">__proto__ </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">mine</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(obj </span><span style="color:#89DDFF;">instanceof</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">mine</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// true</span></span>
<span class="line"></span></code></pre></div><p>\u53EF\u4EE5\u770B\u5230\u4E0A\u8FF0\u7ED3\u679C\u8FD4\u56DE\u4E86 <code>true</code> \u8BC1\u5B9E\u4E86\u8FD9\u4E2A\u731C\u60F3\uFF0C\u63A5\u4E0B\u6765\u5C31\u4F9D\u636E\u5B83\u6765\u5B9E\u73B0\u4E00\u4E0B <code>instanceof</code> \u3002</p><h2 id="realize" tabindex="-1">\u5B9E\u73B0 <a class="header-anchor" href="#realize" aria-hidden="true">#</a></h2><p>\u601D\u8DEF\uFF1A<br> 1\u3001\u83B7\u53D6\u68C0\u6D4B\u5BF9\u8C61\u7684\u539F\u578B\u94FE<br> 2\u3001\u5FAA\u73AF\u5BF9\u8C61\u7684\u539F\u578B\u94FE\u4E0E\u51FD\u6570\u7684\u539F\u578B\u8FDB\u884C\u5168\u7B49\u5BF9\u6BD4\uFF0C\u82E5\u7B26\u5408 if \u5206\u652F\u6761\u4EF6\u5219\u8FD4\u56DE true\uFF0C\u53CD\u4E4B false</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">fucntion </span><span style="color:#82AAFF;">_myInstanceof</span><span style="color:#A6ACCD;">(target</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> origin) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">object</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">throw</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Error</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">target must be Object</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">origin</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">function</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">throw</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Error</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">origin must be origin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">proto</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getPrototypeOf</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">) </span><span style="color:#676E95;">// \u76F8\u5F53\u4E8E proto = target.__proto__</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">while</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">proto</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">proto</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">origin</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">proto</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getPrototypeOf</span><span style="color:#F07178;">(</span><span style="color:#FFCB6B;">proto</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,7);function c(F,y,D,i,C,A){const s=e("theEnd");return a(),o("div",null,[r,p(s)])}const f=n(t,[["render",c]]);export{_ as __pageData,f as default};
