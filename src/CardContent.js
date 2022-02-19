import React from 'react';

export default function CardContent({
  title,
  body,
  state,
  createdAt,
  closedAt,
  user,
  number,
}) {
  return (
    <div className={'CardContent' + state}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3>{number}</h3>
        <h3>{title}</h3>
        <a className="User" href={user.html_url} target="_blank">
          <span> {user.login} </span>
          <img width="30%" src={user.avatar_url} />
        </a>
      </div>

      <p className="body">{body}</p>
      <p className="dates">Создано: {createdAt}</p>
      {closedAt && <p className="dates">Закрыто: {closedAt}</p>}
    </div>
  );
}
