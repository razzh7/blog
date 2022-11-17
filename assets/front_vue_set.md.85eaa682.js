import{_ as a,o as n,c as l,b as p,e as o,r as e}from"./app.34a7315f.js";const t="/blog/img/vuesetimg.png",g=JSON.parse('{"title":"Vue.set","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B9E\u9645\u5E94\u7528","slug":"application","link":"#application","children":[]},{"level":2,"title":"set \u6E90\u7801","slug":"source","link":"#source","children":[]},{"level":2,"title":"\u6570\u7EC4\u5904\u7406","slug":"array","link":"#array","children":[]},{"level":2,"title":"\u5BF9\u8C61\u5904\u7406","slug":"object","link":"#object","children":[]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]}],"relativePath":"front/vue/set.md"}'),c={name:"front/vue/set.md"},r=o(`<h1 id="vue-set" tabindex="-1">Vue.set <a class="header-anchor" href="#vue-set" aria-hidden="true">#</a></h1><p>\u7531\u4E8E JavaScript \u7684\u9650\u5236\uFF0CVue \u4E0D\u80FD\u68C0\u6D4B\u6570\u7EC4\u548C\u5BF9\u8C61\u7684\u53D8\u5316\u3002\u5C3D\u7BA1\u5982\u6B64\u8FD8\u662F\u6709\u4E00\u4E9B\u529E\u6CD5\u6765\u56DE\u907F\u8FD9\u4E9B\u9650\u5236\u5E76\u4FDD\u8BC1\u5B83\u4EEC\u7684\u54CD\u5E94\u6027\uFF0C\u90A3\u5C31\u662F <code>Vue.set</code>\u3002<br> \u5B9E\u9645\u4E0A Vue \u4E5F\u53EF\u4EE5\u4F7F\u7528 <code>Object.defineProperty</code> \u6765\u505A\u5230\u5BF9\u6570\u7EC4\u7684\u76D1\u542C\uFF0C\u4F46\u662F\u51FA\u4E8E<a href="https://github.com/vuejs/vue/issues/8562" target="_blank" rel="noreferrer">\u6027\u80FD\u8003\u8651</a> \uFF0CVue \u6CA1\u6709\u9009\u62E9\u8FD9\u4E2A\u505A\u6CD5\u3002</p><h2 id="application" tabindex="-1">\u5B9E\u9645\u5E94\u7528 <a class="header-anchor" href="#application" aria-hidden="true">#</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> vm </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Vue</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">el</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;div @click=&quot;addItem&quot;&gt;{{list}}&lt;/div&gt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">list</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">addItem</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">list</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\u4E0A\u8FF0\u4EE3\u7801\u70B9\u51FB <code>div</code> \u4E4B\u540E\u4F1A\u5C06 <code>list</code> \u4E2D\u7684\u7B2C\u4E00\u4F4D\u7D22\u5F15\u6362\u6210 <code>a</code> \u5B57\u7B26\uFF0C\u6253\u5370\u4E00\u4E0B <code>vm._data</code></p><p><img src="`+t+`" alt="img"></p><p>\u5DF2\u7ECF\u53EF\u4EE5\u770B\u5230\u8FD9\u4E2A\u65F6\u5019 <code>list</code> \u4E2D\u7684\u7B2C\u4E00\u9879\u5DF2\u7ECF\u53D8\u6210\u4E86 <code>a</code>\uFF0C\u4F46\u662F\u8FD9\u4E2A\u65F6\u5019\u9875\u9762\u89C6\u56FE\u5374\u6CA1\u6709\u5237\u65B0\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u65F6\u5019 <code>$set</code> \u5C31\u8BE5\u767B\u573A\u4E86:</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> vm </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Vue</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">el</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;div @click=&quot;addItem&quot;&gt;{{list}}&lt;/div&gt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">list</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">addItem</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">$set</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u4E2A\u65F6\u5019\u70B9\u51FB <code>div</code> \u9875\u9762\u89C6\u56FE\u4E5F\u968F\u4E4B\u66F4\u65B0\u4E3A<code>[&#39;a&#39;, 2, 3]</code>\u3002</p><p>\u987A\u7740\u8FD9\u4E2A\u601D\u8DEF\uFF0C\u6211\u60F3\u5230\u5728\u751F\u547D\u5468\u671F <code>created</code> \u4E2D\u901A\u8FC7\u4E0B\u6807\u4FEE\u6539\u6570\u7EC4\u7684\u503C\uFF0C\u90A3\u4E48\u6B64\u65F6\u89C6\u56FE\u4F1A\u53D8\u5417\uFF1F</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> vm </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Vue</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">el</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;div&gt;{{list}}&lt;/div&gt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">list</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">created</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">list</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u6BB5\u4EE3\u7801\u6267\u884C\u5B8C\u6BD5\u65F6\uFF0C\u8FD9\u4E2A\u65F6\u5019\u89C6\u56FE\u7ADF\u7136\u8DDF\u7740\u66F4\u65B0\u4E86\uFF01\u{1F605}\u5947\u602A\u4E86\uFF0C\u4E0D\u662F\u8BF4<strong>\u7531\u4E8E JS \u9650\u5236\uFF0CVue \u4E0D\u80FD\u68C0\u6D4B\u5230\u6570\u7EC4\u901A\u8FC7\u7D22\u5F15\u6765\u4FEE\u6539 data \u4E2D\u503C</strong>\u7684\u60C5\u51B5\u5417\uFF1FWhat happen \uFF1F</p><blockquote><p>\u89E3\u91CA\uFF1A\u7531\u4E8E <code>created</code> \u9636\u6BB5 <code>data</code> \u6570\u636E\u5DF2\u7ECF\u521D\u59CB\u5316\u5B8C\u6210\uFF0C\u53EF\u4EE5\u4FEE\u6539\u5176\u6570\u636E\uFF0C\u4EE5\u81F3\u4E8E\u5230\u540E\u9762\u7684\u6E32\u67D3\u51FD\u6570\u62FF\u5230\u7684\u4E5F\u662F\u4FEE\u6539\u540E\u7684 <code>list:[&#39;a&#39; ,2 ,3]</code>\uFF0C\u6240\u4EE5\u6E32\u67D3\u7684\u65F6\u5019\u5E76\u4E0D\u662F\u89C6\u56FE\u53D1\u751F\u4E86\u66F4\u65B0\u53D8\u5316\uFF0C\u800C\u662F\u7B2C\u4E00\u6B21 <code>render</code> \u62FF\u5230\u7684 <code>list</code> \u5DF2\u7ECF\u662F\u4FEE\u6539\u540E\u7684\u6570\u636E\uFF0C\u8FD9\u6837\u4E5F\u5C31\u89E3\u91CA\u5F97\u901A\u4E86\u3002</p></blockquote><h2 id="source" tabindex="-1">set \u6E90\u7801 <a class="header-anchor" href="#source" aria-hidden="true">#</a></h2><details class="details custom-block"><summary>\u70B9\u51FB\u5C55\u5F00 Code</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">NODE_ENV</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">production</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span></span>
<span class="line"><span style="color:#F07178;">    (</span><span style="color:#82AAFF;">isUndef</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">isPrimitive</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">))</span></span>
<span class="line"><span style="color:#F07178;">  ) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">warn</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">Cannot set reactive property on undefined, null, or primitive value: </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">}\`</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">Array</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isArray</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">isValidArrayIndex</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">max</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">splice</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">in</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">in</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ob</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">__ob__</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_isVue</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">ob</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ob</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vmCount</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">NODE_ENV</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">production</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">warn</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Avoid adding reactive properties to a Vue instance or its root $data </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">at runtime - declare it upfront in the data option.</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    )</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">ob</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">defineReactive</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">ob</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">ob</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">dep</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">notify</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></details><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u9664\u53BB\u5F00\u53D1\u73AF\u5883\u4E0B\u7684\u62A5\u9519\u63D0\u793A\u4E5F\u5C3110\u591A\u884C\u4EE3\u7801...\uFF0C\u4E0B\u9762\u6211\u4EEC\u6765\u5173\u6CE8\u6838\u5FC3\u903B\u8F91</p><h2 id="array" tabindex="-1">\u6570\u7EC4\u5904\u7406 <a class="header-anchor" href="#array" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">Array</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isArray</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">isValidArrayIndex</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">max</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">splice</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// ... ignore</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u901A\u8FC7 <code>Array.isArray</code> \u6765\u5224\u65AD <code>target</code> \u662F\u5426\u662F\u6570\u7EC4\uFF0C\u5E76\u9A8C\u8BC1 <code>key</code> \u662F\u5426\u662F\u6570\u7EC4\u4E0B\u6807\uFF0C\u53EF\u80FD\u4F60\u4F1A\u5BF9 <code>splice</code> \u4E4B\u524D\u5BF9 <code>target.length</code> \u8D4B\u503C\u7684\u64CD\u4F5C\u611F\u5230\u56F0\u60D1\uFF0C\u8FD9\u91CC\u4E3E\u4E00\u4E2A\u5C0F\u{1F330}</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> key </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> arr1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">arr1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">splice</span><span style="color:#A6ACCD;">(key</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">666</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(arr1) </span><span style="color:#676E95;">// [1, 2, 3, 666]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> arr2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">arr2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> key</span></span>
<span class="line"><span style="color:#A6ACCD;">arr2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">splice</span><span style="color:#A6ACCD;">(key</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">666</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(arr2) </span><span style="color:#676E95;">// [1, 2, 3, empty x 2, 666]</span></span>
<span class="line"></span></code></pre></div><p>\u{1F9D0}\u5404\u4F4D\u662F\u4E0D\u662F\u770B\u51FA\u4EC0\u4E48&quot;\u7AEF\u502A&quot;\u4E86\uFF1F<br> \u8FD9\u91CC\u7684 <code>key</code> \u4EE3\u8868\u5C06\u8981\u6539\u53D8\u7684\u6570\u7EC4\u4E0B\u6807\uFF0C\u5F53 <code>key</code> \u5927\u4E8E\u6570\u7EC4\u7684 <code>length</code> \u65F6\uFF0C<code>splice</code> \u53EA\u4F1A\u5411\u6570\u7EC4\u7684\u672B\u5C3E\u65B0\u589E\u503C\uFF08\u4E5F\u53EF\u7406\u89E3\u4E3A\u5411\u6570\u7EC4 push \u4E86\u4E00\u4E2A\u503C\uFF09\u90A3\u4E48\u8FD9\u6837\u8DDF\u6211\u4EEC\u7684\u9884\u671F\u4E5F\u5C31\u4E0D\u540C\u4E86\uFF0C\u6240\u4EE5\u8981\u5BF9 <code>key</code> \u548C <code>length</code> \u53D6\u6700\u5927\u503C\u3002<br> \u5728 <code>Vue</code> \u7684\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u4E2D\uFF0C\u5DF2\u7ECF\u5BF9 <code>Array.prototype</code> \u8FDB\u884C\u4E86\u4E00\u5C42<strong>\u4EE3\u7406</strong>\u64CD\u4F5C\uFF0C\u4E4B\u540E\u6267\u884C <code>splice</code> \u65F6\uFF0C\u4F1A\u89E6\u53D1 <code>dep.notify</code> \u65B9\u6CD5\u53BB\u901A\u77E5\u89C6\u56FE\u66F4\u65B0\u3002</p><h2 id="object" tabindex="-1">\u5BF9\u8C61\u5904\u7406 <a class="header-anchor" href="#object" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki has-highlighted-lines"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">in</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">in</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line highlighted"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ob</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">__ob__</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">ob</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">defineReactive</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">ob</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">ob</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">dep</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">notify</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u9996\u5148\u68C0\u6D4B <code>key</code> \u662F\u5426\u5DF2\u7ECF\u5B58\u5728\u5728 <code>target</code> \u4E0A\u4E86\uFF0C\u90A3\u4E48\u76F4\u63A5\u8D4B\u503C\u5C31\u4F1A\u89E6\u53D1 <code>setter</code> \u51FD\u6570\u6765\u5BF9\u89C6\u56FE\u8FDB\u884C\u66F4\u65B0\u3002 \u4E4B\u540E\u83B7\u53D6\u4E86 <code>ob</code>\uFF0C\u8FD9\u662F\u4E00\u4E2A\u54CD\u5E94\u5F0F\u6570\u636E\u7684\u7684\u6807\u5FD7\uFF0C\u82E5\u76EE\u6807\u5BF9\u8C61\u4E0D\u662F<strong>\u54CD\u5E94\u5F0F\u6570\u636E</strong>\uFF0C\u90A3\u4E48\u76F4\u63A5\u8D4B\u503C\u8FD4\u56DE\uFF0C\u8FD9\u6BB5\u903B\u8F91\u5728\u5B98\u7F51\u5BF9 <code>Vue.set</code> \u4E2D\u7684<a href="https://v2.cn.vuejs.org/v2/api/#Vue-set" target="_blank" rel="noreferrer">\u4ECB\u7ECD</a>\u4E2D\u53EF\u4EE5\u627E\u5230<br> \u6700\u540E\uFF0C\u5982\u679C\u4E0A\u8FF0\u60C5\u51B5\u90FD\u4E0D\u7B26\u5408\uFF0C\u8BF4\u660E\uFF1A</p><ul><li>target \u4E0D\u662F\u6570\u7EC4</li><li>key \u4E0D\u5728 target \u4E0A</li><li>target \u662F\u4E00\u4E2A\u54CD\u5E94\u5F0F\u6570\u636E</li></ul><p>\u90A3\u4E48\u8FD9\u4E2A\u65F6\u5019\u5C31\u9700\u8981\u901A\u8FC7 <code>defineReactive</code> \u5C06 <code>target\u7684key\u503C</code> \u8F6C\u6362\u4E3A<strong>\u54CD\u5E94\u5F0F\u6570\u636E</strong>\uFF0C\u5E76\u901A\u8FC7 <code>ob.dep.notify</code> \u53BB\u901A\u77E5\u89C6\u56FE\u8FDB\u884C\u66F4\u65B0\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p><code>Vue.set</code> \u5BF9\u6570\u7EC4\u548C\u5BF9\u8C61\u5206\u522B\u5750\u4E86\u4E0D\u540C\u5904\u7406\uFF1A</p><ul><li>\u5BF9\u4E8E\u6570\u7EC4\uFF0C\u901A\u8FC7\u4F7F\u7528 <code>splice</code> \u65B9\u6CD5\u89E6\u53D1\u89C6\u56FE\u66F4\u65B0</li><li>\u901A\u8FC7\u5BF9\u8C61\uFF0C\u901A\u8FC7\u68C0\u6D4B\u76EE\u6807\u5BF9\u8C61\u662F\u5426\u5B58\u5728 <code>key</code> \u3001 \u662F\u5426\u662F\u54CD\u5E94\u5F0F\u6570\u636E\u548C\u8C03\u7528 <code>ob.dep.notify</code> \u6765\u89E6\u53D1\u89C6\u56FE\u66F4\u65B0</li></ul>`,29);function y(F,D,C,A,i,d){const s=e("TheEnd");return n(),l("div",null,[r,p(s)])}const v=a(c,[["render",y]]);export{g as __pageData,v as default};
