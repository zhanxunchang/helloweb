[TOC]

# 学习 Web 开发

以下是 MDN 学习区涵盖的所有主题列表：

- [Web入门](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web)

  为初学者提供一个实用的 Web 开发入门。

- [HTML — 构建网站](https://developer.mozilla.org/zh-CN/docs/Learn/HTML)

  HTML 是我们用来构造网站内容的不同部分并定义它们的意义或目的的语言。本主题详细讲授 HTML。

- [CSS — 美化网站](https://developer.mozilla.org/zh-CN/docs/Learn/CSS)

  我们可以使用 CSS 这个语言来设计和布局我们的 Web 内容，以及添加像动画一类的行为。这个主题提供了详细的 CSS 指导。

- [JavaScript — 动态客户端脚本语言](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript)

  JavaScript 是用于向 Web 页面添加动态功能的脚本语言。本主题讲授了编写和理解JavaScript 所需的所有基本要点。

- [可访问性 — 让网站能被所有人使用](https://developer.mozilla.org/zh-CN/docs/Learn/Accessibility)

  可访问性是将 Web 内容尽可能地提供给尽可能多的人的实践，而不管残疾、设备、地区或其他不同的因素。这个主题给了您所有您需要了解的内容。

- [工具集与测试](https://developer.mozilla.org/zh-CN/docs/Learn/Tools_and_testing)

  本主题介绍了开发人员用来促进其工作的工具，如跨浏览器测试工具。

- [服务端网站编程](https://developer.mozilla.org/zh-CN/docs/Learn/Server-side)

  即使您专注于客户端 Web 开发，了解服务器和服务端代码功能如何工作仍然是有用的。本主题提供服务器以及服务端代码特性如何工作的概述，并详细介绍了如何使用最流行的两个框架—— Django（Python）以及 Express（node.js）建立一个服务端的应用程序。

# Web入门

## 1.运行一个本地 HTTP 服务器

1.安装python，进入命令行。

检查Python是否安装，请输入以下命令：

```bash
python -V
```

2.`cd`命令导航到您的示例所在的目录

3.输入命令在该目录中启动服务器：

```bash
＃如果上面返回的Python版本是3.X 
python -m http.server 
＃如果上面返回的Python版本是2.X 
python -m SimpleHTTPServer
```

默认情况下，这将在本地Web服务器上的端口8000上运行目录的内容。您可以通过转到`localhost:8000`Web浏览器中的URL来访问此服务器。在这里你会看到列出的目录的内容 - 点击你想运行的HTML文件。

> **注意**：如果端口8000已经被其他应用占用，则可以选择另一个端口号，例如7800：

```bash
＃如果上面返回的Python版本是3.X 
python -m http.server 7800
＃如果上面返回的Python版本是2.X 
python -m SimpleHTTPServer 7800
```

更多：[在本地运行服务器端语言](https://developer.mozilla.org/zh-CN/docs/Learn/Common_questions/set_up_a_local_testing_server)

## 2.Web 入门

[Web入门](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web)

目录：

1. [Web 概述](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web)
2. [安装基本软件](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/Installing_basic_software)
3. [您的网站会是什么样？](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like)
4. [处理文件](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/Dealing_with_files)
5. [HTML 基础](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/HTML_basics)
6. [CSS 基础](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/CSS_basics)
7. [JavaScript 基础](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
8. [发布您的网站](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/Publishing_your_website)
9. [Web 是如何运作的](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/How_the_Web_works)

## 3.浏览器开发者工具

[浏览器开发者工具基本用法](https://developer.mozilla.org/zh-CN/docs/Learn/Discover_browser_developer_tools)

console中输入js示例：

```javascript
alert('Hello!');

// set content
let myHeading = document.querySelector('#paragraph-id-1');
myHeading.textContent = '这是通过js动态设置的新内容!!!';

// set background
document.querySelector('html').style.backgroundColor = 'purple';

// appendChild
var myImage = document.createElement('img');
myImage.setAttribute('src','https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584260085026&di=67d152bcee2be0472f7e72abb09f7c7d&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F00%2F85%2F90%2F5256ea28e83f03f.jpg');
document.querySelector('h1').appendChild(myImage);
```

了解更多JavaScript控制台在不同浏览器中的细节:

- [Chrome JavaScript Console](https://developer.chrome.com/devtools/docs/console) (Opera与它相同)
- [Firefox Web Console](https://developer.mozilla.org/en-US/docs/Tools/Web_Console)
- [IE JavaScript console](http://msdn.microsoft.com/en-us/library/ie/dn255006(v=vs.85).aspx)
- [Safari Console](https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html#//apple_ref/doc/uid/TP40007874-CH6-SW1)

参考：

- [Debugging HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)
- [Debugging CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Debugging_CSS)

## 4.javascript

更多内容请访问 [Javascript 学习页面](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript)

- **关于分号**

行末的分号表示当前语句结束**，只有在单行内需要分割多条语句时，这个分号才是必须的。然而，一些人认为每条语句末尾加分号是一种好的风格。**

分号使用规则的更多细节请参阅 [JavaScript 分号使用指南](http://news.codecademy.com/your-guide-to-semicolons-in-javascript/)（英文页面）。

- **var和let的区别**

详见[var 与 let 的区别](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/First_steps/Variables#var_与_let_的区别)。

当你使用 `var` 时，可以根据需要多次声明相同名称的变量，但是 `let` 不能。 以下将有效：

```js
var myName = 'Chris';
var myName = 'Bob';
```

但是以下内容会在第二行引发错误：

```js
let myName = 'Chris';
let myName = 'Bob';
```

你必须这样做：

```js
let myName = 'Chris';
myName = 'Bob';
```

这是一个明智的语言决定。没有理由重新声明变量——这只会让事情变得更加混乱。

> 建议您在代码中尽可能多地使用 `let`，而不是 `var`。因为没有理由使用 `var`，除非您需要用代码支持旧版本的 Internet Explorer。

- **==和===的区别**

JavaScript 有两种比较方式：**严格比较运算符**和**转换类型比较运算符**。对于严格比较运算符（===）来说，仅当两个操作数的类型相同且值相等为 true，而对于被广泛使用的比较运算符（==）来说，会在进行比较之前，将两个操作数转换成相同的类型。

```js
// 严格比较运算符
"1" === 1    // false
0 === false  // false
"1" !== 1    // true
0 !== false  // true

// 转换类型比较运算符
"1" == 1    // true
0 == false  // true
1 != "1"    // false
1 != true   // false
```

js示例

```js
let str = "Hello " + "world!";

function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

document.querySelector('html').onclick = function() {
    alert('别戳我，我怕疼。');
}

```

## 5.发布网站

参考[发布网站](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/Publishing_your_website)

推荐通过GitHub发布，想要了解更多，请看 [GitHub Pages Help](https://help.github.com/categories/github-pages-basics/).