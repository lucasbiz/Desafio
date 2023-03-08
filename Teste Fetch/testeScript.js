
function puxarDados(){
    
    fetch("https://aawz-public.s3.us-east-2.amazonaws.com/live-coding-front/dados-desafio.json")
    .then(r => r.json())
    .then(jsonBody =>{
        testeShow(jsonBody)
    })

    const cabecalho = document.querySelector('#cabecalho')
    const tabela = document.querySelector('#tabela')

    function testeShow(data){
        const keys = Object.keys(data[0])

        keys.forEach(e =>{
            let celula = document.createElement('th')
            celula.innerText = e
            tabela.appendChild(celula)
        })

        data.forEach(e =>{
            let linha = document.createElement('tr')
            keys.forEach(key=>{
                let cel = document.createElement('td')
                cel.innerText = e[key]
                linha.appendChild(cel)
            })
            tabela.appendChild(linha)
        })
    }

}


