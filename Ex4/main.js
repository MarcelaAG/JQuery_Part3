// set on click to make div taller
// set on click to change colour
// set click to go back to original colour
// set click to disapper
// set click to reappear

$(document).ready(function(){
   let block = $('#colored-block');
   
    $('#makeTaller').on('click', function(){
        $(block).height('800px');
   });

    $('#changeColour').on('click', function(){
        $(block).css('background-color', 'blue');
    })

    $('#changeColourBack').on('click', function(){
        $(block).css('background-color', 'blueviolet');
    })
    $('#disappear').on('click', function(){
        $(block).hide();
    })
    $('#reappear').on('click', function(){
        $(block).show();
    })

});


