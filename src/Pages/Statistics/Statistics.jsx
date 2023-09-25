import Chart from 'react-apexcharts'
import { useEffect, useState } from "react";

const Statistics = () => {
    const [noData, setNoData] = useState('')
    const [allDonation, setAllDonation] = useState([])

    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('/data.json')
            .then(resp => resp.json())
            .then(data => setPosts(data))
    }, [])

    useEffect(() => {
        const getDonationItem = JSON.parse(localStorage.getItem('donated_item'));
        if (getDonationItem) {
            setAllDonation(getDonationItem)
        } else {
            setNoData('No data found')
        }

    }, [])
    const total = posts.length;
    console.log(total)
    const donated = total - allDonation.length
    const notDonated = total - donated;
    console.log(notDonated)
    console.log(donated)
    return (
        <div>
            <div>
                {noData ? <p className="h-[80vh] flex justify-center items-center">{noData}</p> :
                    <Chart type='pie' className=" w-11/12 md:w-8/12 my-10 mx-auto" height={500} series={[donated, notDonated]} options={{
                        labels: ['Total Donation', 'Your Donation']
                    }}> 

                    </Chart>}
            </div>
        </div>
    );
};

export default Statistics;