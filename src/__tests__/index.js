import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

test("home works as expected", () => {});

test("search form could be used", async () => {
  render(<App />);
  const input = await screen.findByRole("textbox");
  const button = await screen.findByRole("button");

  fireEvent.change(input, { target: { value: "Matrix" } });
  fireEvent.click(button);

  const title = await screen.findByText("Matrix");
  expect(title).toBeVisible();
});
