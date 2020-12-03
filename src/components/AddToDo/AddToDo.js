import React from 'react'
import styles from './AddToDo.module.css'

export default function AddToDo({addTodo}) {
    return (
        <div>
            <form className={styles.container} data-testid="form" onSubmit={addTodo}>
                <input type="text" data-testid="input todo"/>
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}
