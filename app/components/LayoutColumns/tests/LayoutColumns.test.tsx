import React from 'react';
import '@testing-library/jest-dom'
import {render} from '@testing-library/react'

import {LayoutColumns, Column} from '../LayoutColumns';

interface ColumnDataProps {
  columnNumber: number | string;
}

const ColumnData: React.FC<ColumnDataProps> = ({ columnNumber }) => {
  return (
    <Column>
      <h2>Column {columnNumber}</h2>
      <div dangerouslySetInnerHTML={{__html: 'just some test text'}} />
    </Column>
  );
}

describe('<LayoutColumns />', () => {
  let component: ReturnType<typeof render>;

  beforeEach(() => {
    component = render(<LayoutColumns />);
  });

  it('renders a column set', () => {
    const columnSet: HTMLElement = component.getByTestId('layout-columns')
    expect(columnSet).toBeInTheDocument();
  });

});

describe('<Column />', () => {
  let component: ReturnType<typeof render>;
  let columns
  const count = 2

  beforeEach(() => {
    columns = Array.from({ length: count }, (_, i) => <ColumnData key={i + 1} columnNumber={i + 1} />)
    component = render(<React.Fragment> {columns} </React.Fragment>);
  });

  it('renders 1 or more columns', () => {
    const columns = component.getAllByTestId('column')
    expect(columns.length).toBe(count);
  });
});
