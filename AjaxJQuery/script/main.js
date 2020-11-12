function consultaCEP() {
    $(".status").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";



    $.ajax({

        url: url,
        type: "GET",
        success: function (response) {
            console.log(response);
            $("#result").html("Dados referente ao CEP: "+response.cep);
            $("#titulo-cep").html(response.cep);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#cidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#complemento").html(response.complemento);
            $(".cep").show();
            $(".status").hide();


        }
    })
}
$(function(){
    $(".cep").hide();
    $(".status").hide();
})

