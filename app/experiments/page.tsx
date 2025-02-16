import React from "react";
import { DecoratedHeading } from "../components/DecoratedHeading";
import { ParagraphWrapper } from "../components/ParagraphWrapper";
import { Recharts } from "../components/experiments/components";

export const metadata = {
  title: "Experiments",
}

const Page = () => {
  return (
    <React.Fragment>
      <DecoratedHeading background="pink">Experiments</DecoratedHeading>

      <ParagraphWrapper>
        {/* content tktk */}
      </ParagraphWrapper>

      <Recharts/>


    </React.Fragment>
  );
}

export default Page;
