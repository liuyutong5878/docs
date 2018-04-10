//条件式函数声明是否会被提升，取决于浏览器的不同。

foo();                      //报错，标准浏览器不支持这样的变量提升
if(true){
    function  foo() {
        console.log(123);
    }
}