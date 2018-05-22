# MySQL 整理

## **使用到的工具**

**Navicat Premium**

>Navicat Premium 是一套数据库开发工具，让你从单一应用程序中同时连接 MySQL、MariaDB、SQL Server、Oracle、PostgreSQL 和 SQLite 数据库。它与 Amazon RDS、Amazon Aurora、Amazon Redshift、SQL Azure、Oracle Cloud 和 Google Cloud 等云数据库兼容。你可以快速轻松地创建、管理和维护数据库。

---
## **数据类型**

1. 数值类型
    
    * 严格数值数据类型  ——  INTEGER、SMALLINT、DECIMAL和NUMERIC。
    
    * 近似数值数据类型  —— FLOAT、REAL和DOUBLE PRECISION。

    ![tu](http://oy2eijz4l.bkt.clouddn.com/type.png)

2. 日期和时间类型

    * 表示时间值的日期和时间类型为DATETIME、DATE、TIMESTAMP、TIME和YEAR。
每个时间类型有一个有效值范围和一个"零"值，当指定不合法的MySQL不能表示的值时使用"零"值

    ![tu2](http://oy2eijz4l.bkt.clouddn.com/type2.png)
    
3. 字符串类

    - 字符串类型指CHAR、VARCHAR、BINARY、VARBINARY、BLOB、TEXT、ENUM和SET。该节描述了这些类型如何工作以及如何在查询中使用这些类型。

    ![tu3](http://oy2eijz4l.bkt.clouddn.com/type3.png)

---
## **MySQL 创建数据表**

创建MySQL数据表需要以下信息：

* 表名
* 表字段名
* 定义每个表字段

### 语法

以下为创建MySQL数据表的SQL通用语法：
```javascript
CREATE TABLE table_name (column_name column_type);
```

- **CREATE TABLE**：创建表单
- **table_name**：定义表单名
- **column_name**：定义列名
- **column_type**：定义列类型

### 实例

以下例子中我们将在数据库中创建数据表runoob_tbl：
```SQL
CREATE TABLE IF NOT EXISTS `runoob_tbl`(
   `runoob_id` INT UNSIGNED AUTO_INCREMENT,
   `runoob_title` VARCHAR(100) NOT NULL,
   `runoob_author` VARCHAR(40) NOT NULL,
   `submission_date` DATE,
   PRIMARY KEY ( `runoob_id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

>**打开Navicat Premium,链接数据库后,点击Query-->New Query写入代码后，点击Run运行代码。运行后可以在Table里找到当前创建成功的表单**

实例解析：

* 如果你不想字段为 NULL 可以设置字段的属性为 NOT NULL， 在操作数据库时如果输入该字段的数据为NULL ，就会报错。
* IF NOT EXISTS 创建表单的时候搜索当前已有的表单是否有重名表单。
* UNSIGNED 无符号，无正负之分。
* AUTO_INCREMENT定义列为自增的属性，一般用于主键，数值会自动加1。
* PRIMARY KEY关键字用于定义列为主键。 您可以使用多列来定义主键，列间以逗号分隔。
* ENGINE 设置存储引擎，CHARSET 设置编码。

**主键理解为ID，具有唯一性，通过主键去区分数据**

----
## **MySQL 删除数据表**
### 语法
以下为删除MySQL数据表的通用语法：：
```SQL
DROP TABLE table_name ;
```
---
## **MySQL 插入数据**
### 语法
以下为向MySQL数据表插入数据通用的 INSERT INTO SQL语法：
```SQL
INSERT INTO table_name ( field1, field2,...fieldN )
                       VALUES
                       ( value1, value2,...valueN );
```

* 如果数据是字符型，必须使用单引号或者双引号，如："value"。
### 实例
以下例子中我们将在runoob_tbl表单中插入数据：
```sql
INSERT INTO runoob_tbl ( runoob_id,runoob_title,runoob_author,submission_date )
VALUES( 2,"标题","测试","时间" )
```

实例解析：

* INSERT INTO 插入什么到哪里
* VALUES 内容是什么
---
## **MySQL 查询数据**
### 语法
以下为在MySQL数据库中查询数据通用的 SELECT 语法：
```sql
SELECT column_name,column_name
FROM table_name
[WHERE Clause]
[OFFSET M ][LIMIT N]
```

* 查询语句中你可以使用一个或者多个表，表之间使用逗号(,)分割，并使用WHERE语句来设定查询条件。
* SELECT 命令可以读取一条或者多条记录。
* 你可以使用星号（*）来代替其他字段，SELECT语句会返回表的所有字段数据
* 你可以使用 WHERE 语句来包含任何条件。
* 你可以通过OFFSET指定SELECT语句开始查询的数据偏移量。默认情况下偏移量为0。
* 你可以使用 LIMIT 属性来设定返回的记录数。

### 实例

以下例子中我们将在runoob_tbl表单中插入数据：
```sql
SELECT runoob_title FROM runoob_tbl;
```

* 从表单runoob_tbl中找到runoob_title的所有字段

---
## **MySQL WHERE 子句**
如需有条件地从表中选取数据，可将 WHERE 子句添加到 SELECT 语句中。
### 语法
以下是 SQL SELECT 语句使用 WHERE 子句从数据表中读取数据的通用语法：
```sql
SELECT field1, field2,...fieldN 
FROM table_name1, table_name2...
[WHERE condition1 [AND [OR]] condition2.....
```

* 查询语句中你可以使用一个或者多个表，表之间使用逗号, 分割，并使用WHERE语句来设定查询条件。
* 你可以在 WHERE 子句中指定任何条件。
* 你可以使用 AND 或者 OR 指定一个或多个条件。
* WHERE 子句也可以运用于 SQL 的 DELETE 或者 UPDATE 命令。
* WHERE 子句类似于程序语言中的 if 条件，根据 MySQL 表中的字段值来读取指定的数据。

_**以下为操作符列表，可用于 WHERE 子句中。**_

![tu4](http://oy2eijz4l.bkt.clouddn.com/where.png)

### 实例
以下例子中我们将先判断runoob_author是不是为" 测试 "，然后返回所有字段：
```sql
SELECT * FROM runoob_tbl WHERE runoob_author = "测试";
```
Tips: 你可以使用`BINARY`关键字来设定`WHERE`子句的字符串的比较是区分大小写的

----
## **MySQL UPDATE 查询**
如果我们需要**修改或更新** MySQL 中的数据，我们可以使用 SQL UPDATE 命令来操作。
### 语法
以下是 UPDATE 命令修改 MySQL 数据表数据的通用 SQL 语法：
```sql
UPDATE table_name SET field1=new-value1, field2=new-value2
[WHERE Clause]
```

* 你可以同时更新一个或多个字段。
* 你可以在 WHERE 子句中指定任何条件。
* 你可以在一个单独表中同时更新数据。

当你需要更新数据表中指定行的数据时 WHERE 子句是非常有用的。

_**简单来说：**_

`UPDATE` 表名称 `SET` 列名称=新值 `WHERE` 更新条件
### 实例
以下我们将在 SQL UPDATE 命令使用 WHERE 子句来更新 runoob_tbl 表中指定的数据：

```sql
UPDATE runoob_tbl SET runoob_author = "测试2" WHERE runoob_title = "标题";
```

* 将runoob_title="标题"的runoob_author的内容更改为测试2。

---
## **MySQL DELETE 查询**
你可以使用 SQL 的 DELETE FROM 命令来删除 MySQL 数据表中的记录。
### 语法
以下是 SQL DELETE 语句从 MySQL 数据表中删除数据的通用语法：
```sql
DELETE FROM table_name [WHERE Clause]
```

* 如果没有指定 WHERE 子句，MySQL 表中的所有记录将被删除。
* 你可以在 WHERE 子句中指定任何条件
* 你可以在单个表中一次性删除记录。

当你想删除数据表中指定的记录时 WHERE 子句是非常有用的。
### 实例
以下实例将删除 runoob_tbl 表中 runoob_id 为5 的记录：
```SQL
DELETE FROM runoob_tbl WHERE runoob_id=5;
```
---
## **MySQL LIKE 子句**
`WHERE`中我们使用 `=` 来设定条件，如runoob_author='测试'，但是有时候我们需要获取runoob_author字段中**含有**"COM"字符的所有记录。

这个时候就需要在`WHERE`中使用`LIKE`字句。`LIKE`中用 `%` 字符表示任意字符。如果没有用到 `%` 那么`LIKE`子句与符号 `=` 效果是一样的。

### 语法

以下是 SQL SELECT 语句使用 LIKE 子句从数据表中读取数据的通用语法：

```SQL
SELECT field1, field2,...fieldN 
FROM table_name
WHERE field1 LIKE condition1 [AND [OR]] filed2 = 'somevalue'
```

* 你可以在 `WHERE` 子句中指定任何条件。
* 你可以在 `WHERE` 子句中使用`LIKE`子句。
* 你可以使用 `LIKE` 子句代替等号 `=`。
* `LIKE` 通常与 `%` 一同使用，类似于一个元字符的搜索。
* 你可以使用 `AND` 或者 `OR` 指定一个或多个条件。
* 你可以在 `DELETE` 或 `UPDATE` 命令中使用 `WHERE...LIKE` 子句来指定条件。

### 实例
以下我们将使用 WHERE 子句来找到 runoob_tbl 表中指定带有"2"的数据：
```SQL
SELECT runoob_title,runoob_author FROM runoob_tbl WHERE runoob_title LIKE "%2"; 
```
---
## **MySQL UNION 操作符**
MySQL UNION 操作符用于连接两个以上的 SELECT 语句的结果组合到一个结果集合中。多个 SELECT 语句会删除重复的数据。
### 语法
MySQL UNION 操作符语法格式：
```SQL
-- 要检索的列
SELECT expression1, expression2, ... expression_n
-- 要检索的表
FROM tables
-- 检索的条件
[WHERE conditions]
-- DISTINCT 删除结果集中重复的数据  ALL 返回所有结果集
UNION [ALL | DISTINCT]
SELECT expression1, expression2, ... expression_n
FROM tables
[WHERE conditions];
```
---
## **MySQL 排序**
如果我们需要对读取的数据进行排序，我们就可以使用 MySQL 的 ORDER BY 子句来设定你想按哪个字段哪种方式来进行排序，再返回搜索结果。
### 语法
以下是 SQL SELECT 语句使用 ORDER BY 子句将查询数据排序后再返回数据：
```SQL
SELECT field1, field2,...fieldN table_name1, table_name2...
ORDER BY field1, [field2...] [ASC [DESC]]
```

* 你可以使用任何字段来作为排序的条件，从而返回排序后的查询结果。
* 你可以设定多个字段来排序。
* 你可以使用 ASC 或 DESC 关键字来设置查询结果是按升序或降序排列。 默认情况下，它是按升序排列。
* 你可以添加 WHERE...LIKE 子句来设置条件。
### 实例
尝试以下实例，结果将按升序及降序排列。
```SQL
SELECT * FROM runoob_tbl ORDER BY submission_date ASC;
```

ASC：升序；DESC：降序； 

---
## **MySQL GROUP BY语句**
GROUP BY 语句根据一个或多个列对结果集进行分组。

在分组的列上我们可以使用 COUNT(计数), SUM(汇总), AVG(平均数),等函数。
### 语法
```sql
SELECT column_name, function(column_name)
FROM table_name
WHERE column_name operator value
GROUP BY column_name;
```

* function函数指的是用COUNT,SUM,AVG等函数。
* 你可以添加 WHERE...LIKE 子句来设置条件。
### 实例
```sql
SELECT runoob_title,COUNT(*)
FROM runoob_tbl 
WHERE runoob_author = '内容更改为测试2'
GROUP BY runoob_title;
```
![tu5](http://oy2eijz4l.bkt.clouddn.com/tbl.png)
针对上表，通过用GROUP BY 分组语句对表内runoob_title进

行分组，并且是runoob_author为’内容更改为测试2’

markdown 提行:编辑好一行文字后敲两个空行，再按回车键编辑另一行文字
----


未完待续~ ;)