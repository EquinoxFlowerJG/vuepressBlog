
# 一行 CSS 为网页添加暗黑模式支持

文章来源：高级前端进阶。[链接地址](https://mp.weixin.qq.com/s?__biz=MzA4Nzg0MDM5Nw==&mid=2247486663&idx=1&sn=eb474e39ff37c468be11d55e825a5a7f&chksm=90320f25a745863373bcf050903bbf1c636d0a93b7d6a78145324125e2fc575d800a69b5a86a&mpshare=1&scene=23&srcid=0917TTVPTpnyhnXKlgRGtOEl&sharer_sharetime=1600343771395&sharer_shareid=bfe3b8cb87162b650d601f45658ce761#rd)

[以下文章来源于前端瓶子君 ，由作者瓶子君译。]  
[翻译自：https://dev.to/akhilarjun/one-line-dark-mode-using-css-24li]

本文将介绍一种简单易懂的方法实现网站暗黑模式

话不多说，我们开始吧！👾

## 一、方法：仅需增加以下一行魔法 CSS：
```css
    html[theme='dark-mode'] {
        filter: invert(1) hue-rotate(180deg);
    }
```
添加完成后页面瞬间转换成暗黑模式有没有✌️?!

## 二、解析：
1. filter CSS 属性将模糊或颜色偏移等图形效果应用于元素。滤镜通常用于调整图像，背景和边框的渲染。（参考：MDN Web文档）

对于暗黑模式，将使用两个 filter ：invert 和 hue-rotate。
   - （1）invert：反转配色。黑色变为白色，白色变为黑色，所有颜色都是如此。
   - （2）hue-rotate：帮助我们处理所有其他非黑色和白色的颜色。将色相旋转180度，我们确保应用程序的颜色主题不会改变，而只是减弱其颜色。

2. 这个方法的唯一缺点是，它还会反转应用程序中的所有图像。因此，我们将对所有图像添加相同的规则，以逆转效果。
```css
    html[theme='dark-mode'] img{
        filter: invert(1) hue-rotate(180deg);
    }
```
我们还将向HTML元素添加一个 transition ，以确保过渡不会过于花哨!
```css
    html {
        transition: color 300ms, background-color 300ms;
    }
```

## 三、完整代码：
```css
    html[theme='dark-mode'] {
        filter: invert(1) hue-rotate(180deg);
    }

    html[theme='dark-mode'] img{
        filter: invert(1) hue-rotate(180deg);
    }

    html {
        transition: color 300ms, background-color 300ms;
    }
```