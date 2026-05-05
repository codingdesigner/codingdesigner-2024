import React from "react";

import { ParagraphWrapper } from "../../components/ParagraphWrapper";
import { AnnotatedCard } from "../../components/AnnotatedCard"

const TokenDrivenDesign = () => {
  return (
    <div>
      <h2>Token-driven design</h2>

      <ParagraphWrapper>
        <p>Verso’s components are built around explicit token decisions. In this annotated card example, each <code>color</code> and <code>type</code> token maps a visual choice back to the system, making it clear which parts of the component are shared and which parts can change by brand.</p>
      </ParagraphWrapper>

      <AnnotatedCard />
    </div>
  );
};

export { TokenDrivenDesign }
