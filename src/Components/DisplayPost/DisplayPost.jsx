import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
const DisplayPost = ({ post }) => {
    const { id, picture, category, title, card_bg, text_color, category_bg} = post || {};
    return (
        <div>
            <Link to={`/home/${id}`}>
                <div className={`${card_bg} rounded-md` } style={{backgroundColor:card_bg}}>
                    <img src={picture} alt={title} className='h-48 w-full object-cover rounded-t-md' />
                    <button className='mx-4 mt-1 px-3 py-1 rounded-md' style={{backgroundColor:category_bg,color:text_color}}>{category}</button>
                    <h2 className='mx-4 my-1 text-md font-semibold md:h-14 max-sm:py-2' style={{color:text_color}}>{title}</h2>
                </div>
            </Link>
        </div>
    );
};

DisplayPost.propTypes = {
    post: PropTypes.object
};

export default DisplayPost;