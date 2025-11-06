import { EntityType } from "../enums/entity-type"

export type MoveEntityOptions = {
    type: EntityType
    id: number
    to: {
        x: number
        y: number
    }
}

export class Kingdom {
    constructor() {}

    expand(expansionId: number) {}

    moveEntity({ type, id, to }: MoveEntityOptions) {}
}