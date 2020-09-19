<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">

<!-- 5秒钟之后跳转到http://www.baidu.com地址 -->
<meta http-equiv="Refresh" content="5;url=http://www.baidu.com" />
 
<!-- viewport
viewport主要是影响移动端页面布局的，例如：
content 参数：

width viewport 宽度(数值/device-width)
height viewport 高度(数值/device-height)
initial-scale 初始缩放比例
maximum-scale 最大缩放比例
minimum-scale 最小缩放比例
user-scalable 是否允许用户缩放(yes/no) -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- SEO 优化部分 -->
<!-- 页面标题<title>标签(head 头部必须) -->
<title>your title</title>
<!-- 页面关键词 keywords -->
<meta name="keywords" content="your keywords">
<!-- 页面描述内容 description -->
<meta name="description" content="your description">
<!-- 定义网页作者 author -->
<meta name="author" content="author,email address">
<!-- 定义网页搜索引擎索引方式，robotterms 是一组使用英文逗号「,」分割的值，通常有如下几种取值：none，noindex，nofollow，all，index和follow。 
all：文件将被检索，且页面上的链接可以被查询；
none：文件将不被检索，且页面上的链接不可以被查询；
index：文件将被检索；
follow：页面上的链接可以被查询；
noindex：文件将不被检索；
nofollow：页面上的链接不可以被查询。
-->
<meta name="robots" content="index,follow">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<!-- 如果安装了GCF，则使用GCF（谷歌内嵌浏览器框架Google Chrome Frame:GCF）来渲染页面，如果没安装GCF，则使用最高版本的IE内核进行渲染。
http-equiv="X-UA-Compatible"，这个是IE8的专用标记,用来指定IE8浏览器去模拟某个特定版本的IE浏览器的渲染方式
<meta http-equiv="X-UA-Compatible" content="IE=6" >  使用IE6
<meta http-equiv="X-UA-Compatible" content="IE=7" >  使用IE7
<meta http-equiv="X-UA-Compatible" content="IE=8" >  使用IE8
-->
<meta name="renderer" content="webkit|ie-comp|ie-stand">
<!-- 国内浏览器很多都是双内核（webkit和Trident），webkit内核高速浏览，IE内核兼容网页和旧版网站。而添加meta标签的网站可以控制浏览器选择何种内核渲染<meta name="renderer" content="webkit|ie-comp|ie-stand">
content的取值为webkit,ie-comp,ie-stand之一，区分大小写，分别代表用webkit内核，IE兼容内核，IE标准内核。 -->
</head>