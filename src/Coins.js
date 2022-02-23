import React from 'react'

const Coins = ({ image, name, symbol, price, priceChange, volume, marketCap }) => {
    return (
        <div className='flex w-full flex-row justify-start items-center border-b-2 p-4 border-b-violet-800  '>
            <div className='flex space-x-4 flex-row items-center mr-4 w-1/5 justify-between'>
                <img className='w-16 h-16 content-center' src={image} alt="crypto" />
                <h1 className='text-green-500 text-xl font-bold'>{name}</h1>
                <p className='text-orange-600 font-bold'>{symbol}</p>

            </div>
            <div className='flex  flex-row items-center w-4/5  ml-10 justify-between' >
                <p>${volume.toLocaleString()}</p>
                <p>${price}</p>

                {priceChange < 0 ? (<p className='text-orange-500'>{priceChange.toFixed(2)}%</p>) : (<p className='text-green-600'>{priceChange.toFixed(2)}%</p>)}
                <p>Mkt Cap : {marketCap.toLocaleString()}</p>
            </div>
        </div>
    )
}

export default Coins