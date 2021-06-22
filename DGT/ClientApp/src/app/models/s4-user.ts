// Definition: a Signal4 user
export interface S4User {
  id: number;
  name: string;
  roles?: S4Role[];
}

// Definition: a system role that may be granted to one or more users
export interface S4Role {
  id: number;
  name: string;
}
