// import React from 'react';

// import { useEffect, useState } from "react";
// const DataFetching = () => {
//     const [noData, setNoData] = useState('')
//     const [allDonation, setAllDonation] = useState([])
//     const [posts,setPosts] = useState([])
//     useEffect(()=>{
//         fetch('/data.json')
//         .then(resp=>resp.json())
//         .then(data=>setPosts(data))
//     },[])


//     //get data from local storage 
//     useEffect(() => {
//         const getDonationItem = JSON.parse(localStorage.getItem('donated_item'));
//         if(getDonationItem){
//             setAllDonation(getDonationItem)
//         }else{
//             setNoData('No data found')
//         }
        
//     }, [])
// };

// export default {DataFetching,noData,};


