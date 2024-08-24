<div className="flex">
{/* <HomeAreaChart />
<HomeBarChart />
<HomePieChart />   */}
{/* BLOCK TO DISPLAY SELECTED CHART */}
<Combobox />
<div>
  <h1>Select a Chart to Display</h1>
  <select onChange={handleSelectChange}>
    <option value="Chart1">Chart 1</option>
    <option value="Chart2">Chart 2</option>
    <option value="Chart3">Chart 3</option>
  </select>
  <div style={{ display: "flex", marginTop: "20px" }}>
    {selectedCharts.map((chart, index) => {
      const SelectedChartComponent = chartComponents[chart];
      return (
        <div key={chart} style={{ margin: "0 10px" }}>
          <SelectedChartComponent />
        </div>
      );
    })}
  </div>
</div>
{/* BLOCK TO DISPLAY SELECTED CHART */}
</div>