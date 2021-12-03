var money = 0
var clickValue = 1
var autoValue = 0
var toggle = 0

function autoIncrement(){
    money = money - 20
    autoValue = autoValue + 1
    document.getElementById("number").innerHTML = money
    document.getElementById("autodisplay").innerHTML = "Auto Click Power: " + autoValue

    if(toggle == 0){
        toggle++
    


        setInterval(function(){
            money = money + autoValue
            document.getElementById("number").innerHTML = money
        }, 1000);
    }
}

function moneyIncrement(){
    money = money + clickValue
    document.getElementById("number").innerHTML = money
}

$(document).ready(function(){
    initializeGame()
})

function initializeGame(){
     setInterval(function(){
         if(money >= 20){
             document.getElementById("auto").style.display = ""
         }else{
             document.getElementById("auto").style.display = "none"
         }
    }, 100);}