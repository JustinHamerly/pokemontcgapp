import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, FormControl, FormControlLabel, Radio, RadioGroup, Checkbox, Switch, Slider } from '@mui/material';
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
  setHasAbility: Function;
  hasAbility: boolean;
  setHealth: Function;
  health: number[];
  setMoveCosts: Function;
  moveCosts: string[];
};

const FilterPanel: React.FC<FilterPanelProps> = ({ pokemonEx, setPokemonEx, cardType, pokemonTypes, pokemonStages, setCardType, setPokemonTypes, setPokemonStages, pokemonTera, setPokemonTera, rarity, setRarity, setHasAbility, hasAbility, setHealth, health, moveCosts, setMoveCosts }) => {

  const handleCardTypeChange = (event: any) => {
    console.log(event.target.value)
    const cardType = event.target.value;
    if (cardType === 'pokemon') {

    } else if (cardType === 'trainer') {
      setPokemonTera(false);
      setPokemonEx(false);
      setPokemonStages([]);
      setPokemonTypes([]);
      setHasAbility(false);
      setHealth([0,400]);
      
    } else if (cardType === 'energy') {
      setRarity([]);
      setPokemonStages([]);
      setPokemonTypes([]);
      setPokemonTera(false);
      setPokemonEx(false);
      setHasAbility(false);
      setHealth([0,400]);
    }
    setCardType(cardType);
  };

  const handlePokemonTypeChange = (event: any) => {
    const pokemonType = event.target.value;
    setPokemonTypes((prevTypes: string[]) => {
      if (prevTypes.includes(pokemonType)) {
        return prevTypes.filter(type => type !== pokemonType);
      } else {
        return [...prevTypes, pokemonType];
      }
    });
  };

  const handlePokemonStageChange = (event: any) => {
    const pokemonStage = event.target.value;
    setPokemonStages((prevStages: string[]) => {
      if (prevStages.includes(pokemonStage)) {
        return prevStages.filter(stage => stage !== pokemonStage);
      } else {
        return [...prevStages, pokemonStage];
      }
    });
  };

  const handlePokemonExChange = (event: any) => {
    setPokemonEx((prevExState: boolean) => {
      return !prevExState;
    })
  }

  const handlePokemonTeraChange = (event: any) => {
    setPokemonTera((prevExState: boolean) => {
      return !prevExState;
    })
  }

  const handleHasAbilityChange = (event: any) => {
    setHasAbility((prevAbilityState: boolean) => {
      return !prevAbilityState;
    })
  }

  const handleRarityChange = (event: any) => {
    const rarity = event.target.value;
    setRarity((prevRarity: string[]) => {
      if (prevRarity.includes(rarity)) {
        return prevRarity.filter(type => type !== rarity);
      } else {
        return [...prevRarity, rarity]
      }
    })

  }

  const handleHealthChange = (event: Event, newValue: number | number[]) => {
    console.log(newValue)
    setHealth(newValue as number[]);
  }

  const handleMoveCostChange = (event: any) => {
    const cost = event.target.value;
    setMoveCosts((prevTypes: string[]) => {
      if (prevTypes.includes(cost)) {
        return prevTypes.filter(type => type !== cost);
      } else {
        return [...prevTypes, cost];
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
            control={<Checkbox />}
            label="Common"
            value="common"
            onChange={handleRarityChange}
            checked={rarity.includes('common')}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Uncommon"
            value="uncommon"
            onChange={handleRarityChange}
            checked={rarity.includes('uncommon')}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Rare"
            value="rare"
            onChange={handleRarityChange}
            checked={rarity.includes('rare')}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Ex Rare"
            value="double-rare"
            onChange={handleRarityChange}
            checked={rarity.includes('double-rare')}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Art Rare"
            value="a-rare"
            onChange={handleRarityChange}
            checked={rarity.includes('a-rare')}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Ultra Rare"
            value="ultra-rare"
            onChange={handleRarityChange}
            checked={rarity.includes('ultra-rare')}
          />
          <FormControlLabel
            control={<Checkbox />}
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
            <FormControl component="fieldset">
              <FormControlLabel
                control={<Switch />}
                label="ABILITY"
                value="ability"
                onChange={handleHasAbilityChange}
                checked={hasAbility}
              />
            </FormControl>
            <Typography>HEALTH:</Typography>
            <Slider
              value={health}
              min={0}
              max={400}
              step={10}
              onChange={handleHealthChange}
              valueLabelDisplay="auto"
              aria-labelledby="health-slider"
            />
            <FormControl component="fieldset">
              <Typography variant="subtitle1">MoveCost</Typography>
              <FormControlLabel
                control={<Checkbox />}
                label="Grass"
                value="grass"
                onChange={handleMoveCostChange}
                checked={moveCosts.includes('grass')}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Fire"
                value="fire"
                onChange={handleMoveCostChange}
                checked={moveCosts.includes('fire')}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Water"
                value="water"
                onChange={handleMoveCostChange}
                checked={moveCosts.includes('water')}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Lightning"
                value="lightning"
                onChange={handleMoveCostChange}
                checked={moveCosts.includes('lightning')}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Psychic"
                value="psychic"
                onChange={handleMoveCostChange}
                checked={moveCosts.includes('psychic')}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Fighting"
                value="fighting"
                onChange={handleMoveCostChange}
                checked={moveCosts.includes('fighting')}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Darkness"
                value="darkness"
                onChange={handleMoveCostChange}
                checked={moveCosts.includes('darkness')}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Metal"
                value="metal"
                onChange={handleMoveCostChange}
                checked={moveCosts.includes('metal')}
              />

            </FormControl>

          </>
        )}
      </AccordionDetails>
    </Accordion>
  )
}

export default FilterPanel;