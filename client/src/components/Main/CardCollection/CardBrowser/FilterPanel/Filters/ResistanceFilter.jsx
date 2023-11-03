import React, {useContext} from 'react'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { CardCollectionContext } from '../../../../../../context/CollectionContext'

export default function ResistanceFilter() {
  const {resistance, setResistance} = useContext(CardCollectionContext);
  const types = ['grass', 'fire', 'water', 'lightning', 'fighting', 'psychic', 'darkness', 'metal', 'dragon'];
  return (
    <FormControl>
      <FormLabel id="resistance-filter">RESISTANCE</FormLabel>
      <RadioGroup
        aria-labelledby="resistance-filter"
        value={resistance}
        name="resistance-filter-group"
        onChange={(e) => setResistance(e.target.value)}
      >
        <FormControlLabel value="" control={<Radio />} label="ANY" />
        {types.map((type, idx) => (
          <FormControlLabel value={type} control={<Radio />} label={type.toUpperCase()} key={idx} />
        ))}
      </RadioGroup>
    </FormControl>
  )
}
