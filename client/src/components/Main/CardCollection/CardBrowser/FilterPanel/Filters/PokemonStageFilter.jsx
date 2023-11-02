import React, {useContext} from 'react'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { CardCollectionContext } from '../../../../../../context/CollectionContext';

export default function PokemonStageFilter() {
  const {stage, setStage} = useContext(CardCollectionContext);
  return (
    <FormControl>
      <FormLabel id="stage-filter">POKEMON STAGE</FormLabel>
      <RadioGroup
        aria-labelledby="stage-filter"
        defaultValue={stage}
        name="stage-filter-group"
        onChange={(e) => setStage(e.target.value)}
      >
        <FormControlLabel value="" control={<Radio />} label="ALL" />
        <FormControlLabel value="basic" control={<Radio />} label="BASIC" />
        <FormControlLabel value="stageone" control={<Radio />} label="STAGE ONE" />
        <FormControlLabel value="stagetwo" control={<Radio />} label="STAGE TWO" />
      </RadioGroup>
    </FormControl>
  )
}
