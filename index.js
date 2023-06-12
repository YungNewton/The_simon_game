
$(document).keypress(function(){
    var number_array = [];

    for (let counter = 1; counter < 3; counter++) {
        setTimeout(function timer() {
            var number = Math.floor(Math.random() * 4);
            number_array.push(number);
            $(".heroe2 > h1").text("Level " + number_array.length);
            for(var i = 0; i < number_array.length; i++){
                switch(number_array[i]){
                    case 0:
                        setTimeout(()=>{
                            var sound = new Audio('green.mp3');
                            $(".green").animate({opacity : 1}).delay(300).animate({opacity : 0.5})
                            sound.play();
                        },i * 1500);
                        break;
                    case 1:
                        setTimeout(()=>{
                            var audio = new Audio('red.mp3');
                            $(".red").animate({opacity : 1}).delay(300).animate({opacity : 0.5})
                            audio.play();
                        },i * 1500);
                        break;
                    case 2:
                        setTimeout(()=>{
                            var sound3 = new Audio('yellow.mp3');
                            $(".yellow").animate({opacity : 1}).delay(300).animate({opacity : 0.5})
                            sound3.play();
                        },i * 1500);
                        break;
                    case 3:
                        setTimeout(()=>{
                            var sound4 = new Audio('blue.mp3');
                            $(".blue").animate({opacity : 1}).delay(300).animate({opacity : 0.5})
                            sound4.play();
                        },i * 1000);
                        break;
                    default:
                        break;
                }
            }
        }, counter * 1000);
    }

})