import React, { useContext } from 'react'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { CardCollectionContext } from '../../../../../../context/CollectionContext'

export default function MoveCostFilter() {
  const {moveCost, setMoveCost} = useContext(CardCollectionContext);

  const types = ['grass', 'fire', 'water', 'lightning', 'fighting', 'psychic', 'darkness', 'metal'];
  return (
    <FormControl>
      <FormLabel id="move-cost-filter">MOVE COST</FormLabel>
      <RadioGroup
        aria-labelledby="move-cost-filter"
        value={moveCost}
        name="move-cost-filter-group"
        onChange={(e) => setMoveCost(e.target.value)}
      >
        <FormControlLabel value='colorless' control={<Radio />} label="COLORLESS ONLY" />
        <FormControlLabel value="" control={<Radio />} label="ALL" />
        {types.map((type, idx) => (
          <FormControlLabel key ={idx} value={type} control={<Radio />} label={type.toUpperCase()} />
        ))}
      </RadioGroup>
    </FormControl>
  )
}
