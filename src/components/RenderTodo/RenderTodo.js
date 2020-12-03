import React from 'react'
import Todo from '../ToDo/ToDo.js'

export default function RenderTodo({ todo, updateTodo, deleteTodo}) {
    return (
        <ul>
            {
                todo.map(item => (
                    <Todo
                        key={item.id}
                        todo={item}
                        updateTodo={updateTodo}
                        deleteTodo={deleteTodo}
                    />
                ))
            }
        </ul>
    )
}
