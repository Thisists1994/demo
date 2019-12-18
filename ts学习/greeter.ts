// interface
// 接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现，然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法。

// 创建接口
interface Preson {
    firstName: string,
    lastName: string
}

function greeter(preson: Preson) {
    return `Hello,${preson.firstName}  ${preson.lastName}`
}

let user = {
    firstName: 'Tan',
    lastName: 'Sen'
}

console.log(greeter(user))