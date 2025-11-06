import { BattleBuildingData } from "../interfaces/battle-building"
import { Building, BuildingOptions } from "./building"

type BattleBuildingOptions = BuildingOptions & {
    data: BattleBuildingData
}

export class BattleBuilding extends Building {
    constructor(options: BattleBuildingOptions) {
        super(options)
    }
}