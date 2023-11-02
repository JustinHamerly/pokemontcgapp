import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const CardCollectionContext = createContext();

const CardCollectionProvider = (props) => {

  const [collection, setCollection] = useState(null);
  const [cardArray, setCardArray] = useState(null);

  const [showFilter, setShowFilter] = useState(false);
  
  useEffect(() => {
    const fetchAllCardData = async () => {
      const {data} = await axios({method: 'get', baseURL: process.env.REACT_APP_COLLECTIONSERVER, url: '/all'});
      const collectionMap = new Map();
      data.forEach(card => {
        collectionMap.set(card.id, card);
      })
      setCollection(collectionMap);
      const cardArr = Array.from(collectionMap.values());
      setCardArray(cardArr);
    }
    fetchAllCardData();
  }, []);


  const [cardType, setCardType] = useState('');
  const [pokemonTypes, setPokemonTypes] = useState([]);

  useEffect(() => {

    const filterCards = () => {
      let arrayCopy = Array.from(collection.values());

      if (cardType !== ''){
        arrayCopy = arrayCopy.filter(card => card.cardType === cardType);
      }

      if(pokemonTypes.length>0){
        arrayCopy = arrayCopy.filter(card => pokemonTypes.includes(card.type))
      }

      setCardArray(arrayCopy);
    }

    if(collection){
      filterCards();
    }

  }, [collection, cardType, pokemonTypes]);


  return (
    <CardCollectionContext.Provider value={{
      collection,
      cardArray,
      showFilter,
      setShowFilter,
      cardType,
      setCardType,
      pokemonTypes,
      setPokemonTypes
    }}> 
      {props.children}
    </CardCollectionContext.Provider>
  )
}

export default CardCollectionProvider;