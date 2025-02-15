import { IAccount } from "./account";

export interface ResponseAccountData {
    status?: number;
    data?: IAccount[];
}
