import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { month: 'Jan', ProductOne: 30, ProductTwo: 20 },
  { month: 'Feb', ProductOne: 20, ProductTwo: 28 },
  { month: 'Mar', ProductOne: 27, ProductTwo: 39 },
  { month: 'Apr', ProductOne: 18, ProductTwo: 48 },
  { month: 'May', ProductOne: 23, ProductTwo: 38 },
  { month: 'Jun', ProductOne: 34, ProductTwo: 43 },
  { month: 'Jul', ProductOne: 44, ProductTwo: 35 },
  { month: 'Aug', ProductOne: 30, ProductTwo: 50 },
];

function LineChartComponent() {
  return (
    <div className="bg-white shadow rounded p-4 ">
      <h3 className="text-lg font-semibold mb-4 ">Monthly Product Comparison</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="ProductOne" stroke="#8884d8" />
          <Line type="monotone" dataKey="ProductTwo" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChartComponent;
