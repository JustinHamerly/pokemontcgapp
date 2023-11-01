import React from 'react'
import DeckButtonPanel from './DeckButtonPanel/DeckButtonPanel'
import DeckSelector from './DeckSelector/DeckSelector'
import SelectedDeckSummary from './SelectedDeckSummary/SelectedDeckSummary'

export default function DeckMenu() {
  return (
    <div>
      <DeckButtonPanel/>
      <DeckSelector />
      <SelectedDeckSummary />
    </div>
  )
}
