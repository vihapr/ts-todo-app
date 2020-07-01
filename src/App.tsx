import React, { useState } from 'react';
import './App.scss';

interface ITodo {
  index: number,
  text: string,
  completed: boolean
}

const TodoApp: React.FC = () => {
  // const todos: ITodo[] = [];
  const [todos, setTodo] = useState<ITodo[]>([])

  let textValue: string = '';

  const addTodo = (text: string) => {
    let newTodo = { index: Date.now(), text: text, completed: false }
    setTodo(todos => [...todos, newTodo]);
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    // сохраняем значение поля
    textValue = (event.target as HTMLInputElement).value;

    // если ентер
    if (event.keyCode === 13) {
      //  - выполняем хук
      addTodo(textValue);
      // делаем reset для поля ввода
      (event.target as HTMLInputElement).value = '';
    }

  }

  return (
    <div className="layout">
      {todos.map(i =>
        <div key={i.index}>{i.text}</div>
      )}
      <div className="addTodo">
        <div className="addTodo__wrapper">
          <div className="addTodo__row container">
            <div >
              <input type="text" name="textInput" className="textInput"
                onKeyDown={handleKeyDown} placeholder="Add new todo here then hit enter"></input>
            </div>
          </div>

        </div>
      </div>

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
