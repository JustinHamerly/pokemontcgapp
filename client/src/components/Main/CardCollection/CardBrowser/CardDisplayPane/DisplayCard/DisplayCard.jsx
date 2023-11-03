import React from 'react'
import { Card } from '@mui/material'
import CardImage from './CardImage/CardImage'
import CardButtonPanel from './CardButtonPanel/CardButtonPanel'

export default function DisplayCard({cardImg, name, id}) {
  return (
    <Card style={{width: 200}}>
      <CardImage cardImg={cardImg} name={name}/>
      <CardButtonPanel id={id} />
    </Card>
  )
}
