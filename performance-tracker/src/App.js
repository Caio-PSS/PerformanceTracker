import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';
import TestForm from './components/TestForm';
import PerformanceChart from './components/PerformanceChart';
import EssayChart from './components/EssayChart';

const App = () => {
  const [tests, setTests] = useState([]);

  const fetchTests = async () => {
    const response = await fetch('/api/testes');
    const data = await response.json();
    setTests(data);
  };

  const addTest = async (test) => {
    const response = await fetch('/api/testes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(test)
    });
    const newTest = await response.json();
    setTests([...tests, newTest]);
  };

  useEffect(() => {
    fetchTests();
  }, []);

  return (
    <div>
      <h1>Controle de Desempenho</h1>
      <TestForm onAddTest={addTest} />
      <PerformanceChart data={tests} />
      <EssayChart data={tests} />
    </div>
  );
};

export default App;
