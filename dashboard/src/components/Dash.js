import React from 'react'
import StatsCard from '../components/StatsCard';
import LineChartComponent from '../components/LineChartComponent';
import BarChart from '../components/BarChartComponent';
function Dash() {
  return (
    <div>
       <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-24">
          <StatsCard title="Total Views" value="$3,456K" percentage="0.43" />
          <StatsCard title="Total Profit" value="$45.2K" percentage="4.35" />
          <StatsCard title="Total Products" value="2,450" percentage="2.59" />
          <StatsCard title="Total Users" value="3,456" percentage="0.95" />
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 shadow rounded">
            <LineChartComponent />
          </div>
          <div className="bg-white p-4 shadow rounded">
            <BarChart />
          </div>
        </div>
    </div>
  )
}

export default Dash
