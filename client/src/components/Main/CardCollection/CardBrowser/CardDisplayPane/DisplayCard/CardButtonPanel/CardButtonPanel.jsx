import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { CardCollectionContext } from '../../../../../../../context/CollectionContext'

export default function CardButtonPanel({id}) {
  const {setSelectedCardId} = useContext(CardCollectionContext);
  return (
    <div>
      <Button onClick={() => {setSelectedCardId(id)}}>Zoom</Button>
    </div>
  )
}
