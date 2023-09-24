import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const PostDetail = () => {
    const [post, setPost] = useState()
    const posts = useLoaderData()
    const { id } = useParams()
    useEffect(() => {
        const findPost = posts.find((post) => post.id === parseInt(id));
        setPost(findPost)
    }, [posts, id])

    const { picture, title, description, price } = post || {};
    return (
        <div>
            <div className="w-10/12 mx-auto my-10">
                <div className="relative">
                    <img src={picture} alt="" className="w-full h-[80vh] object-cover rounded-lg" />
                    <div className="absolute w-full py-6 bg-slate-400 bottom-0 rounded-b-lg">
                        <button className="px-3 py-2 bg-green-300 mx-10 font-semibold rounded-md">Price: {price}</button>
                    </div>
                </div>
                <div className="mt-5">
                    <h2>{title}</h2>
                    <h3>{description}</h3>
                </div>

            </div>
        </div>
    );
};

export default PostDetail;