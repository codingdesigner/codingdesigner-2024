// 'use client';

import React from "react";
import { DecoratedHeading } from "../components/DecoratedHeading";
import { ParagraphWrapper } from "../components/ParagraphWrapper";
// import { RechartsExample } from "../components/experiments/components/Recharts";

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

      {/* <RechartsExample/> */}


    </React.Fragment>
  );
}

export default Page;
