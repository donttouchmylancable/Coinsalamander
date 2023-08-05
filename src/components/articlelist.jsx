import {v4 as uuidv4} from 'uuid';
import Article from './article.jsx';
function Articles(props){
    
    if(props.list.articles){
        //console.log(props.list.articles)
    return (
        <div>
        {
            props.list.articles.map(a=>{
                let id=uuidv4()
                //console.log(a)
                return(<Article key={id} article={a}/>)         
            })     
        
        }        
        </div>
    )
}
}
//return(<Article />)
/*props.list.articles.map(a=>{
                articlecounter++;
                console.log(a)
                return(
                    <Article />
                )
            })*/

export default Articles;