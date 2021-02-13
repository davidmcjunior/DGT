export class CrashExportParameters {
    public queryPrettyPrint: string;

    constructor(
        public id: number,
        public includeCsv: boolean,
        public includeImages: boolean,
        public includeMxd: boolean
    ) { }
}
