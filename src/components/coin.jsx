
function coin(c){
    return(
        <div className="coincard" onClick={()=>{goto(c.info.name)}} >
            <h1 className="rank">{c.info.market_cap_rank}.</h1>
            <img src={c.info.image}></img>
            <div>
                <p className="name">{c.info.name}</p>
                <p className="symbol">${c.info.symbol}</p>
            </div>
            <p className="price">{c.info.current_price}$</p>
            <Percentage value={c.info.price_change_percentage_24h}/>
            <p className="ath">All time high: {c.info.ath}$</p>

           
        </div>
    )
}
function goto(c){
    let id=c.toLowerCase()
    console.log(id)
    location.href=`https://www.coingecko.com/en/coins/${id}`
}
function Percentage(input){
    
    let pstyle={
        color:'grey'
    }
    if (input.value>0){
        pstyle={
            color:'green',
        }
        
    }
    if (input.value<0){
        pstyle={
            color:'red'
        }
        
    }
    return(
            <p className="pricechange24" style={pstyle}>{input.value}%</p>
        )
}
export default coin;