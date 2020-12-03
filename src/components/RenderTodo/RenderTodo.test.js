import React from "react";
import { render, cleanup } from "@testing-library/react";
import RenderTodo from "./RenderTodo.js";
import MockTodos from "../MockTodos.js";

afterEach(cleanup);

it("Should render an array of todo objects", () => {
  const mockUpdateTodo = jest.fn();
  const mockDeleteTodo = jest.fn();

  const RenderedTodos = render(
    <RenderTodo
      todo={MockTodos}
      updateTodo={mockUpdateTodo}
      deleteTodo={mockDeleteTodo}
    />
  );

  expect(RenderedTodos).toMatchInlineSnapshot(`
    Object {
      "asFragment": [Function],
      "baseElement": <body>
        <div>
          <ul>
            <li>
              <div
                class="sc-bdfBwQ kfqzdb"
                data-testid="Mandi-wrapper"
              >
                <span
                  class="sc-gsTCUz hdfzAE"
                  data-testid="itemName"
                >
                  Mandi
                </span>
                <span
                  class="sc-dlfnbm iLnXMd"
                >
                  <span>
                    edit
                  </span>
                </span>
                <span
                  class="sc-gKsewC OxlGI"
                  data-testid="itemRemove"
                >
                  delete
                </span>
              </div>
            </li>
            <li>
              <div
                class="sc-bdfBwQ kfqzdb"
                data-testid="Kerja-wrapper"
              >
                <span
                  class="sc-gsTCUz hdfzAE"
                  data-testid="itemName"
                >
                  Kerja
                </span>
                <span
                  class="sc-dlfnbm iLnXMd"
                >
                  <span>
                    edit
                  </span>
                </span>
                <span
                  class="sc-gKsewC OxlGI"
                  data-testid="itemRemove"
                >
                  delete
                </span>
              </div>
            </li>
            <li>
              <div
                class="sc-bdfBwQ kfqzdb"
                data-testid="Makan-wrapper"
              >
                <span
                  class="sc-gsTCUz hdfzAE"
                  data-testid="itemName"
                >
                  Makan
                </span>
                <span
                  class="sc-dlfnbm iLnXMd"
                >
                  <span>
                    edit
                  </span>
                </span>
                <span
                  class="sc-gKsewC OxlGI"
                  data-testid="itemRemove"
                >
                  delete
                </span>
              </div>
            </li>
          </ul>
        </div>
      </body>,
      "container": <div>
        <ul>
          <li>
            <div
              class="sc-bdfBwQ kfqzdb"
              data-testid="Mandi-wrapper"
            >
              <span
                class="sc-gsTCUz hdfzAE"
                data-testid="itemName"
              >
                Mandi
              </span>
              <span
                class="sc-dlfnbm iLnXMd"
              >
                <span>
                  edit
                </span>
              </span>
              <span
                class="sc-gKsewC OxlGI"
                data-testid="itemRemove"
              >
                delete
              </span>
            </div>
          </li>
          <li>
            <div
              class="sc-bdfBwQ kfqzdb"
              data-testid="Kerja-wrapper"
            >
              <span
                class="sc-gsTCUz hdfzAE"
                data-testid="itemName"
              >
                Kerja
              </span>
              <span
                class="sc-dlfnbm iLnXMd"
              >
                <span>
                  edit
                </span>
              </span>
              <span
                class="sc-gKsewC OxlGI"
                data-testid="itemRemove"
              >
                delete
              </span>
            </div>
          </li>
          <li>
            <div
              class="sc-bdfBwQ kfqzdb"
              data-testid="Makan-wrapper"
            >
              <span
                class="sc-gsTCUz hdfzAE"
                data-testid="itemName"
              >
                Makan
              </span>
              <span
                class="sc-dlfnbm iLnXMd"
              >
                <span>
                  edit
                </span>
              </span>
              <span
                class="sc-gKsewC OxlGI"
                data-testid="itemRemove"
              >
                delete
              </span>
            </div>
          </li>
        </ul>
      </div>,
      "debug": [Function],
      "findAllByAltText": [Function],
      "findAllByDisplayValue": [Function],
      "findAllByLabelText": [Function],
      "findAllByPlaceholderText": [Function],
      "findAllByRole": [Function],
      "findAllByTestId": [Function],
      "findAllByText": [Function],
      "findAllByTitle": [Function],
      "findByAltText": [Function],
      "findByDisplayValue": [Function],
      "findByLabelText": [Function],
      "findByPlaceholderText": [Function],
      "findByRole": [Function],
      "findByTestId": [Function],
      "findByText": [Function],
      "findByTitle": [Function],
      "getAllByAltText": [Function],
      "getAllByDisplayValue": [Function],
      "getAllByLabelText": [Function],
      "getAllByPlaceholderText": [Function],
      "getAllByRole": [Function],
      "getAllByTestId": [Function],
      "getAllByText": [Function],
      "getAllByTitle": [Function],
      "getByAltText": [Function],
      "getByDisplayValue": [Function],
      "getByLabelText": [Function],
      "getByPlaceholderText": [Function],
      "getByRole": [Function],
      "getByTestId": [Function],
      "getByText": [Function],
      "getByTitle": [Function],
      "queryAllByAltText": [Function],
      "queryAllByDisplayValue": [Function],
      "queryAllByLabelText": [Function],
      "queryAllByPlaceholderText": [Function],
      "queryAllByRole": [Function],
      "queryAllByTestId": [Function],
      "queryAllByText": [Function],
      "queryAllByTitle": [Function],
      "queryByAltText": [Function],
      "queryByDisplayValue": [Function],
      "queryByLabelText": [Function],
      "queryByPlaceholderText": [Function],
      "queryByRole": [Function],
      "queryByTestId": [Function],
      "queryByText": [Function],
      "queryByTitle": [Function],
      "rerender": [Function],
      "unmount": [Function],
    }
  `);
});
