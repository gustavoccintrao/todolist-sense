import React, { useState, useEffect, createContext } from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [todos, setTodos] = useState([])

    // Lidando com o armazenamento(permanência dos dados) no LocalStorage
    useEffect(() => {
        const todoStore = JSON.parse(localStorage.getItem('todoStore'))
        if (todoStore) setTodos(todoStore)
    }, [])

    useEffect(() => {
        localStorage.setItem('todoStore', JSON.stringify(todos))
    }, [todos])




    return (
        <DataContext.Provider value={[todos, setTodos]}>
            {props.children}
        </DataContext.Provider>
    )
}
