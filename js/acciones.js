// JavaScript Document
	var panel ='<div data-role="panel" id="mipanel" data-theme="a" data-display="push"><div class="panel-content" align="center"> <h3>Menu</h3> <div data-role="controlgroup"> <a data-role="button" href="#Principal">Principal</a> <a data-role="button" href="#Vibrar">Vibrar</a>  <a data-role="button" href="#Beep">Beep</a> <a data-role="button" href="#Swipe">Swipe</a> </div> </div> </div>';
		
		$(document).on('pagebeforecreate', '[data-role=page]', function () {
  if ($(this).find('[data-role=panel]').length === 0) {
    $('[data-role=header]').before(panel);
  }
});



$(document).ready(function(e) {
 document.addEventListener("deviceready",function(){
  $('#B_Vibrar').tap(function(){
    navigator.notification.vibrate(500);
  });
 },false); //deviceready
}); //document ready

$(document).ready(function(e) {
 document.addEventListener("deviceready",function(){
  $('#Beep').tap(function(){
    navigator.notification.Beep(1);
  });
 },false); //deviceready
}); //document ready

$(document).ready(function(e) {
 document.addEventListener("deviceready",function(){
  $('#Vibrar').tap(function(){
    navigator.notification.Swipe(1);
  });
 },false); //deviceready
}); //document ready
