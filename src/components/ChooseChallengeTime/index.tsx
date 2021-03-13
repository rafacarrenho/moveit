import React, { useContext } from "react";
import { CountdownContext } from "../../contexts/CountdownContext";
import * as S from "./styles";

const ChooseChallengeTime = () => {
  const { changeCountdownTime, countdownTime, isActive } = useContext(
    CountdownContext
  );
  return (
    <S.ChooseChallengeTimeContainer>
      <span>Tempo de desafio:</span>
      <label>
        <input
          type="radio"
          id="male"
          name="gender"
          disabled={isActive}
          value={10}
          checked={countdownTime === 10}
          onChange={() => !isActive && changeCountdownTime(10)}
        />
        <span>10s</span>
      </label>
      <label>
        <input
          type="radio"
          id="male"
          name="gender"
          disabled={isActive}
          value={60}
          checked={countdownTime === 60}
          onChange={() => !isActive && changeCountdownTime(60)}
        />
        <span>1m</span>
      </label>
      <label>
        <input
          type="radio"
          id="male"
          name="gender"
          value={25 * 60}
          disabled={isActive}
          checked={countdownTime === 25 * 60}
          onChange={() => !isActive && changeCountdownTime(25 * 60)}
        />
        <span>25m</span>
      </label>
    </S.ChooseChallengeTimeContainer>
  );
};

export default ChooseChallengeTime;
