fetch("https://aawz-public.s3.us-east-2.amazonaws.com/live-coding-front/dados-desafio.json")
    .then(r => r.json())
    .then(jsonBody =>{
        testeShow(jsonBody)
    })


function testeShow(data){
    const keys = Object.keys(data[0])
}

function showTable(){
    const cabecalho = document.createElement('div')
    keys.forEach(item=>{
        let firstLine = document.createElement('th')
        firstLine.textContent = item
        cabecalho.appendChild(firstLine)
      })
}
