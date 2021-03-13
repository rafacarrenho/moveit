import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
  countdownTime: number;
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
  changeCountdownTime: (time: number) => void;
}
interface CountdownProviderProps {
  children: ReactNode;
}

let countdownTimeout: NodeJS.Timeout;

export const CountdownContext = createContext({} as CountdownContextData);

export const CountdownProvider = ({ children }: CountdownProviderProps) => {
  const { startNewChallenge } = useContext(ChallengesContext);
  const [countdownTime, setCountdownTime] = useState(25 * 60);
  const [time, setTime] = useState(countdownTime);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(() => {
    // setTimeout((_) => {
    setTime(countdownTime);
    // }, 1000);
  }, [countdownTime]);

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout((_) => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  const startCountdown = () => {
    setIsActive(true);
  };

  const changeCountdownTime = (time: number) => {
    setCountdownTime(time);
  };

  const resetCountdown = () => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(countdownTime);
    setHasFinished(false);
  };
  return (
    <CountdownContext.Provider
      value={{
        countdownTime,
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown,
        changeCountdownTime,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};
