$(document).ready(function() {

});
function clickCheckbox(element){
  if(element.checked = true){
  alert(element.id);
  $('#button1').attr('style','block');
    $("#button1").show();
  }else{
    $("#button1").hide();
  }
}