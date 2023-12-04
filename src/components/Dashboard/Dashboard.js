import React, { useState } from "react";

import DoughnutChart from "../Doughtnut/Doughtnut";
import TableComponent from "../TableComponent/Tablecomponent";
import { CiCircleQuestion } from "react-icons/ci";
import { PiCircleDashed } from "react-icons/pi";
import { GoContainer } from "react-icons/go";

import "./Dashboard.css";

const Table = () => {
  const data = React.useMemo(() => {
    return [
      {
        campaign: "Cosmetics",
        clicks: 712,
        cost: 4272,
        conversions: 8,
        revenue: 16568,
      },
      {
        campaign: "Serums",
        clicks: 3961,
        cost: 27331,
        conversions: 115,
        revenue: 362526,
      },
      {
        campaign: "Facewash",
        clicks: 9462,
        cost: 76831,
        conversions: 123,
        revenue: 266800,
      },
      {
        campaign: "Shampoos",
        clicks: 439,
        cost: 2151,
        conversions: 6,
        revenue: 11029,
      },
      {
        campaign: "Conditioners",
        clicks: 1680,
        cost: 3864,
        conversions: 49,
        revenue: 175245,
      },
      {
        campaign: "Facewash 2",
        clicks: 4978,
        cost: 29370,
        conversions: 189,
        revenue: 623106,
      },
    ];
  }, []);

  const Headercolumns = React.useMemo(() => {
    return [
      {
        Header: "Ad Insight",
        accessor: "Ad Insight",
      },
      {
        Header: (
          <CiCircleQuestion fontSize={30} style={{ color: "darkgray" }} />
        ),
        accessor: <CiCircleQuestion />,
      },
    ];
  }, []);

  const columns = React.useMemo(() => {
    return [
      {
        Header: "Campaign",
        accessor: "campaign",
      },
      {
        Header: "Clicks",
        accessor: "clicks",
      },
      {
        Header: "Cost",
        accessor: "cost",
      },
      {
        Header: "Conversions",
        accessor: "conversions",
      },
      {
        Header: "Revenue",
        accessor: "revenue",
      },
    ];
  }, []);

  return (
    <>
      <TableComponent
        columns={columns}
        data={data}
        headerColumns={Headercolumns}
      />
    </>
  );
};

const Dashboard = () => {
  const [showChart, setShowChart] = useState(true);
  console.log("showChart", showChart);
  const Headercolumns = React.useMemo(() => {
    return [
      {
        Header: "Ad Insight",
        accessor: "Ad Insight",
      },
      {
        Header: (
          <CiCircleQuestion fontSize={30} style={{ color: "darkgray" }} />
        ),
        accessor: <CiCircleQuestion />,
      },
    ];
  }, []);
  const data = React.useMemo(() => {
    return [
      {
        Group: "Male",
        clicks: 712,
        cost: 4272,
        conversions: 8,
        revenue: 16568,
      },
      {
        Group: "Female",
        clicks: 3961,
        cost: 27331,
        conversions: 115,
        revenue: 362526,
      },
      {
        Group: "Unknown",
        clicks: 9462,
        cost: 76831,
        conversions: 123,
        revenue: 266800,
      },
      {
        Group: "Total",
        clicks: 439,
        cost: 2151,
        conversions: 6,
        revenue: 11029,
      },
    ];
  }, []);

  const columns = React.useMemo(() => {
    return [
      {
        Header: "Group",
        accessor: "Group",
      },
      {
        Header: "Clicks",
        accessor: "clicks",
      },
      {
        Header: "Cost",
        accessor: "cost",
      },
      {
        Header: "Conversions",
        accessor: "conversions",
      },
      {
        Header: "Revenue",
        accessor: "revenue",
      },
    ];
  }, []);

  const handleButton1Click = () => {
    setShowChart(true);
  };

  const handleButton2Click = () => {
    setShowChart(false);
  };
  return (
    <div className="dashboard-container">
      <Table />
      <div className={showChart ? "doughnut-container" : "showChart"}>
        {showChart ? (
          <DoughnutChart />
        ) : (
          <TableComponent
            showChart={showChart}
            headerColumns={showChart ? null : Headercolumns}
            columns={columns}
            data={data}
          />
        )}
        <div className="dashboard-container">
          <div>
            <button className="icon-style" onClick={handleButton1Click}>
              <PiCircleDashed fontSize={25} />
            </button>
            <button className="icon-style" onClick={handleButton2Click}>
              <GoContainer fontSize={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
