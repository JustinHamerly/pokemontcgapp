import React, { useContext } from 'react'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import { CardCollectionContext } from '../../../../../../context/CollectionContext'

export default function CardTypeFilter() {
  const {cardType, setCardType} = useContext(CardCollectionContext);
  return (
    <FormControl>
      <FormLabel id="card-type-filter">CARD TYPE</FormLabel>
      <RadioGroup
        aria-labelledby="card-type-filter"
        value={cardType}
        name="card-type-filter-group"
        onChange={(e) => setCardType(e.target.value)}
      >
        <FormControlLabel value="" control={<Radio />} label="ALL" />
        <FormControlLabel value="pokemon" control={<Radio />} label="POKEMON" />
        <FormControlLabel value="trainer" control={<Radio />} label="TRAINER" />
        <FormControlLabel value="energy" control={<Radio />} label="ENERGY" />
      </RadioGroup>
    </FormControl>
  )
}
