//basic  first function code!!

function name(){
    console.log('My name is Sezer');
}
 name();
 //--------------------------------------------------

 //parameters!!
 function num(a, b){
    // console.log(a+b);
    return a+b;
 }
 num(5,8);
 const result = num(5,8); //returnu yazdirabilmek icin bir degerde tutmamiz gerekir!!!!
 console.log(result); 

 function age(age1,age2){
     const result = `sezerin yasi ${age1} ve hissettigi ${age2} dir`;
     return result;
 }
 const yazi = age(25,50);
 console.log(yazi);

 //------------------------------------------------- 