function Article(props){
    return(
        <div id={'article'} className="article" onClick={()=>{location.href=props.article.url}}>
            <img src={props.article.urlToImage}></img>
            <h3>{props.article.title}</h3>
            <p>{props.article.description}</p>
        </div>
    )
}
export default Article;