package main

import "fmt"

func main(){
	var n [10]int//n 是一个长度为10的数组
	var i,j int

	//为数组 n 初始化元素
	for i = 0; i < 10; i++ {
		n[i] = i+100  //设置元素为 i+100
	}

	//输出每个数组元素的值
	for j = 0; j < 10; j++ {
		fmt.Printf( "元素[%d] = %d\n", j, n[j] )
		// go run arr.go
		//[0] 100
		//[1] 101
		//[2] 102
		//[3] 103
		//[4] 104
		//[5] 105
		//[6] 106
		//[7] 107
		//[8] 108
		//[9] 109
	}
}


k