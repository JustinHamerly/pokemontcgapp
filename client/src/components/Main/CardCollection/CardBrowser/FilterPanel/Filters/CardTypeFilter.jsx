import React, { useContext } from 'react'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import { CardCollectionContext } from '../../../../../../context/CollectionContext'

export default function CardTypeFilter() {
  const {cardType, setCardType} = useContext(CardCollectionContext);
  return (
    <FormControl>
      <FormLabel id="card-type-filter">Card Type</FormLabel>
      <RadioGroup
        aria-labelledby="card-type-filter"
        defaultValue={cardType}
        name="card-type-filter-group"
        onChange={(e) => setCardType(e.target.value)}
      >
        <FormControlLabel value="" control={<Radio />} label="All" />
        <FormControlLabel value="pokemon" control={<Radio />} label="Pokemon" />
        <FormControlLabel value="trainer" control={<Radio />} label="Trainer" />
        <FormControlLabel value="energy" control={<Radio />} label="Energy" />
      </RadioGroup>
    </FormControl>
  )
}
