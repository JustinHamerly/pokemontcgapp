import React, { useContext, useState } from 'react'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox } from '@mui/material';
import { CardCollectionContext } from '../../../../../../context/CollectionContext'

export default function MoveCostFilter() {
  const {moveCost, setMoveCost} = useContext(CardCollectionContext);
  const [disabled, setDisabled] = useState(false); 

  const handleChange = (e) => {
    const value = e.target.value;
    if(value === 'colorless') setDisabled(true)
    else setDisabled(false);
  }

  const types = ['grass', 'fire', 'water', 'lightning', 'fighting', 'psychic', 'darkness', 'metal'];
  return (
    <FormControl>
      <FormLabel id="move-cost-filter">MOVE COST</FormLabel>
      <RadioGroup
        aria-labelledby="move-cost-filter"
        defaultValue={moveCost}
        name="move-cost-filter-group"
        onChange={handleChange}
      >
        <FormControlLabel value='colorless' control={<Radio />} label="COLORLESS ONLY" />
        <FormControlLabel value="" control={<Radio />} label="ALL" />
        {types.map((type, idx) => (
          <FormControlLabel key ={idx} value={type} disabled={disabled} control={<Radio />} label={type.toUpperCase()} />
        ))}
      </RadioGroup>
    </FormControl>
  )
}
