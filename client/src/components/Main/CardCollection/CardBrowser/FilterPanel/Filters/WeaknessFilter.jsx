import React, {useContext} from 'react'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { CardCollectionContext } from '../../../../../../context/CollectionContext'

export default function WeaknessFilter() {
  const {weakness, setWeakness} = useContext(CardCollectionContext);
  const types = ['grass', 'fire', 'water', 'lightning', 'fighting', 'psychic', 'darkness', 'metal', 'dragon'];
  return (
    <FormControl>
      <FormLabel id="weakness-filter">WEAKNESS</FormLabel>
      <RadioGroup
        aria-labelledby="weakness-filter"
        defaultValue={weakness}
        name="weakness-filter-group"
        onChange={(e) => setWeakness(e.target.value)}
      >
        <FormControlLabel value="" control={<Radio />} label="ANY" />
        {types.map((type, idx) => (
          <FormControlLabel value={type} control={<Radio />} label={type.toUpperCase()} key={idx} />
        ))}
      </RadioGroup>
    </FormControl>
  )
}
