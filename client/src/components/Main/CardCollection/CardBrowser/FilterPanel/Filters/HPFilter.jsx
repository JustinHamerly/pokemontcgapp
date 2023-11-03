import React, { useContext } from 'react'
import { Slider } from '@mui/material'
import { CardCollectionContext } from '../../../../../../context/CollectionContext'

export default function HPFilter() {
  const { hp, setHP } = useContext(CardCollectionContext);
  return (
    <Slider
      getAriaLabel={() => 'HP Range'}
      value={hp}
      onChange={(e, newVal) => setHP([newVal[0], newVal[1]])}
      min={0}
      max={400}
      step={10}
      valueLabelDisplay="auto"
      getAriaValueText={(num) => num}
    />
  )
}
