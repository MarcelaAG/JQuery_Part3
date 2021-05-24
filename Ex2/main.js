$(document).ready(function(){
    let element = $('input');
    let countUp = 0;
    $("#counter1").on("click", function(){
        countUp++;
        $(element).val(countUp);
    });
    $("#counter2").on("click", function(){
        countUp--;
        $(element).val(countUp);
    });
});

