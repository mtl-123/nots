import{aP as t,Q as e,S as o,U as s,ad as p,af as l,aQ as n,D as i}from"./framework-339c481e.js";const c={},r=n(`<h2 id="编写vagrant脚本" tabindex="-1"><a class="header-anchor" href="#编写vagrant脚本" aria-hidden="true">#</a> 编写Vagrant脚本</h2><blockquote><p>使用Vagrantfile 批量创建虚拟机</p></blockquote><h3 id="写法一" tabindex="-1"><a class="header-anchor" href="#写法一" aria-hidden="true">#</a> 写法一</h3><blockquote><p>创建一个名称为 Vagrantfile 的文件并写入下面脚本信息</p></blockquote><div class="language-ruby line-numbers-mode" data-ext="rb"><pre class="language-ruby"><code><span class="token comment"># 使用host_list 批量定义不同的主机名称与虚拟机操作系统</span>
host_list <span class="token operator">=</span> <span class="token punctuation">[</span>

    <span class="token punctuation">{</span>
        <span class="token symbol">:name</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;host1&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:box</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;centos/7&quot;</span></span>
    
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token symbol">:name</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;host2&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:box</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;centos/7&quot;</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token symbol">:name</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;host3&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:box</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;centos/8&quot;</span></span>
    <span class="token punctuation">}</span>

<span class="token punctuation">]</span>

<span class="token comment"># 循环创建虚拟机主机</span>
Vagrant<span class="token punctuation">.</span>configure<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;2&quot;</span></span><span class="token punctuation">)</span> <span class="token keyword">do</span> <span class="token operator">|</span> config<span class="token operator">|</span>
    host_list<span class="token punctuation">.</span><span class="token keyword">each</span> <span class="token keyword">do</span> <span class="token operator">|</span> item<span class="token operator">|</span>
         config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>define item<span class="token punctuation">[</span><span class="token symbol">:name</span><span class="token punctuation">]</span> <span class="token keyword">do</span><span class="token operator">|</span>host<span class="token operator">|</span>
            <span class="token comment"># 设置虚拟机的Box操作系统    </span>
            host<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>box <span class="token operator">=</span> item<span class="token punctuation">[</span><span class="token symbol">:box</span><span class="token punctuation">]</span>            
         <span class="token keyword">end</span>
    <span class="token keyword">end</span>
 <span class="token keyword">end</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="写法二" tabindex="-1"><a class="header-anchor" href="#写法二" aria-hidden="true">#</a> 写法二</h3><div class="language-ruby line-numbers-mode" data-ext="rb"><pre class="language-ruby"><code>Vagrant<span class="token punctuation">.</span>configure<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;2&quot;</span></span><span class="token punctuation">)</span> <span class="token keyword">do</span> <span class="token operator">|</span> config<span class="token operator">|</span>
 <span class="token punctuation">(</span><span class="token number">1.</span><span class="token number">.3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">each</span> <span class="token keyword">do</span> <span class="token operator">|</span>i<span class="token operator">|</span>
  config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>define <span class="token string-literal"><span class="token string">&quot;k8s-node</span><span class="token interpolation"><span class="token delimiter punctuation">#{</span><span class="token content">i</span><span class="token delimiter punctuation">}</span></span><span class="token string">&quot;</span></span> <span class="token keyword">do</span> <span class="token operator">|</span>node<span class="token operator">|</span>
   <span class="token comment"># 设置虚拟机的Box</span>
   node<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>box <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;centos/7&quot;</span></span>

   <span class="token comment"># 设置虚拟机的主机名</span>
   node<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>hostname<span class="token operator">=</span><span class="token string-literal"><span class="token string">&quot;k8s-node</span><span class="token interpolation"><span class="token delimiter punctuation">#{</span><span class="token content">i</span><span class="token delimiter punctuation">}</span></span><span class="token string">&quot;</span></span>

   <span class="token comment"># 设置虚拟机的IP</span>
   node<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>network <span class="token string-literal"><span class="token string">&quot;private_network&quot;</span></span><span class="token punctuation">,</span> <span class="token symbol">ip</span><span class="token operator">:</span> <span class="token string-literal"><span class="token string">&quot;192.168.56.</span><span class="token interpolation"><span class="token delimiter punctuation">#{</span><span class="token content"><span class="token number">99</span><span class="token operator">+</span>i</span><span class="token delimiter punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">,</span> <span class="token symbol">netmask</span><span class="token operator">:</span> <span class="token string-literal"><span class="token string">&quot;255.255.255.0&quot;</span></span>

   <span class="token comment"># 设置主机与虚拟机的共享目录</span>
   <span class="token comment"># node.vm.synced_folder &quot;~/Documents/vagrant/share&quot;, &quot;/home/vagrant/share&quot;</span>

   <span class="token comment"># VirtaulBox相关配置</span>
   node<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>provider <span class="token string-literal"><span class="token string">&quot;virtualbox&quot;</span></span> <span class="token keyword">do</span> <span class="token operator">|</span>v<span class="token operator">|</span>
    <span class="token comment"># 设置虚拟机的名称</span>
    v<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;k8s-node</span><span class="token interpolation"><span class="token delimiter punctuation">#{</span><span class="token content">i</span><span class="token delimiter punctuation">}</span></span><span class="token string">&quot;</span></span>
    <span class="token comment"># 设置虚拟机的内存大小</span>
    v<span class="token punctuation">.</span>memory<span class="token operator">=</span> <span class="token number">4096</span>
    <span class="token comment"># 设置虚拟机的CPU个数</span>
    v<span class="token punctuation">.</span>cpus <span class="token operator">=</span> <span class="token number">4</span>
   <span class="token keyword">end</span>
  <span class="token keyword">end</span>
 <span class="token keyword">end</span>
<span class="token keyword">end</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="写法三" tabindex="-1"><a class="header-anchor" href="#写法三" aria-hidden="true">#</a> 写法三</h3><blockquote><p>创建不同的主机名称</p></blockquote><div class="language-ruby line-numbers-mode" data-ext="rb"><pre class="language-ruby"><code><span class="token comment"># vi: set ft=ruby :</span>

servers <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token symbol">:name</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;gitlab&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:type</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;master&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:box</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;ubuntu/focal64&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:box_version</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;20221021.0.0&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:eth1</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;192.168.56.10&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:mem</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;4094&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:cpu</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;2&quot;</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token symbol">:name</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;jenkins&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:type</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;node&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:box</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;ubuntu/focal64&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:box_version</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;20221021.0.0&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:eth1</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;192.168.56.11&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:mem</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;4094&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:cpu</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;2&quot;</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token symbol">:name</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;k8s-master&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:type</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;node&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:box</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;ubuntu/focal64&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:box_version</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;20221021.0.0&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:eth1</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;192.168.56.12&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:mem</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;4094&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:cpu</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;2&quot;</span></span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

Vagrant<span class="token punctuation">.</span>configure<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;2&quot;</span></span><span class="token punctuation">)</span> <span class="token keyword">do</span> <span class="token operator">|</span>config<span class="token operator">|</span>
    servers<span class="token punctuation">.</span><span class="token keyword">each</span> <span class="token keyword">do</span> <span class="token operator">|</span>opts<span class="token operator">|</span>
        config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>define opts<span class="token punctuation">[</span><span class="token symbol">:name</span><span class="token punctuation">]</span> <span class="token keyword">do</span> <span class="token operator">|</span>config<span class="token operator">|</span>
            config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>box <span class="token operator">=</span> opts<span class="token punctuation">[</span><span class="token symbol">:box</span><span class="token punctuation">]</span>
            config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>box_version <span class="token operator">=</span> opts<span class="token punctuation">[</span><span class="token symbol">:box_version</span><span class="token punctuation">]</span>
            config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>hostname <span class="token operator">=</span> opts<span class="token punctuation">[</span><span class="token symbol">:name</span><span class="token punctuation">]</span>
            config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>network <span class="token symbol">:private_network</span><span class="token punctuation">,</span> <span class="token symbol">ip</span><span class="token operator">:</span> opts<span class="token punctuation">[</span><span class="token symbol">:eth1</span><span class="token punctuation">]</span>
            config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>provider <span class="token string-literal"><span class="token string">&quot;virtualbox&quot;</span></span> <span class="token keyword">do</span> <span class="token operator">|</span>v<span class="token operator">|</span>
                v<span class="token punctuation">.</span>name <span class="token operator">=</span> opts<span class="token punctuation">[</span><span class="token symbol">:name</span><span class="token punctuation">]</span>
                v<span class="token punctuation">.</span>customize <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;modifyvm&quot;</span></span><span class="token punctuation">,</span> <span class="token symbol">:id</span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;--groups&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;/DevOps Environment&quot;</span></span><span class="token punctuation">]</span>
                v<span class="token punctuation">.</span>customize <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;modifyvm&quot;</span></span><span class="token punctuation">,</span> <span class="token symbol">:id</span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;--memory&quot;</span></span><span class="token punctuation">,</span> opts<span class="token punctuation">[</span><span class="token symbol">:mem</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
            <span class="token keyword">end</span>
        <span class="token keyword">end</span>
    <span class="token keyword">end</span>
<span class="token keyword">end</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建k8s集群" tabindex="-1"><a class="header-anchor" href="#创建k8s集群" aria-hidden="true">#</a> 创建k8s集群</h3>`,13),u={href:"https://medium.com/@raj10x/multi-node-kubernetes-cluster-with-vagrant-virtualbox-and-kubeadm-9d3eaac28b98",target:"_blank",rel:"noopener noreferrer"},d=n(`<div class="language-ruby line-numbers-mode" data-ext="rb"><pre class="language-ruby"><code><span class="token comment"># -*- mode: ruby -*-</span>
<span class="token comment"># vi: set ft=ruby :</span>

servers <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token symbol">:name</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;k8s-head&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:type</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;master&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:box</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;ubuntu/xenial64&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:box_version</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;20180831.0.0&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:eth1</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;192.168.56.10&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:mem</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;4094&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:cpu</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;2&quot;</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token symbol">:name</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;k8s-node-1&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:type</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;node&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:box</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;ubuntu/xenial64&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:box_version</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;20180831.0.0&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:eth1</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;192.168.56.11&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:mem</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;4094&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:cpu</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;2&quot;</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token symbol">:name</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;k8s-node-2&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:type</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;node&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:box</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;ubuntu/xenial64&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:box_version</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;20180831.0.0&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:eth1</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;192.168.56.12&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:mem</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;4094&quot;</span></span><span class="token punctuation">,</span>
        <span class="token symbol">:cpu</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;2&quot;</span></span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token comment"># 使用kubeadm安装k8s的脚本将在提供一个框后执行</span>
<span class="token variable">$configureBox</span> <span class="token operator">=</span> <span class="token string-literal heredoc-string"><span class="token delimiter"><span class="token punctuation">&lt;&lt;-</span><span class="token symbol">SCRIPT</span></span><span class="token string">
    # install docker v17.03
    # reason for not using docker provision is that it always installs latest version of the docker, but kubeadm requires 17.03 or older
    apt-get update
    apt-get install -y apt-transport-https ca-certificates curl software-properties-common
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
    add-apt-repository &quot;deb https://download.docker.com/linux/$(. /etc/os-release; echo &quot;$ID&quot;) $(lsb_release -cs) stable&quot;
    apt-get update &amp;&amp; apt-get install -y docker-ce=$(apt-cache madison docker-ce | grep 17.03 | head -1 | awk &#39;{print $3}&#39;)
    # run docker commands as vagrant user (sudo not required)
    usermod -aG docker vagrant
    # install kubeadm
    apt-get install -y apt-transport-https curl
    curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add -
    cat &lt;&lt;EOF &gt;/etc/apt/sources.list.d/kubernetes.list
    deb http://apt.kubernetes.io/ kubernetes-xenial main
EOF
    apt-get update
    apt-get install -y kubelet kubeadm kubectl
    apt-mark hold kubelet kubeadm kubectl
    # kubelet requires swap off
    swapoff -a
    # keep swap off after reboot
    sudo sed -i &#39;/ swap / s/^\\(.*\\)$/#\\1/g&#39; /etc/fstab
    # ip of this box
    IP_ADDR=\`ifconfig enp0s8 | grep Mask | awk &#39;{print $2}&#39;| cut -f2 -d:\`
    # set node-ip
    sudo sed -i &quot;/^[^#]*KUBELET_EXTRA_ARGS=/c\\KUBELET_EXTRA_ARGS=--node-ip=$IP_ADDR&quot; /etc/default/kubelet
    sudo systemctl restart kubelet
</span><span class="token delimiter"><span class="token symbol">SCRIPT</span></span></span>

<span class="token variable">$configureMaster</span> <span class="token operator">=</span> <span class="token string-literal heredoc-string"><span class="token delimiter"><span class="token punctuation">&lt;&lt;-</span><span class="token symbol">SCRIPT</span></span><span class="token string">
    echo &quot;This is master&quot;
    # ip of this box
    IP_ADDR=\`ifconfig enp0s8 | grep Mask | awk &#39;{print $2}&#39;| cut -f2 -d:\`

    # install k8s master
    HOST_NAME=$(hostname -s)
    kubeadm init --apiserver-advertise-address=$IP_ADDR --apiserver-cert-extra-sans=$IP_ADDR  --node-name $HOST_NAME --pod-network-cidr=192.168.0.0/16
    
    # 正在复制凭据到普通用户 vagrant
    sudo --user=vagrant mkdir -p /home/vagrant/.kube
    cp -i /etc/kubernetes/admin.conf /home/vagrant/.kube/config
    chown $(id -u vagrant):$(id -g vagrant) /home/vagrant/.kube/config

    # 安装Calico吊舱网络插件
    export KUBECONFIG=/etc/kubernetes/admin.conf
    kubectl apply -f https://docs.projectcalico.org/v3.1/getting-started/kubernetes/installation/hosted/rbac-kdd.yaml
    kubectl apply -f https://docs.projectcalico.org/v3.1/getting-started/kubernetes/installation/hosted/kubernetes-datastore/calico-networking/1.7/calico.yaml
    kubeadm token create --print-join-command &gt;&gt; /etc/kubeadm_join_cmd.sh
    chmod +x /etc/kubeadm_join_cmd.sh
    
    # required for setting up password less ssh between guest VMs
    sudo sed -i &quot;/^[^#]*PasswordAuthentication[[:space:]]no/c\\PasswordAuthentication yes&quot; /etc/ssh/sshd_config
    sudo service sshd restart
</span><span class="token delimiter"><span class="token symbol">SCRIPT</span></span></span>

<span class="token variable">$configureNode</span> <span class="token operator">=</span> <span class="token string-literal heredoc-string"><span class="token delimiter"><span class="token punctuation">&lt;&lt;-</span><span class="token symbol">SCRIPT</span></span><span class="token string">
    echo &quot;This is worker&quot;
    apt-get install -y sshpass
    sshpass -p &quot;vagrant&quot; scp -o StrictHostKeyChecking=no vagrant@192.168.56.10:/etc/kubeadm_join_cmd.sh .
    sh ./kubeadm_join_cmd.sh
</span><span class="token delimiter"><span class="token symbol">SCRIPT</span></span></span>

Vagrant<span class="token punctuation">.</span>configure<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;2&quot;</span></span><span class="token punctuation">)</span> <span class="token keyword">do</span> <span class="token operator">|</span>config<span class="token operator">|</span>

    servers<span class="token punctuation">.</span><span class="token keyword">each</span> <span class="token keyword">do</span> <span class="token operator">|</span>opts<span class="token operator">|</span>
        config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>define opts<span class="token punctuation">[</span><span class="token symbol">:name</span><span class="token punctuation">]</span> <span class="token keyword">do</span> <span class="token operator">|</span>config<span class="token operator">|</span>

            config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>box <span class="token operator">=</span> opts<span class="token punctuation">[</span><span class="token symbol">:box</span><span class="token punctuation">]</span>
            config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>box_version <span class="token operator">=</span> opts<span class="token punctuation">[</span><span class="token symbol">:box_version</span><span class="token punctuation">]</span>
            config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>hostname <span class="token operator">=</span> opts<span class="token punctuation">[</span><span class="token symbol">:name</span><span class="token punctuation">]</span>
            config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>network <span class="token symbol">:private_network</span><span class="token punctuation">,</span> <span class="token symbol">ip</span><span class="token operator">:</span> opts<span class="token punctuation">[</span><span class="token symbol">:eth1</span><span class="token punctuation">]</span>

            config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>provider <span class="token string-literal"><span class="token string">&quot;virtualbox&quot;</span></span> <span class="token keyword">do</span> <span class="token operator">|</span>v<span class="token operator">|</span>

                v<span class="token punctuation">.</span>name <span class="token operator">=</span> opts<span class="token punctuation">[</span><span class="token symbol">:name</span><span class="token punctuation">]</span>
              v<span class="token punctuation">.</span>customize <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;modifyvm&quot;</span></span><span class="token punctuation">,</span> <span class="token symbol">:id</span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;--groups&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;/Ballerina Development&quot;</span></span><span class="token punctuation">]</span>
                v<span class="token punctuation">.</span>customize <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;modifyvm&quot;</span></span><span class="token punctuation">,</span> <span class="token symbol">:id</span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;--memory&quot;</span></span><span class="token punctuation">,</span> opts<span class="token punctuation">[</span><span class="token symbol">:mem</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
            <span class="token keyword">end</span>
        <span class="token keyword">end</span>
    <span class="token keyword">end</span>
<span class="token keyword">end</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="远程脚本安装k8s" tabindex="-1"><a class="header-anchor" href="#远程脚本安装k8s" aria-hidden="true">#</a> 远程脚本安装K8s</h2><div class="language-ruby line-numbers-mode" data-ext="rb"><pre class="language-ruby"><code><span class="token comment"># -*- mode: ruby -*-</span>
<span class="token comment"># vi: set ft=ruby :</span>

Vagrant<span class="token punctuation">.</span>configure<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;2&quot;</span></span><span class="token punctuation">)</span> <span class="token keyword">do</span> <span class="token operator">|</span>config<span class="token operator">|</span>
  config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>define <span class="token string-literal"><span class="token string">&quot;master&quot;</span></span> <span class="token keyword">do</span> <span class="token operator">|</span>dev<span class="token operator">|</span>
  config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>box <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;gbailey/amzn2&quot;</span></span>
  config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>box_version <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;20221023.0.0&quot;</span></span>
  dev<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>provider <span class="token string-literal"><span class="token string">&quot;virtualbox&quot;</span></span> <span class="token keyword">do</span> <span class="token operator">|</span>v<span class="token operator">|</span>
    v<span class="token punctuation">.</span>memory<span class="token operator">=</span> <span class="token number">4096</span>
    v<span class="token punctuation">.</span>cpus <span class="token operator">=</span> <span class="token number">2</span>
    
  config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>provision <span class="token string-literal"><span class="token string">&quot;B&quot;</span></span><span class="token punctuation">,</span> <span class="token symbol">type</span><span class="token operator">:</span> <span class="token string-literal"><span class="token string">&quot;shell&quot;</span></span><span class="token punctuation">,</span> <span class="token symbol">inline</span><span class="token operator">:</span><span class="token string-literal heredoc-string"><span class="token delimiter"><span class="token punctuation">&lt;&lt;-</span><span class="token symbol">SHELL</span></span><span class="token string">
  
  echo -e &quot;\\033[33m download scritp file \\033[0m&quot;
   wget https://raw.githubusercontent.com/mtl-123/kubernetes/mei/script/install_ctr_k8s.sh
  echo -e &quot;\\033[31m Add executable permissions \\033[0m&quot;
  chmod +x install_ctr_k8s.sh
  echo &quot;================================== start install k8s ============================================= &quot;
  sudo ./install_ctr_k8s.sh

  echo -e &quot;\\033[32m Kubernetes install successful \\033[0m&quot;
  
  </span><span class="token delimiter"><span class="token symbol">SHELL</span></span></span>
  <span class="token keyword">end</span>
<span class="token keyword">end</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function k(v,m){const a=i("ExternalLinkIcon");return e(),o("div",null,[r,s("p",null,[s("a",u,[p("批量创建k8s集群"),l(a)])]),d])}const g=t(c,[["render",k],["__file","Vagrantfile-模板编写.html.vue"]]);export{g as default};
