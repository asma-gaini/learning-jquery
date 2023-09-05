$(document).ready(function(){

    // ba zadan dokme next ax badi namayesh dade mishe
    var counter = 0;
    $(".image img").first().siblings("img").hide();   
    $(".next").click(function(e){
        counter++;
        if (counter>3) {
            counter = 0;
        }
        $(".image img").hide();   
        $(".image img").eq(counter).show();
       
    });


    
    // alert("salam");
})
