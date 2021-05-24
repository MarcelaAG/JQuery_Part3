     $(document).ready(function(){
         let element = $('input');
         let count = 0;
         $("#counter").on("click", function(){
             count++;
             $(element).val(count);
         });
     });

     