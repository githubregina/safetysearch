import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>London District Area</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='/images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='N'
              path='/search'
            />
            <CardItem
              src='/images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='W'
              path='/search'
            />
            <CardItem
              src='/images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='NW'
              path='/search'
            />
            <CardItem
              src='/images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='SE'
              path='/search'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='SW'
              path='/search'
            />
            <CardItem
              src='/images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='WC'
              path='/search'
            />
            <CardItem
              src='/images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='EC'
              path='/search'
            />
            <CardItem
              src='/images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='E'
              path='/search'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;