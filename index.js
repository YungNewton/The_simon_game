$(document).keypress(function(event){
    $(".heroe2 > h1").text("Level One!");
    // var sound = new Audio();
    // var shouldPlay = false;
    let counter = 1;
    // while(shouldPlay){
        for(var i = 0; i < counter; i++){
            var number = Math.floor(Math.random() * 4);
            switch(number){
                case 0:
                    $(".green").animate({opacity : 1}).delay(500).animate({opacity : 0.5})
                    break;
                case 1:
                    $(".red").animate({opacity : 1}).delay(500).animate({opacity : 0.5})
                    break;
                case 2:
                    $(".yellow").animate({opacity : 1}).delay(500).animate({opacity : 0.5})
                    break;
                case 3:
                    $(".blue").animate({opacity : 1}).delay(500).animate({opacity : 0.5})
                    break;
                default:
                    break;
            }
        }
        counter++;
    // }
})