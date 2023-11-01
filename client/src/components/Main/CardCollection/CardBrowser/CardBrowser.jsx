import React from 'react'
import FilterPanel from './FilterPanel/FilterPanel'
import CardDisplayPane from './CardDisplayPane/CardDisplayPane'
import SelectedCardZoom from './SelectedCardZoom/SelectedCardZoom'
import { Box } from '@mui/material'

export default function CardBrowser() {
  
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    }}>
      <FilterPanel />
      <CardDisplayPane />
      <SelectedCardZoom />
    </Box>
  )
}
