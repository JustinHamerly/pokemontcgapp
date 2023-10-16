import React, { useEffect, useState } from 'react';
import styles from './carddisplay.module.css';
import PCard from './PCard/PCard';
import data from '../../assets/data/cards.json';
import { Paper } from '@mui/material';
import FilterPanel from './FilterPanel/FilterPanel';


interface CardDisplayProps { }

const CardDisplay: React.FC<CardDisplayProps> = () => {
  const [cardDisplay, setCardDisplay] = useState(data);
  const [selectedCardType, setSelectedCardType] = useState('all');

  useEffect(() => {
    if(selectedCardType === 'all'){
      setCardDisplay(data);
    }else{
      const filteredData = data.filter(card => card.card_type === selectedCardType);
      setCardDisplay(filteredData);
    }
  }, [selectedCardType])

  const cards = cardDisplay.map(cardData => {
    return <PCard imgPath={'/cardimg' + cardData.img_path} desc={cardData.name} key={cardData.set + cardData.set_num} id={cardData.set + cardData.set_num} />
  })

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