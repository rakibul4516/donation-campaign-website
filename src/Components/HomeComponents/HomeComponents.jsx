import Banner from '../Banner/Banner';
import Posts from '../Posts/Posts';
import { useEffect, useState } from "react";
const HomeComponents = () => {
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        fetch('/data.json')
        .then(resp=>resp.json())
        .then(data=>setPosts(data))
    },[])
    
    const handelSearchData = e =>{
        e.preventDefault();
        const searchText = e.target.search.value;
        const getsearchData = posts?.filter(post=>post.category == searchText)
        if (searchText !==''){
            setPosts(getsearchData)
        }
    }
    return ( 
        <div>
            <Banner handelSearchData={handelSearchData}></Banner>
            <Posts posts={posts}></Posts>
        </div>
    );
};

export default HomeComponents;