//Anca-Liana Hedesan

function room31(){
    //Change the Text
   document.getElementById("story").innerHTML = 
   "You are now in the last part of the forest, where any bad step can cost you your life. Once you get in this section you should have the magic potion to see in the dark and the dragon glass sword. You need these objects to get the dragon egg that was stolen by the white walkers and secretly hidden in a dark place where no one can find it. With the help of the magic potion you will be able to see in the dark so you can find the egg, but they  are also guarding the egg so you will need the dragon glass to be able to kill them and get the dragon egg back to the dragons so they can help you and fly you over the lava river  to safely get in the castle. If you are not careful you can accidentally get lost in the forest and killed by the white walkers. Once you bring the dragons back the stolen egg they will fly you up to the front gate of the castle. Do you have the magic potion?  South you will find the egg, East there is an exit"
       //Change the Pic
       thepic.src = "images/drag7.jpg"
       //Remove old Links
       removeEvents();
       //Add new Links based on magic potion
       if (magicPotion){
           document.getElementById("N").addEventListener("click",wrongWay) 
           document.getElementById("W").addEventListener("click",room26)
           document.getElementById("S").addEventListener("click",room32)//Room unlocked
           document.getElementById("E").addEventListener("click",room34)
       }else{
           alert("You don't have the magic potion")
           document.getElementById("N").addEventListener("click",wrongWay) 
           document.getElementById("W").addEventListener("click",room26)
           document.getElementById("S").addEventListener("click",wrongWay)//Room locked
           document.getElementById("E").addEventListener("click",room34)
       }
   }
   function room32(){
       
       //Change the Text
       document.getElementById("story").innerHTML =
        "Thanks to the Magic potion you can see in the dark. But the egg is guarded by a white walker. Do you have the dragon glass sword? East is the dragon egg, north there is an exit"
       
        thepic.src = "images/ww1.jpg"
        //Remove old Links
        removeEvents();
        //Add new Links based on dragon glass
        if (dragonGlass){
            document.getElementById("N").addEventListener("click",room31) 
            document.getElementById("W").addEventListener("click",wrongWay)
            document.getElementById("S").addEventListener("click",wrongWay)
            document.getElementById("E").addEventListener("click",room33)//you killed the white walker
        }else{
            alert("You don't have the dragon glass")
            document.getElementById("N").addEventListener("click",room31) 
            document.getElementById("W").addEventListener("click",wrongWay)
            document.getElementById("S").addEventListener("click",wrongWay)
            document.getElementById("E").addEventListener("click",room11)//you are dead
           //Change the Pic
           thepic.src = "images/ww3.jpg"
        }
    }
   
   function room33(){
       
       //Change the Text
       document.getElementById("story").innerHTML = 
       "You have killed the white walker! Thanks to the magic potion you can see the dragon egg and you pick it up. there is an exit North"
       //Change the Pic
       thepic.src = "images/egg4.jpg"
       //Remove old Links
       dragonEgg = true;
       
       //Add new Links
       document.getElementById("N").addEventListener("click",room34)
       document.getElementById("W").addEventListener("click",room32)
       document.getElementById("S").addEventListener("click",wrongWay)
       document.getElementById("E").addEventListener("click",wrongWay)
   }
   
   function room34(){
       
       //Change the Text
       document.getElementById("story").innerHTML = 
       "You are still in the forest. You have the dragon egg which you must return to the dragons so they can fly you to the castle. The white walkers are chasing you to get the egg back so you must be very carefull. East you get to the dragons, north the white walkers will kill you"
       //Change the Pic
       thepic.src = "images/drag9.jpg"
       //Remove old Links
       removeEvents();
       //Add new Links
       document.getElementById("N").addEventListener("click",room35)
       document.getElementById("W").addEventListener("click",room31)
       document.getElementById("S").addEventListener("click",room33)
       document.getElementById("E").addEventListener("click",room36)
   }
   //Example of Death
   function room35(){
       alert("The white walkers found you and you are outnumbered")
       //Change the Text
       document.getElementById("story").innerHTML =
        "You are dead all roads go back to the start"
       //Change the text
       thepic.src = "images/ww2.jpg"
       //Remove old Links
       removeEvents();
       //Add new Links
       document.getElementById("N").addEventListener("click",room11)
       document.getElementById("W").addEventListener("click",room11)
       document.getElementById("S").addEventListener("click",room11)
       document.getElementById("E").addEventListener("click",room11)
   }
   
   
   function room36(){
       
       //Change the Text
       document.getElementById("story").innerHTML = 
       "You finally made it to the dragon. Give him the dragon egg and he will fly you to Dragonstone. East is the way to the castle "
       //Change the Pic
       thepic.src = "images/val1.jpg"
       //Remove old Links
       removeEvents();
       if (dragonEgg){
           document.getElementById("N").addEventListener("click",wrongWay) 
           document.getElementById("W").addEventListener("click",room34)
           document.getElementById("S").addEventListener("click",wrongWay)
           document.getElementById("E").addEventListener("click",room41)
       }else{
           alert("You don't have the dragon egg")
           document.getElementById("N").addEventListener("click",wrongWay) 
           document.getElementById("W").addEventListener("click",room34)
           document.getElementById("S").addEventListener("click",wrongWay)
           document.getElementById("E").addEventListener("click",wrongWay)//the dragons will not fly you to the castle
       }
   }
   