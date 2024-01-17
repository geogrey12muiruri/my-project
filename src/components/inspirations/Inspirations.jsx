import React from 'react'
import PinStripe from '../../assets/images/PinStripe.jpg'
import PinStripe1 from '../../assets/images/PinStripe1.jpg'
import PinStripe2 from '../../assets/images/PinStripe2.jpg'

const Inspirations = () => {
    const customStyles= {
        objectFit: "cover",
        height: "inherit"
    }
  return (
    <div className='container'>
      <h1 className='flex justify-center col-span-3 over-flow-hidden  text-pretty p-4 animate-pulse font-serif font-bold '>Get Inspired By Us</h1>
      <div className='flex justify-center gap-4 container '>
            <div className='justify-center'>
                       
            <img src={PinStripe} style={customStyles}/>
            <p className='font-sanserif'>Double breast pin-Striped</p>
                                
            </div>
            <div>
           
            
            <img src={PinStripe1}/>
            <p  className='font-sanserif'>Single-breasted pitch black</p>
                                
            </div>
            <div>
            
            
            <img src={PinStripe2}/>
            <p  className='font-sanserif'>Single-breasted pitch black</p>
            </div>
            <div className='justify-center'>
                       
            <img src={PinStripe} style={customStyles}/>
            <p className='font-sanserif'>Double breast pin-Striped</p>
                                
            </div>
            <div>
           
            
            <img src={PinStripe1}/>
            <p  className='font-sanserif'>Single-breasted pitch black</p>
                                
            </div>
            <div>
            
            
            <img src={PinStripe2}/>
            <p  className='font-sanserif'>Single-breasted pitch black</p>
            </div>
            <div className='justify-center'>
                       
            <img src={PinStripe} style={customStyles}/>
            <p className='font-sanserif'>Double breast pin-Striped</p>
                                
            </div>
            <div>
           
            
            <img src={PinStripe1}/>
            <p  className='font-sanserif'>Single-breasted pitch black</p>
                                
            </div>
            <div>
            
            
            <img src={PinStripe2}/>
            <p  className='font-sanserif'>Single-breasted pitch black</p>
            </div>
            <div>
                            
                                
            </div>
           
      
      </div>
    </div>
  )
}

export default Inspirations
