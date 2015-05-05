$(document).ready(function () //Function to run when website is loaded
{
    var word1 = "Your";
    var word2 = "New";
    var word3 = "Band Name";
    var pick1 = 0;
    var pick2 = 0;
    var pick3 = 0;
    var whichColums = 1;
    var list1 = ["Black", "Good", "Evil", "High", "Broken", "White"]; //6 (5 in tek-talk)
    var list2 = ["Wolf", "Man", "Apple", "Thorn", "Heart", "Flames"]; //6
    var list3 = ["Rising", "Walking", "of Fire", "In The House", "Burning", "of Doom"]; //6
    var rapname1 = ["Lil", "Big", "The Notorious", "Dr.", "Ice", "G.", "Young", "Wiz", "Kool"]; //9
    var rapname2 = ["-Z", "Boi", "Chainz", "Killah", "On the Street", "Blow"]; //6
    
    $("#GenerateRap").click(function ()
    {
        pick1 = Math.floor((Math.random() * rapname1.length) + 0); 
        pick2 = Math.floor((Math.random() * rapname2.length) + 0); 

        whichColums = Math.floor((Math.random() * 2) + 1);
        
        if (whichColums == 1)
        {
            console.log('2 Word Rap - inside 1');
            word1 = rapname1[pick1];
            $('#outputTextRap').html(word1 + " " + $("#test").val());
        }
        else if (whichColums == 2)
        {
            console.log('2 Word Rap - inside 2');
            word2 = rapname2[pick2];
            $('#outputTextRap').html($("#test").val() + " " + word2);
        }       

    });
    
    $("#Generate3").click(function () 
    {
        pick1 = Math.floor((Math.random() * list1.length) + 0); 
        pick2 = Math.floor((Math.random() * list2.length) + 0); 
        pick3 = Math.floor((Math.random() * list3.length) + 0); 
        
        console.log(pick1, pick2, pick3);
        
        word1 = list1[pick1];
        word2 = list2[pick2];
        word3 = list3[pick3];
        
        $('#outputText').html(word1 + " " + word2 + " " + word3);
    });
    
    $("#Generate2").click(function ()
    {
        pick1 = Math.floor((Math.random() * list1.length) + 0); 
        pick2 = Math.floor((Math.random() * list2.length) + 0); 

        if (Math.random() >= 0.5) 
        {
            console.log('2 Word Band - inside 1');
            word1 = list1[pick1];
            word2 = list2[pick2];
        } 
        else 
        {
            console.log('2 Word Band - inside 2');       
            word1 = list2[pick1];
            word2 = list3[pick2]; 
        }
        
        $('#outputText').html(word1 + " " + word2);
    });
    

});