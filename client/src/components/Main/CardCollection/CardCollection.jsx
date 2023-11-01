import React from 'react'
import CardBrowser from './CardBrowser/CardBrowser';
import DeckMenu from './DeckMenu/DeckMenu';

export default function CardCollection() {
  return (
    <div>
      <CardBrowser />
      <DeckMenu />
    </div>
  )
}
