//Yaz

function room11(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "You have arrived at the entrance of the magical forest of Qohor, in the land of Alcazar. This mystical woodland, tenebrous and curious alike, is filled with all manner of creatures, those dead and alive, those winged and tailed, and those subhuman. Your journey will be a perilous one, and will test your strength, your aptitude and most of all, your wits. But the most precious of gems awaits you, in a magnificent castle worth more than any treasure. To enter, proceed East. But do not enter heedlessly, for you may never return. <br>"
    //Change the Pic
    thepic.src = "images/pic01.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",wrongWay)
    document.getElementById("E").addEventListener("click",room12)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",wrongWay)
}

function room12(){
    
    //Change the Text
    document.getElementById("story").innerHTML =
    "You come across a Seer called 'The One Eyed Raven', who is making his way through the forest to gather supplies for his potions. The Seer gifts you a magical potion that will allow you to see in the dark. There is an exit to the East."
    //Change the Pic
    thepic.src = "images/oneeyedraven.jpg"
    
    //Remove old Links
    removeEvents();
    //Add new Links
    magicPotion=true;
    document.getElementById("N").addEventListener("click",wrongWay)
    document.getElementById("E").addEventListener("click",room13)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",room11)
}


function room13(){
    
    //Change the Text
    document.getElementById("story").innerHTML =
    "You may now either proceed to the Grotto or further into the forest. North is to the Grotto, South is further into the forest. There is an exit to the West."
    //Change the Pic
    thepic.src = "images/pic02.jpg"
        //Remove old Links
        removeEvents();
        //Add new Links
        document.getElementById("N").addEventListener("click",room14)
        document.getElementById("E").addEventListener("click",wrongWay)
        document.getElementById("S").addEventListener("click",room15)
        document.getElementById("W").addEventListener("click",room11)
}
   

//Example of picking up an item
function room14(){
    
    //Change the Text
    document.getElementById("story").innerHTML =
    "You come across a Dragonglass sword and pick it up, admiring it's splendour. You may now return to the forest."
     dragonGlass = true;
    //Change the Pic
    thepic.src = "images/pic03.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",wrongWay)
    document.getElementById("E").addEventListener("click",wrongWay)
    document.getElementById("S").addEventListener("click",room13)
    document.getElementById("W").addEventListener("click",wrongWay)
}

//Example of Death
function room15(){
    alert("Upon proceeding through the forest, you encounter a Child of the Forest.")
    //Change the Text
    document.getElementById("story").innerHTML =
    "'Do you have the Dragonglass sword?' the Child asks. 'If you do not, you shall not pass. For a great danger awaits you beyond this path.'"
    //Change the Pic
    thepic.src = "images/pics04.jpg"
      //Remove old Links
    removeEvents();
    //Add new Links based on Key
    if (dragonGlass){
        document.getElementById("N").addEventListener("click",room13)
        document.getElementById("E").addEventListener("click",room16)//Room unlocked
        document.getElementById("S").addEventListener("click",wrongWay)
        document.getElementById("W").addEventListener("click",wrongWay)
    }else{
        alert("You do not have the dragonglass sword. You have been teleported out of the forest, and must begin your journey anew.")
        document.getElementById("N").addEventListener("click",room11)
        document.getElementById("E").addEventListener("click",room11)//Room not unlocked
        document.getElementById("S").addEventListener("click",room11)
        document.getElementById("W").addEventListener("click",room11)
    }

}

function room16(){
    
    //Change the Text
    document.getElementById("story").innerHTML =
    "A Raven lands on a nearby branch to warn you 'You must have on your person, the Dragonglass sword and the potion the Seer gifted unto you. For without them, you shall surely perish. To proceed, go East.'"
    //Change the Pic
    thepic.src = "images/raven.png"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",wrongWay)
    document.getElementById("E").addEventListener("click",room21)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",room15)
}