---
# 当前页面内容标题
title: Shell-之-grep命令
# 当前页面图标
icon: write
# 分类
category:
  - grep
# 标签
tag:
  - grep
sticky: false
# 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。
star: false
# 是否将该文章添加至文章列表中
article: true
# 是否将该文章添加至时间线中
timeline: true
---

## Linux中grep命令的12个实际例子

### 1. 搜索和查找文件

> 列出系统上安装了那些python模块

`rpm -aq | grep -i python`

### 2. 搜索和过滤文件
> 这 grep 还可用于在单个文件或多个文件中搜索和过滤。 让我们来看看这个场景：

> 删除nginx配置文件所有注释行

`grep -v "#"  /etc/nginx/nginx.conf`

[grep 原文档地址：](https://mp.weixin.qq.com/s/sEo3oQ6dpyTD2s06rzvVyw)

[nushell](https://mp.weixin.qq.com/s/8nerKR9w8vu8gPyVW_Sveg)