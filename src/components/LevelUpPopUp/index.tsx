import React from "react";
import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";

import { StyledPopUp } from "./styles";

export function LevelUpPopUp() {
  const { level } = useContext(ChallengesContext);
  function handleResetStatePopUp() {}

  return (
    <StyledPopUp
      defaultOpen
      onClose={handleResetStatePopUp}
      modal
      nested
      closeOnDocumentClick={false}
    >
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <img src="icons/levelup.svg" alt="victory" />
          <div>{level}</div>
          <strong>Parabéns</strong>
          <p>Você subiu de level!</p>
          <button type="button">
            {" "}
            Compartilhe no twitter
            <img src="icons/twitter.svg" alt="twitter" />
          </button>
          <div className="content"></div>
        </div>
      )}
    </StyledPopUp>
  );
}
