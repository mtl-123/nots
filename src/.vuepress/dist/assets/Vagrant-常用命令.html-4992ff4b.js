import{aP as i,Q as l,S as r,U as a,ad as n,af as e,aQ as t,D as c}from"./framework-339c481e.js";const d={},o=a("h2",{id:"vagrant-简介",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#vagrant-简介","aria-hidden":"true"},"#"),n(" Vagrant 简介")],-1),p=a("blockquote",null,[a("p",null,"Vagrant是一种在单一工作流中构建和管理虚拟机环境的工具。凭借易于使用的工作流和对自动化的关注。 Vagrant降低了开发环境的设置时间，增加了产品平价，并使“在我的机器上工作”的借口成为过去的遗留问题。")],-1),v={href:"https://www.vagrantup.com/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://app.vagrantup.com/boxes/search",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.vagrantup.com/docs/cli",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.jianshu.com/p/a5896360493b",target:"_blank",rel:"noopener noreferrer"},h=t(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># windows 系统</span>
https://releases.hashicorp.com/vagrant/2.3.2/vagrant_2.3.2_windows_amd64.msi

<span class="token comment"># ubuntu 系统</span>
<span class="token function">wget</span> -O- https://apt.releases.hashicorp.com/gpg <span class="token operator">|</span> gpg <span class="token parameter variable">--dearmor</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /usr/share/keyrings/hashicorp-archive-keyring.gpg
<span class="token builtin class-name">echo</span> <span class="token string">&quot;deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com <span class="token variable"><span class="token variable">$(</span>lsb_release <span class="token parameter variable">-cs</span><span class="token variable">)</span></span> main&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/hashicorp.list
<span class="token function">sudo</span> <span class="token function">apt</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> vagrant <span class="token parameter variable">-y</span>

<span class="token comment"># centos 系统</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils
<span class="token function">sudo</span> yum-config-manager --add-repo https://rpm.releases.hashicorp.com/RHEL/hashicorp.repo
<span class="token function">sudo</span> yum <span class="token parameter variable">-y</span> <span class="token function">install</span> vagrant

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><h2 id="查看" tabindex="-1"><a class="header-anchor" href="#查看" aria-hidden="true">#</a> 查看</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载虚拟机镜像可选择不同虚拟机平台的系统镜像文件</span>
vagrant box <span class="token function">add</span> generic/ubuntu2004
<span class="token comment"># 指定需要下载的虚拟机平台和系统镜像版本</span>
vagrant box <span class="token function">add</span> generic/ubuntu2004 <span class="token parameter variable">--provider</span><span class="token operator">=</span>virtualbox --box-version<span class="token operator">=</span><span class="token number">3.1</span>.22
<span class="token comment"># 查看下载到本地的box镜像</span>
vagrant box list
<span class="token comment"># 查看已经创建的box虚拟机配置文件详情</span>
vagrant ssh-config
<span class="token comment"># 查看所有box运行状态</span>
vagrant status 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 指定box镜像初始化,会得到一个 Vagrantfile文件，里面使用的基础box是初始化指定的box镜像名</span>
vagrant init box_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动所有虚拟机</span>
vagrant up
<span class="token comment"># 启动本地所有环境虚拟机</span>
vagrant up <span class="token parameter variable">--provision</span> 
<span class="token comment"># 指定某台虚拟机启动</span>
vagrant up vm_name
<span class="token comment"># 指定box虚拟化平台并启动</span>
vagrant up <span class="token parameter variable">--provider</span> virtualbox
<span class="token comment"># 唤醒虚拟机</span>
vagrant resume  vm_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="停止" tabindex="-1"><a class="header-anchor" href="#停止" aria-hidden="true">#</a> 停止</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 关机所有box</span>
vagrant <span class="token function">halt</span>
<span class="token comment"># 指定某台box关机</span>
vagrant <span class="token function">halt</span> vm_name
<span class="token comment"># 挂起虚拟机</span>
vagrant <span class="token function">suspend</span> vm_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="加载" tabindex="-1"><a class="header-anchor" href="#加载" aria-hidden="true">#</a> 加载</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 重新开始</span>
vagrant resume vm_name
<span class="token comment"># 重新加载</span>
vagrant reload vm_name
<span class="token comment"># 重载虚拟机</span>
vagrant reload <span class="token parameter variable">--provision</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 删除box镜像</span>
vagrant box remove box_name
<span class="token comment"># 指定平台和版本号进行删除本地镜像文件</span>
vagrant box remove <span class="token parameter variable">--provider</span><span class="token operator">=</span>hyperv --box-version<span class="token operator">=</span><span class="token number">3.1</span>.22

<span class="token comment"># 强制删除所有创建的box虚拟机</span>
vagrant destroy <span class="token parameter variable">--force</span>
<span class="token comment"># 指定某台box虚拟机进行删除</span>
vagrant destroy vm_name <span class="token parameter variable">--force</span>
<span class="token comment"># 清除无效的虚拟机缓存条目</span>
vagrant global-status <span class="token parameter variable">--prune</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="进入box内部" tabindex="-1"><a class="header-anchor" href="#进入box内部" aria-hidden="true">#</a> 进入box内部</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入指定虚拟机内部</span>
vagrant <span class="token function">ssh</span>  vm_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="网络" tabindex="-1"><a class="header-anchor" href="#网络" aria-hidden="true">#</a> 网络</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>vagrant 网路<span class="token punctuation">]</span><span class="token punctuation">(</span>https://www.ityoudao.cn/posts/vagrant-network/<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="打包" tabindex="-1"><a class="header-anchor" href="#打包" aria-hidden="true">#</a> 打包</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 插件vagrant-vbguest</span>
<span class="token comment"># 作用：提高box运行效率</span>
<span class="token comment"># 安装指定版本的agrant-vbguest插件</span>
vagrant plugin <span class="token function">install</span> vagrant-vbguest --plugin-version <span class="token number">0.21</span>
<span class="token comment"># 把当前做好的box环境打包成box镜像，导出的box名为package.box</span>
vagrant package <span class="token parameter variable">--bash</span>   vm_name
<span class="token comment"># 如何使用打包的package.box镜像</span>
vagrant  box <span class="token function">add</span> <span class="token parameter variable">--name</span> box_name <span class="token parameter variable">--provider</span><span class="token operator">=</span>virtualbox ./package.box
<span class="token comment"># 查看创建的box_name的基础box</span>
vagrant box list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看virtualbox-网路配置详情" tabindex="-1"><a class="header-anchor" href="#查看virtualbox-网路配置详情" aria-hidden="true">#</a> 查看virtualbox 网路配置详情</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 命令行查询VBox虚拟机中的ip地址</span>
<span class="token comment"># 先查询需要查看ip的虚拟机名称</span>
VBoxManage list runningvms

<span class="token comment"># 再查看对应虚拟机的ip地址</span>
VBoxManage guestproperty enumerate slaver1-51<span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;Net.*V4.*IP&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h2><h3 id="scp" tabindex="-1"><a class="header-anchor" href="#scp" aria-hidden="true">#</a> scp</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 作用： 复制宿主机文件到box内部</span>
<span class="token comment"># 安装</span>
vagrant plugin <span class="token function">install</span> vagrant-scp
<span class="token comment"># 示例：</span>
vagrant <span class="token function">scp</span> local_file vm_name:~/remote_file_path
<span class="token comment"># 详解</span>
- vagrant： 命令
- <span class="token function">scp</span> ：参数
- local_file: 本地文件
- vm_name: 虚拟机名称
- ~/remot_file_path: 传输到虚拟机中的绝对路径位置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vagrant-vbguest" tabindex="-1"><a class="header-anchor" href="#vagrant-vbguest" aria-hidden="true">#</a> vagrant-vbguest</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 作用：提高虚拟机效率</span>
vagrant  plugin <span class="token function">install</span>  vagrant-vbguest
<span class="token comment"># 安装指定版本的vbguest插件</span>
vagrant plugin <span class="token function">install</span> vagrant-vbguest --plugin-version <span class="token number">0.21</span>
<span class="token comment"># 卸载插件</span>
vagrant plugin uninstall vagrant-vbguest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30);function g(k,x){const s=c("ExternalLinkIcon");return l(),r("div",null,[o,p,a("p",null,[a("a",v,[n("Vagrant官网"),e(s)])]),a("p",null,[a("a",m,[n("Vagrant镜像地址"),e(s)])]),a("p",null,[a("a",u,[n("Vagrant命令手册"),e(s)])]),a("p",null,[a("a",b,[n("本地vagrant镜像box上传到vagrant cloud并开源使用"),e(s)])]),h])}const _=i(d,[["render",g],["__file","Vagrant-常用命令.html.vue"]]);export{_ as default};
