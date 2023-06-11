
$(document).keypress(function(event){
    function sleep(delay) {
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay);
    }
    $(".heroe2 > h1").text("Level One!");
    sleep(2000);
    var shouldPlay = true;
    let counter = 1;
    while(counter < 10){
        for(var i = 0; i < counter; i++){
            var number = Math.floor(Math.random() * 4);
            switch(number){
                case 0:
                    var sound = new Audio('green.mp3');
                    sound.play();
                    $(".green").animate({opacity : 1}).delay(500).animate({opacity : 0.5})
                    sleep(2000);
                    break;
                case 1:
                    var sound = new Audio('red.mp3');
                    sound.play();
                    $(".red").animate({opacity : 1}).delay(500).animate({opacity : 0.5})
                    sleep(2000);
                    break;
                case 2:
                    var sound = new Audio('yellow.mp3');
                    sound.play();
                    $(".yellow").animate({opacity : 1}).delay(500).animate({opacity : 0.5})
                    sleep(2000);
                    break;
                case 3:
                    var sound = new Audio('blue.mp3');
                    sound.play();
                    $(".blue").animate({opacity : 1}).delay(500).animate({opacity : 0.5})
                    sleep(2000);
                    break;
                default:
                    break;
            }
        }
        counter++;

    }
})