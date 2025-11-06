export const config = {
    soliders: [
        {
            id: 1,
            categoryId: 1,
            nameKey: "solider_militiaman_name",
            descriptionKey: "militiaman_description",
            attributes: {
                damage: 25,
                health: 100,
                speed: 4,
                initiative: 40,
            },
            upgrades: [],
        },
        {
            id: 2,
            categoryId: 2,
            nameKey: "solider_mercenary_name",
            descriptionKey: "solider_mercenary_description",
            attributes: {
                damage: 25,
                health: 140,
                speed: 3,
                initiative: 30,
            },
            upgrades: [],
        }
    ],
    soliderCategories: [
        {
            id: 1,
            nameKey: "solider_category_heavy_infantry_name",
            descriptionKey: "solider_category_heavy_infantry_description",
        },
        {
            id: 2,
            nameKey: "solider_category_armored_name",
            descriptionKey: "solider_category_armored_description",
        },
    ],
    buildings: [
        {
            id: 1,
            nameKey: "building_castle_name",
            descriptionKey: "building_castle_description",
            attributes: {
                health: 180,
            },
            upgrades: [
                {
                    id: 1,
                    requiredLevel: 10,
                    nameKey: "building_castle_upgrade_1_name",
                    descriptionKey: "building_castle_upgrade_1_description",
                    attributes: {
                        health: 320,
                    }
                },
                {
                    id: 2,
                    requiredLevel: 20,
                    nameKey: "building_castle_upgrade_2_name",
                    descriptionKey: "building_castle_upgrade_2_description",
                    attributes: {
                        health: 480,
                    }
                },
                {
                    id: 3,
                    requiredLevel: 30,
                    nameKey: "building_castle_upgrade_3_name",
                    descriptionKey: "building_castle_upgrade_3_description",
                    attributes: {
                        health: 640,
                    }
                },
                {
                    id: 4,
                    requiredLevel: 40,
                    nameKey: "building_castle_upgrade_4_name",
                    descriptionKey: "building_castle_upgrade_4_description",
                    attributes: {
                        health: 1200,
                    }
                },
                {
                    id: 5,
                    requiredLevel: 50,
                    nameKey: "building_castle_upgrade_5_name",
                    descriptionKey: "building_castle_upgrade_5_description",
                    attributes: {
                        health: 1800,
                    }
                },
                {
                    id: 6,
                    requiredLevel: 60,
                    nameKey: "building_castle_upgrade_6_name",
                    descriptionKey: "building_castle_upgrade_6_description",
                    attributes: {
                        health: 2300,
                    }
                }
            ]
        },
        {
            id: 2,
            nameKey: "building_barracks_name",
            descriptionKey: "building_barracks_description",
            upgrades: [
                {
                    id: 1,
                    nameKey: "building_barracks_upgrade_1_name",
                    descriptionKey: "building_barracks_upgrade_1_description",
                    requiredCastleLevel: 2,
                    autoUpgrade: true,
                    attributes: {
                        health: 40
                    }
                },
                {
                    id: 2,
                    nameKey: "building_barracks_upgrade_2_name",
                    descriptionKey: "building_barracks_upgrade_2_description",
                    requiredCastleLevel: 3,
                    autoUpgrade: true,
                    attributes: {
                        health: 80
                    }
                },
                {
                    id: 3,
                    nameKey: "building_barracks_upgrade_3_name",
                    descriptionKey: "building_barracks_upgrade_3_description",
                    requiredCastleLevel: 4,
                    autoUpgrade: true,
                    attributes: {
                        health: 120
                    }
                },
                {
                    id: 4,
                    nameKey: "building_barracks_upgrade_4_name",
                    descriptionKey: "building_barracks_upgrade_4_description",
                    requiredCastleLevel: 5,
                    autoUpgrade: true,
                    attributes: {
                        health: 160
                    }
                },
                {
                    id: 5,
                    nameKey: "building_barracks_upgrade_5_name",
                    descriptionKey: "building_barracks_upgrade_5_description",
                    requiredCastleLevel: 6,
                    autoUpgrade: true,
                    attributes: {
                        health: 200
                    }
                },
                {
                    id: 6,
                    nameKey: "building_barracks_upgrade_6_name",
                    descriptionKey: "building_barracks_upgrade_6_description",
                    requiredCastleLevel: 7,
                    autoUpgrade: true,
                    attributes: {
                        health: 240
                    }
                }
            ]
        }
    ],
    levels: [
        {
            id: 1,
            xp: 0,
        },
        {
            id: 2,
            xp: 20,
        },
        {
            id: 3,
            xp: 50,
        },
    ],
    kingdom: {
        chunkSize: {
            width: 12,
            height: 12,
        },
        initialChunks: [
            {
                id: 7,
                x: 1,
                y: 1,
            },
            {
                id: 8,
                x: 2,
                y: 1,
            },
            {
                id: 9,
                x: 3,
                y: 1,
            },
            {
                id: 12,
                x: 1,
                y: 2,
            },
            {
                id: 13,
                x: 2,
                y: 2,
            },
            {
                id: 14,
                x: 3,
                y: 2,
            },
            {
                id: 17,
                x: 1,
                y: 3,
            },
            {
                id: 18,
                x: 2,
                y: 3,
            },
            {
                id: 19,
                x: 3,
                y: 3,
            }
        ],
        expansionChunks: [
            {
                id: 1,
                cost: {
                    type: "gold",
                    amount: 1000,
                },
                x: 0,
                y: 0,
            },
            {
                id: 2,
                cost: {
                    type: "gold",
                    amount: 2000,
                },
                x: 1,
                y: 0,
            },
            {
                id: 3,
                cost: {
                    type: "gold",
                    amount: 3000,
                },
                x: 2,
                y: 0,
            },
            {
                id: 4,
                cost: {
                    type: "gold",
                    amount: 4000,
                },
                x: 3,
                y: 0,
            },
            {
                id: 5,
                cost: {
                    type: "gold",
                    amount: 5000,
                },
                x: 4,
                y: 0,
            },
            {
                id: 6,
                cost: {
                    type: "gold",
                    amount: 6000,
                },
                x: 0,
                y: 1,
            },
            {
                id: 10,
                cost: {
                    type: "gold",
                    amount: 7000,
                },
                x: 4,
                y: 1,
            },
            {
                id: 11,
                cost: {
                    type: "gold",
                    amount: 8000,
                },
                x: 0,
                y: 2,
            },
            {
                id: 15,
                cost: {
                    type: "gold",
                    amount: 9000,
                },
                x: 4,
                y: 2,
            },
            {
                id: 16,
                cost: {
                    type: "gold",
                    amount: 10000,
                },
                x: 0,
                y: 4,
            },
            {
                id: 20,
                cost: {
                    type: "gold",
                    amount: 11000,
                },
                x: 4,
                y: 4,
            },
            {
                id: 21,
                cost: {
                    type: "gold",
                    amount: 12000,
                },
                x: 0,
                y: 5,
            },
            {
                id: 22,
                cost: {
                    type: "gold",
                    amount: 13000,
                },
                x: 1,
                y: 5,
            },
            {
                id: 23,
                cost: {
                    type: "gold",
                    amount: 14000,
                },
                x: 2,
                y: 5,
            },
            {
                id: 24,
                cost: {
                    type: "gold",
                    amount: 15000,
                },
                x: 3,
                y: 5,
            },
            {
                id: 25,
                cost: {
                    type: "gold",
                    amount: 16000,
                },
                x: 4,
                y: 5,
            }
        ],
    },
}