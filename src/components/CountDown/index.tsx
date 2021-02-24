import React, { useState, useEffect, useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import { CountDownContainer, CountDownButton } from "./styles";

let countDownTimeout: NodeJS.Timeout;

export function CountDown() {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  function startCountDown() {
    setIsActive(true);
  }

  function resetCountDown() {
    clearTimeout(countDownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
  }

  /*Executa quando o active muda (clicar do botão) assim o time alterar, para fazer a contagem
coloca pra executar a função mediante a alteração do time, passara pelo if que constara como active e executa novamente
enquanto o time for > 0*/

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

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
      {hasFinished ? (
        <CountDownButton disabled type="button">
          Ciclo encerrado
        </CountDownButton>
      ) : (
        <>
          {isActive ? (
            <CountDownButton
              type="button"
              onClick={resetCountDown}
              isCountingDown={isActive}
            >
              Abandonar ciclo
            </CountDownButton>
          ) : (
            <CountDownButton type="button" onClick={startCountDown}>
              Iniciar um ciclo
              <i></i>
            </CountDownButton>
          )}
        </>
      )}
    </div>
  );
}
