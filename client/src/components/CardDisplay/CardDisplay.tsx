import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import styles from './carddisplay.module.css';
import PCard from './PCard/PCard';
import data from '../../assets/data/cards.json';


interface CardDisplayProps {

}

const CardDisplay: React.FC<CardDisplayProps> = () => {
  const [cardDisplay, setCardDisplay] = useState(data);

  const cards = cardDisplay.map(cardData => {
    return <PCard imgPath={'/cardimg'+cardData.img_path} desc={cardData.name} key={cardData.set+cardData.set_num} id={cardData.set+cardData.set_num} />
  })

  return (
    <Paper className={styles.carddisplay} elevation={3}>
      {cards}
    </Paper>
  )
}

export default CardDisplay;