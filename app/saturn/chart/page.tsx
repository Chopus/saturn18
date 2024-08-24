import * as Charts from "@/components/chart/charts"
import Chart01 from "../home/chart-01";
import ChartsNav from "./chart-nav"
export default function ChartPage() {
  return (
    <div className="flex flex-col mt-4 ml-4">
      <div className="fixed bottom-0 bg-black bg-opacity-90 w-full z-50">
        <ChartsNav />
      </div>
      <div className="">
        {/* <h3>Title</h3> */}
      </div>
      <div className="gap-4">
        <ChartsNav />
        {/* <h1>Area Chart</h1> */}
        <div id="area-chart" className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10">
          <Charts.ChartAreaDefault />
          <Charts.ChartAreaLinear />
          <Charts.ChartAreaStep />
          <Charts.ChartAreaStacked />
          <Charts.ChartAreaStackedExpand />
          <Charts.ChartAreaLegend />
          <Charts.ChartAreaIcons />
          <Charts.ChartAreaGradient />
          <Charts.ChartAreaAxes />
          <div className="md:col-span-2 lg:col-span-3">
            <Charts.ChartAreaInteractive />
          </div>
        </div>
        <h1>Bar Chart</h1>
        <div id="bar-chart" className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10">
          <Charts.ChartBarDefault />
          <Charts.ChartBarHorizontal />
          <Charts.ChartBarMultiple />
          <Charts.ChartBarLabel />
          <Charts.ChartBarLabelCustom />
          <Charts.ChartBarMixed />
          <Charts.ChartBarStacked />
          <Charts.ChartBarActive />
          <Charts.ChartBarNegative />
          <div className="md:col-span-2 lg:col-span-3">
            <Charts.ChartBarInteractive />
          </div>
        </div>
        <h1>Line Chart</h1>
        <div id="line-chart" className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10">
          <Charts.ChartLineDefault />
          <Charts.ChartLineLinear />
          <Charts.ChartLineStep />
          <Charts.ChartLineMultiple />
          <Charts.ChartLineDots />
          <Charts.ChartLineDotsCustom />
          <Charts.ChartLineDotsColors />
          <Charts.ChartLineLabel />
          <Charts.ChartLineLabelCustom />
          <div className="md:col-span-2 lg:col-span-3">
            <Charts.ChartLineInteractive />
          </div>
        </div>
        <h1>Pie Chart</h1>
        <div id="pie-chart" className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10">
          <Charts.ChartPieSimple />
          <Charts.ChartPieSeparatorNone />
          <Charts.ChartPieLabel />
          <Charts.ChartPieLabelCustom />
          <Charts.ChartPieLabelList />
          <Charts.ChartPieLegend />
          <Charts.ChartPieDonut />
          <Charts.ChartPieDonutActive />
          <Charts.ChartPieDonutText />
          <Charts.ChartPieStacked />
          <Charts.ChartPieInteractive />
        </div>
        <h1>Radar Chart</h1>
        <div id="radar-chart" className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10">
          <Charts.ChartRadarDefault />
          <Charts.ChartRadarDots />
          <Charts.ChartRadarMultiple />
          <Charts.ChartRadarLinesOnly />
          <Charts.ChartRadarLabelCustom />
          <Charts.ChartRadarRadius />
          <Charts.ChartRadarGridCustom />
          <Charts.ChartRadarGridFill />
          <Charts.ChartRadarGridNone />
          <Charts.ChartRadarGridCircle />
          <Charts.ChartRadarGridCircleNoLines />
          <Charts.ChartRadarGridCircleFill />
          <Charts.ChartRadarLegend />
          <Charts.ChartRadarIcons />
        </div>
        <h1>Radial Chart</h1>
        <div id="radial-chart" className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10">
          <Charts.ChartRadialSimple />
          <Charts.ChartRadialLabel />
          <Charts.ChartRadialGrid />
          <Charts.ChartRadialText />
          <Charts.ChartRadialShape />
          <Charts.ChartRadialStacked />
        </div>
        <h1>Tooltip</h1>
        <div id="tooltip-chart" className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10">

        </div>
      </div>

    </div>
  );
}
