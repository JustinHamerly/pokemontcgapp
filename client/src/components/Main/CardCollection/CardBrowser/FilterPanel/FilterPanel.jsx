import React, { useContext } from 'react'
import { Drawer } from '@mui/material'
import { CardCollectionContext } from '../../../../../context/CollectionContext'

export default function FilterPanel() {
  const {showFilter, toggleShowFilter} = useContext(CardCollectionContext);

  return (
    <Drawer
      anchor={'bottom'}
      open={showFilter}
      onClose={toggleShowFilter}
    >
      Filters Go Here
    </Drawer>
  )
}
