import React, {useEffect, useState, Suspense  } from 'react';
import ModalBox from './ModalBox';
const CardComments = React.lazy(() => import('./CardComments'));
import { loadComments,updateComments } from './requests/request';

export default function CardContent({
  title,
  body,
  state,
  createdAt,
  closedAt,
  user,
  number,
  githubUrl,
}) {
  const [isShow,setIsShow] = useState(false)
  const [comments, setComments] = useState([]);
  useEffect(() => {
    loadComments(number,setComments);
  }, []);
  // обработчики нажатия кнопки отображения модального окна
  const handlerModalOpen = () => {
    setIsShow( true) ;
  };
  const handlerModalClose = () => {
    setIsShow( false) ;
  };

  return (
    <div className={'CardContent' + state}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3>{number}</h3>
        <h3>{title}</h3>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <a className="User" href={user.html_url} target="_blank">
          <span> {user.login} </span>
          <img width="30%" src={user.avatar_url} />
        </a>
        <a className="User" href={githubUrl} target="_blank">
          <img
            width="20px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
          />
        </a>
      </div>
      <hr />
      <p className="body">{body}</p>
      <p className="dates">Создано: {createdAt}</p>
      {closedAt && <p className="dates">Закрыто: {closedAt}</p>}
      <a onClick={handlerModalOpen}>Комментарии</a>
      {isShow && (
          <ModalBox>
            <Suspense fallback={<div>Загрузка...</div>}>
              <CardComments onModalClose={handlerModalClose} comments={comments}/>
            </Suspense>
          </ModalBox>
        )}
    </div>
  );
}
