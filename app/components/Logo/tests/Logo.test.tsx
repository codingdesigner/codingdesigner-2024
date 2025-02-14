import '@testing-library/jest-dom'
import {render} from '@testing-library/react'

import {Logo} from '../Logo';

describe('<Logo />', () => {
  let component: ReturnType<typeof render>;

  beforeEach(() => {
    component = render(<Logo logoName={'vogue'}/>);
  });

  it('renders a logo', () => {
    const logos: HTMLElement[] = component.getAllByTestId('logo')
    expect(logos.length).toBe(1);
  });

  it('does not render if a logo isn\'t provided', () => {
    component = render(<Logo />);
    const logos: HTMLElement = component.getByTestId('logo')
    expect(logos).toBeInTheDocument;
  });

});
