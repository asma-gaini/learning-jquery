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

// ***********************************************************************

    var counter2 = 0;

        hideAll();
        showSlide(counter2);

    function hideAll(){
        $(".image2 img").hide();
    }

    setInterval(function(){nextSlide();} , 5000);

    function showSlide(index){
        $(".image2 img").eq(index).show();
    }
    $(".next2").click(function(){
        nextSlide();
    })
    function nextSlide(){
       counter2 += 1;
       if (counter2 >= $(".image2 img").length) {
            counter2 = 0;
       }
       hideAll();
       showSlide(counter2)
    }

    $(".prev2").click(function(){
        prevSlide();
    })
    function prevSlide(){
        counter2 -= 1;
       if (counter2 < 0) {
            counter2 = $(".image2 img").length-1;
       }
       hideAll();
       showSlide(counter2)
    }

// ***********************************************************************
    $('#submit').click(function(){
        var userName = $("#txt1").val();
        if (userName == "" || userName == null) {
            alert ("fuck you");
            return false;
        }
        else {
            alert (userName);
            return true;
        }
    })


    // alert("salam");
})


