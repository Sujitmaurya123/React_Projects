import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <h3 className='text-orange-500  font-bold text-2xl text-center'>Quick Delivery App</h3>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[550px] mx-auto my-4' src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp'/>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>Get The App</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convenience on-demand</h1>
                <p>
           Life moves fast, and we understand that your time is precious.
            That's why we've created the Quick Delivery App, your go-to 
            solution for all your on-demand delivery needs. Say goodbye 
            to the hassle of running errands, waiting in long lines, or
             worrying about how to get that last-minute essential. With
              our user-friendly app, your needs are just a tap away.
            Join the Quick Delivery App community today and experience the
             future of convenience. Download our app now, and let us handle
              the delivery, so you can focus on what matters most to you.
               Time is precious  make the most of it with Quick Delivery App!
                </p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'> Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Delivery