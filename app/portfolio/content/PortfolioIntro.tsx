import React from "react";

import { ParagraphWrapper } from "../../components/ParagraphWrapper";
import { LogoGrid } from "../../components/logo-grid";

const PortfolioIntro = () => {
  return (
    <div>
      <h2>Verso: Condé Nast’s Global Design System</h2>
      <ParagraphWrapper>
        <p><strong>Verso</strong> gives Condé Nast one system foundation for a wide range of editorial brands, including <em>Vogue</em>, <em>The New Yorker</em>, <em>WIRED</em>, <em>Vanity Fair</em>, <em>Bon Appétit</em>, and <em>Pitchfork</em>. The system uses shared components and token-driven theming so each publication can express its own visual language without rebuilding the interface from scratch.</p></ParagraphWrapper>

      <LogoGrid />
    </div>
  );
}

export { PortfolioIntro }
