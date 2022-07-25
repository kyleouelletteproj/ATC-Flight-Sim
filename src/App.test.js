import { render } from '@testing-library/react';
import App from './App';

test('simulator appears', () => {
  let { getByTestId } = render(<App />);
  expect(getByTestId("router")).toBeInTheDocument();
});
