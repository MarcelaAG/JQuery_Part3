$(document).ready(function(){
    $('input').focus(function(){
        $(document).keydown(function(e){
            switch (e.which) { //e.keycode doesn't work, need to use e.which to normalize

                    case 37: //left arrow key
                        $('#moveMe').animate({left: '-=10'}); 
                        break;

                    case 38: //up arrow key
                    $('#moveMe').animate({top: '-=10'});   
                        break;

                    case 39: //right arrow key
                    $('#moveMe').animate({left: '+=10'});   
                        break;

                    case 40: //bottom arrow key
                    $('#moveMe').animate({top: '+=10'});   
                        break;
                    }
        });
    });
});

