import React from 'react';
 const CardComments = (props) => {
  // получаем обработчик закрытия окна
  return (
    <div className="modal">
      <img src="https://image.shutterstock.com/image-photo/snowman-gentleman-winter-black-hat-260nw-763595347.jpg"/>
      
      <button onClick={props.onModalClose}>Close Modal</button>
    </div>
  );
};
export default CardComments