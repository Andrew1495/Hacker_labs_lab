import { useEffect, useState } from 'react'
import NewsList from '../components/NewsList';


function NewsBox(){

    const [storyIds, setStoryIds] = useState([]);
    const [topStoryIds, setTopStoryIds] = useState([]);
    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
        .then(res => res.json())
        .then((data) => setStoryIds(data))
    },[])

    useEffect(() => {
        setTopStoryIds(storyIds.splice(0,10))
    },[storyIds])





    useEffect(() => {
    if(topStoryIds.length > 0)
        getStrories(topStoryIds)
    },[topStoryIds])



const getStrories =((topStoryIds) =>{

    const story = topStoryIds.map((id) => {
        return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then(res => res.json());
        });
        Promise.all(story)
        .then((data) => setStories(data))
        });
if(stories.length !==0 ){
    return(
    <div>
        {stories.length !==0 ? <NewsList news={stories}></NewsList> :null}
    </div>
    )}
}


export default NewsBox





















