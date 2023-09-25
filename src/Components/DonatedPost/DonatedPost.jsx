import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const DonatedPost = ({ post }) => {
    const { id, picture, title, category, card_bg,category_bg,text_color,price,button_bg_color } = post || {};
    return (
        <div>
            <div className="flex  rounded-lg shadow" style={{ backgroundColor: card_bg }}>
                <img className="object-cover w-48 h-56 rounded-l-md" src={picture} alt="" />
                <div className=" p-4">
                    <button className="px-3 py-2 rounded-md" style={{ backgroundColor: category_bg, color: text_color }}>{category}</button>
                    <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white" style={{color:text_color}}>${price}</h5>
                    <Link to={`/home/${id}`}><button className='px-3 py-2 rounded-md text-white' style={{backgroundColor:button_bg_color}}>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

DonatedPost.propTypes = {
    post: PropTypes.object
};

export default DonatedPost;