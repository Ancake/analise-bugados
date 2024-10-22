async function qntiaDeMotorista() {
    const url = 'https://raw.githubusercontent.com/guilhermeomrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)
  
  const data = [
    {
      x: nomeDasRedes,
      y: quantidadeUsuarios,
      type: 'bar'
    }
  ]
  
  const grafico = document.createElement('div')
  grafico.className = 'grafico'
  document.getElementById('graficos-container').appendChild(grafico)
  Plotly.newPlot(grafico, data)

  const layout = {
      plot_bgcolor: getCSS('--bg-color'),
      paper_bgcolor: getCSS('--bg-color'),
      title: {
          text: ('Celtas com mais motoristas'),
          x: 0,
          font: {
              color: getCSS('--primary-color'),
              size: 30,
              font: getCSS('--font')
          }
      },
      xaxis: {
          tickfont: tickConfig,
          title: {
              text: 'Nome das redes',
              font: {
                color: getCSS('--secondary-color')
              }
          }
      },
      yaxis: {
        tickfont: tikConfig,
        title: {
          text: 'milhares de carros vendidos',
          font: {
              color: getCSS('--secondary-color')
          }
        }
      }
  }

  const grafico = document.createElement('div')
  grafico.className = 'grafico'
  document.getElementById('graficos-container').appendChild(grafico)
  Ploty.newPlot(grafico, data, layout)
}
  qntiaDeMotorista()