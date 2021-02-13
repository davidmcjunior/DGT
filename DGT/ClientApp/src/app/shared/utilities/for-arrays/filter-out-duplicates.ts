
export function filterOutDuplicates<T>(value: T, index: number, self: T[]) {
  return self.indexOf(value) === index;
}
