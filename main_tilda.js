$(document).ready(function () {
    $('.t-submit').on('click', function () {
        var attr = $('input .t-img-select__').attr('value');
        var http = 'https://static.tildacdn.info/tild6134-3966-4266-b339-373762336336/8c201547e3b3089846f2.jpg';

        $('.t-img-select__container').hide().alert(attr,http);
    });
});

// var ot1 = attr (https://static.tildacdn.com/tild3930-3136-4932-b662-336261306132/3e9e2c647b2ac86b632e.jpg); 
// var ot1 = attr (https://static.tildacdn.com/tild6134-3966-4266-b339-373762336336/8c201547e3b3089846f2.jpg); 
// var ot1 = attr (https://static.tildacdn.com/tild3566-6239-4832-b637-346230366162/5383ce83e989c618c8ee.jpg); 
// var ot1 = attr (https://static.tildacdn.com/tild3063-3538-4331-a537-613164363134/af37830032ef4510aca9.jpg); 
// var ot1 = attr (https://static.tildacdn.com/tild6235-3562-4762-b561-363530366661/3e9e2c647b2ac86b632e.jpg); 
// var ot1 = attr (https://static.tildacdn.com/tild3461-3532-4261-b039-633436353730/8c201547e3b3089846f2.jpg); 
// var ot1 = attr (https://static.tildacdn.com/tild6438-3231-4532-b132-386331363638/5383ce83e989c618c8ee.jpg); 
// var ot1 = attr (https://static.tildacdn.com/tild3464-6163-4564-a632-653837323737/af37830032ef4510aca9.jpg)


// if (answ==ot1, ot2) {
//     return false;
// } else {
//     alert('OK!!!!');
// }

// $array = Array('slon', 'kot', 'kroko', 'mish', 'petuh', 'kon');
// $array_rand = array_rand($array, 1);
// if($array[$array_rand]== 'slon'){$slovo = ' slon ';}
// if($array[$array_rand]== 'kot'){$slovo = ' kot ';}
// if($array[$array_rand]== 'kroko'){$slovo = ' kroko ';}
// if($array[$array_rand]== 'mish'){$slovo = ' mish ';}
// if($array[$array_rand]== 'petuh'){$slovo = ' petuh ';}
// if($array[$array_rand]== 'kon'){$slovo = ' kon ';}

var array = ['slon', 'kot', 'kroko', 'mish', 'petuh', 'kon'];
alert(array[1]);

// if ('#'== );


// https://static.tildacdn.info/tild3930-3136-4932-b662-336261306132/3e9e2c647b2ac86b632e.jpg; 
// https://static.tildacdn.info/tild6134-3966-4266-b339-373762336336/8c201547e3b3089846f2.jpg; 
// https://static.tildacdn.info/tild3566-6239-4832-b637-346230366162/5383ce83e989c618c8ee.jpg; 
// https://static.tildacdn.info/tild3063-3538-4331-a537-613164363134/af37830032ef4510aca9.jpg
$(document).ready(function(){
    $('button.t-submit').on('click', function(){
        var i = $('input.t-img-select__hiddeninput js-tilda-rule').attr('value');
        alert(i);
    });
});