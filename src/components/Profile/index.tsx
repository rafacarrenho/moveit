import React, { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import * as S from "./styles";

const Profile = () => {
  const { level } = useContext(ChallengesContext);
  return (
    <S.ProfileContainer>
      <img src="https://github.com/rafacarrenho.png" alt="Rafael Carrenho" />
      <div>
        <strong>Rafael Carrenho</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </S.ProfileContainer>
  );
};

export default Profile;
