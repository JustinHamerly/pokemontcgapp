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
  const [rarity, setRarity] = useState('');
  const [stage, setStage] = useState('');
  const [weakness, setWeakness] = useState('');
  const [resistance, setResistance] = useState('');
  const [retreat, setRetreat] = useState(-1);
  const [hp, setHP] = useState([0, 400]);
  const [moveCost, setMoveCost] = useState('');
  const [ex, setEx] = useState(false);
  const [hasAbility, setHasAbility] = useState(false);
  const [tera, setTera] = useState(false);
  const [trainerSubtype, setTrainerSubtype] = useState('');
  const [nonBasic, setNonBasic] = useState(false);

  useEffect(() => {

    const filterCards = () => {
      let arrayCopy = Array.from(collection.values());

      if (cardType !== ''){
        arrayCopy = arrayCopy.filter(card => card.cardType === cardType);
      }

      if (rarity !==''){
        arrayCopy = arrayCopy.filter(card => card.rarity === rarity);
      }
      
      if(pokemonTypes.length>0){
        arrayCopy = arrayCopy.filter(card => pokemonTypes.includes(card.type))
      }

      if(stage !== ''){
        arrayCopy = arrayCopy.filter(card => card.stage === stage);
      }

      if(weakness !== ''){
        arrayCopy = arrayCopy.filter(card => card.weakness === weakness);
      }

      if(resistance !== ''){
        arrayCopy = arrayCopy.filter(card => card.resistance === resistance);
      }

      if(retreat !== -1 ){
        arrayCopy = arrayCopy.filter(card => card.retreat=== retreat);
      }

      if(hp[0] > 0 || hp[1]<400){
        arrayCopy = arrayCopy.filter(card => (card.hp >= hp[0] && card.hp <= hp[1]))
      }

      if(moveCost !== ''){
        if(moveCost === 'colorless'){
          arrayCopy = arrayCopy.filter(card => (card.moveCosts.length === 1 && card.moveCosts[0] === 'colorless'))
        }else{
          arrayCopy = arrayCopy.filter(card => card.moveCosts.includes(moveCost))
        }
      }

      if(ex) arrayCopy = arrayCopy.filter(card => card.ex)
      
      if(hasAbility) arrayCopy = arrayCopy.filter(card => card.ability)

      if(tera) arrayCopy = arrayCopy.filter(card => card.tera)

      if(trainerSubtype !== ''){
        arrayCopy = arrayCopy.filter(card => card.trainerSubtype === trainerSubtype)
      }

      if(nonBasic) arrayCopy = arrayCopy.filter(card => card.nonBasicEnergy)

      setCardArray(arrayCopy);
    }

    if(collection){
      filterCards();
    }

  }, [collection, cardType, rarity, pokemonTypes, stage, weakness, resistance, retreat, hp, moveCost, ex, hasAbility, tera, trainerSubtype, nonBasic]);



  const [cardZoomOpen, setCardZoomOpen] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(''); 
  const [selectedCardData, setSelectedCardData] = useState(null)

  useEffect(() => {
    if(collection && selectedCardId){

      const cardInfo = collection.get(selectedCardId);
      setSelectedCardData(cardInfo);
      setCardZoomOpen(true)
    }

  }, [selectedCardId, collection])


  return (
    <CardCollectionContext.Provider value={{
      collection,
      cardArray,
      showFilter,
      setShowFilter,
      cardType,
      setCardType,
      pokemonTypes,
      setPokemonTypes,
      rarity,
      setRarity,
      stage,
      setStage,
      weakness,
      setWeakness,
      resistance,
      setResistance,
      retreat,
      setRetreat,
      hp,
      setHP,
      moveCost,
      setMoveCost,
      ex,
      setEx,
      hasAbility,
      setHasAbility,
      tera,
      setTera,
      trainerSubtype,
      setTrainerSubtype,
      nonBasic,
      setNonBasic,
      cardZoomOpen,
      setCardZoomOpen,
      selectedCardId,
      setSelectedCardId,
      selectedCardData,
      setSelectedCardData
    }}> 
      {props.children}
    </CardCollectionContext.Provider>
  )
}

export default CardCollectionProvider;