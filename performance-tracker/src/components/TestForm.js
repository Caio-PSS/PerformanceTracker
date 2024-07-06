import React, { useState } from 'react';

const TestForm = ({ onAddTest }) => {
  const [formData, setFormData] = useState({
    nome: '',
    data: '',
    tipo: 'Simulado',
    nota_fechadas: '',
    nota_abertas: '',
    nota_redacao: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTest(formData);
    setFormData({
      nome: '',
      data: '',
      tipo: 'Simulado',
      nota_fechadas: '',
      nota_abertas: '',
      nota_redacao: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome do Teste" required />
      <input type="date" name="data" value={formData.data} onChange={handleChange} required />
      <select name="tipo" value={formData.tipo} onChange={handleChange}>
        <option value="Simulado">Simulado</option>
        <option value="Prova">Prova</option>
      </select>
      <input type="number" name="nota_fechadas" value={formData.nota_fechadas} onChange={handleChange} placeholder="Nota Fechadas" required />
      <input type="number" name="nota_abertas" value={formData.nota_abertas} onChange={handleChange} placeholder="Nota Abertas" required />
      <input type="number" name="nota_redacao" value={formData.nota_redacao} onChange={handleChange} placeholder="Nota Redação" required />
      <button type="submit">Adicionar Teste</button>
    </form>
  );
};

export default TestForm;
