$(document).ready(function () //Function to run when website is loaded
{
    var word1 = "Your";
    var word2 = "New";
    var word3 = "Band Name";
    var pick1 = 0;
    var pick2 = 0;
    var pick3 = 0;
    var list1 = ["Black", "Good", "Evil", "High", "Broken", "White"];
    var list2 = ["Wolf", "Man", "Apple", "Thorn", "Heart", "Flames"];
    var list3 = ["Rising", "Walking", "of Fire", "In The House", "Burning", "of Doom"];
    
    $("#Generate3").click(function () 
    {
        pick1 = Math.floor((Math.random() * 5) + 0); 
        pick2 = Math.floor((Math.random() * 5) + 0); 
        pick3 = Math.floor((Math.random() * 5) + 0); 
        
        console.log(pick1, pick2, pick3);
        
        word1 = list1[pick1];
        word2 = list2[pick2];
        word3 = list3[pick3];
        
        
        document.getElementById("outputText").innerHTML = word1 + " " + word2 + " " + word3;
    });
    
    $("#Generate2").click(function ()
    {
        pick1 = Math.floor((Math.random() * 5) + 0); 
        pick2 = Math.floor((Math.random() * 5) + 0); 


        
        var whichColums = Math.floor((Math.random() * 2) + 1);
        console.log(whichColums);
        if (whichColums == 1)
        {
            console.log('inside 1');
            word1 = list1[pick1];
            word2 = list2[pick2];
        }
        else if (whichColums == 2)
        {
            console.log('inside 2');
            console.log(pick1, pick2);        
            word1 = list2[pick1];
            word2 = list3[pick2]; 
        }       
        document.getElementById("outputText").innerHTML = word1 + " " + word2;
    });
});