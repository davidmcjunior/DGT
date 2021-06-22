// Definition: One step in a defined review process. Attributes:

export interface ReviewStep {
  // Step Id – identifies a review step
  stepId: number;
  // Step Number – sequence number of this step in the review process
  stepNumber: number;
  // Step Name – a name that describes this step in the review process
  stepName: string;
}
