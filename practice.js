// Joke challenge in function form
const joke = () => {
    alert("WHY DID THAT CHICKEN CROSS DAT ROAD????")
    alert("CUS THERE WAS A CHICKEN ON THE OTHER SIDE")
}

// Prompt with if else statements.
let person =  prompt ("What is your name?")
if(person !== null) {
    alert (`Hello, ${person}`)
} else if(person == ""){
     alert("Fine then, keep your secrets.")
    }else { alert("Fine then, keep your secrets.") 
}

//Mad libs, mad simple. 
let adjective = prompt ("Type in an adjective")
let noun1 = prompt ("Give me a noun!")
let liquid = prompt ("A liquid, tell me one")
let bodyPart = prompt ("Type a body part")
let verb = prompt ("Give me a verb!")
let noun2 = prompt ("Gimmie a noun!")
let place = prompt ('GIMMIE A PLACE YO')

alert(`"Piranhas are more ${adjective} during the day, so make sure you
cross the ${noun1} at night. Piranhas are attracted to fresh ${liquid} and
will most likely take a bite out of your ${bodyPart} if you ${verb}.
Whatever you do, if you have an open ${noun2} try and find another
way to get back to ${place}. Good luck!"`)

//World Domination

name = prompt ("What is your name?")
code = prompt ("Can you code?").toLowerCase()
if(code == "yes") {
    alert("You will rule the world " + name +"!")
} else {alert("Well, good luck with that.")}

// Magic 8-ball that doesnt care what you ask it.

question = prompt("Vat do you vant to ask zee magik eight ball?")

var randomNum = Math.ceil(Math.random() * 5)
if(randomNum == 1) {
    alert("Better not tell you now.")
} else if(randomNum == 2) {
    alert("It is decidedly so")
} else if(randomNum == 3) {
    alert("Don't count on it.")
} else if(randomNum == 4) {
    alert("Signs point to yes")
} else if(randomNum == 5) {
    alert("Outlook not so good...")
} else {
    alert("IDK WHAT HAPPENED YOU BROKE THE 8 BALL")
}