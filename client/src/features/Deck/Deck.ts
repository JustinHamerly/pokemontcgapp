export default class Deck {
  deckList: Map<string, number> = new Map<string, number>();;
  isValid: boolean = false;
  cardCount: number = 0;

  checkIfValid(): void {
   this.isValid = this.cardCount === 60;
  }

  addCard(id: string): void {
    const cardCount = this.deckList.get(id) ?? 0;

    if (cardCount < 4){
      this.deckList.set(id, cardCount + 1);
      this.cardCount++;
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
      this.cardCount--;
    }

    this.checkIfValid()
  }
}