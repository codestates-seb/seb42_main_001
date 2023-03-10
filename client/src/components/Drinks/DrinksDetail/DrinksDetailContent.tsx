import React from 'react'
import DrinksDetailSnack from './DrinksDetailSnack'
import DrinksDetailTasting from './DrinksDetailTasting'
import DrinksDetailWith from './DrinksDetailWith'

function DrinksDetailContent() {
  return (
    <div>
      <DrinksDetailTasting />
      <DrinksDetailSnack />
      <DrinksDetailWith />
    </div>
  )
}

export default DrinksDetailContent
