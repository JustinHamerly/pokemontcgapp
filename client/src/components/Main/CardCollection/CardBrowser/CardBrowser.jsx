import React, { useContext } from 'react'
import { Box, Button } from '@mui/material'

import FilterPanel from './FilterPanel/FilterPanel'
import CardDisplayPane from './CardDisplayPane/CardDisplayPane'
import SelectedCardZoom from './SelectedCardZoom/SelectedCardZoom'
import { CardCollectionContext } from '../../../../context/CollectionContext'

export default function CardBrowser() {
  const {setShowFilter} = useContext(CardCollectionContext);
  
  return (
    <>
      <Button onClick={() => setShowFilter(prev => !prev)}>FILTER</Button>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
      }}>
        <FilterPanel />
        <CardDisplayPane />
        <SelectedCardZoom />
      </Box>
    </>
  )
}
