import React from 'react';
import './TodoList.css'
interface TodoListProps{
    items:{id:React.Key, text: string}[];
    onDeleteTodo:(id:string)=> void;
}
function TodoList(props:TodoListProps) {
    
  return (
    <ul>
        {
        props.items.map(todo =>
            <div>
                <li key={todo.id}></li>
                <span>{todo.text}</span>
                <button onClick={props.onDeleteTodo.bind(null,todo.id.toString())}>Delete</button>
            </div>
            
         )}
    </ul>
  );
}

export default TodoList;
