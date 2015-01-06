$(document).ready(function(){

$('#upSelect').change(function() {
   $('#chicken').removeClass('noodle');
  if($("#upSelect").val() == 'blu') {
     $('#baseDiv').css('background-color', 'blue');
  } else if ($("#upSelect").val() == 'red') {
    $('#baseDiv').css('background-color', 'red');
  } else {
    $('#baseDiv').css('background-color', '#000');
  };
  console.log($("#upSelect").val());
});
  $('#upSelectt').change(function() {
   $('#chickent').removeClass('noodlet');
  if($("#upSelectt").val() == 'blu') {
     $('#baseDivt').css('background-color', 'blue');
  } else if ($("#upSelectt").val() == 'red') {
    $('#baseDivt').css('background-color', 'red');
  } else {
    $('#baseDivt').css('background-color', '#000');
  };
  console.log($("#upSelectt").val());
});
  $('#chicken').on('mouseout', function(){
    $('#chicken').addClass('noodle');
  });
  $('#chickent').on('mouseout', function(){
    $('#chickent').addClass('noodlet');
  });
  
  /*$("#upSelect").val()*/
  
});