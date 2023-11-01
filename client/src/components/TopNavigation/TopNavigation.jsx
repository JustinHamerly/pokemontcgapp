import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function TopNavigation() {

  const pages = ['', 'collection', 'game', 'inventory', 'account'];
  
  return (
    <div>
      {pages.map(page => (
        <Button>
          <Link to={"/"+page}>{page}</Link>
        </Button>   
      ))}
    </div>
  )
}
