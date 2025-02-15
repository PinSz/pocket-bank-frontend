import { ITransactions } from "./transaction";

export interface ResponseTransactionData {
    status?: number;
    data?: ITransactions;
}
