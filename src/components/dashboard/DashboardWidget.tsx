import React, { useMemo } from "react";

interface DashboardWidgetProps {
  title: string;
  data: number[];
  showTotal?: boolean;
}

export const DashboardWidget = ({ title, data, showTotal = false }: DashboardWidgetProps) => {
  const total = useMemo(() => data.reduce((sum, d) => sum + d, 0), [data]);

  return (
    <div className="widget">
      <h3>{title}</h3>
      <ul>
        {data.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
      {showTotal && <div className="widget-total">Total: {total}</div>}
    </div>
  );
};
