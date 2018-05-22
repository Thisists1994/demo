
# Mark down   学习笔记

## Markdown 基本要素

### **语法说明**


 ### **标题**
 
 ```
  # 这是 <h1> 一级标题
  ## 这是 <h2> 二级标题
  ### 这是 <h3> 三级标题
  #### 这是 <h4> 四级标题
  ##### 这是 <h5> 五级标题
  ###### 这是 <h6> 六级标题
 ```
 如果你想要给你的标题添加 id 或者 class，请在标题最后添加 {#id .class1 .class2}。例如：

 ```
 # 这个标题拥有 1 个 id {#my_id}
 # 这个标题有 2 个 classes {.class1 .class2}
```

>**这是一个 MPE 扩展的特性。**

----
### **强调**
```
*这会是 斜体 的文字*
_这会是 斜体 的文字_

**这会是 粗体 的文字**
__这会是 粗体 的文字__

_你也 **组合** 这些符号_

~~这个文字将会被横线删除~~

```
*这会是 斜体 的文字*

_这会是 斜体 的文字_

**这会是 粗体 的文字**

__这会是 粗体 的文字__

_你也 **组合** 这些符号_

~~这个文字将会被横线删除~~

----
### **列表**
#### 无序列表
```
* Item 1
* Item 2
  * Item 2a
  * Item 2b
  ```
  * Item 1
* Item 2
  * Item 2a
  * Item 2b
---
  #### 有序列表
  ```
  1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b
   ```
  1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b
---
### **添加图片**
```
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
```
![GitHub Logo](/image/2.jpg)

![Alt Text](/image/timg.jpg)

---
### **链接**
```
http://github.com - 自动生成！
[GitHub](http://github.com)
```
http://github.com - 自动生成GitHub地址且可以点击跳转！
[GitHub](http://github.com)

---
### **引用**
```
正如 Kanye West 所说：

> We're living the future so
> the present is our past.
```
正如 Kanye West 所说：

> We're living the future so
> the present is our past.
---
### **分割线**
```
如下，三个或者更多的

---

连字符

***

星号

___

下划线
```
---
### **行内代码**
```
我觉得你应该在这里使用
`<addr>` 才对。
```
我觉得你应该在这里使用
`<addr>` 才对。

---
### **代码块**
你可以在你的代码上面和下面添加 ``` 来表示代码块
### **代码高亮**
你可以给你的代码块添加任何一种语言的语法高亮

例如，给 ruby 代码添加语法高亮：

  ```ruby 
  # 高亮就加ruby
  require 'redcarpet'
  markdown = Redcarpet.new("Hello World!")
  puts markdown.to_html
  ```
 
 ```javascript
//  JavaScript样式
  function add(x,y){
    return x + y
  };
 ```
```javascript {.class1 .class}
// 你可以给你的代码块设置 class。
function add(x, y) {
  return x + y
}
```
```
Name | Academy | score 
- | :-: | -: 
Harry Potter | Gryffindor| 90 
Hermione Granger | Gryffindor | 100 
Draco Malfoy | Slytherin | 90
```
Name | Academy | score 
- | :-: | -: 
Harry Potter | Gryffindor| 90 
Hermione Granger | Gryffindor | 100 
Draco Malfoy | Slytherin | 90

分割线前换行，代码后换行。
