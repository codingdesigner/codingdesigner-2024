import '@testing-library/jest-dom'
import {render } from '@testing-library/react'

import { Figure } from '../figure';
import brandlessCard from "../../static/cards/card-brandless.png"
import brandlessCard2x from "../../static/cards/card-brandless@2x.png"


describe('<Figure />', () => {
  it('renders figure unchanged', () => {
    const component = render(<Figure imageFile={brandlessCard} altText="some alt text" caption="A basic caption" imageFirst={true} modalImageFile={brandlessCard2x} />);
    expect(component).toMatchSnapshot()
  })
});

describe('<Figure />', () => {
  let component;

  beforeEach(() => {
    component = render(<Figure imageFile={brandlessCard} altText="some alt text" caption="A basic caption" imageFirst={true} modalImageFile={brandlessCard2x} />);
  });

  it('renders an image', () => {
    const image: HTMLImageElement = component.getByRole('img')
    expect(image).toBeInTheDocument();
    expect(image.alt).toMatch('some alt text')
  })

  it('renders a dialog', () => {
    component.debug()
    const dialog: HTMLElement = component.getByTestId('dialog')
    expect(dialog).toBeInTheDocument();
    console.log(['dialog', dialog])
    try {
      const asdf = render(dialog.innerHTML)
      asdf.debug()
    } catch (error) {
      console.log(['error', error])
    }
  })

  it('renders a modal image', () => {
    // component.debug()
    const dialog: HTMLElement = component.getByTestId('modal-image')
    expect(dialog).toBeInTheDocument();
  })

  it('displays a caption', () => {
    const figcaption: HTMLElement = component.getByTestId('figcaption')
    expect(figcaption).toBeInTheDocument();
  })

  // it('opens a dialog when clicked', () => {
  //   const element = component.getAllByTestId('token-flag')
  //   expect(element.length).toBeGreaterThan(0)
  //   expect(element.length).toEqual(10)
  // })

});
