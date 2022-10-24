import { render } from '@testing-library/react';
import App from './App';
import Artwork from "./pages/artwork";

test('renders App component', () => {
  render(<App />);
});

test('renders artwork with id 0 and 1', async () => {
  render(<Artwork url="/artwork/1" />)
  render(<Artwork url="/artwork/0" />)
})
