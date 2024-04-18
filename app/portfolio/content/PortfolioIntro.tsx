import React from "react";

import { LogoGrid } from "../../components/logo-grid";

const PortfolioIntro = () => {
  return (
    <React.Fragment>
      <h2>Verso: Condé Nast’s Global Design System</h2>

      <p>A tokenized system that scales design for some of the most iconic world-class brands, including <em>Vogue</em>, <em>The New Yorker</em>, <em>WIRED</em>, <em>Vanity Faire</em>, <em>Bon Appetite</em>, and <em>Pitchfork</em>.</p>

      <LogoGrid />
    </React.Fragment>
  );
}

export { PortfolioIntro }
