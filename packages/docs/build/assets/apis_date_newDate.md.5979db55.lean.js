import{d as l,c as o,a as s,t as a,b as n,e as p,o as c}from"./app.99fe4067.js";const i=s("h1",{id:"newdate",tabindex:"-1"},[n("newDate "),s("a",{class:"header-anchor",href:"#newdate","aria-hidden":"true"},"#")],-1),r=s("h3",{id:"添加版本",tabindex:"-1"},[n("添加版本 "),s("a",{class:"header-anchor",href:"#添加版本","aria-hidden":"true"},"#")],-1),y=p(`<h3 id="例子" tabindex="-1">例子 <a class="header-anchor" href="#例子" aria-hidden="true">#</a></h3><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">($$</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">newDate</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2022-01-02 14:22:22</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// =&gt; Sun Jan 02 2022 14:22:22 GMT+0800 (中国标准时间)</span></span>
<span class="line"></span></code></pre></div><h3 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-hidden="true">#</a></h3><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">string</span><span style="color:#676E95;font-style:italic;"> 字符串日期 xxxx-xx-xx格式</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">returns</span><span style="color:#676E95;font-style:italic;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> newDate</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">string</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Date</span></span>
<span class="line"></span></code></pre></div>`,4),F=JSON.parse('{"title":"newDate","description":"","frontmatter":{},"headers":[{"level":3,"title":"添加版本","slug":"添加版本","link":"#添加版本","children":[]},{"level":3,"title":"例子","slug":"例子","link":"#例子","children":[]},{"level":3,"title":"类型定义","slug":"类型定义","link":"#类型定义","children":[]}],"relativePath":"apis/date/newDate.md"}'),d={name:"apis/date/newDate.md"},f=l({...d,setup(D){const e="创建Date对象，解决ios端以xxxx-xx-xx格式创建日期时为NaN的问题",t="1.0.0";return(h,C)=>(c(),o("div",null,[i,s("p",null,a(e)),r,s("p",null,a(t)),y]))}});export{F as __pageData,f as default};
