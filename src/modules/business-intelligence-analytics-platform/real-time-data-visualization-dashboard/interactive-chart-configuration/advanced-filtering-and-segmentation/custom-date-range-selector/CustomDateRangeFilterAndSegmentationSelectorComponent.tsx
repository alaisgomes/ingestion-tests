import React, { useState } from "react";

interface DateRange {
  startDate: Date;
  endDate: Date;
  label: string;
}

interface SegmentationFilter {
  dimension: string;
  operator: "equals" | "contains" | "greater_than" | "less_than";
  value: string;
}

export const CustomDateRangeFilterAndSegmentationSelectorComponent = () => {
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-12-31"),
    label: "Full Year 2025",
  });

  const [filters, setFilters] = useState<SegmentationFilter[]>([]);

  const addFilter = (filter: SegmentationFilter) => {
    setFilters((prev) => [...prev, filter]);
  };

  const removeFilter = (index: number) => {
    setFilters((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="date-range-selector">
      <h3>Date Range: {dateRange.label}</h3>
      <div>
        <input type="date" value={dateRange.startDate.toISOString().slice(0, 10)} />
        <input type="date" value={dateRange.endDate.toISOString().slice(0, 10)} />
      </div>
      <h4>Active Filters ({filters.length})</h4>
      <ul>
        {filters.map((f, i) => (
          <li key={i}>
            {f.dimension} {f.operator} {f.value}
            <button onClick={() => removeFilter(i)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
