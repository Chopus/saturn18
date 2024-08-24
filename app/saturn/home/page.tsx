"use client";

import HomeAreaChart from "./home-areachart";
import HomeBarChart from "./home-barchart";
import HomePieChart from "./home-piechart";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Combobox } from "@/components/ui/combobox";
import Chart01 from "./chart-01";
import Chart02 from "./chart-02";
import Chart03 from "./chart-03";
import { LineChartGreen } from "./line-chart-green";
import { LineChartRed } from "./line-chart-red";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AvatarSection from "./avatar-section";

// const Chart1 = dynamic(() => import("./home-areachart"));
// const Chart2 = dynamic(() => import("./home-barchart"));
// const Chart3 = dynamic(() => import("./home-piechart"));

// const chartComponents: { [key: string]: React.ComponentType } = {
//   Chart1,
//   Chart2,
//   Chart3,
// };

export default function Home() {
  // const [selectedCharts, setSelectedCharts] = useState<string[]>([]);

  // const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   const selectedChart = event.target.value;
  //   setSelectedCharts([...selectedCharts, selectedChart]);
  // };

  return (
    <div>
      <div className="mt-4 ml-4">
        Dashboard
      </div>
      <div className="flex flex-row mt-4 ml-4 mb-8 gap-x-4">
        <LineChartGreen />
        <LineChartRed />
        <LineChartGreen />
        <LineChartRed />
        <LineChartGreen />
        <LineChartRed />
        <LineChartGreen />
        <LineChartRed />
      </div>
      <div className="grid mt-4 ml-4 mb-8 w-xl grid-cols-3 gap-4">
        <div className="flex flex-col">
          <span className="mb-4">Title 01</span>
          <AvatarSection />
        </div>
        <div className="flex flex-col">
          <span className="mb-4">Title 02</span>
          <AvatarSection />
        </div>
        <div className="flex flex-col">
          <span className="mb-4">Title 03</span>
          <AvatarSection />
        </div>
      </div>
    </div>
  );
}
