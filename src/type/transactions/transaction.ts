export interface ITransaction {
    name: string;
    image: string;
    isBank: boolean;
};

export interface ITransactions {
    transactions: ITransaction[];
};
