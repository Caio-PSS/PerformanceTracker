import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import { registerables, Chart } from 'chart.js';

Chart.register(...registerables);

function App() {
  const [testes, setTestes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/testes')
      .then(response => {
        setTestes(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const data = {
    labels: testes.map(teste => teste.date),
    datasets: [
      {
        label: 'Notas',
        data: testes.map(teste => teste.nota),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div>
      <h1>Performance Tracker</h1>
      <Line data={data} />
    </div>
  );
}

export default App;
