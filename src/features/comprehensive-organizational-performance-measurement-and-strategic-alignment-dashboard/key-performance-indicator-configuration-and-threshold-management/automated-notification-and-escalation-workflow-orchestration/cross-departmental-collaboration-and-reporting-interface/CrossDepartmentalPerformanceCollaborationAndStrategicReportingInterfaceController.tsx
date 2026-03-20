import React, { useState } from "react";

interface KeyPerformanceIndicator {
  id: string;
  name: string;
  department: string;
  currentValue: number;
  targetValue: number;
  threshold: { warning: number; critical: number };
  status: "on-track" | "at-risk" | "critical" | "exceeded";
}

interface EscalationNotification {
  kpiId: string;
  severity: "warning" | "critical";
  message: string;
  notifiedDepartments: string[];
  createdAt: Date;
}

export const CrossDepartmentalPerformanceCollaborationAndStrategicReportingInterfaceController = () => {
  const [kpis] = useState<KeyPerformanceIndicator[]>([
    {
      id: "kpi-001",
      name: "Customer Satisfaction Score",
      department: "Customer Success",
      currentValue: 87,
      targetValue: 90,
      threshold: { warning: 85, critical: 75 },
      status: "at-risk",
    },
    {
      id: "kpi-002",
      name: "Revenue Growth Rate",
      department: "Finance",
      currentValue: 12.5,
      targetValue: 15,
      threshold: { warning: 10, critical: 5 },
      status: "on-track",
    },
    {
      id: "kpi-003",
      name: "Employee Retention Rate",
      department: "Human Resources",
      currentValue: 94,
      targetValue: 95,
      threshold: { warning: 90, critical: 85 },
      status: "on-track",
    },
  ]);

  const [notifications] = useState<EscalationNotification[]>([]);

  const getStatusColor = (status: KeyPerformanceIndicator["status"]) => {
    switch (status) {
      case "on-track": return "green";
      case "at-risk": return "orange";
      case "critical": return "red";
      case "exceeded": return "blue";
    }
  };

  return (
    <div className="cross-departmental-dashboard">
      <h1>Strategic Performance Dashboard</h1>
      <div className="kpi-grid">
        {kpis.map((kpi) => (
          <div key={kpi.id} className="kpi-card" style={{ borderColor: getStatusColor(kpi.status) }}>
            <h3>{kpi.name}</h3>
            <p>Department: {kpi.department}</p>
            <p>
              Current: {kpi.currentValue} / Target: {kpi.targetValue}
            </p>
            <span className={`status-badge ${kpi.status}`}>{kpi.status}</span>
          </div>
        ))}
      </div>
      {notifications.length > 0 && (
        <div className="escalation-panel">
          <h2>Active Escalations ({notifications.length})</h2>
        </div>
      )}
    </div>
  );
};
