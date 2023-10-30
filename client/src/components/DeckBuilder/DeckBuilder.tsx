import React, { useState } from 'react'
import Deck from '@/features/Deck/Deck';
import styles from './deckbuilder.module.css';

export default function DeckBuilder() {
  const [activeDeck, setActiveDeck] = useState(new Deck())
  return (
    <div>
      <div>New Deck Button</div>
      <div>Save Deck Button</div>
      <div>Delete Deck Button</div>
      <div>
        {activeDeck.name ?? <h1>Current Deck: {activeDeck.name}</h1>}
        <div>change name button</div>
        <div>
          
        </div>
      </div>
    </div>
  )
}
