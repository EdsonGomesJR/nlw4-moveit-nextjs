import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import { CountDownContext } from "../../contexts/CountDownContext";
import { LevelUpPopUp } from "../LevelUpPopUp";

import {
  ChallengeBoxContainer,
  ChallengeActive,
  ChallengeNotActive,
  ChallengeFailedButton,
  ChallengeSucceededButton,
  Footer,
} from "./styles";

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );
  const { resetCountDown } = useContext(CountDownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountDown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountDown();
  }

  return (
    <ChallengeBoxContainer>
      {activeChallenge ? (
        <ChallengeActive>
          <div>
            <header>Ganhe {activeChallenge.amount}xp</header>
            <main>
              <img src={`icons/${activeChallenge.type}.svg`} />
              <strong>Novo desafio</strong>
              <p>{activeChallenge.description}</p>
            </main>
          </div>

          <Footer>
            <ChallengeFailedButton
              type="button"
              onClick={handleChallengeFailed}
            >
              Falhei
            </ChallengeFailedButton>
            <ChallengeSucceededButton
              type="button"
              onClick={handleChallengeSucceeded}
            >
              Completei
            </ChallengeSucceededButton>
          </Footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>
            Inicie um ciclo para receber desafios a serem completados.
          </strong>
          <p>
            <img src="icons/level-up.svg" alt="levelup" />
            Avance de level completando desafios
          </p>
        </ChallengeNotActive>
      )}
    </ChallengeBoxContainer>
  );
}
