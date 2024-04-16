import React from 'react';
import { LoremIpsum } from "lorem-ipsum";

import { LayoutColumns, Column } from './LayoutColumns';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
},
  "html");

// Define the props type for ColumnData for better type checking and autocompletion.
interface ColumnDataProps {
  columnNumber: number | string;
}

// Correctly define the function component with props type.
const ColumnData: React.FC<ColumnDataProps> = ({ columnNumber }) => {
  function getRandomInt(max) {
    return Math.ceil(Math.random() * max);
  }
  return (
    <Column>
      <h2>Column {columnNumber}</h2>
      <div dangerouslySetInnerHTML={{__html: lorem.generateParagraphs(getRandomInt(3))}} />
    </Column>
  );
}

// Define the props type for better type checking and autocompletion in TypeScript.
interface LayoutColumnsStoryDataProps {
  count?: number; // '?' makes the count optional
}

export const LayoutColumnsStoryData: React.FC<LayoutColumnsStoryDataProps> = ({ count = 2 }) => {
  // Use React.useMemo to optimize performance by memorizing the columns array
  // This prevents re-creating the columns array on every render unless 'count' changes.
  const columns = React.useMemo(() => {
    return Array.from({ length: count }, (_, i) => <ColumnData key={i + 1} columnNumber={i + 1} />);
  }, [count]);

  return (
    <React.Fragment>
      {columns}
    </React.Fragment>
  );
}
