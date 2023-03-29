import clsx from 'clsx';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizContext } from '../../context/QuizProvider';
import { resultContext } from '../../context/ResultProvider';

export default function Footer() {
  const { results, setfinalResult } = useContext(resultContext);
  const {
    choice1, pages, current, setchoice1, windowSize,
  } = useContext(QuizContext);
  const nav = useNavigate();
  const nav1 = useNavigate();

  return (
    <div className={clsx('flex py-10 w-full justify-center space-x-40 bg-slate-900', {
      'bg-inherit': windowSize < 700,
    })}
    >
      {windowSize > 700 && current < 6 && (
      <div className="flex justify-center">
        <div className="bg-red-100 h-4 w-60 rounded-full">
          <div
            className="bg-red-500 h-4 rounded-full"
            style={{ width: current * 48 }}
          />
        </div>
        <p className="text-white">
          {current}
          /5
        </p>
      </div>
      )}

      <button
        type="button"
        disabled={!choice1 && current <= 5}
        onClick={() => {
          pages(current);
          setchoice1(''); results();
          if (current === 5) {
            nav('/result');
          }
          if (current === 6) {
            nav1('/'); setfinalResult(0);
          }
        }}
        className="rounded-l-lg rounded-r-lg bg-green-500  text-sm font-medium text-green-50 w-60 h-10 disabled:bg-slate-500"
      >
        {current === 5 ? 'Finish' : (current === 6 ? 'Okay' : 'continue')}

      </button>
    </div>
  );
}
