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
        <p className={typography.leadIn}>I‘m a seasoned web designer and front-end developer with a specialized focus on developing comprehensive design systems. Here, I‘ve assembled a showcase of projects that reflect my commitment to marrying form with function, creating user-centric designs that drive business success.</p>
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
        <p>As an expert in web design and front-end development, my goal is to create systems that are not just functional but also adjustable, scalable, and intuitively aligned with each brand’s ethos. I‘ve focused on ensuring that every project I handle is infused with strategic thought, precision, and a keen eye toward future needs, enabling seamless digital experiences that stand the test of time.</p>

        <p>Looking to bring visionary design and meticulous execution to your projects? Let‘s connect and explore how we can elevate your brand together. <strong>Let‘s create something exceptional.</strong></p>
      </ParagraphWrapper>
    </React.Fragment>
  );
}

export default Page;
