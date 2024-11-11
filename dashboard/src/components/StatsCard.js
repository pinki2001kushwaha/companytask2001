// StatsCard.jsx
import React from 'react';

function StatsCard({ title, value, percentage }) {
  return (
    <div className="bg-white shadow rounded p-4 flex flex-col items-center">
      <p className="text-gray-600">{title}</p>
      <h3 className="text-2xl font-semibold">{value}</h3>
      <p className={`text-sm ${percentage >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        {percentage}%
      </p>
    </div>
  );
}

export default StatsCard;
