
let perguntas = [" Na noite do ocorrido, você chegou a passar pela rua onde fica a residência investigada?",
 "Você se lembra de ter conversado com alguém sobre seus planos para aquela noite antes de sair de casa?",
"Naquela noite, houve algum momento em que você precisou entrar na rua dessa residência, mesmo que por poucos minutos?",
 "Antes de saber que a polícia estava investigando o caso, você já havia mencionado a alguém que poderia haver um problema naquela residência?",
" Você chegou a entrar em alguma residência naquela noite, mesmo que por um motivo que considerasse legítimo?",
 "Durante aquela noite, você teve contato com algum objeto que não lhe pertencia e que não estava normalmente sob seus cuidados?",
 "Você diria que permaneceu fora de residências alheias durante todo o período em que esteve na rua naquela noite?",
 "Alguma pessoa lhe pediu para guardar, transportar ou entregar um objeto naquela noite?",
 "Depois do horário provável do crime, você fez alguma coisa diferente da sua rotina habitual para voltar para casa?",
 "Se alguém tivesse observado seus movimentos naquela noite, você acredita que o que essa pessoa viu corresponderia integralmente ao que você relatou?"]
// Utilizei IA na geração das perguntas pois tinha uma ideia inicial para gerar os dados do gráfico, porém se mostrou inviável ao decorrer do projeto 
 let suspeita = 0

let final

 let respostas = []

  let resposta = ""

  let numPergunta = 0 

function comecarQuestionario () {

 document.getElementById('questionario').style.display = "grid"

    document.getElementById("perguntas").innerHTML = perguntas[numPergunta] 

  document.getElementById('botaoIniciar').style.display= "none"
}
 function responder() {
if ( numPergunta <= 9){
 resposta = document.getElementById("opcoes").value // O parseInt aparece deppois porque o valor " " aparentemente equivale à 0 caso seja feita a conversão
 if (resposta != " "  ){
  suspeita = parseInt(resposta) + suspeita
 respostas.push(suspeita) 

 numPergunta = ++numPergunta


} else {

 alert("Insira uma resposta válida")
}
}
if( numPergunta <= 9 ){

  document.getElementById("perguntas").innerHTML = perguntas[numPergunta] 

 } else {
    
    document.getElementById("perguntas").innerHTML = "Questionário finalizado!"
 }


}

function gerarGrafico() {
    if ( respostas.length == 10 ) {
        respostas[numPergunta-1] < 50? final = "Inocente" :
         respostas[numPergunta-1] == 50? final = "Suspeito":
          respostas[numPergunta-1] <= 80? final = "Cúmplice":
          final= "Culpado"
        document.getElementById('relatorio').style.display = "inline-block"
        document.getElementById('titulo').innerHTML = "Relatório"
        document.getElementById('suspeita').innerHTML = "Índices de mentira: " + respostas[numPergunta-1] + "%"
        // nesse caso, o índice de mentira aumenta conforme a usuário fala a "verdade". Como o poligrafo detecta mentiras a sua resposta vale como o feedback do próprio polígrafo, onde convencionalmente eu coloquei como "Índice de mentira" o percentiul de verdades geradas pelo polígrafo, visto que cada pergunta respondida como "sim" te relaciona cada vez mais com o crime e um crimonoso naturalente mente
        document.getElementById('status').innerHTML = "Status: "+ final  
 let idChart = document.getElementById('Grafico').getContext('2d')

 let gradiente= idChart.createLinearGradient(0,0,0,400)

 gradiente.addColorStop(0.3 ,  'rgb(255, 0, 0)')
 gradiente.addColorStop(1, 'rgb(45, 255, 26)')

 // Usei a IA e um video complementar para me ensinar a usar a bibliotec chart.js, não para fazer o código

 let dadosIniciais= {
           labels : ['pergunta 1 ', 'pergunta 2 ','pergunta 3 ','pergunta 4 ','pergunta 5','pergunta 6 ','pergunta 7 ','pergunta 8 ', 'pergunta 9 ','pergunta 10 ' ],
           datasets : [{
            label:['Nível de suspeita (%)'],
            data : respostas,
            borderColor: gradiente,
            borderWidth: 2,
           
           }]
 }


 let grafico = new Chart( idChart , {
                           type : 'line' , 
                           data: dadosIniciais ,
                           options: {                       
        responsive: true,
       
        scales: {
            y: {
                beginAtZero: true,
                min: 0,
                max: 100,
            
            } 
        }
                            } })
                        } else {

                        alert("Termine o questionário!")
                        }

} 

function reload (){
    window.location.reload()
}





