var alfabeto_m = "abcdefghijklmnopqrstuvxwyz";
let array_alfabeto_m = alfabeto_m.split('');
var new_array = [];

function encrypt(){
    new_array = [];

    var select = document.getElementById("select-padrao");
    var padrao = parseInt(select.options[select.selectedIndex].value);
    console.log(padrao);

    let valor = document.getElementById("input-entrada").value;
    let valor_array = valor.toLowerCase().split('');

    for(let i = 0; i < valor_array.length; i++){
        var letra_valor = valor_array[i];

        for(let j = 0; j < array_alfabeto_m.length; j++){
            var letra_alfaberto = array_alfabeto_m[j];

            if(letra_valor == letra_alfaberto){
                var new_value = j + padrao;
                console.log(new_value);
                if(new_value > 25){
                    new_value = new_value - 25 - 1;
                }

                new_array.push(array_alfabeto_m[new_value]);
            }
        }
    }

    var encrypt = new_array.join('');
    
    if(encrypt != ""){
        document.getElementById("resultado").innerHTML = '<div class="alert alert-success" role="alert"> ' + encrypt + ' </div>';
        document.getElementById("input-entrada").value = "";
    } else {
        document.getElementById("resultado").innerHTML = '<div class="alert alert-danger" role="alert"> Preencha o Campor Digite algo!</div>';
        document.getElementById("input-entrada").focus();
    }
}
