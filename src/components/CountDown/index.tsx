import React, { useState, useEffect, useContext } from "react";
import { CountDownContext } from "../../contexts/CountDownContext";
import { CountDownContainer, CountDownButton, Border } from "./styles";
import { FaCheckCircle, FaPlay, FaTimes } from "react-icons/fa";

export function CountDown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountDown,
    resetCountDown,
    time,
    fullTime,
  } = useContext(CountDownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  const progressBorder = Math.round(time * 100) / fullTime;
  console.log(progressBorder);

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
            <>
              <CountDownButton
                type="button"
                onClick={resetCountDown}
                isCountingDown={isActive}
              >
                Abandonar ciclo
                <FaTimes />
              </CountDownButton>
              <Border>
                <div style={{ width: `${100 - progressBorder}%` }}></div>
              </Border>
            </>
          ) : (
            <CountDownButton type="button" onClick={startCountDown}>
              Iniciar um ciclo
              <FaPlay />
            </CountDownButton>
          )}
        </>
      )}
    </div>
  );
}
