/*
线程：一个线程只能处理一件事情
JS是单线程，可以用alert阻塞的方式进行演示
JS中，分了三个线程
    1-渲染
    2-执行JS代码
    3-事件处理任务

            //JS代码的执行顺序
        //1.先把主任务（代码任务）执行完毕
        //2.再去执行次要的任务(包括setTimeOut和setInterval中的回调函数中的代码)



        //setTimeOut    先执行主任务的代码，然后再检查setTimeout的回调函数有没有到执行时间，
       for(var i = 0 ; i < 10; i++){
           setTimeout(function(){         //在时间栈中依次放入10个for后，，setTimeout依次执行时i已经是10
               console.log(i);             //输出10个10
           },0);
       }
        解决方案：每次往时间栈里存储i时，不再从全局中查找

 */

for(var i = 0;i < 10;i++){

    // function foo(j) {
    //     return function () {
    //       console.log(j);
    //     };
    // }
    // setTimeout(foo(i),0)

    //简写为：
    setTimeout((function (j) {       //setTimeout第一个参数为自调用函数，会立即执行
        return function () {
            console.log(j);
        }
    })(i),0)
}

/*
立即执行函数表达式：即自调用函数  IIFE  imediately invoked funciton expression
方式一
(function(){
    console.log("自调用");
})()

方式二
+function(){}();
-function(){}();
*function(){}();
*
*
* 闭包解释网站：MDN
 */