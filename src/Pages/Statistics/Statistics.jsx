import Chart from 'react-apexcharts'
import { useEffect, useState } from "react";
import useDataFetching from '../../../public/useDataFetching';

const Statistics = () => {
    const [noData, setNoData] = useState('')
    const [allDonation, setAllDonation] = useState([])
    const posts = useDataFetching()
    // useEffect for get data form localstorage 
    useEffect(() => {
        const getDonationItem = JSON.parse(localStorage.getItem('donated_item'));
        if (getDonationItem) {
            setAllDonation(getDonationItem)
        } else {
            setNoData('No data found')
        }

    }, [])
    
    //Calculation or Pie chart
    const total = posts.length;
    const donated = total - allDonation.length
    const notDonated = total - donated;

    return (
        <div>
            <div>
                {noData ? <p className="h-[80vh] flex justify-center items-center text-xl font-semibold">{noData}</p> :
                    <Chart type='pie' className=" w-11/12 md:w-8/12 my-10 mx-auto" height={400} series={[notDonated,donated ]} options={{
                        labels: ['Your Donation','Total Donation']
                    }}> 
                    </Chart>}
            </div>
        </div>
    );
};

export default Statistics;