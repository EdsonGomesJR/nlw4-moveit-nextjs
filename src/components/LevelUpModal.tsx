import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/LevelUpModal.module.css";
import { useRouter } from "next/router";
import { FaTwitter } from "react-icons/fa";

export function LevelUpModal() {
  const routes = useRouter();
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  function shareOnTwitter() {
    routes.push("/shareontwitter");
  }
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo nível.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="icons/close.svg" alt="Fechar modal" />
        </button>
      </div>

      <footer>
        <a onClick={shareOnTwitter}>
          Compartilhe no Twitter
          <FaTwitter />
        </a>
      </footer>
    </div>
  );
}
