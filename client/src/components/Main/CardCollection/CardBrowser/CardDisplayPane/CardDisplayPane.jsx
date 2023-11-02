import React, { useContext } from 'react'
import { Box } from '@mui/material';
import DisplayCard from './DisplayCard/DisplayCard'
import { CardCollectionContext } from '../../../../../context/CollectionContext'

export default function CardDisplayPane() {

  const { cardArray } = useContext(CardCollectionContext);

  return (

    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly'
    }}>
      {cardArray && cardArray.map(card => <DisplayCard key={card.id} cardImg={'./cardImgs'+card.imgPath} name={card.name} />)}
    </Box>

  )
}
