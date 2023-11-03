const cards = require('./cards.json');

const fetchAll = (req, res) => {
  try {
    const cardsWithId = cards.map(card => {
      if(card.card_type === 'pokemon'){
        return new PokemonCard(card.name, card.set, card.set_num, card.rarity, card.illustrator, card.img_path, card.card_type, card.stage, card.hp, card.type, card.ex, card.tera, card.ability, card.move_costs, card.weakness_type, card.resistance_type, card.retreat);
      }else if(card.card_type === 'trainer'){
        return new TrainerCard(card.name, card.set, card.set_num, card.rarity, card.illustrator, card.img_path, card.card_type, card.trainer_subtype)
      }else if(card.card_type === 'energy'){
        return new EnergyCard(card.name, card.set, card.set_num, card.rarity, card.illustrator, card.img_path, card.card_type, card.non_basic_energy);
      }
    })
    res.status(200).send(cardsWithId);
  } catch (error) {
    console.error('Error fetching cards:', error);
    res.status(500).send('Internal Server Error');
  }
}

class Card {
  constructor(name, set, setNum, rarity, illustrator, imgPath, cardType) {
    this.name = name;
    this.set=set;
    this.setNum = setNum;
    this.rarity = rarity;
    this.illustrator = illustrator;
    this.imgPath = imgPath;
    this.cardType = cardType;
    this.id = set+setNum;
  }
}

class PokemonCard extends Card {
  constructor(name, set, setNum, rarity, illustrator, imgPath, cardType, stage, hp, type, ex, tera, ability, moveCosts, weakness, resistance, retreat){
    super(name, set, setNum, rarity, illustrator, imgPath, cardType);
    this.stage = stage;
    this.hp = hp;
    this.type = type;
    this.ex = ex;
    this.tera = tera;
    this.ability = ability;
    this.moveCosts = moveCosts;
    this.weakness = weakness;
    this.resistance = resistance;
    this.retreat = retreat;
    this.trainerSubtype = '';
    this.nonBasicEnergy = false;
  }
}

class TrainerCard extends Card {
  constructor(name, set, setNum, rarity, illustrator, imgPath, cardType, trainerSubtype){
    super(name, set, setNum, rarity, illustrator, imgPath, cardType);
    this.trainerSubtype = trainerSubtype;
    this.stage ='';
    this.hp = 0;
    this.type = '';
    this.ex = false;
    this.tera = false;
    this.ability = false;
    this.moveCosts = [];
    this.weakness = '';
    this.resistance = '';
    this.retreat = -1;
    this.nonBasicEnergy = false;
  }
}

class EnergyCard extends Card {
  constructor(name, set, setNum, rarity, illustrator, imgPath, cardType, nonBasicEnergy){
    super(name, set, setNum, rarity, illustrator, imgPath, cardType);
    this.nonBasicEnergy = nonBasicEnergy;
    this.trainerSubtype = '';
    this.stage ='';
    this.hp = 0;
    this.type = '';
    this.ex = false;
    this.tera = false;
    this.ability = false;
    this.moveCosts = [];
    this.weakness = '';
    this.resistance = '';
    this.retreat = -1;
  }
}

module.exports = { fetchAll };