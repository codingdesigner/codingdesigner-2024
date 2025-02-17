// 'use client';

import React from "react";
import dynamic from "next/dynamic"
import { DecoratedHeading } from "../components/DecoratedHeading";
import { ParagraphWrapper } from "../components/ParagraphWrapper";
// import { RechartsTest } from "../components/experiments/components";

const RechartsTest = dynamic(() => import("../components/experiments/components"), { ssr: false })

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
