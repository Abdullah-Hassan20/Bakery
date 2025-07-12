"use client";

import React ,{use} from "react";
import Display from "@/components/Display";
import data from "@/data/data.js";

export default function Page({ params }) {
  const { slug } = use(params);

  const selectedData = data[slug];

  return (
    <div>
      <Display data={selectedData} />
    </div>
  );
}
