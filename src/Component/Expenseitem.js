import './Expenseitem.css'
import React from 'react'

export default function Expenseitem() {
  return (
    <div>
      <div className='row  m-5 expense_item'>
        <div className='col-lg-4'>
           <p>January 23th 2023</p> 
        </div>
            <div className='col-lg-4'>
                <h2>Car Insurence</h2>
            </div>
            <div className='col-lg-4'>
                <p>$200</p>
                </div>
        </div> 
    </div>
  )
}


