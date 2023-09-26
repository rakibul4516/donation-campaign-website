import "./Banner.css"
import PropTypes from 'prop-types';
const Banner = ({ handelSearchData }) => {

    return (
        <div>
            <div id="banner-bg" >
                <div className="py-32 md:py-64 text-center px-4">
                    <h1 className="py-4 font-semibold md:font-bold text-3xl md:text-5xl">I Grow By Helping People In Need</h1>
                    <form onSubmit={handelSearchData} className="flex justify-center items-center pl-10 my-10 max-sm:w-11/12 mx-auto bg-transparent ">
                        <input type="text" name="search" placeholder="Search here" className=" h-9 md:w-64 px-2 py-1" />
                        <button type="submit" className="bg-[#FF444A]  px-3 py-2 rounded-r-md mr-10 text-white">Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
Banner.propTypes = {
    handelSearchData: PropTypes.func
};
export default Banner;