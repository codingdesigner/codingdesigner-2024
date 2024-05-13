import React from "react";

import { ParagraphWrapper } from "../../components/ParagraphWrapper";
import { LogoGrid } from "../../components/logo-grid";

const PortfolioIntro = () => {
  return (
    <div>
      <h2>Verso: Condé Nast’s Global Design System</h2>
      <ParagraphWrapper>
        <p>One of my significant achievements was creating <strong>Verso, Condé Nast‘s global design system</strong>. This system was meticulously designed to scale across a range of iconic brands such as <em>Vogue</em>, <em>The New Yorker</em>, <em>WIRED</em>, <em>Vanity Fair</em>, <em>Bon Appétit</em>, and <em>Pitchfork</em>. By integrating a tokenized approach, I ensured that despite the diverse brand aesthetics, there could be a unified yet flexible design framework that upholds individual brand identities.</p></ParagraphWrapper>

      <LogoGrid />
    </div>
  );
}

export { PortfolioIntro }

