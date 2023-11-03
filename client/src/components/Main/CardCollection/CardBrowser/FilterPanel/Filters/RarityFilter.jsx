import React, { useContext } from 'react'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import { CardCollectionContext } from '../../../../../../context/CollectionContext'

export default function RarityFilter() {
  const {rarity, setRarity} = useContext(CardCollectionContext);
  return (
    <FormControl>
      <FormLabel id="card-type-filter">RARITY</FormLabel>
      <RadioGroup
        aria-labelledby="card-type-filter"
        value={rarity}
        name="card-type-filter-group"
        onChange={(e) => setRarity(e.target.value)}
      >
        <FormControlLabel value="" control={<Radio />} label="ALL" />
        <FormControlLabel value="common" control={<Radio />} label="COMMON" />
        <FormControlLabel value="uncommon" control={<Radio />} label="UNCOMMON" />
        <FormControlLabel value="rare" control={<Radio />} label="RARE" />
        <FormControlLabel value="double-rare" control={<Radio />} label="EX" />
        <FormControlLabel value="a-rare" control={<Radio />} label="ART RARE" />
        <FormControlLabel value="ultra-rare" control={<Radio />} label="ULTRA RARE" />
        <FormControlLabel value="sa-rare" control={<Radio />} label="SPECIAL ART RARE" />
      </RadioGroup>
    </FormControl>
  )
}
