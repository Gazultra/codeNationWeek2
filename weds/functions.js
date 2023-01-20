
// // let age = 59;

// // if(age < 18){
// //     console.log("£8");
// // } else if (age > 18 && age < 60)
// // {
// //     console.log("£10.95");
// // }
// // else console.log("£7.5");

// //-------//


// // let coffeeIsGrinding = false;

// // const pressGrindBeans = () => {
// //     if (coffeeIsGrinding) {
// //         console.log("stop the grinder");
// //         coffeeIsGrinding = false;
// //     }
// //     else {
// //         console.log("grinding is about to begin");
// //         coffeeIsGrinding = true;
// //     }


// //     // console.log("grinding for 20 seconds");
// // }

// // pressGrindBeans();



// // console.log("file has run");

// //--



// // const favColor = (color) => {
// //     console.log(`my favourtie color is ${color}`);
// // }

// // favColor("red");
// // favColor("green");



// // favColor(green);

// // console.log("done");


// // PARAMETERS //

// // let accNumber = 17121984;

// // const cashWithdrawal = (amount, accnum) =>{

// //     console.log(`Withdrawing £${amount} from account ${accnum}`);
// // }
// //     cashWithdrawal(300, 50449921);
// //     cashWithdrawal(30, accNumber);
// //     cashWithdrawal(200, 50447921);
// //     cashWithdrawal(17, accNumber);

// //---MATHEMATICS//

// const addUp = (num1, num2) => {
    
//     return num1 + num2;
// }
// let funcData = addUp(7,3);//10 stores as a variable for use later;

// console.log(addUp(2,5));// adds up 2 and 5 
// console.log(funcData);// funcData accesses the hidden data now with a paramater atatched 

//--------//


// const multiplyByNineFifths = (celsius) => {
//     return celcius * (9/5);
// };
// const getFarenheit = (celsius) => {
//     return multiplyByNineFifths(celsius) + 32;

// };

// consolelog("the temperature is" + getFarenheit(15) + "F")


//-------//

// function square (number) {
//     return number * number;
// };

// console.log(square(5));

// //output:25


//Activity 1//

// let factorial = (n) => {
//     if((n === 0) || (n === 1)){
//         return 1; 
//     }
//     else{ return (n * factorial(n-1));
//     }
// }

// factorial(1)

// console.log(factorial(3));

//----------ACTIVITY2----------//

// let orderCount = 0;

// const takeOrder = (topping, size) => {
//     console.log(`${size} pizza with ${topping}`);
//     orderCount++
// }

// takeOrder("pineapple");
// takeOrder("cheese", "large");
// console.log(orderCount)

//----------ACTIVITY3----------//


let  balance = 100;

const cashWithdrawal = (amount, pin ) => {
    if (pin === 1712 && amount < balance){

       console.log(`Withdrawing £${amount} from account ${pin}`);
    }else{
        console.log("no money today");
    }
}
    cashWithdrawal(30, 1792);
    cashWithdrawal(30, 4974561);
    cashWithdrawal(200, 50447921);
    cashWithdrawal(17, 100);
