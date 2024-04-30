import React from "react";

import { LogoGrid } from "../../components/logo-grid";

const PortfolioIntro = () => {
  return (
    <React.Fragment>
      <h2>Verso: Condé Nast’s Global Design System</h2>

      <p>This efficient system streamlines design for top-tier brands like <em>Vogue</em>, <em>The New Yorker</em>, <em>WIRED</em>, <em>Vanity Fair</em>, <em>Bon Appétit</em>, and <em>Pitchfork</em>. This tokenized approach ensures consistent and scalable design across a range of prestigious brands. It's more than just a design system; it's a game-changer helping brands to elevate their digital presence and in a streamlined and cost-effective way.</p>

      <LogoGrid />
    </React.Fragment>
  );
}

export { PortfolioIntro }

