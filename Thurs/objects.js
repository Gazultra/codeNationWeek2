


// const myName = {
//     name: "Gareth",
//     lastName: "Evans",      //String//
//     age: 38,
//     likeGeorgeEzra: true,   //Boolean//
//     music: [                //array//
//         "Drum and Bass",
//         "Hip Hop",
//         "Future Beats",
//         "Techno",
//         "Emo",
//         "Nu Metal",
//     ]
// }




// console.log(myName.music);
// // console.log(myName.name);
// // console.log(myName["name"]);


//---------//

let  offer = "none";
let time = 1100;

const cafe = {

    name:"Coffee For Ewe",
    seatingCap:  17,
    hasSpecialOffers: true, 
    drinks: [
         "aeropress",
        "batch brew",
        "v60",
        "kalita",
        "guest espresso",
        ],

        breakfastOffer: "free muffin",
        lunchOffer: "free espresso with every order",
        nooffer: " sorry bro ",

        openCafe:() => {
            return "come in";
        },
        closeCafe:() => {
            return "sorry were closed";
        },   

        openCafe(){
    if(this.hasSpecialOffers){
        return "Time for a special offer!";
    }
        },

        closeCafe(){
         return "We are closed, come back tomorrow!";
        }

    }

console.log(cafe.openCafe());
console.log(cafe.closeCafe());



//------------//

// // let day = 'sunday', alarm

// // let alarmMsg = {

// //     weekendalarm: "noalarm",
// //     weekdayalarm: "getup"
// // }

// // if (day === "satursday" || "sunday"){
// //     alarm = alarmMsg.weekendalarm
// // } else {

// //     alarm = alarmMsg.weekdayalarm
// // }


// // console.log(alarm)

//----------//