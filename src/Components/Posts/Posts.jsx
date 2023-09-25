import { useEffect, useState } from "react";
import DisplayPost from "../DisplayPost/DisplayPost";

const Posts = () => {
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        fetch('/data.json')
        .then(resp=>resp.json())
        .then(data=>setPosts(data))
    },[])
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 items-center w-10/12 mx-auto my-10">
            {
                posts?.map((post)=><DisplayPost key={post.id} post={post}></DisplayPost>)
            }
        </div>
    );
};

export default Posts;