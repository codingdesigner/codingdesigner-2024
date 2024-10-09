import '@testing-library/jest-dom'
import {render} from '@testing-library/react'

import {AnnotatedCard} from '../AnnotatedCard';

describe('<AnnotatedCard />', () => {
  let component
  beforeEach(() => {
    component = render(<AnnotatedCard />);
  });

  it('renders an image', () => {
    const image: HTMLImageElement = component.getByRole('img')
    expect(image).toBeInTheDocument();
    expect(image.alt).toMatch('Card brandless')
  })

  it('displays one or more <TokenMarker/>s', () => {
    const element = component.getAllByTestId('token-flag')
    expect(element.length).toBeGreaterThan(0)
    expect(element.length).toEqual(10)
  })

  it('displays one or more <TokenFlags/>s', () => {
    const element = component.getAllByTestId('token-marker')
    expect(element.length).toBeGreaterThan(0)
    expect(element.length).toEqual(5)
  })
});
