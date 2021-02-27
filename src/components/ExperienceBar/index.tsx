import React, { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import * as S from "./styles";

const ExperienceBar = () => {
  const { currentExperience, experinceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentTonextLevel =
    Math.round(currentExperience * 100) / experinceToNextLevel || 0;
  return (
    <S.ExperienceBar>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentTonextLevel}%` }} />
        <span
          className="currentExperience"
          style={{ left: `${percentTonextLevel}%` }}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{experinceToNextLevel} xp</span>
    </S.ExperienceBar>
  );
};

export default ExperienceBar;
