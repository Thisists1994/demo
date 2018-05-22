package main

import "fmt"

// 定义结构体
type Books struct {
	title string
	author string
	subject string
	book_id int
}

func main() {
	var Book1 Books
	var Book2 Books

	Book1.title = "GoYuyan1"
	Book1.author = "www.baidu.com"
	Book1.subject = "God save us everyone"
	Book1.book_id = 563898

	
	Book2.title = "GoYuyan2"
	Book2.author = "www.Google.com"
	Book2.subject = "God bless us everyone"
	Book2.book_id = 563898123

	printBook(Book1)
	printBook(Book2)
}

//定义printBook 方法（参数，参数类型）
func printBook (book Books) {
	fmt.Printf(" Book title : %s\n ",book.title)
	fmt.Printf(" Book author : %s\n ",book.author)
	fmt.Printf(" Book subject : %s\n ",book.subject)
	fmt.Printf(" Book book_id : %d\n ",book.book_id)
}