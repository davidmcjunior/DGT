export interface S4Options {
    version: string;
    baseUrl: string;
    silverlightBaseUrl: string;
    arcGISServerUrl: string;
    isDevelopment: boolean;
    googleAnalyticsTrackingId: string;
    recordDownloadLimit: number;
    pdfDownloadLimit: number;
    coordinateSystems: {
        [key: string]: CoordinateSystem;
    };
}
export interface CoordinateSystem {
    type: string;
    epsgCode: string;
    proj4Def: string;
    mapExtent: { minX: number, minY: number, maxX: number, maxY: number };
}
