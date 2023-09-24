import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
const DisplayPost = ({post}) => {
    const {id,picture, category,title,card_bg,text_color,category_bg} = post || {};
    const color = ["#79C23F"]
    return ( 
        <div >
            <Link to={`home/${id}`} className={`bg-${color}`}>
                <img src={picture} alt={title} className='h-48 w-52 object-cover'/>
                <button className={`bg-${category_bg}`}>{category}</button>
                <h2 className='h-14'>{title}</h2>
            </Link>
        </div>
    );
};

DisplayPost.propTypes = {
    post:PropTypes.object
};

export default DisplayPost;