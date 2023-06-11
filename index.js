$(document).keypress(function(event){
    $(".heroe2 > h1").text("Level One!")
    var sound = new Audio();
    var shouldPlay = true;
    let counter = 1;
    while(shouldPlay){
        for(var i = 0; i < counter; i++){
            var number = Math.floor(Math.random() * 4);
            switch(number){
                case 0:
                    $(".green").animate({opacity : 0.9})
                    break;
                case 1:
                    $(".red").animate({opacity : 0.9})
                    break;
                case 2:
                    $(".yellow").animate({opacity : 0.9})
                    break;
                case 3:
                    $(".blue").animate({opacity : 0.9})
                    break;
                default:
                    break;
            }
        }
        counter++;
    }
})