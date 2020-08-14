//Raihan Ali

function room21(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "You are now in the middle of the forest. You can go East"
    //Change the Pic
    thepic.src = "images/pic100.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",wrongWay)
    document.getElementById("E").addEventListener("click",room22)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",wrongWay)
}

function room22(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "You are being followed by a Raven. This Raven will try guide you by being your eyes above, there is an exit south <br> N is No Entry, E is No Entry, W to go Back"
    //Change the Pic
    thepic.src = "images/branraven.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",wrongWay)
    document.getElementById("E").addEventListener("click",wrongWay)
    document.getElementById("S").addEventListener("click",room23)
    document.getElementById("W").addEventListener("click",room21)
}

function room23(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "You encounter an undead being, you must use your dragonglass sword to defend yourself. Go south to defend yourself <br> N to go Back, E is an Empty Wheelchair, W is No Entry"
    //Change the Pic
    thepic.src = "images/pic200.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",room22)
    document.getElementById("E").addEventListener("click",room25)
    document.getElementById("S").addEventListener("click",room24)
    document.getElementById("W").addEventListener("click",wrongWay)
}

function room24(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "You discover a map, it looks promising. You must go back North as you are following the Map <br> W is No Entry, E is No Entry, S is No Entry"
    //Change the Pic
    thepic.src = "images/pic300.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",room23)
    document.getElementById("E").addEventListener("click",wrongWay)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",wrongWay)
}

function room25(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "You are now at the end of the map, your back is broken due to a spell from a witch, what you see first is a wheelchair which you will use to move around. there is an exit East <br> N is No Entry, S is No Entry, W to go back"
    //Change the Pic
    thepic.src = "images/Wheelchair.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",wrongWay)
    document.getElementById("E").addEventListener("click",room26)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",room23)
}

function room26(){
    
    //Change the Text
    document.getElementById("story").innerHTML = 
    "You encounter a pack of Dire Wolves looking to attack, but they see the dragonglass sowrd and help you through your journey, there is an exit East <br> N is No Entry, S is No Entry, W to Go Back"
    //Change the Pic
    thepic.src = "images/wolfpack.jpg"
    //Remove old Links
    removeEvents();
    //Add new Links
    document.getElementById("N").addEventListener("click",wrongWay)
    document.getElementById("E").addEventListener("click",room31)
    document.getElementById("S").addEventListener("click",wrongWay)
    document.getElementById("W").addEventListener("click",room25)
}