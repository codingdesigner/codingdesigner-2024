import React from "react";

import { LayoutColumns, Column } from "../components/LayoutColumns";
import { DecoratedHeading } from "../components/DecoratedHeading";

import { PortfolioIntro } from "./content/PortfolioIntro"
import { TokenDrivenDesign } from "./content/TokenDrivenDesign";
import { CardExamples } from "./content/CardExamples";
import { EditorialExpression } from "./content/EditorialExpression";
import { BrandIdentityProcess } from "./content/BrandIdentityProcess";
import { TokenTypes } from "./content/TokenTypes";


const Page = () => {
  return (
    <React.Fragment>
      <DecoratedHeading>Lead Design Systems Engineer at Condé Nast</DecoratedHeading>
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
      <LayoutColumns>
        <Column>
          <BrandIdentityProcess />
        </Column>
      </LayoutColumns>
      <LayoutColumns>
        <Column>
          <TokenTypes/>
        </Column>
        <Column>

          ### Full internationalization for every brand

          - show asian language brand
        </Column>
      </LayoutColumns>
      <LayoutColumns>
        <Column>

          ### Guidance and governance through a design system portal

          - show storefront site
        </Column>
      </LayoutColumns>
    </React.Fragment>
  );
}

export default Page;
