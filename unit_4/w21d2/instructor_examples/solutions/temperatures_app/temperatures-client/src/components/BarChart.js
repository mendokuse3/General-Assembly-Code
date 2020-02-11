import React, { Component } from 'react';
import Chart from 'chart.js'

class BarChart extends Component { 
  componentDidMount () {
    this.getData()
  }

  getData = () =>{
    fetch('http://localhost:3000/locations/1')
      .then(data => data.json())
      .then(jData => this.prepareData(jData))
      .then(data => this.createChart(data))
  }

  prepareData = (data) => {
    const chartData = {
      labels: [],
      datasets: [
        {
          label: 'Avg high temps',
          data: [],
          fill: true,  
          backgroundColor: 'purple',
          borderColor: 'lightgreen'
          
        },
        {
          label: 'Avg low temps',
          data: [],
          
        }
      ]
    }

  
    data.temperatures.forEach(temperature => {
      chartData.labels.push(temperature.id);
      chartData.datasets[0].data.push(temperature.average_high_f);
      chartData.datasets[1].data.push(temperature.average_low_f);
    })
    console.log(chartData)
    return chartData
  }

  createChart = (data) => {
    const ctx = document.querySelector('#temperatures')
    const tempsChart = new Chart(ctx, {
        type: 'bar',
        data: data
      })
  }

  render () {
    return (
      <>
        <h1>Temperatures</h1>
        <canvas id="temperatures" width="300" height="100"></canvas>
      </>
    )
  }
}

export default BarChart