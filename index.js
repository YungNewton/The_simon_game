
$(document).keypress(function(){
    var number_array = [];

    for (let counter = 1; counter < 3; counter++) {
        setTimeout(function timer() {
            var number = Math.floor(Math.random() * 4);
            number_array.push(number);
            $(".heroe2 > h1").text("Level " + number_array.length);
            switch(number){
                case 0:
                    var sound = new Audio('green.mp3');
                    $(".green").animate({opacity : 0}).delay(10).animate({opacity : 1})
                    sound.play();
                    break;
                case 1:
                    var audio = new Audio('red.mp3');
                    $(".red").animate({opacity : 0}).delay(10).animate({opacity : 1})
                    audio.play();
                    break;
                case 2:
                    var sound3 = new Audio('yellow.mp3');
                    $(".yellow").animate({opacity : 0}).delay(10).animate({opacity : 1})
                    sound3.play();
                    break;
                case 3:
                    var sound4 = new Audio('blue.mp3');
                    $(".blue").animate({opacity : 0}).delay(10).animate({opacity : 1})
                    sound4.play();
                    break;
                default:
                    break;
                }
        }, counter * 1500);
    }

})