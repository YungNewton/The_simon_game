
$(document).keypress(function(){
    var number_array = [];
    var answer_array = [];
    var should_play = true;
    var counter = 1;
    while (counter < 5) {
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
        counter++
        $(".top td").click(function(event){
            var text = $(event.target).attr('class');
            switch(text){
                case 0:
                    answer_array.push(0);
                    break;
                case 1:
                    answer_array.push(1);
                    break;
                case 2:
                    answer_array.push(2);
                    break;
                case 3:
                    answer_array.push(3);
                    break;
                default:
                    answer_array.push(4);
                    break;
            }
            if(JSON.stringify(answer_array) === JSON.stringify(number_array) ){
                
            }else{
                var loose = new Audio('wrong.mp3');
                $(".heroe2 > h1").html("Game Over !!!!\npress any key to restart");
                loose.play();
            }
        })
    }

})