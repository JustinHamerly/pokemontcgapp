import React, { useEffect, useState } from 'react';
import styles from './carddisplay.module.css';
import { Paper, cardActionAreaClasses } from '@mui/material';
import PCard from './PCard/PCard';
import FilterPanel from './FilterPanel/FilterPanel';
import axios from 'axios';

interface CardDisplayProps { }

let fullSet: any[] = [];

const getCardsFromDB = async () => {
  try {
    const cardResults = await axios.get('http://localhost:3001/all');
    fullSet = cardResults.data;
  } catch (error) {
    console.error(error);
    fullSet = [];
  }
}

const filterCardsByGenerics = (selectedCardType: string, rarity: string[]) => {
  const filterByCardType = selectedCardType !== 'all';
  const filterByRarity = rarity.length !== 0;

  return fullSet.filter(card => {
    const matchesCardType = !filterByCardType || card.cardType === selectedCardType;
    const matchesRarity = !filterByRarity || rarity.includes(card.rarity);
    return matchesCardType && matchesRarity;
  });
};

const filterCardsByPokemon = (list: any[], allowedTypes: string[], allowedStages: string[], ex: boolean, tera: boolean, hasAbility: boolean, health: number[], moveCosts: string[]) => {
  if (allowedTypes.length === 0 && allowedStages.length === 0 && !ex && !tera && !hasAbility && health[0] == 0 && health[1] == 400 && moveCosts.length === 0) {
    return list;
  }

  const checkMoveCosts = (costs: string[], allowedCosts: string[]): boolean => {
    if(costs){
      return costs.some(cost => allowedCosts.includes(cost));
    }
    return false;
  }

  const filteredPokemonList = list.filter(card => {
    const isTypeAllowed = allowedTypes.length === 0 || allowedTypes.includes(card.type as string);
    const isStageAllowed = allowedStages.length === 0 || allowedStages.includes(card.stage as string);
    const isMoveCostAllowed = moveCosts.length === 0 || checkMoveCosts(card.moveCosts, moveCosts);

    return (!tera || card.tera) && (!ex || card.ex) && (!hasAbility || card.ability) && isTypeAllowed && isStageAllowed && card.hp <= health[1] && card.hp >= health[0] && isMoveCostAllowed;
  });

  return filteredPokemonList;
};


const mapCardsToPCard = (cardData: any[]) => {
  return cardData.map(card => (
    <PCard
      imgPath={`/cardimg${card.imgPath}`}
      desc={card.name}
      key={card.id}
      id={card.id}
    />
  ));
};



const CardDisplay: React.FC<CardDisplayProps> = () => {
  const [cardDisplay, setCardDisplay] = useState<any[]>([]);
  const [cardType, setCardType] = useState('all');
  const [rarity, setRarity] = useState<string[]>([]);
  const [pokemonTypes, setPokemonTypes] = useState<string[]>([])
  const [pokemonStages, setPokemonStages] = useState<string[]>([])
  const [pokemonEx, setPokemonEx] = useState<boolean>(false);
  const [pokemonTera, setPokemonTera] = useState<boolean>(false);
  const [hasAbility, setHasAbility] = useState<boolean>(false);
  const [health, setHealth] = useState([0,400]);
  const [moveCosts, setMoveCosts] = useState<string[]>([]);

  useEffect(() => {
    getCardsFromDB().then(() => setCardDisplay(fullSet));
  }, []);

  useEffect(() => {
    const filtered = filterCardsByGenerics(cardType, rarity);
    const filteredPokemon = filterCardsByPokemon(filtered, pokemonTypes, pokemonStages, pokemonEx, pokemonTera, hasAbility, health, moveCosts)
    setCardDisplay(filteredPokemon)
    
  }, [cardType, rarity, pokemonTypes, pokemonStages, pokemonEx, pokemonTera, hasAbility, health, moveCosts])

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
        health={health}
        setHealth = {setHealth}
        setMoveCosts = {setMoveCosts}
        moveCosts = {moveCosts}
      />
      <Paper className={styles.cards}>
        {cards}
      </Paper>

    </Paper>
  )
}

export default CardDisplay;