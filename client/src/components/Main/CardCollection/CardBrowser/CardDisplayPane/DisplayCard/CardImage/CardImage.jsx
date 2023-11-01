import React from 'react'

export default function CardImage({cardImg, name}) {
  return (
    <img src={cardImg} height={200} alt={name} />
  )
}
