import React, {
  createContext, useContext, useMemo, useState,
} from 'react';
import { QuizContext } from './QuizProvider';

export const resultContext = createContext();

function ResultProvider({ children }) {
  const { choice1, current } = useContext(QuizContext);
  const [finalResult, setfinalResult] = useState(0);
  // const resultarray = ['a', 'a', 'b', 'c', 'b'];
  const { questions } = useContext(QuizContext);

  const results = () => {
    if (current <= 5 && choice1 === questions[current - 1].Answer) { setfinalResult(finalResult + 30); }
  };

  const val = useMemo(() => ({ finalResult, results, setfinalResult }), [finalResult, results, setfinalResult]);

  return (
    <resultContext.Provider value={val}>{ children}</resultContext.Provider>
  );
}

export default ResultProvider;
