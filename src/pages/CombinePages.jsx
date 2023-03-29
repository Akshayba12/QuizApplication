import clsx from 'clsx';
import React, { useContext } from 'react';
import Footer from '../component/footer';
import Header from '../component/Header';
import { QuizContext } from '../context/QuizProvider';

function CombinePages() {
  const {
    questions, handlechang, choice1, current,
  } = useContext(QuizContext);
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex-1">
        {
          questions.map((x) => {
            if (x.id === current) {
              return (
                <div key={x.id} className="flex flex-col">
                  <div className="flex-1 py-8 text-center">
                    <p className="text-3xl sm:text-xl">{x.tittle}</p>
                  </div>
                  <div className="flex flex-col space-y-4 font-semibold justify-center items-center">
                    <button
                      type="button"
                      onClick={() => handlechang('A')}
                      className={clsx('flex h-14 py-3 w-80 px-3 bg-white shadow rounded text-xl', {
                        'bg-green-400': choice1 === 'A',
                      })}
                    >
                      <span className={clsx('rounded-full px-3 bg-orange-200', {
                        'bg-slate-200 px-1': choice1 === 'A',
                      })}
                      >
                        {choice1 === 'A' ? <svg className="h-9 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" /></svg> : 'A'}

                      </span>
                      <p className="px-2">{x.A}</p>

                    </button>
                    <button
                      type="button"
                      onClick={() => handlechang('B')}
                      className={clsx('flex h-14 py-3 w-80 px-3  bg-white shadow rounded text-xl', {
                        'bg-green-400': choice1 === 'B',
                      })}
                    >
                      <span className={clsx('rounded-full px-3 bg-orange-200', {
                        'bg-slate-200 px-1': choice1 === 'B',
                      })}
                      >
                        {choice1 === 'B' ? <svg className="h-9 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" /></svg> : 'B'}

                      </span>
                      <p className="px-2">{x.B}</p>
                    </button>
                    <button
                      type="button"
                      onClick={() => handlechang('C')}
                      className={clsx('flex h-14 py-3 w-80 px-3 bg-white shadow rounded text-xl', {
                        'bg-green-400': choice1 === 'C',
                      })}
                    >
                      <span className={clsx('rounded-full px-3 bg-orange-200', {
                        'bg-slate-200 px-1': choice1 === 'C',
                      })}
                      >

                        {choice1 === 'C' ? <svg className="h-9 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" /></svg> : 'C'}

                      </span>
                      <p className="px-2">{x.C}</p>

                    </button>

                  </div>
                </div>
              );
            }
            return null;
          })

       }
      </div>
      <Footer />

    </div>
  );
}

export default CombinePages;
