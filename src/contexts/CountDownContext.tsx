import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountDownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  fullTime: number;
  time: number;
  startCountDown: () => void;
  resetCountDown: () => void;
}

interface CountDownProviderProps {
  children: ReactNode;
}

let countDownTimeout: NodeJS.Timeout;

export const CountDownContext = createContext({} as CountDownContextData);

export function CountDownProvider({ children }: CountDownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const fullTime = 1 * 60;

  function startCountDown() {
    setIsActive(true);
  }

  function resetCountDown() {
    clearTimeout(countDownTimeout);
    setIsActive(false);
    setTime(1 * 60);

    setHasFinished(false);
  }

  /*Executa quando o active muda (clicar do botão) assim o time alterar, para fazer a contagem
coloca pra executar a função mediante a alteração do time, passara pelo if que constara como active e executa novamente
enquanto o time for > 0*/

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <CountDownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        time,
        startCountDown,
        resetCountDown,
        fullTime,
      }}
    >
      {children}
    </CountDownContext.Provider>
  );
}
