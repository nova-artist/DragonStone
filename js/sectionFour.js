//Murtaza Arif

function room41 (){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "You are in a In the stillness of the moonlit hall of the night you find yourself looking down at the ghost of the lady of the night. On the map you are instructed to follow her path."
    //Change the Pic
    thepic.src = "images/ghosthall.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",room36)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("E").addEventListener("click",room42)
}

function room42 (){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "Dangers looms from the book of magic. You are instructed to ‘take a step back'"
    //Change the Pic
    thepic.src = "images/books.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",room41)
    document.getElementById("S").addEventListener("click",room43)
    document.getElementById("E").addEventListener("click",wrongWay)
}

function room43(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "You fall out from the dungeon. The magic spell is still following you from the book of magic. You are asked to ‘take another step back"
    //Change the Pic
    thepic.src = "images/bluehall2.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",room42)
    document.getElementById("W").addEventListener("click",wrongWay)
    document.getElementById("S").addEventListener("click",room44)
    document.getElementById("E").addEventListener("click",wrongWay)
}

function room44(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "You enter the living room through a portal in the book shelf. You are instructed to ‘go towards the piano and not the lamp’"
    //Change the Pic
    thepic.src = "images/living.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",room43)
    document.getElementById("W").addEventListener("click",room46)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("E").addEventListener("click",room45)
}

function room45(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "You find yourself at a landing. You are instructed to ‘avoid the pit and return back to the living room’."
    //Change the Pic
    thepic.src = "images/stairsdown.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",room44)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("E").addEventListener("click",wrongWay)
}

function room46(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "You have arrived at the uppermost room of the castle, and as you enter, the room lights up with the incandescence of the magical gem of Castle Alcazar. As you cradle the gem, feeling it's warmth, the room begins to shake."
    //Change the Pic
    thepic.src = "images/magicgemstone.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",room47)
    document.getElementById("W").addEventListener("click",wrongWay)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("E").addEventListener("click",room44)
}

function room47(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "The magic gemstone has opened a portal back to your world and you are sucked into it, along with the gemstones and treasues you found in the Castle. Game over!"
    //Change the Pic
    thepic.src = "images/portal.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",gameOver)
    document.getElementById("W").addEventListener("click",gameOver)
    document.getElementById("S").addEventListener("click",gameOver)
    document.getElementById("E").addEventListener("click",room46)
}