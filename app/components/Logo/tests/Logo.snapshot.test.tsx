import '@testing-library/jest-dom'
import {render} from '@testing-library/react'

import {Logo} from '../Logo';

describe('<Logo />', () => {
  // let component: ReturnType<typeof render>;

  // beforeEach(() => {
  // });

  it('renders a logo', () => {
    // const columnSet: HTMLElement = component.getByRole('image')
    const component = render(<Logo logoName={'vogue'}/>);
    expect(component).toMatchSnapshot()
  });

  it('does not render if a logo isn\'t provided', () => {
    const component = render(<Logo />);
    expect(component).toMatchSnapshot()
  });

});
