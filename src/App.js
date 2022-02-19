import React, { Suspense } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
const MainPage = React.lazy(() => import('./MainPage'));


export default function App() {
  return (
    <div style={{ display: 'flex' }}>
      <header>
        <Link to="/MyProjects"> Мои проекты на курсе </Link>
        <br />
        <Link to="/MyMatirials"> Материалы на курсе</Link>
        <br />
        <Link to="/GithubComponent"> Обращения в GitHub </Link>
      </header>
      <Suspense fallback={<div>Загрузка...</div>}>
        <MainPage />
      </Suspense>
    </div>
  );
}
