$(document).ready(function() {
var frm = 1;
var too = 0;
var modie = 0;
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min + modie;
};
$('#adddie').on('click', function(){
 $('body').find('#dice')
          .append("<div class='number'><p>"+ Math.round(getRandomArbitrary(frm,too)) +"</p></div>");
    $('#dice .number').on('click', function(){
    var numnum = $("p")? 1 : 0;
      if (numnum = 1) {
       $(this).find('p').remove();
      };
    $(this).append('<p>'+ Math.round(getRandomArbitrary(frm,too)) + '</p>');
    console.log('fired');
});
  
});
$('#takedie').on('click', function(){
 $('body').find('.number').remove(':nth-child(2)');
});
$('#dice .number').on('click', function(){
  var numnum = $("p")? 1 : 0;
  if (numnum = 1) {
 $(this).find('p').remove();
   };
  $(this).append('<p>'+ Math.round(getRandomArbitrary(frm,too))+'</p>');
  console.log('fired');
});
$('.leftest').on('click', function(){
  $('button').css('background-color','grey');
  $(this).css('background-color','red');
  $('.number').css('background-image','url("dice26.jpg")');
  return too = 2;
});
$('.dfur').on('click', function(){
  $('button').css('background-color','grey');
  $(this).css('background-color','red');
  $('.number').css('background-image','url("dice26.jpg")');
  return too = 4;
});
$('.dsis').on('click', function(){
  $('button').css('background-color','grey');
  $(this).css('background-color','red');
  $('.number').css('background-image','url("dice26.jpg")');
  return too = 6;
});
$('.date').on('click', function(){
  $('button').css('background-color','grey');
  $(this).css('background-color','red');
  return too = 8;
});
$('.dten').on('click', function(){
  $('button').css('background-color','grey');
  $(this).css('background-color','red');
  return too = 10;
});
$('.dtelv').on('click', function(){
  $('button').css('background-color','grey');
  $(this).css('background-color','red');
  $('.number').css('background-image','url("dice12.jpg")');
  return too = 12;
});
$('.dnat').on('click', function(){
  $('button').css('background-color','grey');
  $(this).css('background-color','red');
  return too = 20;
  });
$('.dcent').on('click', function(){
  $('button').css('background-color','grey');
  $(this).css('background-color','red');
  return too = 100;
  });
$('#click').on('click', function(){
  return modie = +prompt('Whats the modifier?');
});
$('#reset').on('click', function(){
  return modie = 0
});

});
