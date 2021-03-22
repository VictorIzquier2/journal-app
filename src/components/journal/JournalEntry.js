import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='journal__entry'>
      <div 
        className='journal__entry-picture'
        style={{
          backgroundSize: 'cover',
          backgroundImage: 'url(https://familiasenruta.com/wp-content/uploads/2014/05/mirando-estrellas.jpg)'
        }}
      ></div>
      <div className='journal__entry-body'>
        <p className='journal__entry-title'>
          Un nuevo día
        </p>
        <p className='journal__entry-content'>
          orem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className='journal__entry-date-box'>
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  )
}
