export default class Deck {
  deckList: Map<string, number> = new Map<string, number>();;
  isValid: boolean = false;

  checkIfValid(): void {
    const listIterator = this.deckList.entries();
    let total = 0;
    let entry = listIterator.next();

    while(!entry.done){
      total += entry.value[1];
      if(total>60){
        break;
      }
      entry = listIterator.next();
    }
    this.isValid = total === 60; 
  }

  addCard(id: string): void {
    const cardCount = this.deckList.get(id) ?? 0;

    if (cardCount < 4){
      this.deckList.set(id, cardCount + 1);
    }

    this.checkIfValid();
  }


  removeCard(id: string){
    const cardCount = this.deckList.get(id);

    if(cardCount){
      const newCount = cardCount -1;
      if(newCount <1){
        this.deckList.delete(id);
      }else{
        this.deckList.set(id, newCount);
      }
    }

    this.checkIfValid()
  }
}