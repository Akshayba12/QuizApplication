import React, {
  createContext,
  useCallback, useEffect, useMemo, useState,
} from 'react';

export const QuizContext = createContext();

function QuizProvider({ children }) {
  const [choice1, setchoice1] = useState('');
  const [current, setcurrent] = useState(1);
  const [questions, setquestions] = useState([]);

  const dataquestion = useCallback(
    async () => {
      const res = await fetch('http://localhost:3000/questions');
      const json = await res.json();

      setquestions(json);
    },
    [],
  );

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleResize = useCallback(() => {
    setWindowSize(window.innerWidth);
    console.log(windowSize)
  });

  window.addEventListener('resize', handleResize);

  // const resCount = useCallback(
  //   (count) => {
  //     setres(count + 1);
  //   },
  //   [setres],
  // );

  useEffect(() => {
    dataquestion();
  }, []);

  const pages = useCallback(
    (data) => {
      if (data < 6) {
        setcurrent(data + 1);
      } else {
        setcurrent(1);
      }
    },
    [setcurrent],
  );

  const handlechang = useCallback(
    (type) => {
      try {
        setchoice1(type);
      } catch (error) {
        console.log(error);
      }
    },
    [choice1],
  );

  const val = useMemo(
    () => ({
      handlechang,
      choice1,
      questions,
      current,
      dataquestion,
      pages,
      setcurrent,
      setchoice1,
      windowSize,
      // setWindowSize,
    }),
    [handlechang, choice1,
      setchoice1,
      pages, current, setcurrent, dataquestion, questions, setWindowSize, windowSize,
    ]
    ,
  );

  return (
    <QuizContext.Provider value={val}>
      {children}
    </QuizContext.Provider>
  );
}

export default QuizProvider;
