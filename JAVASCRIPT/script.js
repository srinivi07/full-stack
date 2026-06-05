// var a=10;
// let a=20;
// const c=30;

// console.log(1)
// console.log(2)
// console.log(3)

// var num=10;
// var str="hii"
// var undefine;
// var Null=null;
// var boolean=true;

// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof undefine);
// console.log(typeof Null);
// console.log(typeof boolean);

// var bigInt= 123n;
// var symbol=Symbol('li');

// console.log(typeof bigInt);
// console.log(typeof symbol);

// var arr=[10,20,30,40];
// console.log(typeof arr,arr);
// var obj={
//     name="nivi"
//     dept:["AI&DS","CT"];
// }
// console.log(typeof obj,obj);

// var a=20;
// var b=2;a);

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a%b);
// console.log(a/b);

// var a=true
// var b=false

// console.log(a&&b);
// console.log(a||b);
// console.log(!a);

// a=10;
// b=20;

// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);
// console.log(a==b);
// console.log(a!=b);
// console.log(a===b);
// console.log(a!==b);

// a=10;
// b=20;
// a+=b;//
// console.log(a);
// a-=b;
// console.log(a);
// a*=b;
// console.log(a);
// a%=b;
// console.log(a);
// a/=b;
// console.log(a);

// var a=20;
// console.log(a--);
// console.log(--a);

// var a=30;
// console.log(a++);
// console.log(++a);

// a=1;
// b=1;
// c=0;
// var result=a++ + --b + ++c - ++a + ++b + c++ + b++ +a;
// console.log(result);

// var mark=30;
// if(mark>=90){
//     console.log("0 grade");
// }
// // else if(mark>=70){
// //     console.log("a grade");
// // }
// // else if(mark>=35){
// //     console.log("pass")
// // }
// // else{
// //     console.log("fail")
// // }
// // var a=20
// // if (a % 2==0){
// //     console.log(`${a} is even`)
// // }
// // else{
// //     console.log(`${a} is odd`)
// // }
// // var a=10;
// // var result = a%2===0 ? "even" : "odd";
// // console.log(result)

//         break;
//     }
//     case 5:{
//         console.log("thursday");
//         break;
//     }
//     case 6:{
//         console.log("friday");
//         break;
//     }
//     case 7:{
//         console.log("saturday");
//         break;
//     }
//     default:{
//         console.log("invalid")var day=2;
// switch(day){
//     case 1:{
//         console.log("sunday");
//         break;
//     }
//     case 2:{
//         console.log("moday");
//         break;
//     }
//     case 3:{
//         console.log("tuesday");
//         break;
//     }
//     case 4:{
//         console.log("wednesday");
//         break;
//     }
// }
// var val=1234;
// var count=0;
// while(val>0){
//     count++;
//     val = Math.floor(val=val/10);
// }
// console.log(count);
// do{
//     console.log("Do...while")
// }
// while(false);

// for(let i=1;i<=10;i++){
//     if(i%2===0){
//         continue;
//     }
//     console.log(i);
// }
// function add(a=5,b=7){
//     console.log(a+b);
// }
//     add();
// var demo=(a=5,b=7)=>{
//     console.log(a+b);
// }
// demo(10,30);
// demo();
// demo(10);
// var arr=[10,20,30];
// var arr2=[...arr,40,50];
// console.log(arr);
// console.log(arr2);
// var [m1,m2,m3,m4,m5]=[90,54,35,13,66]
// // console.log(m1,m2,m3,m4,m5);
//  var {name,mobile,dept,email,isactive}={
//      name:"nivi",
//      mobile:9836787945,
//      dept:["CT","AI&DS"],
//      email:"nivi07@gmail.com",
//      isactive:true
 
//  console.log(name,mobile,dept,email,isactive)
// var arr=[1,2,3,4,5];
// var result = arr.map((val) => (val*2));
// console.log(result)

// var even=arr.filter((val)=>val%2==0);
// console.log(even)

// var sum = arr.reduce((add,val)=>(add+val),0);
// console.log(sum)

var username={
    name:"nivi",
    dept:"ct",
    skills:{
        programming:["java","js","css"],
        database:["sql"],
    }
}
var user ={
    ...username,
    password:1235
}
console.log(user);
