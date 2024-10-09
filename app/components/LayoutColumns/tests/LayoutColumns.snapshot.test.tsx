import '@testing-library/jest-dom'
import {render } from '@testing-library/react'

import {LayoutColumns} from '../LayoutColumns';

describe('<LayoutColumns />', () => {
  it('renders LayoutColumns unchanged', () => {
    const component = render(<LayoutColumns />);
    expect(component).toMatchSnapshot()
  })
});


