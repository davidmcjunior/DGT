export let tagMapper = (tags: any[]): any[] => {
  return tags.sort((tag1: any, tag2: any): number => {
    return tag1['name'].localeCompare(tag2['name']);
  });
};
