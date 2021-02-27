import React, { useContext } from "react";
import { CountdownContext } from "../../contexts/CountdownContext";
import * as S from "./styles";

const Countdown = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown,
  } = useContext(CountdownContext);
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <>
      <S.CountdownContainer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </S.CountdownContainer>

      {hasFinished ? (
        <S.CountdownButton disabled>Ciclo finalizado</S.CountdownButton>
      ) : (
        <>
          {isActive ? (
            <S.CountdownButton
              type="button"
              className="active"
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </S.CountdownButton>
          ) : (
            <S.CountdownButton type="button" onClick={startCountdown}>
              Iniciar um ciclo
            </S.CountdownButton>
          )}
        </>
      )}
    </>
  );
};

export default Countdown;
