var questions = $('.question').length;
var total = 0;
var avg = 0;
var myQuestions = $('section.q-n-a');

shuffle(myQuestions);
//console.log(myQuestions);
myQuestions.each( function(){
    var myAnswers = $(this).find('.answer');
    shuffle(myAnswers);
    $(this).find('.answers').html(myAnswers);
})

$('.quiz-area').html(myQuestions);

function shuffle(array){

    for(let i = array.length-1; i >0; i--){
        let j = Math.floor( Math.random() * (i+1));
        [array[i], array[j]] = [array[j], array[i]];

    }
}

$('.answer').on('click', function(){

    if($(this).parent().find('.selected').length > 0){
        total -= $(this).parent().find('.selected').data('value');
        $(this).parent().find('.selected').removeClass('selected');
    }
    total += $(this).data('value');
    $(this).addClass('selected');                
    console.log(total);

})

$('.finish').on('click', function(){
if($('.selected').length === questions){
    avg = total / questions;
    var message = '';
    

    
    if(avg < 1.5){
        message = 'tipo 1';
    }else if (avg<2.5){
        message = 'tipo 2';
    }else if (avg<3.5){
        message = 'tipo 3';
    }else{
        message = '4';
    }

    $('#quiz-area, .finish').hide();

}else{
    message = 'Você não respondeu todas as perguntas!'
}
$('.response p').text(message)
$('.response').show();

    
    //alert(message);
})