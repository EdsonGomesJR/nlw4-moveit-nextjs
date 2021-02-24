import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import {
  ChallengeBoxContainer,
  ChallengeActive,
  ChallengeNotActive,
  ChallengeFailedButton,
  ChallengeSucceededButton,
} from "./styles";

export function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

  return (
    <ChallengeBoxContainer>
      {activeChallenge ? (
        <ChallengeActive>
          <header>Ganhe {activeChallenge.amount}xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <ChallengeFailedButton type="button" onClick={resetChallenge}>
              Falhei
            </ChallengeFailedButton>
            <ChallengeSucceededButton type="button">
              Completei
            </ChallengeSucceededButton>
          </footer>
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
