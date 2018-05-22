package main

import "fmt"

// func main() {
// 	var num = make( []int,3,5 )//通过内置函数make()初始化切片
// 	printSlice( num )
// }

// func printSlice( x []int ) {
// 	fmt.Printf("len=%d cap=%d slice=%v\n",len(x),cap(x),x)
// }

//切片的意思
// var vals [20]int  
// func main() {
// 	for i := 0; i < 5; i++ {  
// 		vals[i] = i * i
// 	  }
// 	  subsetLen := 5
// 	  fmt.Println("The subset of our array has a length of:", subsetLen)
// 	  // Add a new item to our array
// 	  vals[subsetLen] = 123  
// 	  subsetLen++  
// 	  fmt.Println("The subset of our array has a length of:", subsetLen) 
// }

// 截取切片
func main() {
	// 创建切片
	num1 := []int {0,1,2,3,4,5,6,7,8}
	printSlice(num1)

	// 打印原始切片
	fmt.Println("num1 ==",num1)

	/* 打印子切片从索引1(包含) 到索引4(不包含)*/
   fmt.Println("num1[1:4] ==", num1[1:4])

   /* 默认下限为 0*/
   fmt.Println("num1[:3] ==", num1[:3])

   /* 默认上限为 len(s)*/
   fmt.Println("num1[4:] ==", num1[4:])

   numbers1 := make([]int,0,5)
   printSlice(numbers1)

   /* 打印子切片从索引  0(包含) 到索引 2(不包含) */
   number2 := numbers[:2]
   printSlice(number2)

   /* 打印子切片从索引 2(包含) 到索引 5(不包含) */
   number3 := numbers[2:5]
   printSlice(number3)
}

func printSlice(x []int){
	fmt.Printf("len=%d cap=%d slice=%v\n",len(x),cap(x),x)
 }