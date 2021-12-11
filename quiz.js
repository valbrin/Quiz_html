<script>
$(document).ready(function () {
    // $('.t-submit').on('click', function () {
    //     var attr = $('.t-img-select__hiddeninput js-tilda-rule').attr('value');
    //     // var http = 'https://static.tildacdn.info/tild6134-3966-4266-b339-373762336336/8c201547e3b3089846f2.jpg';

    //     $('.t-img-select__container').hide().alert(attr);
    // });
    
    $('button.t-submit').click(function(){
        var $attr = $('.t-input-block input.t-img-select__hiddeninput').attr('value');
        var $answr1 = 'https://static.tildacdn.info/tild3930-3136-4932-b662-336261306132/3e9e2c647b2ac86b632e.jpg';
        var $answr2 = 'https://static.tildacdn.info/tild6235-3562-4762-b561-363530366661/3e9e2c647b2ac86b632e.jpg';

        if($attr == $answr1 || $answr2){
            return alert('OK');
        }else{
            return alert('false');
        };
    });
});
</script>
