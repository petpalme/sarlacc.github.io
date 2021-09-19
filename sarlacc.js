function play (Sarlacc)
// the first 2 lines set up the dice rolls. I choose 13 because it is closer to the real game.
{
    var die1 = Math.ceil(Math.random() * 13);
    var die2 = Math.ceil(Math.random() * 13);
    //the next 2 lines add the 2 dice and calculate a sum
    var sum;
    sum = die1+die2;
    //the next 3 lines sets up the link from this page to html page. Die 1 goes on one line, Die 2 on the next, and the results underneath that.
    document.getElementById("die1Res").innerHTML = "Die 1 = " + die1;
    
    document.getElementById("die2Res").innerHTML = "Die 2 = " + die2;
    
    document.getElementById("sumRes").innerHTML = "Sum =" + sum;
    
    //if 2 or 21 comes up, that is an automatic lose. The text line is next.  
    if (sum==2 || sum==21)
    
    { document.getElementById("finalRes").innerHTML = "The Pit-you lose";
    
    }
    // if by chance doubles are rolled, its a win.
    else if(die1==die2&&die1%2==0)

    { document.getElementById("finalRes").innerHTML ="Salacc-you win";
    
    }
    //Most of the time, it will just ask you to add to pot, as in keep playing.
    else {
        document.getElementById("finalRes").innerHTML ="Add to the pot";
    }
    
    }

   