$(document).ready(function(){

   $('select').change(function() {
    decide($(this));
  });

  /* 
  changes the background color of the sandwiched divs
  logs the color changed to
  ARGUMENTS:
      elem - the select element that received the action
  */
  var decide = function(elem) {
    var baseDiv = elem.parent();
    var chicken = baseDiv.parent();
    chicken.removeClass('noodle');
    switch(elem.val()){
        case 'd2':
        baseDiv.prev().css('background-color', 'blue');
        break;
        case 'd4':
        baseDiv.prev().css('background-color', 'red');
        break;
        case 'd6':
        baseDiv.prev().css('background-color', 'black');
        break;
    };
    baseDiv.prev().css('border', 'none');
    baseDiv.prev().css('padding', '4px');
    console.log(elem.val());
  };
  $(".hook").on('mouseout', function(){
    $(this).addClass('noodle');
  });
  $('.pushin').on('click', function(){
    $('.wrapper').append("<div class='thinger'> <div class='hook noodle'>  <div id='baseDiv'><p class='stubborn'>Hover me</p></div>  <div id='upDiv'>    <select class='select'>        <option value='blu'>blu</option>        <option value='red'>red</option>        <option value='blk'>blk</option>    </select>  </div> </div></div>");
     $('select').change(function() {
    decide($(this));
  });
    $(".hook").on('mouseout', function(){
    $(this).addClass('noodle');
  });
    console.log('work');
  });
  /*$(select).val()*/
  
});