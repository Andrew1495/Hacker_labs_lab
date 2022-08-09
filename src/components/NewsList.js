import NewsItem from "./NewsItem";

const NewsList = ({news}) =>{
console.log(news[0])

    const newsNode = news.map((story, i) => {
        return <NewsItem key={i} item={story}></NewsItem>;
    })

return(
    <ul>
        {newsNode}
    </ul>
)

}

export default NewsList;