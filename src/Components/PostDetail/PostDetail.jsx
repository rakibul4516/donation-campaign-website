import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import handelDonationBtn from "../../../public/handelDonationBtn";

const PostDetail = () => {
    const [post, setPost] = useState()
    const posts = useLoaderData()
    const { id } = useParams()
    useEffect(() => {
        const findPost = posts.find((post) => post.id === parseInt(id));
        setPost(findPost)
    }, [posts, id])

    const { picture, title, description, price,button_bg_color } = post || {};

    return (
        <div>
            <div className="w-10/12 mx-auto my-10">
                <div className="relative">
                    <img src={picture} alt="" className="w-full h-screen object-cover rounded-lg" />
                    <div className="absolute w-full py-6 bg-black bottom-0 rounded-b-lg bg-opacity-40">
                        <button onClick={() => handelDonationBtn(post)} className="px-3 py-2 mx-5 lg:mx-10 font-semibold rounded-md text-white" style={{backgroundColor:button_bg_color}} >Price: {price}</button>
                    </div>
                </div>
                <div className="mt-5">
                    <h2 className="text-lg font-bold py-5">{title}</h2>
                    <h3>{description}</h3>
                </div>

            </div>
        </div>
    );
};

export default PostDetail;