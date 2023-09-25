import { useEffect, useState } from "react";
const useDataFetching = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('/data.json')
            .then(resp => resp.json())
            .then(data => setPosts(data))
    }, [])
    return posts
};
export default useDataFetching;