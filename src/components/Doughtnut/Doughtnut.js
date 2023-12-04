import React, { useState } from "react";
import Chart from "chart.js/auto";
import { useTable, useSortBy } from "react-table";
import { CategoryScale } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import CustomDropdown from "../Dropdown/Dropdown";
import "./Doughtnut.css";

Chart.register(CategoryScale);
Chart.register(ChartDataLabels);

const options = [
  { value: "Campaign", label: "Campaign" },
  { value: "Clicks", label: "Clicks" },
  { value: "Cost", label: "Cost" },
  { value: "Conversions", label: "Conversions" },
  { value: "Revenue", label: "Revenue" },
];

function DoughnutChart() {
  const [chartData, setChartData] = useState({
    labels: ["Male", "Female", "Unknown"],
    datasets: [
      {
        data: [40, 35, 25],
        backgroundColor: ["#36A2EB", "#EA7317", "#000000"],
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="doughnut-chart-container">
      <div className="container-div1">  
        <p className="m-size">Ad Insight</p>
        <p className="m-size" >
          <CustomDropdown
            placeholder="Select a label that best suits your ad"
            fullWidth
            value="Clicks"
            options={options}
          />
        </p>
      </div>

      <div className="chart-container">
        <div className="doughnut-container1">
          <div style={{ height: "375px", width: "500px" }}>
            <Doughnut
              data={chartData}
              options={{
                plugins: {
                  datalabels: {
                    display: false,
                  },
                  legend: {
                    display: false,
                  },
                },
                layout: {
                  padding: {
                    top: 20,
                    bottom: 20,
                  },
                },
              }}
            />
          </div>

          <div className="legend-container">
            {chartData.labels.map((label, index) => (
              <div key={index} className="legend">
                <div
                  className="legend-color"
                  style={{
                    backgroundColor:
                      chartData.datasets[0].backgroundColor[index],
                  }}
                ></div>
                <div className="legend-text">{label}</div>
              </div>
            ))}
          </div>
          {/* <button>1</button>
          <button>2</button> */}
        </div>
      </div>
    </div>
  );
}

export default DoughnutChart;
