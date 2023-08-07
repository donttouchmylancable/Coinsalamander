import Coin from './coin.jsx';
import React, { useEffect, useState } from "react"

function getFilteredCoinsold(q,array){
    if(!q){
        return array
      }
      return array.filter(element=>element.name.includes(q))
}
function getFilteredCoins(q,array){
    if(!q){
        return array
      }
      
      return array.filter(element=>element.name.toLowerCase().includes(q.toLowerCase()))
}

function Coinlist(coinsdata){
    
    const [query,setQuery]=useState('')
    //console.log(Object.values(coinsdata))
    let filtered_coins=getFilteredCoins(query,Object.values(coinsdata)[0]);
    //onClick={()=>{coinsdata.function('ripple')}}
    return(
    <div id={'coinlistwrapper'}>
        <h1 id={'title'}>Cryptocurrency Prices by Market Cap</h1>
    <label> Search for coins: </label>
    <input id='search' onChange={e=>{setQuery(e.target.value)}} ></input>
    <div className='Coinlist'>
        {
           filtered_coins.map(c=>{
            return (
                <Coin key={c.id} info={c} setCoin={(val)=>{coinsdata.function(val)}}/>
            )
        })
        }
    </div>
    </div>
    )
}


export default Coinlist
