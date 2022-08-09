
const NewsItem = ({item}) =>{
    console.log(item)
    return(
        <li>
            <h4><a href={item.url}>{item.title}</a></h4>
            <p>{item.by}.</p>
        </li>
    )
    
    
    };
    
    
    export default NewsItem