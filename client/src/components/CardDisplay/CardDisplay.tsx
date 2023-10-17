import React, { useEffect, useState } from 'react';
import styles from './carddisplay.module.css';
import { Paper, cardActionAreaClasses } from '@mui/material';
import PCard from './PCard/PCard';
import data from '../../assets/data/cards.json';
import FilterPanel from './FilterPanel/FilterPanel';

interface CardDisplayProps { }

const filterCardsByGenerics = (selectedCardType: string, rarity: string[]) => {
  const filterByCardType = selectedCardType !== 'all';
  const filterByRarity = rarity.length !== 0;

  return data.filter(card => {
    const matchesCardType = !filterByCardType || card.card_type === selectedCardType;
    const matchesRarity = !filterByRarity || rarity.includes(card.rarity);
    return matchesCardType && matchesRarity;
  });
};

const filterCardsByPokemon = (list: card[], allowedTypes: string[], allowedStages: string[], ex: boolean, tera: boolean, rarity: string[], hasAbility: boolean) => {
  if (allowedTypes.length === 0 && allowedStages.length === 0 && !ex && !tera && !hasAbility) {
    return list;
  }

  const filteredPokemonList = list.filter(card => {
    const isTypeAllowed = allowedTypes.length === 0 || allowedTypes.includes(card.type as string);
    const isStageAllowed = allowedStages.length === 0 || allowedStages.includes(card.stage as string);

    return (!tera || card.tera) && (!ex || card.ex) && (!hasAbility || card.ability) && isTypeAllowed && isStageAllowed;
  });

  return filteredPokemonList;
};


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
  const [rarity, setRarity] = useState<string[]>([]);
  const [pokemonTypes, setPokemonTypes] = useState<string[]>([])
  const [pokemonStages, setPokemonStages] = useState<string[]>([])
  const [pokemonEx, setPokemonEx] = useState<boolean>(false);
  const [pokemonTera, setPokemonTera] = useState<boolean>(false);
  const [hasAbility, setHasAbility] = useState<boolean>(false);

  useEffect(() => {
    const filterGenerics = filterCardsByGenerics(cardType, rarity);
    const filteredPokemon = filterCardsByPokemon(filterGenerics, pokemonTypes, pokemonStages, pokemonEx, pokemonTera, rarity, hasAbility)
    setCardDisplay(filteredPokemon)
  }, [cardType, rarity, pokemonTypes, pokemonStages, pokemonEx, pokemonTera, hasAbility])

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
        pokemonTera={pokemonTera}
        setPokemonTera={setPokemonTera}
        rarity={rarity}
        setRarity={setRarity}
        hasAbility={hasAbility}
        setHasAbility={setHasAbility}
      />
      <Paper className={styles.cards}>
        {cards}
      </Paper>

    </Paper>
  )
}

export default CardDisplay;