var treasureLocation = Math.floor(Math.random() * 24);

var bombLocation = Math.floor(Math.random() * 24);

if (treasureLocation === bombLocation){
  bombLocation = Math.floor(Math.random() * 24);
}

var counter = 25

const checkPosition = (id) => {

    counter = counter - 1;
    document.getElementById("counter").innerHTML = counter

    if (counter !== 0){
        if (treasureLocation === id){
    document.getElementById(id).innerHTML = "&#x1f320";
    alert("YE FOUND YE TREASURE! GOOD WORK!")
  } else if (bombLocation === id){
    document.getElementById(id).innerHTML = "&#x2620";
    alert("YE FOUND YE DEATH. TRY AGAIN!")
  } else if (treasureLocation !== id && bombLocation !== id ){
    document.getElementById(id).innerHTML = "&#x1f332";
  } 
    }else if(counter === 0){
        document.getElementById("counter").innerHTML = counter
      alert("Ye ran out of attempts! Try again!")
    }
}
