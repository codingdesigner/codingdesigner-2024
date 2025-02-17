import React from "react";
import { DecoratedHeading } from "../components/DecoratedHeading";
import { ParagraphWrapper } from "../components/ParagraphWrapper";
import {
  RechartsTestLine,
  RechartsTestRadar
} from "../components/experiments/components";

import data from "../components/experiments/components/data/weed.json"

const transformData = (data) => {
  let transformedData =
    data.filter((item) => item.Form === "Flower")

  transformedData.forEach((item) => {
    // console.log(['item', item])
    item["combinedTHC"] = item.THC + item.THCVa + item.THCa + item['Δ9-THC']
  })

  return transformedData
}

export const metadata = {
  title: "Experiments",
}

const Page = () => {
  return (
    <React.Fragment>
      <DecoratedHeading background="pink">Experiments</DecoratedHeading>

      <ParagraphWrapper>
        Recharts
      </ParagraphWrapper>
      <RechartsTestRadar data={transformData(data)} />
      {/* <RechartsTestLine /> */}

    </React.Fragment>
  );
}

export default Page;
