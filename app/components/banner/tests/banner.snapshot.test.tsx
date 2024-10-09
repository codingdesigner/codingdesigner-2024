import '@testing-library/jest-dom'
import {render } from '@testing-library/react'

import { Banner } from '../banner';

describe('<Banner />', () => {});


describe('<Banner />', () => {
  it('renders banner unchanged', () => {
    const component = render(<Banner />);
    expect(component).toMatchSnapshot()
  })
});
