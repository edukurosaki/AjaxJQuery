

function consultaCEP() {
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    
    
    $.ajax({
       
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            document.getElementById("cp").innerHTML = response.cep;
            document.getElementById("uf").innerHTML = response.uf;
            document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("localidade").innerHTML = response.localidade;

            $("#logradouro").html(response.logradouro);
                    }
    })
}

