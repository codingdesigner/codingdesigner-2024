import React from "react";

import typography from "../components/typography/typography.module.css"

import { LayoutColumns, Column } from "../components/LayoutColumns";
import { DecoratedHeading } from "../components/DecoratedHeading";
import { ParagraphWrapper } from "../components/ParagraphWrapper";
import { StripesWrapper } from "../components/StripesWrapper";

import { PortfolioIntro } from "./content/PortfolioIntro"
import { TokenDrivenDesign } from "./content/TokenDrivenDesign";
import { CardExamples } from "./content/CardExamples";
import { EditorialExpression } from "./content/EditorialExpression";
import { BrandIdentityProcess } from "./content/BrandIdentityProcess";
import { TokenTypes } from "./content/TokenTypes";
import { Storefront } from "./content/Storefront";

export const metadata = {
  title: "Portfolio",
}

const Page = () => {
  return (
    <React.Fragment>
      <DecoratedHeading>Lead Design Systems Engineer at Condé&nbsp;Nast</DecoratedHeading>
        <p className={typography.leadIn}>Verso is Condé Nast’s multi-brand design system for 15+ publications. I helped architect the shared component foundation, token-driven theming, and tooling that allow brands like Vogue, The New Yorker, WIRED, Vanity Fair, Bon Appétit, and Pitchfork to keep distinct editorial identities inside one system.</p>
      <StripesWrapper>
        <LayoutColumns>
          <Column>
            <PortfolioIntro />
          </Column>
          <Column>
            <TokenDrivenDesign />
          </Column>
        </LayoutColumns>
        <CardExamples />
        <EditorialExpression />
        <BrandIdentityProcess />
        <TokenTypes />
        <Storefront />
      </StripesWrapper>
      <ParagraphWrapper>
        <p>This case study shows the kind of system work I build: architecture for shared UI, tokens that carry brand decisions, tooling that connects Figma and code, and documentation that helps teams adopt the system.</p>

        <p>If your team is building a design system, UI platform, or design-to-code workflow across multiple products or brands, <strong>let’s talk.</strong></p>
      </ParagraphWrapper>
    </React.Fragment>
  );
}

export default Page;
