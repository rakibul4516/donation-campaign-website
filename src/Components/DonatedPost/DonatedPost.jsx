import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const DonatedPost = ({ post }) => {
    const { id, picture, title, category, card_bg,category_bg,text_color,price,button_bg_color } = post || {};
    return (
        <div>
            <div className="grid grid-cols-4 rounded-lg md:gap-2 shadow items-center lg:h-full md:h-48" style={{ backgroundColor: card_bg }}>
                <img className="col-span-2 object-cover w-full h-full md:h-48 lg:h-full rounded-l-md" src={picture} alt="" />
                <div className="p-2 lg:p-4 col-span-2">
                    <button className="px-3 py-2 rounded-md" style={{ backgroundColor: category_bg, color: text_color }}>{category}</button>
                    <h5 className="pb-1 font-semibold">{title}</h5>
                    <h5 className="pb-1 text-lg font-semibold " style={{color:text_color}}>${price}</h5>
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