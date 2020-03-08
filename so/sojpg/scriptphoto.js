var ctr=0;
$(document).ready(function(){

  for(let i=1; i<59; i++){
  $('#photos').append('<a href="jpgs/photo ('+i+').jpg"><img id="w" src="jpgs/photo ('+i+').jpg"></a>');
  }

})

function fu(){
  if(ctr == 0){

    $("img").prop('id', 's');

    ctr++;
  }
  else location.reload(); 
}