/**load the function after the html page is ready */
$(document).ready(function(){
    /** when the number is clicked , do the ff. */
    $('.num_button').click(function(){
    /** get the current value on the display **/
    var current = $("#da_display").val();
    /** check if zero */
    if (current == '0'){
    current = "";
    }
    /** palitan ang naka display */
    $(#"da_display").val( current + $(this).text());

});
});


