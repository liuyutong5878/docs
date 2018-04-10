//缓存：cache

//缓存的作用，就是将一些常用的数据，存储起来，提供使用，提升性

//CDN Content Delivery Network

//数据库  高并发
//非关系型数据库（内存型数据库） MongoDB  Redis

//网站静态页面缓存机制
//将网页静态化，存储在服务器端

//菲波那切数列 f(n) = f(n-1)+f(n-2);

// function fib(n) {
//     if (n <= 2){
//         return 1;
//     }
//     return fib(n - 1) + fib(n - 2);
// }

//当fib()中存在其他数据时，会出现严重的性能问题
// var count = 0;
// function fib(n) {
//     count ++;
//     if (n <= 2){
//         return 1;
//     }
//     return fib(n - 1) + fib(n - 2);
// }
// fib(20);
// console.log(count);


//解决性能问题：定义一个缓存数组，存储已经计算出来的斐波那契数