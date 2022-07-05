import React from 'react'
import Filters from '../Filters'
import { BsSearch } from 'react-icons/bs'
import { FilterCardsData } from '../../types'

interface Props {
    search: string,
    setSearch: (text: string) => void,
    filters: FilterCardsData
    setFilter: (text: FilterCardsData) => void
}

export default function SearchBar({ search, setSearch, filters, setFilter }: Props) {
    const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)

    }
    return (
        <div className="container-bar">
            <Filters setFilter={setFilter} filters={filters} />
            <div className="container-input">
                <div className="search-bar">
                    <span>
                        < BsSearch />
                    </span>
                    <input value={search} onChange={(e) => handlerInput(e)} type='text' placeholder="search" className="input-text" />
                </div>

                <button>
                    Search
                </button>
            </div>
        </div>
    )
} 