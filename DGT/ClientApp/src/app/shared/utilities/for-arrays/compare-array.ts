export let compareArrays = (r: any[], rr: any[]): boolean => {
  let s = r && rr && r.length === rr.length && r.every((v, i) => v === rr[i]);
  return s;
};
