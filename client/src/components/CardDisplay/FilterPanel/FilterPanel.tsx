import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

interface FilterPanelProps {
  setSelectedCardType: Function;
  selectedCardType: string;
};

const FilterPanel: React.FC<FilterPanelProps> = ({ selectedCardType, setSelectedCardType }) => {
  
  const handleCardTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCardType(event.target.value);
  };

  return (
    <Accordion>
      <AccordionSummary expandIcon={<FilterListIcon />} id="filter-dropdown">
        <Typography>FILTER</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>Filters Here</Typography>
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
      </AccordionDetails>
    </Accordion>
  )
}

export default FilterPanel;