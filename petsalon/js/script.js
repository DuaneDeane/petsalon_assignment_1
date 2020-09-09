// create an object literal for the pet salon (name,address,hours)
var salon={
    salonName:'The Fashion Pet',
    address:{
        street:'Av. University',
        number:"215-B"
    },
    hours:{
        open:"8 a.m.",
        close:"5 p.m."
    },
    pets:[
        { // object one
            name:"Scooby",
            age:44,
            type:"Dog",
            breed:"Dane",
            gender:"Male"
        },
        { // object two
            name:"Scrappy",
            age:10,
            type:"Dog",
            breed:"Dane",
            gender:"Male"
        },
        { // object three
            name:"Tweety Bird",
            age:30,
            type:"Bird",
            breed:"Canaria",
            gender:"Male"
        },
        { // object four
            name:"Sonic",
            age:29,
            type:"Mammal",
            breed:"Hedgehog",
            gender:"Male"
        },
        { // object five
            name:"Sylevester",
            age:30,
            type:"Cat",
            breed:"Short Hair",
            gender:"Male"
        },
        { // object five
            name:"Speed Gonzolez",
            age:30,
            type:"Cat",
            breed:"Short Hair",
            gender:"Male"
        }
    ]
}
// object destructuring
console.log(salon.address.street);
var {salonName,address:{street,number},hours:{open,close}}=salon;
console.log(street);
//console.log(salon.pets);
// create an array with pets (objects literal) (name, breed, gender, type, service)

// function to display on the console the names of the pets (travel the array)

function salonpets(){
    for(var i=0;i<salon.pets.length;i++){
        console.log(salon.pets[i].name);
    }
    displayNumberofElements();
}
function displayNumberofElements(){
    console.log(`There are ${salon.pets.length}`);
}
salonpets();

// function to display on the console the number of registered pets

// extra hw not graded: display the oldest pet and the youngest pets
// extra  hw: add css.