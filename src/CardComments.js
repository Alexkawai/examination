import React from 'react';
const CardComments = (props) => {
  // получаем обработчик закрытия окна
  return (
    <div className="modal">
      <div className="insideModal">
        <div class="cl-btn-2" onClick={props.onModalClose}>
          <div>
            <div class="leftright"></div>
            <div class="rightleft"></div>
            <span class="close-btn">закрыть</span>
          </div>
        </div>
        {props.comments.map((item, key) => (
          <div key={key}>
            <input>{item.body}</input>
            <a> Изменить </a>
            <a> Удалить </a>
          </div>
        ))}
        <div>
          <input></input>
          <a> Добавить </a>
          <button onClick={props.onModalClose}>Закрыть</button>
        </div>
      </div>
    </div>
  );
};
export default CardComments;
