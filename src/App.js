import React,{ Suspense } from 'react';
import './style.css';
import { BrowserRouter , Switch, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <div style={{display:"flex"}}>
      <header >
        <Link to="/"> Главная </Link>
        <br />
        <Suspense fallback={<div>Загрузка...</div>}>
        <Link to="MyProjects"> Мои проекты на курсе </Link>
        </Suspense>
        <br />
        <Link to="MyMatirials"> Материалы на курсе</Link>
      </header>
      <div align="center">
      <h1>MainPage</h1>
      <br/>
      <p>Сложилось очень хорошее впечатление от курса. Появилась уверенность, что я понял, как миниму азы React. Потратил много своего личного времени на изучение и выполнение домашних работ, но и знанияя получил сооветветствующие. Некотрые задания не нравились, от некоторых радовалась душа, когда их осиливал. Иногда от объёма дз хотелось всё бросить, но я рад, что курс подошёл к концу и я на нём не просто послушал лекции!</p>
      <p>Хотелось бы в будущем попробовать себя в роли fullstack developer и побольше попрактиковать React, ведь большенство его плюшек и ещё большее понимание приходит с опытом.  </p>
      <p> Скажу отдельное спасибо лектору этого курса. Для меня бы было большим трудом взять помимо работы ещё преподавание. Я бы пошёл в отпуск на его месте после потраченых нервов :)</p>
      <p>Thank you very much, kak govoritsya :) </p>
      </div>
    </div>
  );
}
