import React, { useContext } from 'react'
import { FormGroup, FormControlLabel, Switch } from '@mui/material'
import { CardCollectionContext } from '../../../../../../context/CollectionContext'

export default function ExAbilityTeraFilter() {
  const { ex, setEx, hasAbility, setHasAbility, tera, setTera } = useContext(CardCollectionContext);
  return (
    <FormGroup
      aria-labelledby="ex-tera-hasAbility-filter"
    >
      <FormControlLabel control={<Switch checked={ex} onChange={e => setEx(e.target.checked)} />} label="EX" />
      <FormControlLabel control={<Switch checked={hasAbility} onChange={e => setHasAbility(e.target.checked)} />} label="HAS ABILITY" />
      <FormControlLabel control={<Switch checked={tera} onChange={e => setTera(e.target.checked)} />} label="TERA" />
    </FormGroup>
  )
}
