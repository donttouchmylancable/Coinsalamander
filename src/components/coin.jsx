import {useState,useRef, useEffect} from 'react'
import selectedCoin from '../App'
function coin(c){
    const [open,setOpen]=useState(false);//visible
    const myRef= useRef();
    useEffect(()=>{
        
        const observer= new IntersectionObserver((entries)=>{
            const entry=entries[0]
            setOpen(entry.isIntersecting);
        })
        observer.observe(myRef.current)
    },[])
    return(
        <div ref={myRef} className={open?'coincard':'coincard_invisible'} onClick={()=>{c.setCoin(c.info.id.toLowerCase());console.log('coincard clicked')}} >
            <h1 id={'rank'} className="rank">{c.info.market_cap_rank}.</h1>
            <img id={'coinlogo'} src={c.info.image}></img>
            <div id={'nameandsymbol'}>
                <p className="name">{c.info.name}</p>
                <p className="symbol">${c.info.symbol}</p>
            </div>
            <p id={'price'}className="price">{c.info.current_price<0.0001?Number(c.info.current_price).toExponential():c.info.current_price}$</p>
            <Percentage value={c.info.price_change_percentage_24h}/>
            <p id={'ath'}className="ath">All time high: {c.info.ath}$</p>

           
        </div>
    )
}
function goto(c){
    let id=c.toLowerCase()
    console.log(id)
    location.href=`https://www.coingecko.com/en/coins/${id}`
}
function Percentage(input){
    const value=Number(input.value).toFixed(1);
    let pstyle={
        color:'grey'
    }
    if (value>0){
        pstyle={
            color:'green',
        }
        
    }
    if (value<0){
        pstyle={
            color:'red'
        }
        
    }
    return(
            <p id={'percentage'} className="pricechange24" style={pstyle}>{value}%</p>
        )
}
export default coin;