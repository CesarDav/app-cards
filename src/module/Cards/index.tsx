import { useEffect, useState } from "react"
import { getCards } from "../../services"
import SearchBar from "../../shared/components/SearchBar"
import { CardEnum } from "../../shared/constants/enums"

import { CardData, FilterCardsData } from "../../shared/types"


type newArr = CardData[] | null | undefined;


export function Cards() {
    const [data, setData] = useState<CardData[] | null>(null)
    const [search, setChard] = useState<string>('')
    const [filters, setFilters] = useState<FilterCardsData>({})

    useEffect(() => {
        getCards().then((data) => setData(data))
    }, [])


    const MainFilter = () => {
        let filter: newArr = [];
        if (filters.HQ || filters.Character || filters.Technology || filters.Awaken || filters.Entropy || filters.Inhuman || filters.Owner || filters.Undeviant || filters.Legendary || filters.Rare || filters.Uncommon || filters.Common) {
            data?.forEach(card => {
                if (card.CardType === filters.HQ || card.CardType === filters.Character || card.CardType === filters.Technology || card.Faction === filters.Awaken || card.Faction === filters.Entropy || card.Faction === filters.Inhuman || card.Faction === filters.Owner || card.Faction === filters.Undeviant || card.Rarity === filters.Legendary || card.Rarity === filters.Rare || card.Rarity === filters.Uncommon || card.Rarity === filters.Common) {
                    if (
                        filter
                    ) {
                        filter.push(card)
                    }
                }
            });
        }

        if (filter.length) {

            return filter
        }
        return data
    }


    let result: newArr = !search ? MainFilter() : MainFilter()?.filter(card => card.Name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

    const filterByQuaters = result?.filter((card) => card.CardType === CardEnum.HQ)
    const filterByCharacters = result?.filter((card) => card.CardType === CardEnum.CH)
    const filterByTechnologie = result?.filter((card) => card.CardType === CardEnum.TC)



    return (
        <div className="container">
            <SearchBar setFilter={setFilters} filters={filters} search={search} setSearch={setChard} />
            <div>
                <span>
                    Head Quaters
                </span>
                <div className="container-card-section">
                    <>
                        {filterByQuaters?.map((card) => {
                            return (
                                <div key={card.id}>{card.Number}<img src={`https://deviants-factions.mo.cloudinary.net/cards/${card.id}.${card.CardType === 'HQ' || card.Rarity === 'Common' ? 'png' : 'gif'}?tx=h_200,q_80,f_auto`} /></div>
                            )
                        })}
                    </>
                </div>
            </div>
            <div>
                <span>
                    Characters
                </span>
                <div className="container-card-section characters">
                    <>
                        {filterByCharacters?.map((card) => {
                            return (
                                <div key={card.id}>{card.Number}<img src={`https://deviants-factions.mo.cloudinary.net/cards/${card.id}.${card.CardType === 'HQ' || card.Rarity === 'Common' ? 'png' : 'gif'}?tx=h_200,q_80,f_auto`} /></div>
                            )
                        })}
                    </>
                </div>
            </div>
            <div>
                <span>
                    Technologies
                </span>
                <div >
                    <div className="container-card-section technologies">
                        <>
                            {filterByTechnologie?.map((card) => {
                                return (
                                    <div key={card.id}>{card.Number}<img src={`https://deviants-factions.mo.cloudinary.net/cards/${card.id}.${card.CardType === 'HQ' || card.Rarity === 'Common' ? 'png' : 'gif'}?tx=h_200,q_80,f_auto`} /></div>
                                )
                            })}
                        </>
                    </div>
                </div>
            </div>
        </div>

    )
}