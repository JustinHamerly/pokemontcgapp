import React, { useContext } from 'react'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import { CardCollectionContext } from '../../../../../../context/CollectionContext'

export default function TrainerSubtypeFilter() {
  const {trainerSubtype, setTrainerSubtype} = useContext(CardCollectionContext);
  return (
    <FormControl>
      <FormLabel id="trainer-subtype-group-label">TRAINER TYPE</FormLabel>
      <RadioGroup
        aria-labelledby="trainer-subtype-group-label"
        value={trainerSubtype}
        name="trainer-subtype-group"
        onChange={(e) => setTrainerSubtype(e.target.value)}
      >
        <FormControlLabel value="" control={<Radio />} label="ALL" />
        <FormControlLabel value="item" control={<Radio />} label="ITEM" />
        <FormControlLabel value="supporter" control={<Radio />} label="SUPPORTER" />
        <FormControlLabel value="stadium" control={<Radio />} label="STADIUM" />
        <FormControlLabel value="tool" control={<Radio />} label="TOOL" />
      </RadioGroup>
    </FormControl>
  )
}
