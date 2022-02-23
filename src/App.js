import React, { useState, useEffect } from 'react';
import axios from "axios";
import './index.css';
import Coins from './Coins';


function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");


  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())

  )
  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=falsehttps://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then((res) => {
        setCoins(res.data)

      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <div className='flex bg-slate-300 items-center w-full flex-col '>
      <div className=' flex flex-col items-center my-10 w-1/4'>
        <h1 className='text-center font-bold text-2xl'>Search A Currency</h1>
        <div class="my-4 input-group relative flex flex-wrap items-stretch w-full mb-4 rounded">
          <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value)} aria-describedby="button-addon2" />

        </div>
      </div>
      <div className='flex flex-col   w-4/5'>
        {filteredCoins.map((coin) => (
          <Coins
            key={coin.id}
            name={coin.name}
            symbol={coin.symbol}
            image={coin.image}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
            marketCap={coin.market_cap}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
