import { useState ,useEffect} from 'react'
import Articles from './articlelist.jsx'
function Coininfopage(prop){

    if (prop.coin==""){
        return(
            <div></div>
        )
    }
    const [info,setInfo]=useState("")
    const [articles,setArticles]=useState([])

    useEffect(()=>{
        fetch(`https://api.coingecko.com/api/v3/coins/${prop.coin}`,{mode:"cors"})
        .then((res)=>{
            let data=res.json();
            return data
        })
        .then((d)=>{
            setInfo(d.description.en);
        })
    },[]
    )
    useEffect(()=>{
        fetch(`https://newsapi.org/v2/everything?q=${prop.coin}&from=2023-08-03&sortBy=popularity&apiKey=45009c0865eb43a2a28f5368a237642e`,{mode:"cors"})
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
            <h1>{prop.coin}</h1>
            <div dangerouslySetInnerHTML={{ __html: info }} />
            <Articles list={articles}/>
            
        </div>
    )
}
//45009c0865eb43a2a28f5368a237642e key for newsapi.org
export default Coininfopage;