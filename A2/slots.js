$(document).ready(function () //Function to run when website is loaded
{
    var totalAmount = 2000;
    var betAmount = 0;
    var poorMessage = "You Can't afford this bet!";
    var pick1 = 0;          //Random pick (#)
    var pick2 = 0;
    var pick2 = 0;
    var pick1pic = 'spin';  //Random pick (item)
    var pick2pic = 'spin';
    var pick3pic = 'spin';
    var theJackpot = 3000; //Start Jackpot value
    var turnCount = 0;
    var winCount = 0;
    var LosesCount = 0;

    $("#bet25").click(function () //When 25 Bet button is pressed
    {
        betAmount = 25;
        if (totalAmount > 24)
        {
            document.getElementById("betAmount").innerHTML = betAmount; //Pass into html (text value)
        }
        else
        {
            document.getElementById("betAmount").innerHTML = poorMessage;
        }
    });

    $("#bet50").click(function () //When 50 Bet button is pressed
    {
        betAmount = 50;
        if(totalAmount > 49)
        {
            document.getElementById("betAmount").innerHTML = betAmount;
        }
        else
        {
            document.getElementById("betAmount").innerHTML = poorMessage;
        }
    });

    $("#bet100").click(function () //When 100 Bet button is pressed
    {
        betAmount = 100;
        if (totalAmount > 99)
        {
            document.getElementById("betAmount").innerHTML = betAmount;
        }
        else
        {
            document.getElementById("betAmount").innerHTML = poorMessage;
        }
    });

    $("#spin").click(function () //This method spins the wheel. It will determin a win and prize. 
    {
        if(betAmount <= totalAmount)
        {
        totalAmount = totalAmount - betAmount;                  //Take the user money

        pick1 = Math.floor((Math.random() * 100) + 1);          //Pick a random number (1 - 102)
        pick2 = Math.floor((Math.random() * 100) + 1);
        pick3 = Math.floor((Math.random() * 100) + 1);

        pick1pic = getFruit(pick1);                             //Send the number to get fruit, return a item
        pick2pic = getFruit(pick2);
        pick3pic = getFruit(pick3);

        $("#slot1").attr("src", pick1pic + ".jpg");             //Send the picked image to the HTML
        $("#slot2").attr("src", pick2pic + ".jpg");
        $("#slot3").attr("src", pick3pic + ".jpg");

        if (pick1pic === pick2pic)
        {                               //Check to see if three in a row
            if (pick1pic === pick3pic)
            {
                if(pick1pic === 'cherry'){ //Check if all three picks are the same
                    totalAmount = totalAmount + (betAmount * 4);    //Give the prize base on bet
                    document.getElementById("messages").innerHTML = "WIN: $" + (betAmount * 4); //Send the win message
                }
                if (pick1pic === 'bar') {
                    totalAmount = totalAmount + (betAmount * 8);
                    document.getElementById("messages").innerHTML = "WIN: $" + (betAmount * 8);
                }
                if (pick1pic === 'seven') {
                    totalAmount = totalAmount + (betAmount * 14);
                    document.getElementById("messages").innerHTML = "WIN: $" + (betAmount * 14);
                }
                if (pick1pic === 'bell') {
                    totalAmount = totalAmount + (betAmount * 20);
                    document.getElementById("messages").innerHTML = "WIN: $" + (betAmount * 20);
                }
                if (pick1pic === 'jackpot') {
                    totalAmount = totalAmount + (theJackpot);
                    document.getElementById("messages").innerHTML = "JACKPOT!!!: $" + (theJackpot);
                    theJackpot = 0; //Reset the Jackpot
                }
                winCount = winCount + 1;                                            
                document.getElementById("wins").innerHTML = "Wins: " + winCount;    //Increase Win Count
            }
            else
            {
                theJackpot = theJackpot + betAmount;                     //increase the Jackpot
                LosesCount = LosesCount + 1;                             //increase lose count
                document.getElementById("messages").innerHTML = "LOSE";  //Send lose message for 2/3
                document.getElementById("jackpotValue").innerHTML = "JACKPOT: " + theJackpot;
                document.getElementById("lose").innerHTML = "Loses: " + LosesCount;
            }
        }
        else
        {
            theJackpot = theJackpot + betAmount;                         //increase the Jackpot
            LosesCount = LosesCount + 1;                                 //increase lose count
            document.getElementById("messages").innerHTML = "LOSE";      //Send lose message for 1/3 or 0/3
            document.getElementById("jackpotValue").innerHTML = "JACKPOT: " + theJackpot;
            document.getElementById("lose").innerHTML = "Loses: " + LosesCount;

        }
        turnCount = turnCount + 1;                                       //increase turn count
        document.getElementById("turns").innerHTML = "Turns: " + turnCount;
        document.getElementById("totalCash").innerHTML = totalAmount;    //Pass Total Cash
        document.getElementById("betAmount").innerHTML = betAmount;      //Pass into html (text value)
        }
        else
        {
            document.getElementById("messages").innerHTML = poorMessage; //Send a message if use has insufficient funds
        }
        
    });

    function getFruit(theRandomValue)   //Pick a value (Not Random, Random with probability)
    {
        var theValue = "spin";
        if (theRandomValue > 0 && theRandomValue <= 10) //Hardest to Get
        {
            theValue = "bell";
        }
        else if (theRandomValue >= 11 && theRandomValue <= 25) //2nd
        {
            theValue = "seven";
        }
        else if (theRandomValue >= 26 && theRandomValue <= 60) //3rd
        {
            theValue = "bar";
        }
        else if (theRandomValue >= 61 && theRandomValue <= 99) //4th Easy
        {
            theValue = "cherry";
        }
        else if (theRandomValue === 100) //Jackpot
        {
            theValue = "jackpot";
        }
        else
        {
            theValue = "spin";
        }
        return theValue;
    }

    $("#reset").click(function () //Reset Button
    {
        location.reload();
    });

});