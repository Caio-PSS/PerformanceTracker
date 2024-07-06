import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';

const EssayChart = ({ data }) => {
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
        label: 'Redação',
        data: data.map(test => test.nota_redacao),
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }
    ]
  };

  return <Line data={chartData} options={options} />;
};

export default EssayChart;
