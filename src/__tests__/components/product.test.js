import Product from "../../components/product";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { product } from "../../assets/test-samples";

describe("Product", () => {
  render(<Product product={product} />);

  it("test product component", () => {
    expect(screen.getByTestId(product.tcin)).toHaveTextContent(product.item.product_description.title)
  })
});