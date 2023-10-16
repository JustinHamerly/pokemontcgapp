import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, FormControl, FormControlLabel, Radio, RadioGroup, Checkbox } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

interface FilterPanelProps {
  setSelectedCardType: Function;
  selectedCardType: string;
  setSelectedPokemonTypes: Function;
  selectedPokemonTypes: string[];
};

const FilterPanel: React.FC<FilterPanelProps> = ({ selectedCardType, selectedPokemonTypes, setSelectedCardType, setSelectedPokemonTypes }) => {
  
  const handleCardTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCardType(event.target.value);
  };

  const handlePokemonTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const pokemonType = event.target.value;
    setSelectedPokemonTypes((prevSelectedTypes: string[]) => {
      if (prevSelectedTypes.includes(pokemonType)) {
        return prevSelectedTypes.filter(type => type !== pokemonType);
      } else {
        return [...prevSelectedTypes, pokemonType];
      }
    });
  };

  return (
    <Accordion>
      <AccordionSummary expandIcon={<FilterListIcon />} id="filter-dropdown">
        <Typography>FILTER</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="cardType"
            name="cardType"
            value={selectedCardType}
            onChange={handleCardTypeChange}
          >
            <FormControlLabel value="all" control={<Radio />} label="All" />
            <FormControlLabel value="pokemon" control={<Radio />} label="Pokemon" />
            <FormControlLabel value="trainer" control={<Radio />} label="Trainer" />
            <FormControlLabel value="energy" control={<Radio />} label="Energy" />
          </RadioGroup>
        </FormControl>
        {(selectedCardType === 'pokemon' || selectedCardType === 'all') && (
          <FormControl component="fieldset">
            <Typography variant="subtitle1">Pokemon Types:</Typography>
            <FormControlLabel
              control={<Checkbox />}
              label="Grass"
              value="grass"
              onChange={handlePokemonTypeChange}
              checked={selectedPokemonTypes.includes('grass')}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Fire"
              value="fire"
              onChange={handlePokemonTypeChange}
              checked={selectedPokemonTypes.includes('fire')}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Water"
              value="water"
              onChange={handlePokemonTypeChange}
              checked={selectedPokemonTypes.includes('water')}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Lightning"
              value="lightning"
              onChange={handlePokemonTypeChange}
              checked={selectedPokemonTypes.includes('lightning')}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Psychic"
              value="psychic"
              onChange={handlePokemonTypeChange}
              checked={selectedPokemonTypes.includes('psychic')}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Fighting"
              value="fighting"
              onChange={handlePokemonTypeChange}
              checked={selectedPokemonTypes.includes('fighting')}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Darkness"
              value="darkness"
              onChange={handlePokemonTypeChange}
              checked={selectedPokemonTypes.includes('darkness')}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Steel"
              value="steel"
              onChange={handlePokemonTypeChange}
              checked={selectedPokemonTypes.includes('steel')}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Colorless"
              value="colorless"
              onChange={handlePokemonTypeChange}
              checked={selectedPokemonTypes.includes('colorless')}
            />
            
            
          </FormControl>
        )}
      </AccordionDetails>
    </Accordion>
  )
}

export default FilterPanel;