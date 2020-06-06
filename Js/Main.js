
function consultaCep(){
  $.ajax ({
    url: "https://viacep.com.br/ws/94040140/json/",
    type: "GET",
    success: function(response){
      console.log(response);
     
    }
    })
}