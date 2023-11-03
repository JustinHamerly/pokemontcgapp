import React, { useContext } from 'react'
import { FormGroup, FormControlLabel, Switch } from '@mui/material'
import { CardCollectionContext } from '../../../../../../context/CollectionContext'

export default function NonBasicEnergyFilter() {
  const {nonBasic, setNonBasic} = useContext(CardCollectionContext);
  return (
    <FormGroup
      aria-labelledby="ex-tera-hasAbility-filter"
    >
      <FormControlLabel control={<Switch checked={nonBasic} onChange={e => setNonBasic(e.target.checked)} />} label="NON-BASIC ENERGY" />
    </FormGroup>
  )
}
