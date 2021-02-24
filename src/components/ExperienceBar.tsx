import React, { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/ExperienceBar.module.css";

const ExperienceBar = () => {
  const { currentExperience, experinceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentTonextLevel =
    Math.round(currentExperience * 100) / experinceToNextLevel;
  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentTonextLevel}%` }} />
        <span
          className={styles.currentExperience}
          style={{ left: `${percentTonextLevel}%` }}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{experinceToNextLevel} xp</span>
    </header>
  );
};

export default ExperienceBar;
