import '@testing-library/jest-dom'
import {render } from '@testing-library/react'

import {AnnotatedCard} from '../AnnotatedCard';

describe('<AnnotatedCard />', () => {});


describe('<AnnotatedCard />', () => {
  it('renders card unchanged', () => {
    const component = render(<AnnotatedCard />);
    expect(component).toMatchSnapshot()
  })
});
