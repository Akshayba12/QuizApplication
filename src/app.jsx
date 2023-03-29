import { element } from 'prop-types';
import React, { Children } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';
import QuizProvider from './context/QuizProvider';
import ResultProvider from './context/ResultProvider';
import CombinePages from './pages/CombinePages';
import Resulpage from './pages/Resulpage';
import Thumbnail from './pages/Thumbnail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Thumbnail />,
  },
  {
    path: '/combined',
    element: <CombinePages />,
  },
  {
    path: '/result',
    element: <Resulpage />,
  },
]);

function App() {
  return (
    <QuizProvider>
      <ResultProvider>
        <RouterProvider router={router} />
        ,
      </ResultProvider>
    </QuizProvider>
  );
}

export default App;
