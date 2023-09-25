import "./Banner.css"
const Banner = () => {

    return (
        <div>
            <div id="banner-bg" >
                <div className="py-32 md:py-64 text-center px-4">
                    <h1 className="py-4 font-semibold md:font-bold text-3xl md:text-5xl">I Grow By Helping People In Need</h1>
                    <div className="flex justify-center items-center mt-10">
                        <div className="flex max-sm:w-11/12 mx-auto items-center bg-transparent ">
                            <input type="text" placeholder="Search here" className=" h-10 md:w-64 px-2 py-1" />
                            <button className="bg-[#FF444A]  px-3 py-2 rounded-r-md mr-10 text-white">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;