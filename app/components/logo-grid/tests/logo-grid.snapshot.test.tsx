import '@testing-library/jest-dom'
import {render} from '@testing-library/react'

import { LogoGrid } from '../logo-grid';

describe('<LogoGrid />', () => {
  it('renders a LogoGrid', () => {
    // const columnSet: HTMLElement = component.getByRole('image')
    const component = render(<LogoGrid />);
    expect(component).toMatchSnapshot()
  });
});
