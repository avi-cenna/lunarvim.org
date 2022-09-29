import{r as o,o as l,c as i,a as n,b as e,F as p,e as t,d as s}from"./app.c4dc980c.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const r={},u=t(`<h1 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h1><h2 id="how-do-i" tabindex="-1"><a class="header-anchor" href="#how-do-i" aria-hidden="true">#</a> How do I [..] ?</h2><h3 id="how-do-i-add-my-own-keybindings" tabindex="-1"><a class="header-anchor" href="#how-do-i-add-my-own-keybindings" aria-hidden="true">#</a> How do I add my own keybindings?</h3><ul><li>View all defaults by pressing <code>&lt;leader&gt;Lk</code></li><li>change the leader key</li></ul><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>leader <span class="token operator">=</span> <span class="token string">&quot;space&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>Add your own binding</li></ul><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">-- save the buffer</span>
lvim<span class="token punctuation">.</span>keys<span class="token punctuation">.</span>normal_mode<span class="token punctuation">[</span><span class="token string">&quot;&lt;C-s&gt;&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;:w&lt;cr&gt;&quot;</span>
<span class="token comment">-- move the cursor without leaving insert mode</span>
lvim<span class="token punctuation">.</span>keys<span class="token punctuation">.</span>insert_mode<span class="token punctuation">[</span><span class="token string">&quot;&lt;A-h&gt;&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;&lt;Left&gt;&quot;</span>
lvim<span class="token punctuation">.</span>keys<span class="token punctuation">.</span>insert_mode<span class="token punctuation">[</span><span class="token string">&quot;&lt;A-l&gt;&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;&lt;Right&gt;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>Remove or un-map a default binding</li></ul><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">-- disable completely</span>
lvim<span class="token punctuation">.</span>keys<span class="token punctuation">.</span>normal_mode<span class="token punctuation">[</span><span class="token string">&quot;&lt;C-Up&gt;&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
<span class="token comment">-- define a new behavior</span>
lvim<span class="token punctuation">.</span>keys<span class="token punctuation">.</span>normal_mode<span class="token punctuation">[</span><span class="token string">&quot;&lt;C-q&gt;&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;:q&lt;cr&gt;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,9),d=s("You can also use the NeoVim API directly using "),m={href:"https://neovim.io/doc/user/api.html#nvim_set_keymap()",target:"_blank",rel:"noopener noreferrer"},h=s("nvim_set_keymap"),g=t(`<div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>vim<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">nvim_set_keymap</span><span class="token punctuation">(</span><span class="token string">&quot;i&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&lt;C-p&gt;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&lt;cmd&gt;Telescope find_files&lt;cr&gt;&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> noremap <span class="token operator">=</span> <span class="token keyword">true</span><span class="token punctuation">,</span> silent <span class="token operator">=</span> <span class="token keyword">true</span><span class="token punctuation">,</span> expr <span class="token operator">=</span> <span class="token keyword">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>Or you can use the native vim way for those tricky bindings that you are not sure how to translate just yet</li></ul><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">-- Search and replace word under cursor using &lt;F2&gt;</span>
vim<span class="token punctuation">.</span>cmd <span class="token string">[[ nnoremap &lt;F2&gt; :%s/&lt;c-r&gt;&lt;c-w&gt;/&lt;c-r&gt;&lt;c-w&gt;/gc&lt;c-f&gt;$F/i ]]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="what-is-null-ls-and-why-do-you-use-it" tabindex="-1"><a class="header-anchor" href="#what-is-null-ls-and-why-do-you-use-it" aria-hidden="true">#</a> What is <code>null-ls</code> and why do you use it?</h2><p>For C/C++ we have the <code>clangd</code> by <code>llvm</code> which can also use its siblings&#39; abilities <code>clang-tidy</code> and <code>clang-format</code> to support additional linting and formatting. But something like <code>pyright</code> doesn&#39;t support formatting, so we use <code>null-ls</code> to register <code>black</code> and <code>flake8</code> for example, as a &quot;fake&quot; language server.</p><p>Since it&#39;s not using a separate binary it&#39;s called <code>null-ls</code> or <em>null language server</em>.</p><h2 id="where-can-i-find-some-example-configs" tabindex="-1"><a class="header-anchor" href="#where-can-i-find-some-example-configs" aria-hidden="true">#</a> Where can I find some example configs?</h2><p>If you want ideas for configuring LunarVim you can look at these repositories.</p>`,8),k=s("Chris - "),b={href:"https://github.com/ChristianChiarulli/lvim",target:"_blank",rel:"noopener noreferrer"},_=s("https://github.com/ChristianChiarulli/lvim"),v=s("Abouzar -"),f={href:"https://github.com/abzcoding/lvim",target:"_blank",rel:"noopener noreferrer"},y=s(" https://github.com/abzcoding/lvim "),q=s("Nelson -"),w={href:"https://github.com/rebuilt/lvim",target:"_blank",rel:"noopener noreferrer"},x=s(" https://github.com/rebuilt/lvim ");function C(F,I){const a=o("ExternalLinkIcon");return l(),i(p,null,[u,n("ul",null,[n("li",null,[d,n("a",m,[h,e(a)])])]),g,n("ul",null,[n("li",null,[k,n("a",b,[_,e(a)])]),n("li",null,[v,n("a",f,[y,e(a)])]),n("li",null,[q,n("a",w,[x,e(a)])])])],64)}var N=c(r,[["render",C]]);export{N as default};
