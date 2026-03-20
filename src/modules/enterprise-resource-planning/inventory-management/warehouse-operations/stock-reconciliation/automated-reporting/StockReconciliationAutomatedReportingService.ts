interface StockDiscrepancy {
  itemId: string;
  expectedQuantity: number;
  actualQuantity: number;
  warehouseLocation: string;
}

interface ReconciliationReport {
  generatedAt: Date;
  totalDiscrepancies: number;
  discrepancies: StockDiscrepancy[];
  reconciliationStatus: "pending" | "in-progress" | "completed";
}

export class StockReconciliationAutomatedReportingService {
  private discrepancies: StockDiscrepancy[] = [];

  addDiscrepancy(discrepancy: StockDiscrepancy): void {
    this.discrepancies.push(discrepancy);
  }

  generateReport(): ReconciliationReport {
    return {
      generatedAt: new Date(),
      totalDiscrepancies: this.discrepancies.length,
      discrepancies: [...this.discrepancies],
      reconciliationStatus: this.discrepancies.length === 0 ? "completed" : "pending",
    };
  }

  clearDiscrepancies(): void {
    this.discrepancies = [];
  }
}
