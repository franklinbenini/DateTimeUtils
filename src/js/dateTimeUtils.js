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

function dataFormatada(data, separador){
    if (separador == null)
        separador = "/";

    var dataFormatada = ("0" + data.getDate()).substr(-2) + separador 
    + ("0" + (data.getMonth() + 1)).substr(-2) + separador + data.getFullYear();
    return dataFormatada;
}

/*  
*   Função que compara 2 datas e retorna: 
*   - Se data1 for MAIOR que data2 retorna 1
*   - Se data1 for MENOR que data2 retorna -1
*   - Se data1 for IGUAL data2 retorna 0
*   - Se data2 não for informado, data1 será comparada com data atual
*/  
function comparaData(data1, data2)
{   
    if (data2 == null)
        data2 = new Date();
    
    if (data1.getTime() > data2.getTime())
        return 1;
    
    if (data2.getTime() > data1.getTime())
        return -1;
    
    if (data1.getTime() === data2.getTime())
        return 0;
}

// Compara se a data informada é maior que data de hoje, sendo que data de hoje conta até as 23:59:59
function isDataMaiorQueHoje(data)
{   
    dataHoje = new Date();
    dataHoje.setHours(23,59,59,999);    
    return data.getTime() > dataHoje.getTime();
}