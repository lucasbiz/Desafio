const json = [
  {
    "ano": 2023,
    "auc_rs_bilhoes": 3.4,
    "auc_total": 1000,
    "caixa": -2.3,
    "margem": 6.3,
    "n_profissionais": 12,
    "receita": 19.5
  },
  {
    "ano": 2024,
    "auc_rs_bilhoes": 4.7,
    "auc_total": 2000,
    "caixa": -4.1,
    "margem": 9.5,
    "n_profissionais": 12,
    "receita": 25.1
  },
  {
    "ano": 2025,
    "auc_rs_bilhoes": 6.3,
    "auc_total": 3000,
    "caixa": 0.2,
    "margem": 7.3,
    "n_profissionais": 12,
    "receita": 23.7
  },
  {
    "ano": 2026,
    "auc_rs_bilhoes": 7.7,
    "auc_total": 4000,
    "caixa": 1.9,
    "margem": 14.5,
    "n_profissionais": 0,
    "receita": 39.1
  },
  {
    "ano": 2027,
    "auc_rs_bilhoes": 8.5,
    "auc_total": 5000,
    "caixa": 5.5,
    "margem": 15.5,
    "n_profissionais": 0,
    "receita": 43.8
  },
  {
    "ano": 2028,
    "auc_rs_bilhoes": 9.1,
    "auc_total": 6000,
    "caixa": 6.4,
    "margem": 16.1,
    "n_profissionais": 0,
    "receita": 46.7
  },
  {
    "ano": 2029,
    "auc_rs_bilhoes": 9.5,
    "auc_total": 7000,
    "caixa": 6.7,
    "margem": 16.3,
    "n_profissionais": 0,
    "receita": 48.7
  }
]

function organizarTabela(){

  const cabecalho = document.getElementById('cabecalho')
  const dados = document.getElementById('dados')
  const tabela = document.getElementById('tabela')
  const chaves = Object.keys(json[0])

  chaves.forEach(item=>{
    let firstLine = document.createElement('th')
    firstLine.textContent = item
    cabecalho.appendChild(firstLine)
  })
  let firstLine = document.createElement('th')
  firstLine.textContent = 'receita sobre AuC (em %)'
  cabecalho.appendChild(firstLine)

  json.forEach(conj => {
    let line = document.createElement('tr')
    chaves.forEach(el=>{
        let cols = document.createElement('td')
        cols.innerText = conj[el]
        line.appendChild(cols)
      })
    let calc = document.createElement('td')
    calc.innerText = ((conj['receita']*100)/conj['auc_total']).toFixed(2)
    line.appendChild(calc)
    tabela.appendChild(line)
  })
}