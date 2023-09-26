import { useEffect, useState } from "react";
import DonatedPost from "../../Components/DonatedPost/DonatedPost";

const Donation = () => {
    //Store data in useState
    const [showAll, setShowAll] = useState(false)
    const [noData, setNoData] = useState('')
    const [allDonation, setAllDonation] = useState([])
    // useEffect for get Data form local storage
    useEffect(() => {
        const getDonationItem = JSON.parse(localStorage.getItem('donated_item'));
        if (getDonationItem) {
            setAllDonation(getDonationItem)
        } else {
            setNoData('No data found')
        }
    }, [])

    //Total calculation of donation
    const totalDonation = allDonation.reduce((previousData, newData) => previousData + newData.price, 0)
    // Handeler for remove all data from local Storage
    const handelRemoveData = () => {
        localStorage.clear()
        setAllDonation([])
        setNoData('No data found')
    }
    return (
        <div>
            <div className="flex justify-between my-5 items-center w-11/12 md:w-10/12 mx-auto">
                {
                    allDonation.length > 0 ? <button className="bg-[#FF444A]  px-3 py-2 rounded-md text-white">Total Donation : $ {totalDonation}</button> : ''
                }
                {
                    allDonation.length > 0 ? <button onClick={handelRemoveData} className="bg-[#FF444A]  px-3 py-2 rounded-md text-white">Delete All</button> : ''
                }
            </div>
            {noData ? <p className="h-[80vh] flex justify-center items-center text-xl font-semibold">{noData}</p> : <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-11/12 md:w-10/12 mx-auto my-10">
                {
                    showAll ? allDonation.map(post => <DonatedPost key={post.id} post={post}></DonatedPost>) :
                        allDonation.slice(0, 4).map(post => <DonatedPost key={post.id} post={post}></DonatedPost>)
                }
            </div>}
            {
                (allDonation.length > 4) ? <div className="flex justify-center mb-10">
                    {
                        (!showAll) ? <button onClick={() => setShowAll(true)} className=" px-3 py-2 text-lg font-semibold text-white rounded-md bg-[#009444]">Show All</button> : null
                    }
                </div> : ''
            }
        </div>
    );
};

export default Donation;