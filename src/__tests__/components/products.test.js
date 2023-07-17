import Products from "../../components/products";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { searchResult } from "../../assets/test-samples";

describe("Product", () => {
  render(<Products data={searchResult} />);

  it("test products component", () => {
    if (!searchResult.success && searchResult.msg) {
      expect(screen.getByTestId('show-alert')).toHaveTextContent(searchResult.msg);
    } else {
      expect(screen.getAllByTestId('product-item').length).toBe(searchResult.products.length)
    }
  })
});