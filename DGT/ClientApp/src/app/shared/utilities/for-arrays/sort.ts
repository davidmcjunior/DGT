export function sort<T>(arrayToSort: T[], sortBy?: string, dir: 'asc' | 'desc' = 'asc'): T[] {
  if (!sortBy || sortBy === undefined) {
    return arrayToSort;
  }
  arrayToSort.sort((a: any, b: any) => {
    if (a[sortBy] < b[sortBy]) { return -1; }
    if (a[sortBy] > b[sortBy]) { return 1; }
    return 0;
  });
  if (dir === 'asc') {
    return arrayToSort;
  }
  else {
    return arrayToSort.reverse();
  }
}
