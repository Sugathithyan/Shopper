import React from 'react'
import './NewsLetter.css'


const NewsLetter = () => {
  return (
    <div className='newsletter'>
       <h1>Get Exclusive Offers on your Email</h1>
       <p>Susbscribe to our news letter</p>
       <div>
        <input type="email" placeholder='Your Email Id'/>
        <button>Subscribe here</button>
       </div>
    </div> 
  )
}

export default NewsLetter