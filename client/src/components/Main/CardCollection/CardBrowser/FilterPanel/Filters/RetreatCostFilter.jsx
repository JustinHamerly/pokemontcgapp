import React, { useContext } from 'react'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import { CardCollectionContext } from '../../../../../../context/CollectionContext'

export default function RetreatCostFilter() {
  const {retreat, setRetreat} = useContext(CardCollectionContext);
  return (
    <FormControl>
      <FormLabel id="retreat-filter">RETREAT COST</FormLabel>
      <RadioGroup
        aria-labelledby="retreat-filter"
        defaultValue={retreat}
        name="retreat-filter-group"
        onChange={(e) => setRetreat(parseInt(e.target.value))}
      >
        <FormControlLabel value={-1} control={<Radio />} label="ANY" />
        <FormControlLabel value={0} control={<Radio />} label="0" />
        <FormControlLabel value={1} control={<Radio />} label="1" />
        <FormControlLabel value={2} control={<Radio />} label="2" />
        <FormControlLabel value={3} control={<Radio />} label="3" />
        <FormControlLabel value={4} control={<Radio />} label="4" />
        
      </RadioGroup>
    </FormControl>
  )
}
