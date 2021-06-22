// Definition: Performance of a Review Step by a Reviewer.

export interface ReviewerAction {
  // Pool Id – identifies an Administrative Pool
  poolId: string;
  // User Id - identifies a Signal4 user (who has a FDOT Reviewer role)
  userId: string;
  // HSMV Report Number
  hsmvReportNumber: number;
  // Step Id – identifies a Review Step
  stepId: string;
  // Review Action – the action taken by the reviewer for this Review Step
  reviewAction: string;
  // Reviewer Comment – additional comments by the Reviewer
  reviewerComment: string;
  // Action Date – the date on which the action was performed
  actionDate: Date;
}
