import React from "react";

import { ParagraphWrapper } from "../../components/ParagraphWrapper";
import { AnnotatedCard } from "../../components/AnnotatedCard"

const TokenDrivenDesign = () => {
  return (
    <div>
      <h2>Token-driven design</h2>

      <ParagraphWrapper>
        <p>In building design systems, I rely heavily on a token-driven approach, which allows every design element to be defined by specific tokens. For example, in the card components that I developed, I annotated each `color` and `type` token to illustrate how foundational design consistency can be achieved across varied applications. This method not only streamlines the development process but also fortifies the design’s adaptability.</p>
      </ParagraphWrapper>

      <AnnotatedCard />
    </div>
  );
};

export { TokenDrivenDesign }
