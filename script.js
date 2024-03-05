let homeBtn = document.querySelector(".fa-house")
let chatBtn = document.querySelector(".fa-bars")
let storyBtn = document.querySelector(".fa-circle-user")
let callBtn = document.querySelector(".fa-cart-arrow-down")
let popBtn = document.querySelector(".box1")
let screenBtn = document.querySelector(".fa-left-long")


homeBtn.addEventListener("click", function(){
document.querySelector(".home").style.display = "block" 
  document.querySelector(".chatScreen").style.display = "none" 
  document.querySelector(".storyScreen").style.display = "none" 
  document.querySelector(".callScreen").style.display = "none" 
document.querySelector(".popup").style.display = "none" 
document.querySelector("none").style.display = "none" 

})

chatBtn.addEventListener("click", function(){
document.querySelector(".home").style.display = "none" 
  document.querySelector(".chatScreen").style.display = "block" 
  document.querySelector(".storyScreen").style.display = "none" 
  document.querySelector(".callScreen").style.display = "none" 
document.querySelector(".popup").style.display = "none" 
document.querySelector("none").style.display = "none" 

})

storyBtn.addEventListener("click", function(){
document.querySelector(".home").style.display = "none" 
  document.querySelector(".chatScreen").style.display = "none" 
  document.querySelector(".storyScreen").style.display = "block" 
  document.querySelector(".callScreen").style.display = "none" 
document.querySelector(".popup").style.display = "none" 
document.querySelector("none").style.display = "none" 

})
callBtn.addEventListener("click", function(){
document.querySelector(".home").style.display = "none" 
  document.querySelector(".chatScreen").style.display = "none" 
  document.querySelector(".storyScreen").style.display = "none" 
  document.querySelector(".callScreen").style.display = "block" 
document.querySelector(".popup").style.display = "none" 
document.querySelector("none").style.display = "none" 

})
popBtn.addEventListener("click", function(){
document.querySelector(".home").style.display = "none" 
  document.querySelector(".chatScreen").style.display = "none" 
  document.querySelector(".storyScreen").style.display = "none" 
  document.querySelector(".callScreen").style.display = "none" 
document.querySelector(".popup").style.display = "block" 
document.querySelector("none").style.display = "none" 

})
screenBtn.addEventListener("click", function(){
document.querySelector(".home").style.display = "none" 
  document.querySelector(".chatScreen").style.display = "none" 
  document.querySelector(".storyScreen").style.display = "none" 
  document.querySelector(".callScreen").style.display = "none" 
document.querySelector(".popup").style.display = "none" 
document.querySelector("none").style.display = "block" 

})


