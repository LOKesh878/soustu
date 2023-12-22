// // var firstName="lokesh";
// // var lastName="jha";
// // var hometown="sitamarhi"
// // var age=24;
// // function printdetail(){
// //     console.log(`I'm ${firstName}${lastName} and i am from ${hometown}`);
// //     printage();

// // }
// // function printage(){
// //     console.log(`i am ${age} year old`)
// // }
// // printdetail();
// // const tik=new Promise(function(res,rej){
// //     const isBoard=false;
// //     if(isBoard){
// //     res("your are in flight");
// //     }
// //     else{
// //     rej("you are not in flight");
// //     }
    
// //     });
// //     tik.then((data)=>{
// //     console.log("wohoo",data);
    
// //     })
// //     .catch((data)=>{
// //     console.log("oh no",data);




// //     })

// // for(let i=0;i<5;i++){
// //     console.log("hgello");
// // }
// const cheez=new Promise((res,rej)=>{
//     res("hello");
// });
// cheez.then((data)=>{
//     console.log("This is your data",data);
// })
// function job(data) {
//     return new Promise((res,rej)=>{
//         if( isNaN(data)){
//             rej('error')
//         }
//         else if(data %2!==0){
//             setTimeout(()=>{
//                 res("odd")
//             },1000);
//         }
//         else{
//             setTimeout(()=>{
//                 res("even")
//             },2000)
//         }
//     });
// }

// module.exports = job;
function job() {
    return new Promise(function(resolve, reject) {
        reject();
    });
}

let promise = job();

promise

.then(function() {
    console.log('Success 1');
})

.then(function() {
    console.log('Success 2');
})

.then(function() {
    console.log('Success 3');
})

.catch(function() {
    console.log('Error 1');
})

.then(function() {
    console.log('Success 4');
});

