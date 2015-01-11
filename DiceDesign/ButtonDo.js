$(document).ready(function(){
  /* 
  changes the background color of the sandwiched divs
  logs the color changed to
  ARGUMENTS:
      elem - the select element that received the action
      */
      $('.pushin').on('click', function(){
        $('.wrapper').append("<div class='thinger'> <div class='hook noodle'>  <div class='baseDiv'><p class='stubborn'><p class='funk'>Hover me</p></p></div>  <div class='upDiv'>    <button class='pepsi'>X</button> <select class='select'>        <option value='d2'>d2</option>        <option value='d4'>d4</option>        <option value='d6'>d6</option>        <option value='d8'>d8</option>        <option value='d10'>d10</option>        <option value='d12'>d12</option>        <option value='d20'>d20</option>        <option value='d100'>d100</option>    </select>  </div> </div></div>");
        var frm = 1;
        var too = 0;
        var modie = 0;
        var totter = 0;
        var listin = function(){
          $('#baseDiv').css('background-color', 'red');
          var numnum = $("p")? 1 : 0;
          if (numnum = 1) {
           $(this).find('p').remove();
         };
         var fast = Math.round(getRandomArbitrary(frm,too));
         $(this).append('<p class="whisper">'+ fast+'</p>');
         $('.funk').addClass('imagine');
         return totter = totter + fast;
       };
       function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min + modie;
      };
      var decide = function(elem) {
        var baseDiv = elem.parent();
        var chicken = baseDiv.parent();
        chicken.removeClass('noodle');
        baseDiv.prev().css('border-color', 'transparent');
        console.log(elem.val());
        switch(elem.val()){
          case 'd2':
          return too = 2;
          break;
          case 'd4':
          return too = 4;
          break;
          case 'd6':
          return too = 6;
          break;
          case 'd8':
          return too = 8;
          break;
          case 'd10':
          return too = 10;
          break;
          case 'd12':
          return too = 12;
          break;
          case 'd20':
          return too = 20;
          break;
          case 'd100':
          return too = 100;
          break;
        };
      };
      $('select').change(function() {
        decide($(this));
      });
      $('.stubborn').on('click',listin);
      $('.rollin').on('click', function(){
        $('.stubborn').trigger('click');
      });
      $(".hook").on('mouseleave', function(){
        $(this).addClass('noodle');
      });
      $('.pepsi').on('click', function(){
        $(this).parent().parent().remove();
      });
      console.log('work');
      $('.holder').slideUp(); 
      console.log(totter);
    });
  $('.takin').on('click', function(){
  $('.thinger').empty();
  $('.thinger').remove();
  $('.holder').find('.whisper').remove()
  $('.holder').slideDown();
  });
});
