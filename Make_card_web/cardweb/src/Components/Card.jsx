import React from 'react'

const Card = (props) => {
  return (
    <>
    {
        props.details.map((value,index)=>(
    
    <div className='card'>
        <div className='card-image' key={index}>
            <img src={value.img}  />
        </div>
        <div>
            <p className='card-title'>{value.title}</p>
            <p className='description'>
                {value.discription}
            </p>
        </div>
    </div>
        ))}
    </>
  )
}

export default Card