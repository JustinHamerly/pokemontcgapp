import React, {useContext} from 'react'
import DisplayCard from './DisplayCard/DisplayCard'

import { CardCollectionContext } from '../../../../../context/CollectionContext'

export default function CardDisplayPane() {

  const {cardArray} = useContext(CardCollectionContext);

  return (
    <div>
      {cardArray && cardArray.map((card, idx) => <DisplayCard key={card.id} />)}
    </div>
  )
}
