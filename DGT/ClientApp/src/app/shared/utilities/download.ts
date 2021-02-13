export let writeContents = (content: any, fileName: string, contentType: string) => {
  let a = document.createElement('a');
  let file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
  a.remove();
};
