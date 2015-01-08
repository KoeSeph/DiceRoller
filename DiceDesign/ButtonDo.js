$(document).ready(function(){
  var frm = 1;
  var too = 0;
  var modie = 0;
  var totter = 0;
  var listin = function(){
    var numnum = $("p")? 1 : 0;
    if (numnum = 1) {
     $(this).find('p').remove();
   };
    var fast = Math.round(getRandomArbitrary(frm,too));
     $(this).append('<p class="whisper">'+ fast+'</p>');
   return totter = totter + fast;
 };
  function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min + modie;
};
   $('select').change(function() {
    decide($(this));
  });
  $('div + p').on('click',listin);
  $('.rollin').on('click', function(){
    $('.stubborn').trigger('click');
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
    baseDiv.prev().css('border', 'none');
    baseDiv.prev().css('padding', '4px');
    console.log(elem.val());
    switch(elem.val()){
        case 'd2':
        baseDiv.prev().css('background-color', 'blue');
        return too = 2;
        break;
        case 'd4':
        baseDiv.prev().css('background-color', 'red');
        return too = 4;
        break;
        case 'd6':
        baseDiv.prev().css('background-color', 'black');
        return too = 6;
        break;
        case 'd8':
        baseDiv.prev().css('background-color', 'red');
        return too = 8;
        break;
        case 'd10':
        baseDiv.prev().css('background-color', 'red');
        return too = 10;
        break;
        case 'd12':
        baseDiv.prev().css('background-color', 'red');
        return too = 12;
        break;
        case 'd20':
        baseDiv.prev().css('background-color', 'red');
        return too = 20;
        break;
        case 'd100':
        baseDiv.prev().css('background-color', 'red');
        return too = 100;
        break;
    };
  };
  $(".hook").on('mouseout', function(){
    $(this).addClass('noodle');
  });
  $('.pushin').on('click', function(){
    $('.wrapper').append("<div class='thinger'> <div class='hook noodle'>  <div id='baseDiv'><p class='stubborn'><p>Hover me</p></p></div>  <div id='upDiv'>    <select class='select'>        <option value='d2'>d2</option>        <option value='d4'>d4</option>        <option value='d6'>d6</option>        <option value='d8'>d8</option>        <option value='d10'>d10</option>        <option value='d12'>d12</option>        <option value='d20'>d20</option>        <option value='d100'>d100</option>    </select>  </div> </div></div>");
     $('select').change(function() {
    decide($(this));
  });
    $('.stubborn').on('click',listin);
  $('.rollin').on('click', function(){
    $('.stubborn').trigger('click');
  });
    $(".hook").on('mouseout', function(){
    $(this).addClass('noodle');
  });
    console.log('work');
    var decide = function(elem) {
    var baseDiv = elem.parent();
    var chicken = baseDiv.parent();
    chicken.removeClass('noodle');
    baseDiv.prev().css('border', 'none');
    baseDiv.prev().css('padding', '4px');
    console.log(elem.val());
    switch(elem.val()){
        case 'd2':
        baseDiv.prev().css('background-color', 'blue');
        return too = 2;
        break;
        case 'd4':
        baseDiv.prev().css('background-color', 'red');
        return too = 4;
        break;
        case 'd6':
        baseDiv.prev().css('background-color', 'black');
        return too = 6;
        break;
        case 'd8':
        baseDiv.prev().css('background-color', 'red');
        return too = 8;
        break;
        case 'd10':
        baseDiv.prev().css('background-color', 'red');
        return too = 10;
        break;
        case 'd12':
        baseDiv.prev().css('background-color', 'red');
        return too = 12;
        break;
        case 'd20':
        baseDiv.prev().css('background-color', 'red');
        return too = 20;
        break;
        case 'd100':
        baseDiv.prev().css('background-color', 'red');
        return too = 100;
        break;
    };
  };
  });
  /*$(select).val()*/
  });