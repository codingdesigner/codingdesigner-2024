import React from "react";
import { DecoratedHeading } from "../components/DecoratedHeading";
import { ParagraphWrapper } from "../components/ParagraphWrapper";
import { RechartsTest } from "../components/experiments/components";

export const metadata = {
  title: "Experiments",
}

const Page = () => {
  return (
    <React.Fragment>
      <DecoratedHeading background="pink">Experiments</DecoratedHeading>

      <ParagraphWrapper>
        Recharts - FAILED
      </ParagraphWrapper>

      <RechartsTest />


    </React.Fragment>
  );
}

export default Page;
