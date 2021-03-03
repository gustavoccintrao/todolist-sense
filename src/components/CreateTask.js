import React, { useState, useContext, useRef, useEffect } from 'react';
import '../index.css';
import { DataContext } from './DataProvider';

export default function CreateTask() {
    const [todos, setTodos] = useContext(DataContext);
    const [todoName, setTodoName] = useState('');
    const todoInput = useRef();

    const addTodo = e => {
        e.preventDefault();
        setTodos([...todos, { name: todoName, complete: false }])
        setTodoName('');
        todoInput.current.focus();
    }

    useEffect(() => {
        todoInput.current.focus();
    }, [])

    return (
        <form autoComplete="off" onSubmit={addTodo}>
            <input type="todos" name="todos" id="todos" ref={todoInput}
                required placeholder="O que você precisa fazer hoje?" value={todoName}
                onChange={e => setTodoName(e.target.value.toLowerCase())} />
            <button type="submit">Criar</button>
        </form>
    )
} 
