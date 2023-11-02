import React, { useContext } from 'react'
import { FormGroup, FormControlLabel, FormLabel, Checkbox } from '@mui/material'
import { CardCollectionContext } from '../../../../../../context/CollectionContext'

export default function PokemonTypeFilter() {
  const { pokemonTypes, setPokemonTypes } = useContext(CardCollectionContext);

  const handleChecked = (e) => {
    const type = e.target.value;
    const checked = e.target.checked;
    
    setPokemonTypes(prevTypes => {   
      if(checked){
        return prevTypes.includes(type) ? [...prevTypes] : [...prevTypes, type];
      }else{
        return prevTypes.filter(t => t !== type); 
      }
    })
  }

  const types = ['grass', 'fire', 'water', 'lightning', 'fighting', 'psychic', 'darkness', 'metal', 'dragon'];
  return (
    <FormGroup>
      <FormLabel id="pokemon-type-filter">POKEMON TYPE</FormLabel>
      {types.map(type => (
        <FormControlLabel key={type} control={<Checkbox value={type} checked={pokemonTypes.includes(type)} onChange={handleChecked}/>} label={type.toUpperCase()} />
      ))}
    </FormGroup>
  )
}
