import React from 'react';
import Chart from 'chart.js'
import './App.css';


class App extends React.Component {

  state = {
    stocks: [],
    apple: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks/')
    .then(data => data.json())
    .then((data)=>
      this.setState({
        stocks: data.stocks
      })
    )

    fetch('http://localhost:3000/stocks/1 ')
    .then(data => data.json())
    .then(data => this.prepareData(data))
    .then((data)=> this.createChart(data))
  }

  createChart = (data) => {
    const ctx = document.querySelector('#temperatures')
    const tempsChart = new Chart(ctx, {
        type: 'line',
        data: data
    })
  }

  prepareData = (data) => {
    const chartData = {
      labels: [],
      datasets: [
        {
          label: `${`Average Stock Prices for ${data.stock.stock_info.name}`}`,
          data: [],
            fill: true,
            lineTension: 0,
            backgroundColor: "rgba(75,192,192,1)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            spanGaps: false
        
        }
      ]
    }
  
    data.stock.stock_prices.forEach(temperature => {
    
      chartData.labels.push(temperature.id)
      chartData.datasets[0].data.push(temperature.price)
    })
    return chartData
  }

  render() {
   
    return (
      <div className="App">
        <header className="App-header">
          {this.state.stocks.map((stock) => {
           return ( 
              <div>{stock.name}</div>
           )
          })}
           <canvas id="temperatures" width="300" height="100"></canvas>
        </header>
      </div>
    );
  }
}

export default App;
