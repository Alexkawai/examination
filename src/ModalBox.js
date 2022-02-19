import React from 'react';
import './style.css';
import ReactDOM from 'react-dom';
// объявляем константу вне класса компонента, чтобы гарантировать однократное обращение к DOM
const modalRoot = document.getElementById('modal-root');
// компонент-обертка для отображения его дочерних елементов в div c id="modal-root"
export default class ModalBox extends React.PureComponent {
  // самый первый метод ЖЦ, используем для первичной инициализации 
  constructor(props) {
    super(props);
     // создаем div для дочерних елементов
    this.newElement = document.createElement('div');
  }
  // вызывается после монтирования компонента в DOM, может использоваться для работы с ресурсами 
  componentDidMount() {
    // добавляем в созданный div в корневой div. Делаем это в этом методе, так как он отрабатывает один раз за ЖЦ
    modalRoot.appendChild(this.newElement);
  }
  // вызывается непосредственно перед размонтированием и удалением компонента
  componentWillUnmount() {
    // "очищаем ресурсы": удаляем созданный div
    modalRoot.removeChild(this.newElement);
  }
  render() {
    // метод ReactDom.createPortal позволяет рендерить переданные элементы в узел DOM за пределами корневого узла приложения
    return ReactDOM.createPortal(this.props.children, this.newElement);
  }
}

