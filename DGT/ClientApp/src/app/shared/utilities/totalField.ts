
export let totalField = (field: string, data: any[]) => {
  return data.map(d => d[field]).reduce((ac, v) => ac + v);
};

