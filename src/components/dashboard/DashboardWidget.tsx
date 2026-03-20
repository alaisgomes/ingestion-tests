import React from "react";

export const DashboardWidget = ({ title, data }: { title: string; data: number[] }) => {
  return (
    <div className="widget">
      <h3>{title}</h3>
      <ul>
        {data.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
    </div>
  );
};
