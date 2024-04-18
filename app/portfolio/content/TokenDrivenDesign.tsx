import React from "react";

import { AnnotatedCard } from "../../components/AnnotatedCard"

const TokenDrivenDesign = () => {
  return (
    <React.Fragment>
      <h2>Token-driven design</h2>

      <p>Each component in the design system is styled using a set of design tokens. Below is a Card component with each of the `color` and `type` tokens annotized.</p>

      <AnnotatedCard />
    </React.Fragment>
  );
};

export { TokenDrivenDesign }
