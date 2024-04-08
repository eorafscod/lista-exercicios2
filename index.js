/* módulo 'express' e aplicação Express */
const express = require('express');
const app = express();

/* 1. */
app.get('/estoque-medio', (req, res) => {
    const { minima, maxima } = req.query;
  
    if (!minima || !maxima) {
      return res.status(400).send('É necessário fornecer a quantidade mínima e máxima.');
    }
  
    const estoqueMedio = (parseInt(minima) + parseInt(maxima)) / 2;
    res.json({ estoqueMedio });
  });

/* 2. */
app.get('/aumento-salario', (req, res) => {
    const { salario } = req.query;
  
    const salarioAtual = parseFloat(salario);
  
    if (salarioAtual < 1000) {
      const novoSalario = salarioAtual * 1.3; // Aumento de 30%
      res.send(`Salário reajustado: R$ ${novoSalario.toFixed(2)}`);
    } else {
      res.send('O funcionário não tem direito ao aumento.');
    }
  });
  
/* 3. */
app.get('/salario-total', (req, res) => {
    const { nome, salarioFixo, totalVendas, percentualComissao } = req.query;
  
    const salarioTotal = parseFloat(salarioFixo) + (parseFloat(totalVendas) * (parseFloat(percentualComissao) / 100));
    res.send(`Nome do vendedor: ${nome}\nSalário total: R$ ${salarioTotal.toFixed(2)}`);
  });

/* 4. */
app.get('/velocidade-media', (req, res) => {
    const { nomePiloto, distanciaKm, tempoHoras } = req.query;
  
    const distancia = parseFloat(distanciaKm);
    const tempo = parseFloat(tempoHoras);
  
    if (tempo <= 0) {
      return res.status(400).send('O tempo deve ser maior que zero.');
    }
  
    const velocidadeMedia = distancia / tempo;
    res.send(`A velocidade média do ${nomePiloto} foi ${velocidadeMedia.toFixed(2)} km/h.`);
  });

/* 5. */
app.get('/salario-reajustado', (req, res) => {
    const { salarioAtual } = req.query;
  
    const salario = parseFloat(salarioAtual);
    let salarioReajustado;
  
    if (salario <= 2000) {
      salarioReajustado = salario * 1.5; // Aumento de 50%
    } else {
      salarioReajustado = salario * 1.3; // Aumento de 30%
    }
  
    res.send(`Salário reajustado: R$ ${salarioReajustado.toFixed(2)}`);
  });

/* 6. */
app.get('/peso-ideal', (req, res) => {
    const { altura, sexo } = req.query;
  
    const alturaCm = parseFloat(altura);
    let pesoIdeal;
  
    if (sexo.toLowerCase() === 'masculino') {
      pesoIdeal = (72.7 * alturaCm) - 58;
    } else if (sexo.toLowerCase() === 'feminino') {
      pesoIdeal = (62.1 * alturaCm) - 44.7;
    } else {
      return res.status(400).send('Sexo não reconhecido. Use "masculino" ou "feminino".');
    }
  
    res.send(`Peso ideal: ${pesoIdeal.toFixed(2)} kg`);
  });

  
/* Iniciar o servidor */
app.listen(3000), () => {
  console.log(`API iniciada! Rodando em http://localhost:3000`);
}