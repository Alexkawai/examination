import React from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

 const MyMatirials = () => {
  return (
    <div>
      <header>
        <Link to="/"> Главная </Link>
        <br />
        <Link to="/MyProjects"> Мои проекты на курсе </Link>
      </header>
      <h1> Мои материалы </h1>
      <p>Мои материалы находятся <a href="https://trello.com/b/yboTNLzO/react3-yuganov-aleksey" target="_blank">здесь</a></p>
    </div>
  );
};
export default MyMatirials;