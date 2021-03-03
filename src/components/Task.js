import React, { useState, useContext } from 'react'
import { DataContext } from './DataProvider';


export default function Task({ todo, id, checkComplete }) {
    const [onEdit, setOnEdit] = useState(false);

    const handleOnEdit = () => {
        setOnEdit(true);
    }

    if (onEdit) {
        return (
            <li>
                <input type="text" id={id} checked={todo.complete}
                    onChange={() => checkComplete(id)} />
                {todo.name}

                <button disabled={todo.complete} onClick={handleOnEdit}>Editar</button>
            </li>
        )

    } else {

        return (
            <li>
                <label htmlFor={id} className={todo.complete ? "active" : ""} >
                    <input type="checkbox" id={id} checked={todo.complete}
                        onChange={() => checkComplete(id)} />
                    {todo.name}
                </label>
                <button disabled={todo.complete} onClick={handleOnEdit}>Editar</button>
            </li>
        )
    }
}
