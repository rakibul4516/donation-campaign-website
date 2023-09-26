import DisplayPost from "../DisplayPost/DisplayPost";
import PropTypes from 'prop-types';

const Posts = ({ posts }) => {

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 items-center w-11/12 mx-auto my-10">
            {
                posts?.map((post) => <DisplayPost key={post.id} post={post}></DisplayPost>)
            }
        </div>
    );
};
Posts.propTypes = {
    posts: PropTypes.array
};
export default Posts;