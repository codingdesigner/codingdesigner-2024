import React from "react";

import { AnnotatedCard } from "../../components/AnnotatedCard"

const TokenDrivenDesign = () => {
  return (
    <React.Fragment>
      <h2>Token-driven design</h2>

      <p>The backbone of our design system lies in the meticulous styling of each component using a unique set of design tokens. Dive into our Card component below, where each `color` and `type` token is thoughtfully annotated, letting designers, engineers, and progect owners fully understand how our tokens are used.</p>

      <AnnotatedCard />
    </React.Fragment>
  );
};

export { TokenDrivenDesign }
