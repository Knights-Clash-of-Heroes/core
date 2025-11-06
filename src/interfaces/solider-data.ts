export interface SoliderData {
    id: number
    categoryId: number
    nameKey: string
    descriptionKey: string
    attributes: {
        damage: number
        health: number
        speed: number
        initiative: number
    }
    upgrades: {
        id: number
        attributes: {
            damage?: number
            health?: number
            speed?: number
            initiative?: number
        }
    }[]
}