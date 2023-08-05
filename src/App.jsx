import { useState ,useEffect} from 'react'
import coingecko from './assets/coingecko_logo.png'
import coinsalamander from './assets/coinsalamander.png'
import Coinlist from './components/list.jsx'
import Coininfopage from './components/coininfopage.jsx'
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
/*
let selectedCoin="";
function setSelectedCoin(c){
  console.log('selectedCoin changed')
  selectedCoin=c;
}*/
function App() {
  const [coins,setCoins]=useState([])
  const [selectedCoin,setSelectedCoin]=useState("")
  const [content,setContent]=useState("coinlist") // coinlist and coinresearch are available
  console.log(selectedCoin)
  console.log(content)
  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en')
    .then(res=>{
      setCoins(res.data);
    })
    
  },[]) //empty [] => runs on mount one time , [coins]=> runs every time coins changed
  if(selectedCoin=="" && content=="coinresearch"){
    setContent("coinlist");
  }
  
  if(selectedCoin!="" && content=="coinlist"){
    setContent("coinresearch");
  }
  
  if(content=="coinresearch"){
    return (
      <>
        <div className='topbar'>
            <img className='logo' src={coinsalamander}></img>
            <h1>Coinsalamander</h1>
        </div>

          <button onClick={()=>{setContent("coinlist");setSelectedCoin("")}}>←</button>

          <Coininfopage coin={selectedCoin}/>

        
        <div className='footerbar'>
          <img className='logo' src={coingecko}></img>
          <p>Powered by CoinGecko</p>
        </div>
      </>
    )
    }
  if(content=="coinlist"){
  return (
    <>
      <div className='topbar'>
          <img className='logo' src={coinsalamander}></img>
          <h1>Coinsalamander</h1>
      </div>
      
        <Coinlist data={coins} function={(value)=>{setSelectedCoin(value)}}/>
        
      
      <div className='footerbar'>
        <img className='logo' src={coingecko}></img>
        <p>Powered by CoinGecko</p>
      </div>
    </>
  )
  }
}

export default App
