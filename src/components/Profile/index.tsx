import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";

import { ProfileContainer } from "./styles";
export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <ProfileContainer>
      <img src="https://github.com/edsongomesjr.png" alt="Edson Gomes" />

      <div>
        <strong>Edson Gomes</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>

        {/* {showLevelUpPopUp ? <LevelUpPopUp /> : ""} */}
      </div>
    </ProfileContainer>
  );
}
