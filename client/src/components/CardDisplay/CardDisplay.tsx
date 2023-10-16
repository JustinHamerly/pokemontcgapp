import React, { useEffect, useState } from 'react';
import styles from './carddisplay.module.css';
import { Paper } from '@mui/material';
import PCard from './PCard/PCard';
import data from '../../assets/data/cards.json';
import FilterPanel from './FilterPanel/FilterPanel';

interface CardDisplayProps { }

const filterCardsByType = (selectedCardType: string) => {
  if (selectedCardType === 'all') {
    return data;
  } else {
    return data.filter(card => card.card_type === selectedCardType);
  }
};

const filterCardsByPokemon = (allowedTypes: string[], allowedStages: string[], ex: boolean) => {
  if (allowedTypes.length === 0 && allowedStages.length === 0 && !ex) {
    return data;
  }

  const pokemonList = filterCardsByType('pokemon');

  const filteredPokemonList = pokemonList.filter(card => {

    const isTypeAllowed = allowedTypes.length === 0 || allowedTypes.includes(card.type);
    const isStageAllowed = allowedStages.length === 0 || allowedStages.includes(card.stage);

    return ex ? (card.ex && isTypeAllowed && isStageAllowed) : (isTypeAllowed && isStageAllowed);

  });

  return filteredPokemonList;
}

const mapCardsToPCard = (cardData: any[]) => {
  return cardData.map(card => (
    <PCard
      imgPath={`/cardimg${card.img_path}`}
      desc={card.name}
      key={`${card.set}${card.set_num}`}
      id={`${card.set}${card.set_num}`}
    />
  ));
};

const CardDisplay: React.FC<CardDisplayProps> = () => {
  const [cardDisplay, setCardDisplay] = useState(data);
  const [cardType, setCardType] = useState('all');
  const [pokemonTypes, setPokemonTypes] = useState<string[]>([])
  const [pokemonStages, setPokemonStages] = useState<string[]>([])
  const [pokemonEx, setPokemonEx] = useState<boolean>(false);



  useEffect(() => {
    setCardDisplay(() => filterCardsByType(cardType))
  }, [cardType])

  useEffect(() => {
    setCardDisplay(() => filterCardsByPokemon(pokemonTypes, pokemonStages, pokemonEx))
  }, [pokemonTypes, pokemonStages, pokemonEx])

  const cards = mapCardsToPCard(cardDisplay)

  return (
    <Paper className={styles.carddisplay} elevation={3}>
      <FilterPanel
        cardType={cardType}
        setCardType={setCardType}
        pokemonTypes={pokemonTypes}
        setPokemonTypes={setPokemonTypes}
        pokemonStages={pokemonStages}
        setPokemonStages={setPokemonStages}
        pokemonEx={pokemonEx}
        setPokemonEx={setPokemonEx}
      />
      <Paper className={styles.cards}>
        {cards}
      </Paper>

    </Paper>
  )
}

export default CardDisplay;