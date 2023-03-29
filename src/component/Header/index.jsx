import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizContext } from '../../context/QuizProvider';

export default function Header() {
  const nav = useNavigate();
  const { current, setcurrent, windowSize } = useContext(QuizContext);
  return (
    <>
      <div className="flex items-center px-4 py-3 justify-between">
        { current < 6 && (
        <div className="flex bg-slate-50 items-center px-2 rounded-md gap-2">
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.727295" y="0.363647" width="22.2727" height="22.2727" fill="url(#pattern0)" />
            <defs>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_15_59" transform="translate(-0.00818182) scale(0.02)" />
              </pattern>
              <image id="image0_15_59" width="169" height="50" xlinkHref="data:image/png;base64,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" />
            </defs>
          </svg>
          <div>200</div>
        </div>
        )}
        {current < 6 && <div className="flex-1 h-5 w-36 text-center sm:text-xl text-3xl font-semibold">Fantacy Quiz #156</div>}
        <div><svg onClick={() => { nav('/', { replace: true }); setcurrent(1); }} xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" /></svg></div>
      </div>
      <div>
        {windowSize < 700 && current < 6 && (
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
      </div>
    </>
  );
}
