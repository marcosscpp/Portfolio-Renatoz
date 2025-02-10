import { useEffect, useState } from "react";
import styled from "styled-components";

const WordsList = styled.div`
  color: inherit;
  overflow: hidden;
  padding: 0.5rem 0;
`;

interface CurrentWordProps {
  $animationState: string;
  $animationDuration: number;
}

const CurrentWord = styled.span<CurrentWordProps>`
  display: block;
  animation-duration: ${({ $animationDuration }) => `${$animationDuration}ms`};
  animation-fill-mode: forwards;
  animation-name: ${({ $animationState }) => $animationState};
  animation-timing-function: ease-in;

  @keyframes fade-in {
    0%,
    30% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    0%,
    70% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

interface RotativeWordsProps {
  wordsList: string[];
  speed?: number;
  changeDelay?: number;
}

const RotativeWords = ({
  wordsList,
  speed = 1000,
  changeDelay = 3000,
}: RotativeWordsProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animationState, setAnimationState] = useState("fade-in");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState("fade-out");

      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordsList.length);
        setAnimationState("fade-in");
      }, speed);
    }, changeDelay);

    return () => clearInterval(interval);
  }, [wordsList.length, changeDelay, speed]);

  const currentWord = wordsList[currentWordIndex];

  return (
    <WordsList>
      <CurrentWord $animationState={animationState} $animationDuration={speed}>
        {currentWord}
      </CurrentWord>
    </WordsList>
  );
};

export default RotativeWords;
