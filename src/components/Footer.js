import React from 'react'

export default function Footer() {
    return (
        <div className="row">
            <label htmlFor="all">
                <input type="checkbox" name="all" id="all" />
        Selecionar Tudo
        </label>
            <p> Você tem 0 tarefas</p>
            <button id="delete">Deletar</button>

        </div>
    )
}
