import React from 'react';
import {  Link } from 'react-router-dom';
const MyProjects = (props) => {
  const projects = props.data.projects;
  return (
    
    <div style={{ display: 'flex' }}>
      <header>

        <Link to="/"> Главная </Link>
        <br />
        <Link to="/MyMatirials"> Материалы на курсе</Link>

      </header>
      <div align="center" width="500px">
        <h1> Мои проекты </h1>
        <ul>
          {projects.map((item, key) => (
            <li key={key}> <a href={"https://stackblitz.com/edit/"+item.slug} target="_blank">{item.slug}</a></li>
          ))}
        </ul>
      </div>
    </div>
   
  );
};
export default MyProjects;