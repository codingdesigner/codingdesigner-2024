import '@testing-library/jest-dom'
import {render } from '@testing-library/react'

import { DecoratedHeading } from '../DecoratedHeading';

describe('<DecoratedHeading />', () => {
  it('renders DecoratedHeading unchanged', () => {
    const component = render(<DecoratedHeading />);
    expect(component).toMatchSnapshot()
  })
});
