// /*this - refers to current context*/
// const user = {
//     username : "Pari",
//     price : 999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`)
//         console.log(this);
//     }
// }

// // user.welcomeMessage()
// // user.username = "Sam"
// // user.welcomeMessage()

// console.log(this);    //empty object- {}

// //Browser ke andr jo object h vo h window object!!



const chai = function(){
    let username = "Pari"
    console.log(this)
}
chai()   //gives undefined


/*ARROW FUNCTION*/
// const chai = () => {
//     let username = "Pari"
//     console.log(this)
// }
// chai()



//Regular function [has its own this binding(dynamic)]
//  vs
//Arrow function [doesn't has it's own this biinding shows {} ]



