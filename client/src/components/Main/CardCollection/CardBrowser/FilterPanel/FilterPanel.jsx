import React, { useContext } from 'react'
import { Drawer } from '@mui/material'
import { CardCollectionContext } from '../../../../../context/CollectionContext'
import CardTypeFilter from './Filters/CardTypeFilter';
import PokemonTypeFilter from './Filters/PokemonTypeFilter';

export default function FilterPanel() {
  const { showFilter, setShowFilter } = useContext(CardCollectionContext);

  return (
    <Drawer
      anchor={'bottom'}
      open={showFilter}
      onClose={() => setShowFilter(prev => !prev)}
    >
      <CardTypeFilter />
      <PokemonTypeFilter />
    </Drawer>
  )
}
