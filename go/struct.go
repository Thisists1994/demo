package main

import "fmt"

type Books struct { 
	title string
	author string
	subject string
	book_id int
}

func main(){
	var Book1 Books/* 声明 Book1 为 Books 类型 */
	var Book2 Books/* 声明 Book2 为 Books 类型 */

	//对 book1 描述
	Book1.title = "GoYuyan1"
	Book1.author = "www.baidu.com"
	Book1.subject = "God save us everyone"
	Book1.book_id = 5638983

	//对 book2 描述
	Book2.title = "GoYuyan2"
	Book2.author = "www.Google.com"
	Book2.subject = "God bless us everyone"
	Book2.book_id = 5638983

	// 打印 book1
	fmt.Printf("Book 1 title : %s\n",Book1.title)
	fmt.Printf("Book 1 author : %s\n",Book1.author)
	fmt.Printf("Book 1 subject : %s\n",Book1.subject)
	fmt.Printf("Book 1 book_id : %d\n",Book1.book_id)

	// 打印 book2
	fmt.Printf("Book 2 title : %s\n",Book2.title)
	fmt.Printf("Book 2 author : %s\n",Book2.author)
	fmt.Printf("Book 2 subject : %s\n",Book2.subject)
	fmt.Printf("Book 2 book_id : %d\n",Book2.book_id)
}
