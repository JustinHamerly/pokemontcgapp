import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, FormControl, FormControlLabel, Radio, RadioGroup, Checkbox, Switch } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

interface FilterPanelProps {
  setCardType: Function;
  cardType: string;
  setPokemonTypes: Function;
  pokemonTypes: string[];
  setPokemonStages: Function;
  pokemonStages: string[];
  setPokemonEx: Function;
  pokemonEx: boolean;
  setPokemonTera: Function;
  pokemonTera: boolean;
  setRarity: Function;
  rarity: string[];

};

const FilterPanel: React.FC<FilterPanelProps> = ({ pokemonEx, setPokemonEx, cardType, pokemonTypes, pokemonStages, setCardType, setPokemonTypes, setPokemonStages, pokemonTera, setPokemonTera, rarity, setRarity }) => {

  const handleCardTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cardType = event.target.value;
    if(cardType === 'pokemon'){

    }else if(cardType === 'trainer'){
      setPokemonTera(false);
      setPokemonEx(false);
      setPokemonStages([]);
      setPokemonTypes([]);
    }else if(cardType === 'energy'){
      setRarity([]);
      setPokemonStages([]);
      setPokemonTypes([]);
      setPokemonTera(false);
      setPokemonEx(false); 
    }
    setCardType(cardType);
  };

  const handlePokemonTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const pokemonType = event.target.value;
    setPokemonTypes((prevTypes: string[]) => {
      if (prevTypes.includes(pokemonType)) {
        return prevTypes.filter(type => type !== pokemonType);
      } else {
        return [...prevTypes, pokemonType];
      }
    });
  };

  const handlePokemonStageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const pokemonStage = event.target.value;
    setPokemonStages((prevStages: string[]) => {
      if (prevStages.includes(pokemonStage)) {
        return prevStages.filter(stage => stage !== pokemonStage);
      } else {
        return [...prevStages, pokemonStage];
      }
    });
  };

  const handlePokemonExChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const pokemonEx = event.target.value;
    setPokemonEx((prevExState: boolean) => {
      return !prevExState;
    })
  }

  const handlePokemonTeraChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const pokemonTera = event.target.value;
    setPokemonTera((prevExState: boolean) => {
      return !prevExState;
    })
  }

  const handleRarityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rarity = event.target.value;
    setRarity((prevRarity: string[]) => {
      if (prevRarity.includes(rarity)) {
        return prevRarity.filter(type => type !== rarity);
      } else {
        return [...prevRarity, rarity]
      }
    })

  }

  return (
    <Accordion>
      <AccordionSummary expandIcon={<FilterListIcon />} id="filter-dropdown">
        <Typography>FILTER</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormControl component="fieldset">
          <Typography variant="subtitle1">CARD TYPE</Typography>
          <RadioGroup
            aria-label="cardType"
            name="cardType"
            value={cardType}
            onChange={handleCardTypeChange}
          >
            <FormControlLabel value="all" control={<Radio />} label="All" />
            <FormControlLabel value="pokemon" control={<Radio />} label="Pokemon" />
            <FormControlLabel value="trainer" control={<Radio />} label="Trainer" />
            <FormControlLabel value="energy" control={<Radio />} label="Energy" />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
          <Typography>RARITY</Typography>
          <FormControlLabel
            control={<Checkbox/>}
            label="Common"
            value="common"
            onChange={handleRarityChange}
            checked={rarity.includes('common')}
          />
          <FormControlLabel
            control={<Checkbox/>}
            label="Uncommon"
            value="uncommon"
            onChange={handleRarityChange}
            checked={rarity.includes('uncommon')}
          />
          <FormControlLabel
            control={<Checkbox/>}
            label="Rare"
            value="rare"
            onChange={handleRarityChange}
            checked={rarity.includes('rare')}
          />
          <FormControlLabel
            control={<Checkbox/>}
            label="Ultra Rare"
            value="ultra-rare"
            onChange={handleRarityChange}
            checked={rarity.includes('ultra-rare')}
          />
          <FormControlLabel
            control={<Checkbox/>}
            label="Art Rare"
            value="a-rare"
            onChange={handleRarityChange}
            checked={rarity.includes('a-rare')}
          />
          <FormControlLabel
            control={<Checkbox/>}
            label="Special Art Rare"
            value="sa-rare"
            onChange={handleRarityChange}
            checked={rarity.includes('sa-rare')}
          />
        </FormControl>
        {(cardType === 'pokemon' || cardType === 'all') && (
          <>
            <FormControl component="fieldset">
              <Typography variant="subtitle1">TYPE</Typography>
              <FormControlLabel
                control={<Checkbox />}
                label="Grass"
                value="grass"
                onChange={handlePokemonTypeChange}
                checked={pokemonTypes.includes('grass')}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Fire"
                value="fire"
                onChange={handlePokemonTypeChange}
                checked={pokemonTypes.includes('fire')}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Water"
                value="water"
                onChange={handlePokemonTypeChange}
                checked={pokemonTypes.includes('water')}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Lightning"
                value="lightning"
                onChange={handlePokemonTypeChange}
                checked={pokemonTypes.includes('lightning')}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Psychic"
                value="psychic"
                onChange={handlePokemonTypeChange}
                checked={pokemonTypes.includes('psychic')}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Fighting"
                value="fighting"
                onChange={handlePokemonTypeChange}
                checked={pokemonTypes.includes('fighting')}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Darkness"
                value="darkness"
                onChange={handlePokemonTypeChange}
                checked={pokemonTypes.includes('darkness')}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Metal"
                value="metal"
                onChange={handlePokemonTypeChange}
                checked={pokemonTypes.includes('metal')}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Colorless"
                value="colorless"
                onChange={handlePokemonTypeChange}
                checked={pokemonTypes.includes('colorless')}
              />


            </FormControl>
            <FormControl component="fieldset">
              <Typography variant="subtitle1">STAGE</Typography>
              <FormControlLabel
                control={<Checkbox />}
                label="Basic"
                value="basic"
                onChange={handlePokemonStageChange}
                checked={pokemonStages.includes('basic')}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Stage One"
                value="stageone"
                onChange={handlePokemonStageChange}
                checked={pokemonStages.includes('stageone')}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Stage Two"
                value="stagetwo"
                onChange={handlePokemonStageChange}
                checked={pokemonStages.includes('stagetwo')}
              />

            </FormControl>
            <FormControl component="fieldset">
              <FormControlLabel
                control={<Switch />}
                label="EX"
                value="ex"
                onChange={handlePokemonExChange}
                checked={pokemonEx}
              />
            </FormControl>
            <FormControl component="fieldset">
              <FormControlLabel
                control={<Switch />}
                label="TERA"
                value="tera"
                onChange={handlePokemonTeraChange}
                checked={pokemonTera}
              />
            </FormControl>
          </>
        )}
      </AccordionDetails>
    </Accordion>
  )
}

export default FilterPanel;