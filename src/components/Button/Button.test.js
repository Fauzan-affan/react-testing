import React from 'react'
import {render, cleanup} from '@testing-library/react'
import renderer from "react-test-renderer"

import Button from "./Button.js";

afterEach(cleanup)

it("renders without crashing", () => {
    render(<Button/>)
})

test("set props", () => {
    const {getByTestId} = render(<Button label="Please Click Me Guys!!!"></Button>)
    expect(getByTestId("button")).toHaveTextContent("Please Click Me Guys!!!")
})

test("set props", () => {
    const {getByTestId} = render(<Button label="Ah Elah"></Button>)
    expect(getByTestId("button")).toHaveTextContent("Ah Elah")
})

describe("check snapshot", () => {
    const tree = renderer.create(<Button label="Save Me"/>).toJSON()
    expect(tree).toMatchSnapshot()
})