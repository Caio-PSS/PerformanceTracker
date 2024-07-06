import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';

const PerformanceChart = ({ data }) => {
  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day'
        },
        ticks: {
          maxRotation: 45,
          minRotation: 45
        }
      }
    }
  };

  const chartData = {
    labels: data.map(test => test.data),
    datasets: [
      {
        label: 'Simulados',
        data: data.filter(test => test.tipo === 'Simulado').map(test => test.nota_fechadas + test.nota_abertas),
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      },
      {
        label: 'Provas',
        data: data.filter(test => test.tipo === 'Prova').map(test => test.nota_fechadas + test.nota_abertas),
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
      }
    ]
  };

  return <Line data={chartData} options={options} />;
};

export default PerformanceChart;
