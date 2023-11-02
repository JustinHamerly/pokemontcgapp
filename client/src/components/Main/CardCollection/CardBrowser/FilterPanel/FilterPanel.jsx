import React, { useContext } from 'react'
import { Drawer } from '@mui/material'
import { CardCollectionContext } from '../../../../../context/CollectionContext'
import CardTypeFilter from './Filters/CardTypeFilter';
import PokemonTypeFilter from './Filters/PokemonTypeFilter';
import RarityFilter from './Filters/RarityFilter';
import PokemonStageFilter from './Filters/PokemonStageFilter';
import WeaknessFilter from './Filters/WeaknessFilter';

export default function FilterPanel() {
  const { showFilter, setShowFilter } = useContext(CardCollectionContext);

  return (
    <Drawer
      anchor={'left'}
      open={showFilter}
      onClose={() => setShowFilter(prev => !prev)}
    >
      <CardTypeFilter />
      <RarityFilter /> 
      <PokemonTypeFilter />
      <PokemonStageFilter />
      <WeaknessFilter />
    </Drawer>
  )
}
