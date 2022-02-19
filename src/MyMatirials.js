import React from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

const MyMatirials = () => {
  return (
    <div style={{ display: 'flex' }}>
      <header>
        <Link to="/"> Главная </Link>
        <br />
        <Link to="/MyProjects"> Мои проекты на курсе </Link>
        <br />
        <Link to="/GithubComponent"> Обращения в GitHub </Link>
      </header>
      <div align="center" width="500px">
        <h1> Мои материалы </h1>
        <p>
          Мои материалы находятся{' '}
          <a
            href="https://trello.com/b/yboTNLzO/react3-yuganov-aleksey"
            target="_blank"
          >
            здесь
          </a>
        </p>
      </div>
    </div>
  );
};
export default MyMatirials;
