import React, { useState, useEffect } from 'react';

 import { CountDownContainer, CountDownButton } from './styles';

export function CountDown() {
  
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);
  
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountDown() {
    setActive(true);
  }
/*Executa quando o active muda (clicar do botão) assim o time alterar, para fazer a contagem
coloca pra executar a função mediante a alteração do time, passara pelo if que constara como active e executa novamente
enquanto o time for > 0*/
  useEffect(() => {

    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
       }, 1000);
    }
  }, [active, time])
  return (
    <div>
    <CountDownContainer> 
      <div>
        <span>{minuteLeft}</span>
        <span>{minuteRight}</span>
      </div>
      <span>:</span>
      <div>
        <span>{secondLeft}</span>
        <span>{secondRight}</span>
      </div>
      </CountDownContainer>
      <CountDownButton
        type="button"
        onClick={startCountDown}>
          Iniciar um ciclo
      </CountDownButton>
      </div>
  );
}

