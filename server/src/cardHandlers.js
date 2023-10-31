const cards = require('./cards.json');

const fetchAll = (req, res) => {
  try {
    const cardsWithId = cards.map(card => {
      if(card.card_type === 'pokemon'){
        return new PokemonCard(card.name, card.set, card.set_num, card.rarity, card.illustrator, card.img_path, card.card_type, card.stage, card.hp, card.type, card.ex, card.tera, card.ability, card.move_costs, card.weakness_type, card.resistance_type, card.ability);
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
    this.illustrator = illustrator,
    this.imgPath = imgPath,
    this.cardType = cardType
    this.id = set+setNum;
  }
}

class PokemonCard extends Card {
  constructor(name, set, setNum, rarity, illustrator, imgPath, cardType, stage, hp, type, ex, tera, ability, moveCosts, weakness, resistance){
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
  }
}

class TrainerCard extends Card {
  constructor(name, set, setNum, rarity, illustrator, imgPath, cardType, subType){
    super(name, set, setNum, rarity, illustrator, imgPath, cardType);
    this.subType = subType;
  }
}

class EnergyCard extends Card {
  constructor(name, set, setNum, rarity, illustrator, imgPath, cardType, nonBasic){
    super(name, set, setNum, rarity, illustrator, imgPath, cardType);
    this.nonBasic = nonBasic;
  }
}

module.exports = { fetchAll };