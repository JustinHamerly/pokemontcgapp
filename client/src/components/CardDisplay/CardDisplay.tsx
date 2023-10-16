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
  const [selectedCardType, setSelectedCardType] = useState('all');

  useEffect(() => {

    setCardDisplay(() => filterCardsByType(selectedCardType))
  }, [selectedCardType])

  const cards = mapCardsToPCard(cardDisplay)

  return (
    <Paper className={styles.carddisplay} elevation={3}>
      <FilterPanel selectedCardType={selectedCardType} setSelectedCardType={setSelectedCardType} />
      <Paper className={styles.cards}>
        {cards}
      </Paper>

    </Paper>
  )
}

export default CardDisplay;