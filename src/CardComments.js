import React from 'react';
const CardComments = (props) => {
  // получаем обработчик закрытия окна
  return (
    <div className="modal">
      <div className="insideModal">
        <div className="cl-btn-2" onClick={props.onModalClose}>
          <div>
            <div className="leftright"></div>
            <div className="rightleft"></div>
            <span className="close-btn">закрыть</span>
          </div>
        </div>
        {props.comments.map((item, key) => (
          <div key={key}>
            <input value={item.body} onChange={props.updateComments}/>
            <a> Изменить </a>
            <a> Удалить </a>
          </div>
        ))}
        <div>
          <hr />
        <input value="" onChange={props.updateComments} />
          <a> Добавить </a>
        </div>
      </div>
    </div>
  );
};
export default CardComments;
