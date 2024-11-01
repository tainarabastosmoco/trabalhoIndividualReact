import React, { useState } from 'react';
import './IMCCalculadora.css';

const IMCCalculadora = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = () => {
    if (altura && peso) {
      const alturaMetros = altura / 100; 
      const imc = (peso / (alturaMetros * alturaMetros)).toFixed(2);

      let classificacao = '';
      if (imc < 18.5) {
        classificacao = "Abaixo do peso";
      } else if (imc >= 18.5 && imc < 24.99) {
        classificacao = "Peso normal";
      } else if (imc >= 25 && imc < 29.99) {
        classificacao = "Sobrepeso";
      } else if (imc >= 30 && imc < 34.99) {
        classificacao = "Obesidade grau I";
      } else if (imc >= 35 && imc < 39.99) {
        classificacao = "Obesidade grau II";
      } else {
        classificacao = "Obesidade extrema";
      }

      setResultado(`Seu IMC é ${imc} (${classificacao})`);
    } else {
      setResultado('Por favor, insira valores válidos.');
    }
  };

  return (
    <div className="container">
      <header>
        <h2>Calculadora de IMC</h2>
      </header>

      <h3>Insira seus dados:</h3>

      <div style={{ marginTop: '10px', fontWeight: 'bold', color: '#333' }}>
      </div>

      <div style={{ marginTop: '10px', fontWeight: 'bold', color: '#333' }}>
        <label>Altura (cm): </label>
        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          placeholder="Ex: 170"
        />
      </div>

      <div style={{ marginTop: '10px', fontWeight: 'bold', color: '#333' }}>
        <label>Peso (kg): </label>
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder="Ex: 70"
        />
      </div>

      <button onClick={calcularIMC}>
        Calcular IMC
      </button>

      {resultado && (
        <div style={{ marginTop: '15px', fontWeight: 'bold', color: '#333' }}>
          {resultado}
        </div>
      )}

      <footer>
        <p>Aluna: Tainara Medeiros Bastos Moco</p>
      </footer>
    </div>
  );
};

export default IMCCalculadora;
