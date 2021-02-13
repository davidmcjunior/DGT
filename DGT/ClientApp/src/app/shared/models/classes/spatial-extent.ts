
export class SpatialExtent {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
    constructor(numArray?: number[]) {
        if (numArray && numArray.length >= 4) {
            this.minX = numArray[0];
            this.minY = numArray[1];
            this.maxX = numArray[2];
            this.maxY = numArray[3];
        }
    }
}
