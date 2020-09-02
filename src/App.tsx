import React, { useState } from 'react';
import './App.scss';

interface ITodo {
  index: number,
  text: string,
  completed: boolean
}

const TodosList: React.FC<{ className: string, todos: ITodo[] }>  = (props) => {
  return (
    <div className={props.className}> {props.todos.map((i, k) =>
     ( 
       <div key={i.index} className={`${props.className}__wrapper`}>
        <div className={`${props.className}__inner`} >
          <input type="checkbox" name="" id=""/>
          <div className={`${props.className}__text`} >{i.text}</div> 
          <div className={`${props.className}__button ${props.className}__button-edit`}></div>
          <div className={`${props.className}__button ${props.className}__button-remove`}></div>
        </div>
      </div>
     )
    ).reverse()}
   </div>
  )
}

const TodoApp: React.FC = () => {
  const [todos, setTodo] = useState<ITodo[]>([]);
  // переменная для хранения содержимого поля ввода
  let textValue: string = '';

  const placeHolder = 'Введите todo и нажмите enter';

  const addTodo = (text: string) => {
    let newTodo: ITodo = { index: Date.now(), text: text, completed: false }
    setTodo(todos => [...todos, newTodo]);
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    // сохраняем значение поля
    // приведем event.target явно к интерфейсу HTMLInputElement (у которого одновременно есть св-ва value и keyCode)
    let textValue: string = (event.target as HTMLInputElement).value;

    // если ентер
    if (event.keyCode === 13) {
      // - выполняем хук
      addTodo(textValue);
      // и очищаем поле ввода
      (event.target as HTMLInputElement).value = '';
    }

  }

  return (
    <div className="layout">
      <div className="addTodo">
        <div className="addTodo__wrapper">
          <div className="addTodo__row container">
            <div className="addTodo__row group">
              <input type="text" id="textInput" name="textInput" className="addTodo__row textInput" tabIndex={0}
                onKeyDown={handleKeyDown} placeholder={placeHolder}></input>
                <label htmlFor="textInput" className="addTodo__row label">{placeHolder}</label>
            </div>
          </div>
        </div>
      </div>
      <TodosList className="todos" todos={todos} />
    </div>
  )
}



function App() {
  return (<>
    <TodoApp />
  </>
  );
}

export default App;
