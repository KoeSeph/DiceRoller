$(document).ready(function() {
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
   $(this).append('<p>'+ fast+'</p>');
   return totter = totter + fast;
 };
 function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min + modie;
};
$('#adddie').on('click', function(){
  /* $('.number').unbind('click');*/
  $('body').find('#dice')
  .append("<div class='number'><p>"+ 0 +"</p></div>");
  $('.number:last-child').on('click',listin);
});
$('#takedie').on('click', function(){
 $('body').find('.number').remove(':nth-child(2)');
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
$('#totes').on('click',function(){
  var totnum = $('.moddie').find('p')? 1 : 0;
  if (totnum = 1) {
   $('.moddie .mathin').find('p').remove();
 };
 $('.mathin').append('<p>' + totter + '</p>');
});
$('#remath').on('click', function(){
  var totnum = $('.moddie').find('p')? 1 : 0;
  if (totnum = 1) {
   $('.moddie .mathin').find('p').remove();
 };
 return totter = 0;
});
$('#roll').on('click',function(){
  return totter = 0;
});
$('#roll').on('click',function(){
  $('.number').trigger('click');
});
$(document).keypress(function(e) {
    if(e.which != 9) {
        $('#roll').trigger('click');
        $('#totes').trigger('click');
    };
});
});




