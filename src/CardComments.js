import React from 'react';
 const CardComments = (props) => {
  // получаем обработчик закрытия окна
  return (
    <div className="modal">
      <div>
      <ul>
      {props.comments.map((item,key)=>(<li key={key}>{item.body}</li>))}
      </ul>
      <button onClick={props.onModalClose}>Close Modal</button>
      </div>
    </div>
  );
};
export default CardComments