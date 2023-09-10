import React from 'react'
import Card from './Card' ;
import CardData from './CardData';
const Home = () => {
  return (
    <>
    <div className='header'>
        <p className='header-title'>Our Foods Are Here...</p>
        </div>
    <div className='home-cards'>
    <Card details={CardData}/>
    </div>
    </>
  )
}

export default Home