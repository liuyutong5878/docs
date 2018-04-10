

/*
闭包：闭包其实就是函数，闭包的原理就是作用域访问原则：
                ----上级作用域无法访问下级作用域中的变量
    要解决的问题是：让函数外部的成员能够间接访问函数内部的成员
    闭包：可以通过闭包返回的函数来实现对函数内部数据操作
 //在函数内部创建一个新的函数来操作内部数据，返回这个被创建的函数就能实现间接访问

 //实现修改数据
 function foo() {
    var num = 123;
    return function (a) {
            num = a;
            console.log(num);
     }
 }
 foo()(456);         //这样就修改了函数内部的数据


 //实现获取数据+修改数据
 function foo() {
 var num = 123;
 return function (a) {
 if(a !== undefined){
 num = a;
 }else {
 return num;
 }
 };
 }
 foo()();         //这样就修改了函数内部的数据

 */

//使用对象设置、获取多个数据

function foo(){
    var name = "zs";
    var age = 18;
    return{
        setName:function (val) {
            name = val;
            return name;
        },
        getName:function () {
            return name;
        },
        getAge:function () {
            return age;
        }
    }
}

var obj = foo();
obj.getAge();
