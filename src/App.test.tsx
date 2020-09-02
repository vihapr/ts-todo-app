import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event"; 
import App from './App';

test('Рендер App и поле ввода', () => {
  const { getByText } = render(<App />);
  const labelElement: HTMLElement = getByText(/Введите todo и нажмите enter/);
  expect(labelElement).toBeInTheDocument();
  expect(labelElement).toBeEnabled();
  expect(labelElement).toBeVisible();
  expect(labelElement).toHaveClass("addTodo__row label");
  screen.debug(labelElement)
});

test('Ввод данных в поле ввода', ()=> {
  const noText = '';
  const testText = 'Hello world!';
  render(<input />);
  const inputElement: HTMLElement = screen.getByRole("textbox");
  expect(inputElement).toBeInTheDocument(); 
  expect(inputElement).toBeEnabled();
  expect(inputElement).toHaveValue(noText);
  userEvent.type(inputElement, testText);
  expect(inputElement).toHaveValue(testText);
  screen.debug(inputElement)
})