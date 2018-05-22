package main

import "fmt"

func main() {
	/* 声明变量，默认 map 是 nil */
	var countryCapitalMap map[string]string
	/* 创建集合 */
	countryCapitalMap = make(map[string]string)

	/* map 插入 key-value 各个国家对应的首都 */
   countryCapitalMap["France"] = "Paris"
   countryCapitalMap["Italy"] = "Rome"
   countryCapitalMap["Japan"] = "Tokyo"
   countryCapitalMap["India"] = "New Delhi"
   /* 使用 key 输出 map 值 */
   for country := range countryCapitalMap {
	fmt.Println("Capital of",country,"is",countryCapitalMap[country])
	// country 键   countryCapitalMap[country] 值
 }
    /* 查看元素在集合中是否存在 声明一个captial的变量来判断元素是否存在*/
	captial, ok := countryCapitalMap["United States"]
	/* 如果 ok 是 true, 则存在，否则不存在 */
	if(ok){
	   fmt.Println("Capital of United States is", captial)  
	}else {
	   fmt.Println("Capital of United States is not present") 
	}
 }
// Capital of France is Paris
// Capital of Italy is Rome
// Capital of Japan is Tokyo
// Capital of India is New Delhi
// Capital of United States is not present