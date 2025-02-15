export interface IAccount {
    accountId: string;
    accountNumber: string;
    color: string;
    isMainAccount: boolean;
    progress: number;
    amount: number;
    flags: IAccountFlag[];
}

export interface IAccountFlag {
    flagType: string;
    flagValue: string;
    createdAt: string;
}
