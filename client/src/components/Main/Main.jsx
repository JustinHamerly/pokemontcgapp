import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CollectionProvider from '../../context/CollectionContext'
import CardCollection from './CardCollection/CardCollection'
import Account from './Account/Account'
import Game from './Game/Game'
import Inventory from './Inventory/Inventory'

export default function Main() {
  return (
    <CollectionProvider>
      <Routes>
        <Route path="/" element={<h1>Landing Page</h1>} />
        <Route path="/collection" element={<CardCollection />} />
        <Route path="/game" element={<Game />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </CollectionProvider>
  )
}
