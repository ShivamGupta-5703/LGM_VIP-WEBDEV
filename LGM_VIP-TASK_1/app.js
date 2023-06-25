// Creating a new todo item  -->
$('#inp').keypress(function(e){
    if(e.which === 13){
        const todoText = $('#inp').val();
        $('#list').append(`<li><span><i class="fa-solid fa-trash"></i></span> ${todoText}</li>`);
        $('#inp').val("");
    }
})


// Check/Uncheck todo as completed  -->
//This will not check list items that will be added dyanmically by the user[ similarily for delete].
/* 
$('li').click(function(){
    $(this).toggleClass('Completed')
})
 */

/* .on( events [, selector ] [, data ], handler ) */
$('ul').on('click','li',function(){
    $(this).toggleClass('Completed')
})


// Delete item on clicking on 'X'  -->

/* $('span').click(function(){
    $(this).parent().remove();
}) 
 */
$('#list').on('click','span',function(e){
    $(this).parent().fadeOut(700,function(){
        $(this).remove();
    });

    e.stopPropagation(); //prevents events bubbling.
    //this is used to stop propagation on next function [check]
    //Without this on clicking on X , first check will run then slowly list item will fade away
    //If we stop propagation , on clicking X , it will be simply removed,not checked.
    //This is becoz span is inside list . So if any function will work on span , all ancestor's function of span will be triggered.
})


$('#plus').click(function(){
    $('#inp').fadeToggle();
})

