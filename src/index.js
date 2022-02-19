import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { data } from './data';

const App = React.lazy(() => import('./App'));
const MyMatirials = React.lazy(() => import('./MyMatirials'));
const MyProjects = React.lazy(() => import('./MyProjects'));
const GithubComponent = React.lazy(() => import('./GithubComponent'));

const NotFound = () => {
  return <h1>NotFound</h1>;
};

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>Загрузка...</div>}>
            <App />{' '}
          </Suspense>
        }
      />

      <Route
        path="/MyProjects"
        element={
          <Suspense fallback={<div>Загрузка...</div>}>
            <MyProjects data={data} />
          </Suspense>
        }
      />

      <Route
        path="/MyMatirials"
        element={
          <Suspense fallback={<div>Загрузка...</div>}>
            <MyMatirials />
          </Suspense>
        }
      />
      <Route
        path="/GithubComponent"
        element={
          <Suspense fallback={<div>Загрузка...</div>}>
            <GithubComponent />
          </Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
