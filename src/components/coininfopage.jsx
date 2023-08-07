import { useState ,useEffect} from 'react'
import Articles from './articlelist.jsx'
import TradingViewWidget from './chart.jsx'
function Coininfopage(prop){

    if (prop.coin==""){
        return(
            <div></div>
        )
    }
    
    const [info,setInfo]=useState("")
    const [articles,setArticles]=useState([])
    const [symbol,setSymbol]=useState("")

    useEffect(()=>{
        fetch(`https://api.coingecko.com/api/v3/coins/${prop.coin}`,{mode:"cors"})
        .then((res)=>{
            let data=res.json();
            return data
        })
        .then((d)=>{
            setInfo(d.description.en);
            setSymbol(d.symbol)
        
       
        })
    },[]
    )

    useEffect(()=>{
        fetch(`https://newsapi.org/v2/everything?q=${prop.coin+' Crypto'}&from=2023-08-03&sortBy=popularity&apiKey=45009c0865eb43a2a28f5368a237642e`,{mode:"cors"})
        .then((res)=>{
            let data=res.json();
            return data
        })
        .then((d)=>{
         //   console.log(d)
            setArticles(d);
        })
    },[]
    )

    return (
        <div className='coininfopage'>
            <h1>{prop.coin.toUpperCase()}</h1>
            <div id={'coindesc'} className='coindesc'dangerouslySetInnerHTML={{ __html: info }} />
            <TradingViewWidget sym={symbol}/>
            <Articles list={articles}/>
            
        </div>
    )
}
//45009c0865eb43a2a28f5368a237642e key for newsapi.org
export default Coininfopage;