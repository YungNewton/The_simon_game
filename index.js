
$(document).keypress(function(){
    var number_array = [];
    let counter = 1;
    var should_continue = true;
        while(should_continue){
            $(".heroe2 > h1").text("Level "+counter);
            var number = Math.floor(Math.random() * 4);
            number_array.push(number);
            for(var i = 0; i < number_array.length(); i++){
                switch(number_array[i]){
                    case 0:
                        var sound = new Audio('green.mp3');
                        sound.play();
                        $(".green").animate({opacity : 1}).delay(500).animate({opacity : 0.5})
                        sleep(500);
                        break;
                    case 1:
                        var audio = new Audio('red.mp3');
                        audio.play();
                        $(".red").animate({opacity : 1}).delay(500).animate({opacity : 0.5})
                        sleep(500);
                        break;
                    case 2:
                        var sound3 = new Audio('yellow.mp3');
                        sound3.play();
                        $(".yellow").animate({opacity : 1}).delay(500).animate({opacity : 0.5})
                        sleep(500);
                        break;
                    case 3:
                        var sound4 = new Audio('blue.mp3');
                        sound4.play();
                        $(".blue").animate({opacity : 1}).delay(500).animate({opacity : 0.5})
                        sleep(500);
                        break;
                    default:
                        break;
                }
            }
            should_continue = false;
            counter++;
    
        }
})