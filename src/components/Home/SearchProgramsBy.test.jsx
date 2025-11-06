
import { render, screen } from '@testing-library/react';

import SearchProgramsBy from './SearchProgramsBy';

test('renders SearchProgramsBy component', () => {
  render(<SearchProgramsBy />);
  const linkElement = screen.getByText(/Search Programs by/i);
  expect(linkElement).toBeInTheDocument();
});
