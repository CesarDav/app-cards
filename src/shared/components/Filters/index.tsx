import { useState, useContext } from 'react'
import { BsFilterSquare } from 'react-icons/bs'
import { useForm } from "react-hook-form";
import { FilterCardsData } from '../../types';

interface Props {
    filters: FilterCardsData
    setFilter: (text: FilterCardsData) => void
}

export default function Filters({ filters, setFilter }: Props) {
    const [show, setShow] = useState<boolean>(false);

    const { register, watch } = useForm<FilterCardsData>();


    return (
        < div className="container-filters">
            <div onClick={() => setShow(!show)}>
                <span>Filters</span>
                <BsFilterSquare />
            </div>
            {show && (
                <div className='filter-sidebar '>
                    <div className='container-checkbox'>
                        <span className='title-group'>CARD TYPE</span>
                        <label>
                            <input
                                {...register('HQ')}
                                onClick={() => {
                                    if (!watch().HQ) {
                                        setFilter({ ...filters, HQ: 'HQ' })
                                        return
                                    }
                                    setFilter({ ...filters, HQ: null })
                                }}
                                value="HQ"
                                className='checkbox-input'
                                type='checkbox' />
                            Quater
                        </label>
                        <label>
                            <input
                                {...register('Character')}
                                onClick={() => {
                                    if (!watch().Character) {
                                        setFilter({ ...filters, Character: 'Character' })
                                        return
                                    }
                                    setFilter({ ...filters, Character: null })
                                }}
                                value="Character"
                                className='checkbox-input'
                                type='checkbox' />
                            Character
                        </label>
                        <label>
                            <input
                                {...register('Technology')}
                                onClick={() => {
                                    if (!watch().Technology) {
                                        setFilter({ ...filters, Technology: 'Technology' })
                                        return
                                    }
                                    setFilter({ ...filters, Technology: null })
                                }}
                                value='Technology'
                                type='checkbox' />
                            Technology
                        </label>
                    </div>
                    <div className='container-checkbox'>
                        <span className='title-group'>FACTIONS</span>
                        <label>
                            <input
                                {...register('Awaken')}
                                onClick={() => {
                                    if (!watch().Awaken) {
                                        setFilter({ ...filters, Awaken: 'Awaken' })
                                        return
                                    }
                                    setFilter({ ...filters, Awaken: null })
                                }}
                                value='Awaken'
                                className='checkbox-input'
                                type='checkbox' />
                            Awaken
                        </label>
                        <label>
                            <input
                                {...register('Entropy')}
                                onClick={() => {
                                    if (!watch().Entropy) {
                                        setFilter({ ...filters, Entropy: 'Entropy' })
                                        return
                                    }
                                    setFilter({ ...filters, Entropy: null })
                                }}
                                value='Entropy'
                                className='checkbox-input'
                                type='checkbox' />
                            Entropy
                        </label>
                        <label>
                            <input
                                {...register('Inhuman')}
                                onClick={() => {
                                    if (!watch().Inhuman) {
                                        setFilter({ ...filters, Inhuman: 'Inhuman' })
                                        return
                                    }
                                    setFilter({ ...filters, Inhuman: null })
                                }}

                                value="Inhuman"
                                className='checkbox-input'
                                type='checkbox' />
                            Inhuman
                        </label>
                        <label>
                            <input
                                {...register('Owner')}
                                onClick={() => {
                                    if (!watch().Owner) {
                                        setFilter({ ...filters, Owner: 'Owner' })
                                        return
                                    }
                                    setFilter({ ...filters, Owner: null })
                                }}
                                value="Owner"
                                className='checkbox-input'
                                type='checkbox'
                            />
                            Owner
                        </label>
                        <label>
                            <input
                                {...register('Undeviant')}
                                onClick={() => {
                                    if (!watch().Undeviant) {
                                        setFilter({ ...filters, Undeviant: 'Undeviant' })
                                        return
                                    }
                                    setFilter({ ...filters, Undeviant: null })
                                }}
                                value="Undeviant"
                                className='checkbox-input'
                                type='checkbox' />
                            Undeviant
                        </label>
                    </div>
                    <div className='container-checkbox'>
                        <span className='title-group'>RARITY</span>
                        <label>
                            <input
                                {...register('Legendary')}
                                onClick={() => {
                                    if (!watch().Legendary) {
                                        setFilter({ ...filters, Legendary: 'Legendary' })
                                        return
                                    }
                                    setFilter({ ...filters, Legendary: null })
                                }}
                                value='Leganday'
                                className='checkbox-input'
                                type='checkbox' />
                            Legendary
                        </label>
                        <label>
                            <input {...register('Rare')}
                                onClick={() => {
                                    if (!watch().Rare) {
                                        setFilter({ ...filters, Rare: 'Rare' })
                                        return
                                    }
                                    setFilter({ ...filters, Rare: null })
                                }}
                                value="Rare" className='checkbox-input' type='checkbox' />
                            Rare
                        </label>
                        <label>
                            <input
                                {...register('Uncommon')}
                                onClick={() => {
                                    if (!watch().Uncommon) {
                                        setFilter({ ...filters, Uncommon: 'Uncommon' })
                                        return
                                    }
                                    setFilter({ ...filters, Uncommon: null })
                                }}

                                value='Uncommon'
                                className='checkbox-input'
                                type='checkbox' />
                            Uncommon
                        </label>
                        <label>
                            <input
                                {...register('Common')}
                                onClick={() => {
                                    if (!watch().Common) {
                                        setFilter({ ...filters, Common: 'Common' })
                                        return
                                    }
                                    setFilter({ ...filters, Common: null })
                                }}
                                value='Common'
                                className='checkbox-input'
                                type='checkbox' />
                            Common
                        </label>
                    </div>
                </div>
            )}

        </div>
    )
}