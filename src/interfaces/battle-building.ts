export interface BattleBuildingData {
    id: number
    nameKey: string
    descriptionKey: string
    attributes: {
        damage: number
        health: number
        initiative: number
    }
    upgrades: {
        id: number
        attributes: {
            damage?: number
            health?: number
            initiative?: number
        }
    }[]
}