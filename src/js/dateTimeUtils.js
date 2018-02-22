var _diasSemana = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
var _nomeMes = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

function diaDaSemanaTexto(data)
{
    return _diasSemana[data.getDay()];
}

function mesTexto(data)
{
    return _nomeMes[data.getMonth()];
}

// Use um número negativo (Ex.: -5) em qtdDias para subtrair ao invés de somar dias
function adicionaDias(data, qtdDias)
{
    var result = new Date(data);
    result.setDate(data.getDate() + qtdDias);
    return result;
}

// Use um número negativo (Ex.: -5) em qtdHoras para subtrair ao invés de somar horas
function adicionaHoras(hora, qtdHoras)
{
    var result = new Date(hora);
    result.setHours(hora.getHours() + qtdHoras);
    return result;
}


///////////////////// ABAIXO TESTES DAS FUNÇÕES /////////////////

var d = new Date(2018,1,22);
var n = mesTexto(d);


var divTeste = document.getElementById('divTeste')


divTeste.innerHTML +=  d + " <br>";
divTeste.innerHTML += "Olá " + n;
divTeste.innerHTML += "<br>Outra linha " + adicionaDias(d, 364);

var e = new Date(2018, 1, 22, 15,55,01);
divTeste.innerHTML += "<br>teste Hora " + adicionaHoras(e, 3);