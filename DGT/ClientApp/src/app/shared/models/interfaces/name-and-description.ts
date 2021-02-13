// Simple lookup interface for single line text key/values
export interface NameAndDescription {
  name?: string;
  description?: string;
}

// Simple lookup interface for multi-line text key/values
export interface NameAndDetailedDescription {
  name?: string;
  description?: string[];
}
