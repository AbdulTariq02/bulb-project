// 4 pillars of dom 
// Selection of an Element
// changing html
// changing css
// event listener


// Slection Of An Element
// yaha ye kehe rahe he ke kis tara hum aik element ko select ker sakte he
//  for example

// let a = document.querySelector("h1")
// console.log(a)


// Changing CSS
// yaha kia horaha he ke kis tara hum css me changing ker sakte 
// let c = document.querySelector("h1")
// c.style.color = "yellow"
// c.style.backgroundColor = "red"

//Changing HTML
// yaha kia horaha he kis tara hum html ko change ker sakte he javascrupt ki file se 

// let b = document.querySelector("h1").innerHTML= "MY FATHER IS TARIQ"
// let b1 = document.querySelector("p")
// b1.style.color = "red"
// b1.style.backgroundColor = "yellow"


// Event listener
// yeh jo example  me tha ye to hum ne aik button banaya us me ye changes ki but 
// kia hum koi ise kamam l ki cheez banaye jis se wo browswer per bhi effect ho jaise example 2

// example 1
// let even = document.querySelector("button")
// even.style.color = "darkblue"
// even.style.backgroundColor = "skyblue"
// even.addEventListener("click" , function(){
//     console.log("wahab")
// })

// example 2  
// let even2= document.querySelector("#bulb")
// let even1 = document.querySelector("button")
// even1.addEventListener("click" , function(){
//    even2.style.backgroundColor = "yellow"
//    even1.addEventListener("click" , function(){
    
//     even1.innerHTML = "OFF"
//     even2.style.backgroundColor = "white"

   
//  })
 
// })


let bul = document.querySelector("i");
let butt = document.querySelector("button");
let h = document.querySelector("h1");
let flag = 0;

butt.addEventListener("click", function () {
    if (flag == 0) {
        // Turn ON the bulb
        bul.style.color = "#f4d03f"; // Golden Yellow color for ON state
        butt.innerHTML = "Turn OFF"; // Change button text to "Turn OFF"
        butt.style.fontWeight = "bolder";
        butt.style.backgroundColor = "#2ecc71"; // Green for ON state
        h.innerHTML = "Wow! It's ON 💡"; // Emoji added to show ON state
        h.style.color = "#2ecc71"; // Green color for heading when ON
        h.style.fontWeight = "bold"; // Bold heading for effect
        flag = 1;
    } else {
        // Turn OFF the bulb
        bul.style.color = "#7f8c8d"; // Gray color for OFF state
        butt.innerHTML = "Turn ON"; // Change button text to "Turn ON"
        butt.style.backgroundColor = "#e74c3c"; // Red for OFF state
        h.innerHTML = "Oh no! It's OFF 😞"; // Emoji added to show OFF state
        h.style.color = "#e74c3c"; // Red color for heading when OFF
        h.style.fontWeight = "normal"; // Normal weight for heading when OFF
        flag = 0;
    }
});
