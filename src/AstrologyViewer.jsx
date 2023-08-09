import React, { useState } from 'react';
import moment from 'moment';

const AstrologyViewer = () => {
  const [dataAniversario, setDataAniversario] = useState('');
  const [prediction, setPrediction] = useState('');
  const predicoes = [
    'Prazeres temporarios não constroem futuros permanetes, esteja aberto a mudanças permanentes.',
    'A vida não é só o que acontece, mas também o que você decide.',
    'Qualquer grande ou pequena mudança começa com coragem.',
    'Seja você a mudança que tanto cobra do mundo.',
    'Quem faz o que sente, ganha mesmo que perca.',
    'O que está destinado a você aparecerá naturalmente, calmo, não forçado, confuso e caótico.',
    'Não ignore suas conquistas seja gentil com você mesmo',
    'As vezes tudo o que você precisa mudar, é a sua percepção.',
    'Se permita sonhar para não se perder em sonhos que não seus.',
    'Voltar alguns passos não é regredir.',
    'Mudar é assustador, permanecer insatisfeito(a) também é.',
    'Não se prenda ao que você passou para determinar quem você pode ser.',
    
  ];
  
  const handleChange = (event) => {
    setDataAniversario(event.target.value);
  };

  const handleGetPrediction = () => {
    if (moment(dataAniversario, 'YYYY-MM-DD').isValid()) {
      // Simulação de previsão astrológica
      const signo = getSignoZodiaco(dataAniversario);
      const n = Math.floor(Math.random()*(predicoes.length-1));
      let textoPredicao = predicoes[n];
      let simulatedPrediction = '';

    
      switch (signo) {
        case 'Áries':
          simulatedPrediction = `Você é de ${signo}. Uma frase para você: ${textoPredicao}`;
          break;

        case 'Touro':
          simulatedPrediction = `Você é de ${signo}. Uma frase para você: ${textoPredicao}`;
          break;

        case 'Gêmeos':
          simulatedPrediction = `Você é de ${signo}. Uma frase para você: ${textoPredicao}`;
          break;

        case 'Câncer':
          simulatedPrediction = `Você é de ${signo}. Uma frase para você: ${textoPredicao}`;
          break;

        case 'Leão':
          simulatedPrediction = `Você é de ${signo}. Uma frase para você: ${textoPredicao}`;
          break;

        case 'Virgem':
          simulatedPrediction = `Você é ${signo}. Uma frase para você: ${textoPredicao}`;
          break;

        case 'Libra':
          simulatedPrediction = `Você é ${signo}. Uma frase para você: ${textoPredicao}`;
          break;

        case 'Escorpião':
          simulatedPrediction = `Você é ${signo}. Uma frase para você: ${textoPredicao}`;
          break;

        case 'Sagitário':
          simulatedPrediction = `Você é ${signo}. Uma frase para você: ${textoPredicao}`;
          break;

        case 'Capricórnio':
          simulatedPrediction = `Você é ${signo}. Uma frase para você: ${textoPredicao}`;
          break;

        case 'Aquário':
          simulatedPrediction = `Você é ${signo}. Uma frase para você: ${textoPredicao}`;
          break;

        case 'Peixes':
          simulatedPrediction = `Você é ${signo}. Uma frase para você: ${textoPredicao}`;
          break;

        default:
          break;
      }

      setPrediction(simulatedPrediction);
    } else {
      setPrediction('Data de nascimento inválida. Por favor, insira uma data válida no formato dia-mês-ano.');
    }
  };

  const getSignoZodiaco = (date) => {
    const month = moment(date, 'YYYY-MM-DD').month() + 1;
    const day = moment(date, 'YYYY-MM-DD').date();

    // Simulação dos signos astrológicos
    if ((month === 3 && day >= 21) || (month === 4 && day <= 20)) return 'Áries';
    if ((month === 4 && day >= 21) || (month === 5 && day <= 20)) return 'Touro';
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Gêmeos';
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Câncer';
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leão';
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgem';
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra';
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Escorpião';
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagitário';
    if ((month === 12 && day >= 22) || (month === 1 && day <= 20)) return 'Capricórnio';
    if ((month === 1 && day >= 22) || (month === 2 && day <= 18)) return 'Aquário';
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'Peixes';

    return 'Desconhecido';
  };

  return (
    <div>
      <input type="date" value={dataAniversario} onChange={handleChange} />
      <button onClick={handleGetPrediction}>Obter Previsão</button>
      {prediction && <p>{prediction}</p>}
    </div>
  );
};

export default AstrologyViewer;
