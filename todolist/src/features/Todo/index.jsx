import React, {useState} from 'react';
import TodoList from "./components/TodoList";

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new"
    },
    {
      id: 2,
      title: "Sleep",
      status: "new"
    },
    {
      id: 3,
      title: "Code",
      status: "completed"
    }
  ]
  const [todoList, setTodoList] = useState(initTodoList);
  const handleTodoClick = (todo, idx) => {
    console.log(todo, idx)
  }

  return(
    <div>
      <h3>TodoList</h3>
      <TodoList todoList={todoList} onTodoClick={ handleTodoClick}/>
    </div>
  )
}

export default TodoFeature;
