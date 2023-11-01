import React from 'react'
import FilterPanel from './FilterPanel/FilterPanel'
import CardDisplayPane from './CardDisplayPane/CardDisplayPane'
import SelectedCardZoom from './SelectedCardZoom/SelectedCardZoom'

export default function CardBrowser() {
  return (
    <div>
      <FilterPanel />
      <CardDisplayPane />
      <SelectedCardZoom />
    </div>
  )
}
