// Coin Flip Game

const button = document.querySelector("button");

// add event listener for when button is clicked
button.addEventListener("click",function(){
  //document.body.style.backgroundColor="blue";
  let result = Math.floor(Math.random()*2)
  if(result==0){
    document.getElementById("result").innerHTML = "Heads"
  } else {
    document.getElementById("result").innerHTML = "Tails"
  }

});
