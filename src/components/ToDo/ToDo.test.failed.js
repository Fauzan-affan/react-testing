import React from 'react'
import {render, cleanup} from '@testing-library/react'
import user from '@testing-library/user-event'
import ToDo from './ToDo.js'
import RenderTodo from '../RenderTodo/RenderTodo.js'
import MockTodos from '../MockTodos.js'

describe("Should edit/delete todos", () => {
    const mockUpdateTodo = jest.fn()
    const mockDeleteTodo = jest.fn()

    it("Should save and update todo", () => {
        const {debug, getByText, getByTestId} = render(
            <RenderTodo
                updateTodo={mockUpdateTodo}
                deleteTodo={mockDeleteTodo}
                todo={MockTodos}
            />
        )
            
        const EditButton = getByText(/edit/i)
        user.click(EditButton)
        
        const UpdateInput = getByTestId("updateInput")
        user.click(UpdateInput)
        user.type(UpdateInput, "Males-Malesan")

        const SaveEdit = getByTestId("saveEdits")
        user.click(SaveEdit)

        expect(mockUpdateTodo).toHaveBeenCalled()
        expect(mockUpdateTodo).toHaveBeenCalledTimes(1)
    })

    it("Should delete todo", () => {
        const {getByTestId} = render(
            <RenderTodo
                todo={MockTodos}
                updateTodo={mockUpdateTodo}
                deleteTodo={mockDeleteTodo}
            />
        )

        const DeleteBtn = getByTestId("itemRemove")
        user.click(DeleteBtn)
        expect(mockUpdateTodo).toHaveBeenCalled()
        expect(mockDeleteTodo).toHaveBeenCalledTimes(1)
    })
})