import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Mon', Sales: 40, Revenue: 24 },
  { name: 'Tue', Sales: 30, Revenue: 13 },
  { name: 'Wed', Sales: 20, Revenue: 98 },
  { name: 'Thu', Sales: 27, Revenue: 39 },
  { name: 'Fri', Sales: 18, Revenue: 48 },
  { name: 'Sat', Sales: 23, Revenue: 38 },
  { name: 'Sun', Sales: 34, Revenue: 43 },
];

function BarChartComponent() {
  return (
    <div className="bg-white shadow rounded p-4 ">
      <h3 className="text-lg font-semibold mb-4 ">Weekly Sales and Revenue</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Sales" fill="#8884d8" />
          <Bar dataKey="Revenue" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartComponent;
