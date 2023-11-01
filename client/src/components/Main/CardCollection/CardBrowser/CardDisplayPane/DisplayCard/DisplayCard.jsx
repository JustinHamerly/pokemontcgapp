import React from 'react'
import { Card } from '@mui/material'
import CardImage from './CardImage/CardImage'
import CardButtonPanel from './CardButtonPanel/CardButtonPanel'
import styles from './DisplayCard.css';

export default function DisplayCard({cardImg, name}) {
  return (
    <Card style={{width: 200}}>
      <CardImage cardImg={cardImg} name={name}/>
      <CardButtonPanel />
    </Card>
  )
}
