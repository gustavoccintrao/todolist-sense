import React, { useState, useContext } from 'react';
import '../index.css';
import { DataContext } from './DataProvider';

export default function CreateTask() {
    const [todos, setTodos] = useContext(DataContext);
    const [todoName, setTodoName] = useState("");

    const addTodo = e => {
        e.preventDefault();
        setTodos([...todos, { name: todoName, complete: false }])
        setTodoName('');
    }

    return (
        <form autoComplete="off" onSubmit={addTodo}>
            <input type="todos" name="todos" id="todos"
                required placeholder="O que precisa ser feito?" value={todoName}
                onChange={e => setTodoName(e.target.value.toLowerCase())} />
            <button type="submit">Criar</button>
        </form>
    )
} 
