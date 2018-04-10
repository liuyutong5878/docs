
/*
作用域：变量起作用的范围

1-块级作用域：代码块级别的作用域。JavaScript中没有块级作用域。
    在C#，Java中的块级作用域：
        for(int i = 0;i < 10;i++){
            int num = i;
        }
        print(i);       //报错
        print(num);     //报错
    如果JavaScript有块级作用域，上面的代码应该显示undefined，undefined

2-词法作用域：在代码写好的那一刻，变量的作用域已经确定。JS支持词法作用域！！！
              与词法作用域对应的是动态作用域。
      var a = 123;
      function f1(){
        console.log(a);
      }

      function f2(){
        var a = 456;
        f1();
      }
      f2();                      //得到结果123---这里是词法作用域，执行f1()，直接进入f1()内部查找变量，找不到，去全局查找
                                                //如果是动态作用域,执行f1(),应该先在f1所处环境找，结果是456

在JavaScript中只有函数能产生作用域！！！

 */

/*
JS代码执行步骤：
1-预解析：JavaScript代码在预解析阶段，会对以var声明的变量名，和function开头的语句块，进行提升操作（hoisting）
           变量提升：首先将以var声明的变量名、以function开头的函数进行提升
2-执行 + ·3

预解析函数同名：后面的函数会替换前面的函数
func1();
function func1(){
    console.log("第一个func1被执行了");
}
func1();
function func1(){
    console.log("第二个func1被执行了");
 }

 预解析结果：
 function func1(){
 console.log("第一个func1被执行了");
 }
 function func1(){
 console.log("第二个func1被执行了");
 }
 func1();
 func1();
 第一个func1被顶替了，输出的结果全部是：第二个func1被执行了

 */

/*
变量和函数同名：在提升的时候，如果有变量和函数同名，会只提升函数

alert(foo);         //输出函数体
function foo(){}
var foo = 2;
alert(foo);         //输出2

预解析提升后的代码
 function foo(){}
 var foo;
 alert(foo);
 foo = 2;
 alert(foo);

 */

/*
变量的提升是分作用域的

 console.log(a);            //undefined
 var a = 123;

 function test1(){
 console.log(num);          //undefined
 var num = 10;
 }


var num = 456;
 function test2(){
    console.log(num);          //undefined
    var num = 10;
 }
 提升结果：
 var num;
 num = 456;
 function test2(){
    var num;
    console.log(num);          //undefined
    num = 10;
 }


var num = 456;
function f1(){
    console.log(num);
    num = 10;
}
console.log(num);               //10
f1()                            //456
提升结果：
var num;
function f1(){
    console.log(num);
    num = 10;
}
num = 456;
console.log(num);
f1();
 */

/*
函数表达式不会被提升
func();                     //报错
var func = function(){
    console.log("func执行了！！");
}

预解析后代码
var func;
func();
func = function(){
 console.log("func执行了！！");
}

 */

/*
函数可以创造作用域，函数中又可以再创建函数，函数内部的作用域就可以访问外观的作用域
如果有多个函数嵌套，就会构成作用域链
 */









