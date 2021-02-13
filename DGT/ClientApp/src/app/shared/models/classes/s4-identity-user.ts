export class S4IdentityUser {
    userName: string;
    roles: string[];
    agency: string;
    changePassword?: boolean;
    signAgreement?: boolean;
}

export enum S4UserProfileType {
    User = 0,
    Agency = 1,
    Vendor = 2
}
