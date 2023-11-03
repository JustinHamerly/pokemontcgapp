import React, { useContext } from 'react'
import { Drawer } from '@mui/material'
import { CardCollectionContext } from '../../../../../context/CollectionContext'
import CardTypeFilter from './Filters/CardTypeFilter';
import PokemonTypeFilter from './Filters/PokemonTypeFilter';
import RarityFilter from './Filters/RarityFilter';
import PokemonStageFilter from './Filters/PokemonStageFilter';
import WeaknessFilter from './Filters/WeaknessFilter';
import ResistanceFilter from './Filters/ResistanceFilter';
import RetreatCostFilter from './Filters/RetreatCostFilter';

export default function FilterPanel() {
  const { showFilter, setShowFilter, cardType } = useContext(CardCollectionContext);

  return (
    <Drawer
      anchor={'left'}
      open={showFilter}
      onClose={() => setShowFilter(prev => !prev)}
    >
      <CardTypeFilter />
      <RarityFilter /> 
      {
        (cardType === 'pokemon' || !cardType) &&
        <>
          <PokemonTypeFilter />
          <PokemonStageFilter />
          <WeaknessFilter />
          <ResistanceFilter />
          <RetreatCostFilter />
        </>
      }
    </Drawer>
  )
}
