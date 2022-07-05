export interface CardData {
    Number: number,
    Name: string,
    CardType: string,
    Faction: string,
    Ability: AbilityData[],
    St: string,
    Artist: string,
    SetAndNumber: string
    Rarity: string,
    id: string,
    Set: string,
    CardInSet: number,
    CardNumber: number,
    Description: string,
}

export interface AbilityData {
    effects: { headline: string, filters: string[] }[],
    triggers: string[]
    condition: string[]
}


export interface FilterCardsData {
    HQ?: string | null,
    Character?: string | null;
    Technology?: string | null,
    Awaken?: string | null;
    Entropy?: string | null;
    Inhuman?: string | null;
    Owner?: string | null;
    Undeviant?: string | null;
    Legendary?: string | null;
    Rare?: string | null;
    Uncommon?: string | null;
    Common?: string | null;

}