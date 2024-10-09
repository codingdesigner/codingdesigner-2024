import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import { Banner } from '../banner'

describe('<Banner />', () => {
  let component: ReturnType<typeof render>;

  beforeEach(() => {
    component = render(<Banner />);
  });

  it('renders a banner', () => {
    // Attempt to find an element with the role 'banner'.
    const banner: HTMLElement = screen.getByRole('banner');
    // Ensure that the banner element is present in the document.
    expect(banner).toBeInTheDocument();
  });
})
