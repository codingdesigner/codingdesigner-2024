import '@testing-library/jest-dom'
import {render} from '@testing-library/react'

import {DecoratedHeading} from '../DecoratedHeading';

describe('<DecoratedHeading />', () => {
  let component: ReturnType<typeof render>;

  beforeEach(() => {
    component = render(<DecoratedHeading />);
  });

  it('renders a banner', () => {
    const banner: HTMLElement = component.getByRole('heading', {level: 1});
    expect(banner).toBeInTheDocument();
  });
})
