interface DocumentVersion {
  documentId: string;
  version: number;
  content: string;
  author: string;
  createdAt: Date;
}

interface ApprovalStage {
  stageId: string;
  stageName: string;
  approver: string;
  status: "pending" | "approved" | "rejected" | "needs-revision";
  comments: string[];
  decidedAt?: Date;
}

interface SignOffWorkflow {
  workflowId: string;
  document: DocumentVersion;
  stages: ApprovalStage[];
  currentStageIndex: number;
  overallStatus: "in-progress" | "completed" | "rejected";
}

export class ExecutiveDocumentSignOffWorkflowStageOrchestrationController {
  private workflows: Map<string, SignOffWorkflow> = new Map();

  createWorkflow(document: DocumentVersion, approvers: string[]): string {
    const workflowId = `wf_${document.documentId}_${Date.now()}`;
    const stages: ApprovalStage[] = approvers.map((approver, index) => ({
      stageId: `stage_${index}`,
      stageName: `Review Stage ${index + 1}`,
      approver,
      status: index === 0 ? "pending" : "pending",
      comments: [],
    }));

    this.workflows.set(workflowId, {
      workflowId,
      document,
      stages,
      currentStageIndex: 0,
      overallStatus: "in-progress",
    });

    return workflowId;
  }

  approveCurrentStage(workflowId: string, comment?: string): boolean {
    const workflow = this.workflows.get(workflowId);
    if (!workflow || workflow.overallStatus !== "in-progress") return false;

    const currentStage = workflow.stages[workflow.currentStageIndex];
    currentStage.status = "approved";
    currentStage.decidedAt = new Date();
    if (comment) currentStage.comments.push(comment);

    if (workflow.currentStageIndex < workflow.stages.length - 1) {
      workflow.currentStageIndex++;
    } else {
      workflow.overallStatus = "completed";
    }

    return true;
  }

  getWorkflowStatus(workflowId: string): SignOffWorkflow | undefined {
    return this.workflows.get(workflowId);
  }
}
