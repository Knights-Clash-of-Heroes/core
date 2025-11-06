import { SoliderData } from "../interfaces/solider-data"

export type SoliderOptions = {
    data: SoliderData
}

export class Solider {
    readonly data: SoliderData

    constructor({ data }: SoliderOptions) {
        this.data = data
    }
}