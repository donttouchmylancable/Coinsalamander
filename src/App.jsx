import { useState ,useEffect} from 'react'
import coingecko from './assets/coingecko_logo.png'
import coinsalamander from './assets/coinsalamander.png'
import Coinlist from './components/list.jsx'
import Articles from './components/articles'
import axios from 'axios';
import './App.css'

/*
let coincards=document.querySelectorAll('.coincard');
coincards.forEach((e)=>{
  //console.log(e)
  e.addEventListener('click',()=>{

    //console.log('event listener working')
    setCoin('some coin')
  })
})*/

function App() {
  //const [selectedCoin,setSelectedCoin]=useState("bitcoin");
  const [coins,setCoins]=useState([])

  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en')
    .then(res=>{
      setCoins(res.data);
    })
    
  },[]) //empty [] => runs on mount one time , [coins]=> runs every time coins changed

  return (
    <>
      <div className='topbar'>
          <img className='logo' src={coinsalamander}></img>
          <h1>Coinsalamander</h1>
      </div>
      
        <Coinlist data={coins}/>
        
      
        <div className='footerbar'>
        <img className='logo' src={coingecko}></img>
        <p>Powered by CoinGecko</p>
      </div>
    </>
  )
}

export default App
