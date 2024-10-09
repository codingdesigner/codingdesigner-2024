import '@testing-library/jest-dom'
import {render} from '@testing-library/react'

import { LogoGrid } from '../logo-grid';

describe('<LogoGrid />', () => {
  let component: ReturnType<typeof render>;

  beforeEach(() => {
    component = render(<LogoGrid />);
  });

  it('renders a LogoGrid', () => {
    const logos: HTMLElement[] = component.getAllByTestId('logo-grid')
    expect(logos.length).toBeInTheDocument;
  });

  it('renders a set of logos', () => {
    const logos: HTMLElement[] = component.getAllByTestId('logo')
    expect(logos.length).toBe(20);
  });

});
