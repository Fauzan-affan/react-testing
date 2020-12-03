import React from 'react'
import {render, cleanup, fireEvent} from '@testing-library/react'
import user from '@testing-library/user-event'
import AddToDo from './AddToDo.js'

afterEach(cleanup)

it("Should trigger addTodo method", () => {
    const mockAddTodo = jest.fn()
    const {debug, getByTestId, getByText} = render(<AddToDo addTodo={mockAddTodo} />)
    
    const Input = getByTestId("input todo")
    fireEvent.change(Input, {target: {value: "Type new todo here"}})
    expect(Input.value).toContain("Type new todo here")

    const SubmitForm = getByTestId("form")
    fireEvent.submit(SubmitForm)
    expect(mockAddTodo).toHaveBeenCalled()

    const SubmitButton = getByText("Add Todo")
    fireEvent.click(SubmitButton)
    expect(mockAddTodo).toHaveBeenCalledTimes(2)
})

it("Should pass when using user event triggered", () => {
    const mockAddTodo = jest.fn()
    const {debug, getByText} = render(<AddToDo addTodo={mockAddTodo} />)

    const ButtonSubmit = getByText("Add Todo")
    user.click(ButtonSubmit)
    expect(mockAddTodo).toHaveBeenCalled()
})