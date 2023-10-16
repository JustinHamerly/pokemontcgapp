const cards = require('./cards.json');

const generateCardId = card => {
  return card.set + card.set_num;
}

const fetchAll = (req, res) => {
  try {
    const cardsWithId = cards.map(card => {
      const cardId = generateCardId(card);
      return {...card, id: cardId};
    })
    res.status(200).send(cardsWithId);
  } catch (error) {
    console.error('Error fetching cards:', error);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = { fetchAll };