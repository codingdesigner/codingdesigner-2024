import React from "react";
import { DecoratedHeading } from "../components/DecoratedHeading";
import { ParagraphWrapper } from "../components/ParagraphWrapper";
import {
  RechartsTestLine,
  RechartsTestRadar
} from "../components/experiments/components";

import weedData from "../components/experiments/components/data/weed.json"

const filterData = (data, formFilter: null | string = null) => {
  if (formFilter ) {
    data = data.filter((item) => item.Form === formFilter)
  }

  data.forEach((item) => {
    item = calculateTHC(item)
  })
  console.log(['data', data])

  return data
}

const calculateTHC = (item) => {
    item["combinedTHC"] = item.THC + item.THCVa + item.THCa + item['Δ9-THC']
    item["indicaTHC"] = 0
    item["hybridTHC"] = 0
    item["sativaTHC"] = 0
    switch (item["Strain Dominance"]) {
      case "Indica":
      case "Indica Hybrid":
        item["indicaTHC"] = item["combinedTHC"]
        break
      case "Sativa":
      case "Sativa Hybrid":
        item["sativaTHC"] = item["combinedTHC"]
        break
      default:
        item["hybridTHC"] = item["combinedTHC"]
    }

  return item
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
      <RechartsTestRadar data={filterData(weedData, "Flower")} />
      {/* {items.map((item, index) => (
        <Figure key={index} imageFile={item.imageFile} altText={item.altText} caption={item.caption} modalImageFile={item.modalImageFile} />
      ))} */}
      {/* <RechartsTestLine /> */}

    </React.Fragment>
  );
}

export default Page;
