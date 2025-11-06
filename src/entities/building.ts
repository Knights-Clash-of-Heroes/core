import { BuildingData } from "../interfaces/building-data"

export type BuildingOptions = {
    data: BuildingData
}

export class Building {
    readonly data: BuildingData

    constructor({ data }: BuildingOptions) {
        this.data = data
    }
}