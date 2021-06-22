// Definition: the collection of crash reports that are currently being worked by an FDOT Editor.
// There should be a locking mechanism that prevents reports that are in one Editor’s work
// queue from also being placed in another Editor’s work queue.

export interface EditorWorkQueue {
  userId: string;
  poolId: string;
  queueItems: any[];
}

// Contains a reference to the HSMV Report Number and the status of the edit.
export interface EditorWorkQueueItem {
  hsmvReportNumber: number;
  reportStatus: any;
}
