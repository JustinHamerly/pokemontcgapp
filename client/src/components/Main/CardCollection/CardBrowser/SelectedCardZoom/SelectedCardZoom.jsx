import React, { useContext } from 'react'
import { Modal } from '@mui/material'
import { CardCollectionContext } from '../../../../../context/CollectionContext'

export default function SelectedCardZoom() {
  const {cardZoomOpen, setCardZoomOpen, selectedCardData, setSelectedCardData, setSelectedCardId} = useContext(CardCollectionContext)
  console.log(selectedCardData)
  
  const handleClose = () => {
    setSelectedCardData(null);
    setSelectedCardId('');
    setCardZoomOpen(false);
  }

  return (
    <Modal
      open={cardZoomOpen}
      onClose={handleClose}
      aria-labelledby="card-zoom-panel"
      aria-describedby="card-zoom-show-clicked-card"
      sx={{display: 'flex', margin: 'auto', height: '700', width: '500', justifyContent: 'center', alignItems: 'center'}}
    >
      <>
        {selectedCardData &&
        
          <img src={'./cardImgs/'+selectedCardData.imgPath} alt={selectedCardData.name} height={700} width={500} />
        }
      </>

    </Modal>
  )
}
