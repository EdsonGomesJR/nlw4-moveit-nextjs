import React, { useState, useEffect, useContext } from "react";
import { CountDownContext } from "../../contexts/CountDownContext";
import { CountDownContainer, CountDownButton } from "./styles";
import { FaCheckCircle } from "react-icons/fa";

export function CountDown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountDown,
    resetCountDown,
  } = useContext(CountDownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

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
          <FaCheckCircle />
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
            </CountDownButton>
          )}
        </>
      )}
    </div>
  );
}
