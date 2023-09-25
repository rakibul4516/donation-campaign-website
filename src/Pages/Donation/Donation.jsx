import { useEffect, useState } from "react";
import DonatedPost from "../../Components/DonatedPost/DonatedPost";

const Donation = () => {
    const [showAll, setShowAll] = useState(false)
    const [noData, setNoData] = useState('')
    const [allDonation, setAllDonation] = useState([])
    useEffect(() => {
        const getDonationItem = JSON.parse(localStorage.getItem('donated_item'));
        if(getDonationItem){
            setAllDonation(getDonationItem)
        }else{
            setNoData('No data found')
        }
        
    }, [])

    // Handel remove all data 
    const handelRemoveData = () => {
        localStorage.clear()
        setAllDonation([])
        setNoData('No data found')
    }
    return (
        <div>
            <div className="flex justify-end">
                {
                    allDonation.length > 0 ? <button onClick={handelRemoveData} className="bg-[#FF444A]  px-3 py-2 rounded-md mr-10 text-white">Delete All</button> : ''
                }
            </div>
            {noData ? <p className="h-[80vh] flex justify-center items-center">{noData}</p> : <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-10/12 mx-auto my-10">
                {
                    showAll ? allDonation.map(post => <DonatedPost key={post.id} post={post}></DonatedPost>) :
                        allDonation.slice(0, 4).map(post => <DonatedPost key={post.id} post={post}></DonatedPost>)
                }
            </div>}
            <div className="flex justify-center">
                {
                    (allDonation.length > 4) ? <button onClick={() => setShowAll(!showAll)} className=" px-3 py-2 rounded-md">{!showAll ? "Show All" : "Show Less"}</button> : null
                }
            </div>
        </div>
    );
};

export default Donation;