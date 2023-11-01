import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import CardCollection from './CardCollection/CardCollection'
import Account from './Account/Account'
import Game from './Game/Game'
import Inventory from './Inventory/Inventory'
import { Button } from '@mui/material'

export default function Main() {

  const pages = ['', 'collection', 'game', 'inventory', 'account'];

  return (
    <BrowserRouter>

      {pages.map(page => (
        <Button>
          <Link to={"/"+page}>{page}</Link>
        </Button>   
      ))}
      
      <Routes>
        <Route path="/" element={<h1>Landing Page</h1>}/>
        <Route path="/collection" element={<CardCollection />}/>
        <Route path="/game" element={<Game />}/>
        <Route path="/inventory" element={<Inventory />}/>
        <Route path="/account" element={<Account />}/>
      </Routes>
    </BrowserRouter>
  )
}
