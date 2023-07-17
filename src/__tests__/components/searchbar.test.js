import SearchBar from "../../components/searchbar";
import "@testing-library/jest-dom";
import userEvent  from "@testing-library/user-event"
import { fireEvent, render, screen, waitFor, act } from "@testing-library/react";
import "whatwg-fetch"

describe("SearchBar", () => {
  test("should submit when pressing enter", async () => {
    userEvent.setup();
    const handleSubmit = jest.fn();
    const loading = false;

    render(
      <SearchBar
        loading={loading}
        handleSubmit={handleSubmit}
      />
    );
    const searchInput = screen.getByRole('searchbox');

    searchInput.focus();
    act(() => {
      userEvent.keyboard('test input{enter}');
    });
  
    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalled();
    })
  });

  test("should submit when clicking search button", async () => {
    userEvent.setup();
    const handleSubmit = jest.fn();
    const loading = false;

    render(
      <SearchBar
        loading={loading}
        handleSubmit={() => handleSubmit()}
      />
    );

    const searchInput = screen.getByRole('searchbox');
    const searchButton = screen.getByRole('button');

    act(() => {
      fireEvent.change(searchInput, {
        target: {
          value: 'test input',
        },
      })
    });

    act(() => {
      userEvent.click(searchButton)
    });

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalled();
    })
  });
});